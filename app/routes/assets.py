from flask import Blueprint, request, jsonify
from app.models import Asset
from app.extensions import db
from datetime import datetime, timezone

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

@assets_bp.route('/api/assets', methods=['GET'])
def list_assets():
    assets = Asset.query.order_by(Asset.issued_at.desc()).all()
    return jsonify([{
        "id": a.id,
        "employee_name": a.employee_name,
        "employee_email": a.employee_email,
        "asset_type": a.asset_type,
        "asset_model": a.asset_model,
        "comments": a.comments,
        "issued_at": a.issued_at.isoformat(),
        "returned_at": a.returned_at.isoformat() if a.returned_at else None
    } for a in assets])

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
    return jsonify({
        "id": asset.id,
        "employee_name": asset.employee_name,
        "employee_email": asset.employee_email,
        "asset_type": asset.asset_type,
        "asset_model": asset.asset_model,
        "comments": asset.comments,
        "issued_at": asset.issued_at.isoformat(),
        "returned_at": asset.returned_at.isoformat() if asset.returned_at else None
    })

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
    import subprocess
    try:
        import os
        script_path = os.path.join(os.path.dirname(__file__), "../../device_history_service.py")
        subprocess.Popen(["python", script_path])
        return jsonify({"message": "Service recovered"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500