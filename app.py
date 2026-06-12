from flask import Flask
from config import Config
from routes import Router

app = Flask(__name__, template_folder='views', static_folder='static')
app.config.from_object(Config)
router=Router(app)

if __name__ == "__main__":
    app.run(debug=True)