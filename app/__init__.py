from flask import Flask, send_from_directory
from app.extensions import db
from app.routes import register_routes
# Create app abcd
def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///taskhive.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    register_routes(app)


    @app.route("/")
    def serve_index():
        return send_from_directory("app/static" , "index.html")
        
    @app.route("/health")
    def health():
        return {"status": "ok"}, 200

    return app