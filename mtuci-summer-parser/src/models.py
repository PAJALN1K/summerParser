from sqlalchemy import Table, Column, Integer, String, Boolean, MetaData
from src.extensions import db


class Vacancies(db.Model):
    vacancy_id = db.Column(db.Integer, primary_key=True)
    job_name = db.Column(db.String, nullable=False)
    employer_name = db.Column(db.String, nullable=False)
    salary_bottom = db.Column(db.Integer)
    salary_top = db.Column(db.Integer)
    salary_currency = db.Column(db.String)
    salary_gross = db.Column(db.Boolean)
    schedule = db.Column(db.String, nullable=False)
    employment = db.Column(db.String, nullable=False)


class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)


# metadata = MetaData()
