import requests
from src.URLs import API_URL
from src.models import Vacancies


def get_vacancies(per_page=20, page=0):
    response = requests.get(f"{API_URL}/vacancies?per_page={per_page}&page={page}")
    response.raise_for_status()

    vacancies_long = response.json()["items"]
    vacancies_short = []

    for vacancy_long in vacancies_long:
        salary_bottom = None if vacancy_long["salary"] is None else vacancy_long["salary"]["from"]
        salary_top = None if vacancy_long["salary"] is None else vacancy_long["salary"]["to"]
        salary_currency = None if vacancy_long["salary"] is None else vacancy_long["salary"]["currency"]
        salary_gross = None if vacancy_long["salary"] is None else vacancy_long["salary"]["gross"]

        vacancy_short = Vacancies(
            vacancy_id=vacancy_long["id"],
            job_name=vacancy_long["name"],
            employer_name=vacancy_long["employer"]["name"],
            salary_bottom=salary_bottom,
            salary_top=salary_top,
            salary_currency=salary_currency,
            salary_gross=salary_gross,
            schedule=vacancy_long["schedule"]["name"],
            employment=vacancy_long["employment"]["name"],
        )

        vacancies_short.append(vacancy_short)

    return vacancies_short
