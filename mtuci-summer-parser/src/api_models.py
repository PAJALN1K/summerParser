from src.extensions import api
from flask_restx import fields

vacancies_model = api.model("Vacancies", {
    "vacancy_id": fields.Integer,
    "job_name": fields.String(nullable=False),
    "employer_name": fields.String(nullable=False),
    "salary_bottom": fields.Integer,
    "salary_top": fields.Integer,
    "salary_currency": fields.String,
    "salary_gross": fields.Boolean,
    "schedule": fields.String(nullable=False),
    "employment": fields.String(nullable=False)
})
