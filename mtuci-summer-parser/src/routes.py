from src.extensions import db
from src.models import Vacancies
from src.api_models import vacancies_model
from src.parsing import get_vacancies
from flask import request
from flask_restx import Namespace, Resource
from flask_cors import cross_origin


ns = Namespace("api")


@ns.route("/vacancies")
class VacanciesAPI(Resource):
    @cross_origin()
    @ns.marshal_list_with(vacancies_model)
    def get(self):
        db.create_all()
        db.session.query(Vacancies).delete()
        per_page = request.args.get("per_page")
        page = request.args.get("page")
        vacancies = get_vacancies(per_page, page)
        db.session.add_all(vacancies)
        db.session.commit()
        return vacancies
