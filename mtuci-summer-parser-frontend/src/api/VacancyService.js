import { VacancyAPI } from "./axios";
import { VACANCIES_URL } from "../services/constants/URLs";

export default class VacancyService {
  static async getVacancies(limit = 10, page = 1) {
    const response = await VacancyAPI.get(VACANCIES_URL, {
      params: {
        per_page: limit,
        page: page,
      },
    });
    return response;
  }
}
