import axios from "axios";
import { BASE_URL } from "../services/constants/URLs";

export const VacancyAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
