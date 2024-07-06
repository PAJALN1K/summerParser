import { useMemo } from "react";
import { compareNumbers } from "../utils/compareNumbers";

export const useSortedVacancies = (vacancies, sort) => {
  const sortedVacancies = useMemo(() => {
    if (sort) {
      const sortLogic = sort.substr(sort.length - 3);
      const sortBody = sort.slice(0, sort.length - 3);

      if (sortBody === "salaryTop" || sortBody === "salaryBottom") {
        if (sortLogic === "Asc") {
          return [...vacancies].sort((a, b) =>
            compareNumbers(a[sortBody], b[sortBody])
          );
        } else {
          return [...vacancies].sort((a, b) =>
            compareNumbers(b[sortBody], a[sortBody])
          );
        }
      } else {
        if (sortLogic === "Asc") {
          return [...vacancies].sort((a, b) =>
            a[sortBody].localeCompare(b[sortBody])
          );
        } else {
          return [...vacancies].sort((a, b) =>
            b[sortBody].localeCompare(a[sortBody])
          );
        }
      }
    }
    return vacancies;
  }, [vacancies, sort]);

  return sortedVacancies;
};

export const useVacancies = (vacancies, sort, dropouts) => {
  const sortedVacancies = useSortedVacancies(vacancies, sort);

  const sortedAndFilteredOutVacancies = useMemo(() => {
    if (dropouts) {
      const income = parseInt(dropouts.income.substr(dropouts.income.length - 6));
      return sortedVacancies
        .filter((vacancy) => vacancy.salaryBottom >= income)
        .filter((vacancy) => vacancy.employment.includes(dropouts.employment))
        .filter((vacancy) => vacancy.schedule.includes(dropouts.schedule));
    }
    return sortedVacancies;
  }, [sortedVacancies, dropouts]);

  return sortedAndFilteredOutVacancies;
};
