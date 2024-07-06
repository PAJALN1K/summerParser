import { useEffect, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import VacancyService from "../../../api/VacancyService";
import Vacancy from "./Vacancy";
import mapKeys from "lodash.mapkeys";
import camelCase from "lodash.camelcase";
import SPLoader from "../../../components/UI/SPLoader";
import SPFieldset from "../../../components/UI/SPFieldset";
import SPSelect from "../../../components/UI/SPSelect";
import VacanciesFilters from "./VacanciesFilters";
import VacanciesSort from "./VacanciesSort";
import {  useVacancies } from "../../../hooks/useVacancies";

const VacanciesPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    dropouts: { income: "0", schedule: "", employment: "" },
  });
  //   const sortedVacancies = useSortedVacancies(vacancies, filter.sort);
  const sortedAndFilteredOutVacancies = useVacancies(vacancies, filter.sort, filter.dropouts);

  const [fetchVacancies, isVacanciesLoading, vacanciesError] = useFetching(
    async (limit, page) => {
      const response = await VacancyService.getVacancies(limit, page);
      const camelCaseVacancies = response.data.map((vacancy) =>
        mapKeys(vacancy, (value, key) => camelCase(key))
      );
      setVacancies(camelCaseVacancies);
    }
  );

  useEffect(() => {
    fetchVacancies(80, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Vacancies = () => {
    return isVacanciesLoading ? (
      <SPLoader />
    ) : (
      <section className="vacancies">
        <section className="vacancies__filters-sort">
          <VacanciesFilters
            filter={filter}
            dropouts={filter.dropouts}
            setFilter={setFilter}
          />
          <VacanciesSort
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
          />
        </section>
        <ul className="vacancies-list vacancies__list">
          {sortedAndFilteredOutVacancies.map(
            ({
              vacancyId,
              jobName,
              employerName,
              salaryBottom,
              salaryTop,
              salaryCurrency,
              salaryGross,
              schedule,
              employment,
            }) => (
              <Vacancy
                key={vacancyId}
                jobName={jobName}
                employerName={employerName}
                salaryBottom={salaryBottom}
                salaryTop={salaryTop}
                salaryCurrency={salaryCurrency}
                salaryGross={salaryGross}
                schedule={schedule}
                employment={employment}
              />
            )
          )}
        </ul>
      </section>
    );
  };

  return <div className="sp-page sp-page--solo">{<Vacancies />}</div>;
};

export default VacanciesPage;
