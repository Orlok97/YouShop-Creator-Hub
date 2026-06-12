from controllers.gemini import gemini_bp

class Router:
    def __init__(self, app):
        self.app=app
        self.routes()
    def routes(self):
        self.app.register_blueprint(gemini_bp, url_prefix='/api/gemini')