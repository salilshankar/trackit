# asset.py
from app.extensions import db
from datetime import datetime, timezone

class Asset(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    employee_name = db.Column(db.String(100), nullable=False)
    employee_email = db.Column(db.String(100), nullable=False)
    asset_type = db.Column(db.String(50), nullable=False)
    asset_model = db.Column(db.String(100), nullable=False)
    comments = db.Column(db.String(255))
    issued_at = db.Column(db.DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    returned_at = db.Column(db.DateTime, nullable=True)