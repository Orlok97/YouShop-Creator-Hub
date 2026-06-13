from flask import Flask, render_template
from config import Config
from routes import Router

app = Flask(__name__, template_folder='views', static_folder='static')
app.config.from_object(Config)
router=Router(app)

@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)