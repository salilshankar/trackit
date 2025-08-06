from .assets import assets_bp

def register_routes(app):
    app.register_blueprint(assets_bp)