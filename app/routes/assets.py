from flask import Blueprint, request, jsonify
from app.models import Asset
from app.extensions import db
from datetime import datetime, timezone
from sqlalchemy import func  # NEW

assets_bp = Blueprint('assets', __name__)

@assets_bp.route('/api/assets', methods=['POST'])
def issue_asset():
    data = request.get_json(force=True)
    required_fields = ["employee_name", "employee_email", "asset_type", "asset_model"]
    missing = [f for f in required_fields if f not in data]

    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400
    
    asset = Asset(
        employee_name=data["employee_name"],
        employee_email=data["employee_email"],
        asset_type=data["asset_type"],
        asset_model=data["asset_model"],
        comments=data.get("comments", "")
    )
    db.session.add(asset)
    db.session.commit()
    return jsonify({"message": "Asset issued", "id": asset.id}), 201
def _asset_json(a: Asset):
    """Consistent shape incl. derived status/last_updated."""
    status = "Returned" if a.returned_at else "Issued"
    last_updated_dt = a.returned_at or a.issued_at
    return {
        "id": a.id,
        "employee_name": a.employee_name,
        "employee_email": a.employee_email,
        "asset_type": a.asset_type,
        "asset_model": a.asset_model,
        "comments": a.comments,
        "issued_at": a.issued_at.isoformat(),
        "returned_at": a.returned_at.isoformat() if a.returned_at else None,
        "status": status,
        "last_updated": last_updated_dt.isoformat() if last_updated_dt else None,
    }

@assets_bp.route('/api/assets', methods=['GET'])
def list_assets():
    assets = Asset.query.order_by(Asset.issued_at.desc()).all()
    return jsonify([_asset_json(a) for a in assets])

@assets_bp.route('/api/assets/<int:asset_id>/return', methods=['POST'])
def return_asset(asset_id):
    asset = Asset.query.get_or_404(asset_id)
    asset.returned_at = datetime.now(timezone.utc)
    db.session.commit()
    return jsonify({"message": "Asset returned"})

@assets_bp.route('/api/assets/<int:asset_id>', methods=['PUT', 'PATCH'])
def update_asset(asset_id):
    """
    Update mutable fields of an asset.
    Accepted JSON keys: comments, asset_model, asset_type
    """
    asset = Asset.query.get_or_404(asset_id)
    data = request.get_json(force=True) or {}

    allowed = {"comments", "asset_model", "asset_type"}
    if not any(k in data for k in allowed):
        return jsonify({"error": "No updatable fields provided"}), 400

    if "comments" in data:
        asset.comments = data["comments"]
    if "asset_model" in data:
        asset.asset_model = data["asset_model"]
    if "asset_type" in data:
        asset.asset_type = data["asset_type"]

    db.session.commit()
    return jsonify(_asset_json(asset))

@assets_bp.route("/api/device-history/<email>")
def get_device_history(email):
    import socket, json

    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.connect(("localhost", 9002))
            s.sendall(email.encode())
            data = s.recv(4096)
            return jsonify(json.loads(data))
    except Exception as e:
        print(f"Error contacting device-history service: {e}")
        return jsonify({"error": "device-history-service unavailable"}), 500

@assets_bp.route('/api/recover', methods=['POST'])
def recover_service():
    import subprocess, os
    try:
        script_path = os.path.join(os.path.dirname(__file__), "../../device_history_service.py")
        subprocess.Popen(["python", script_path])
        return jsonify({"message": "Service recovered"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# NEW: filtered/sorted listing that your UI will use
@assets_bp.route('/api/assets/search', methods=['GET'])
def search_assets():
    """
    Query params:
      - status: Issued | Returned (optional)
      - sort: asc | desc (by last_updated = COALESCE(returned_at, issued_at); default=desc)
    """
    status = request.args.get("status")  # None | Issued | Returned
    sort = request.args.get("sort", "desc").lower()
    sort_desc = (sort != "asc")

    last_updated_expr = func.coalesce(Asset.returned_at, Asset.issued_at)

    q = Asset.query
    if status == "Issued":
        q = q.filter(Asset.returned_at.is_(None))
    elif status == "Returned":
        q = q.filter(Asset.returned_at.is_not(None))

    q = q.order_by(last_updated_expr.desc() if sort_desc else last_updated_expr.asc())

    assets = q.all()
    return jsonify([_asset_json(a) for a in assets])
