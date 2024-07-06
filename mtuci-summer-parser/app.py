from flask import Flask
from src.extensions import db, api, cors
from config.config import settings
from src.routes import ns
from src.URLs import FRONTEND_URL


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = settings.DATABASE_URL()
    app.config["CORS_ORIGINS"] = FRONTEND_URL

    api.init_app(app)
    db.init_app(app)
    cors.init_app(app)

    api.add_namespace(ns)

    return app
