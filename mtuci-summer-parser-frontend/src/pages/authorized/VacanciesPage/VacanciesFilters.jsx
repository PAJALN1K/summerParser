import classNames from "classnames";
import SPFieldset from "../../../components/UI/SPFieldset";

const VacanciesFilters = ({ filter, dropouts, setFilter }) => {
  return (
    <section className="vacancies__filters">
      <SPFieldset
        legend="Уровень дохода"
        inputName="income"
        fields={[
          { value: 0, textContent: "0" },
          { value: 20000, textContent: "От 20000" },
          { value: 50000, textContent: "От 50000" },
          { value: 100000, textContent: "От 100000" },
          { value: 250000, textContent: "От 250000" },
          { value: 500000, textContent: "От 500000" },
        ]}
        fieldsetSecondaryClasses="vacancies__filter"
        value={filter.dropouts.income}
        onChange={(selectedFilter) =>
          setFilter({
            ...filter,
            dropouts: { ...dropouts, income: selectedFilter },
          })
        }
      />
      <SPFieldset
        legend="Тип занятости"
        inputName="employment"
        fields={[
          { value: "", textContent: "" },
          { value: "fullTime", textContent: "Полная занятость" },
          { value: "partTime", textContent: "Частичная занятость" },
          { value: "probation", textContent: "Стажировка" },
          { value: "project", textContent: "Проектная работа" },
          { value: "volunteering", textContent: "Волонтерство" },
          {
            value: "registration",
            textContent: "Оформление по ГПХ или по совместительству ",
          },
        ]}
        fieldsetSecondaryClasses="vacancies__filter"
        value={filter.dropouts.employment}
        onChange={(selectedFilter) =>
          setFilter({
            ...filter,
            dropouts: { ...dropouts, employment: selectedFilter },
          })
        }
      />
      <SPFieldset
        legend="График работы"
        inputName="schedule"
        fields={[
          { value: "", textContent: "" },
          { value: "fullDay", textContent: "Полный день" },
          { value: "changable", textContent: "Сменный график" },
          { value: "remote", textContent: "Удаленная работа" },
          { value: "flex", textContent: "Гибкий график" },
          { value: "shift", textContent: "Вахтовый метод" },
        ]}
        fieldsetSecondaryClasses="vacancies__filter"
        value={filter.dropouts.schedule}
        onChange={(selectedFilter) =>
          setFilter({
            ...filter,
            dropouts: { ...dropouts, schedule: selectedFilter },
          })
        }
      />
    </section>
  );
};

export default VacanciesFilters;
