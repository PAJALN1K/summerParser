import RegistrationPage from "../pages/unauthorized/RegistrationPage";
import LoginPage from "../pages/unauthorized/LoginPage";
import VacanciesPage from "../pages/authorized/VacanciesPage";
import {
  REGISTRATION_URL,
  LOGIN_URL,
  VACANCIES_URL,
} from "../services/constants/URLs";

export const publicRoutes = [
  { path: REGISTRATION_URL, element: <RegistrationPage /> },
  { path: LOGIN_URL, element: <LoginPage /> },
];

export const privateRoutes = [
  { path: VACANCIES_URL, element: <VacanciesPage /> },
];
