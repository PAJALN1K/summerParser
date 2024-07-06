import SPSelect from "../../../components/UI/SPSelect";

const VacanciesSort = ({ value, onChange }) => {
  return (
    <SPSelect
      selectId="vacancies-sort"
      labelTextContent="Сортировка"
      defaultTextContent="-- Выберите способ сортировки --"
      selectSecondaryClasses="vacancies__sort"
      fields={[
        {
          value: "salaryTopAsc",
          textContent: "Сортировать по максимально возможной зарплате (возрастание)",
        },
        {
          value: "salaryTopDsc",
          textContent: "Сортировать по максимально возможной зарплате (убывание)",
        },
        {
          value: "salaryBottomAsc",
          textContent: "Сортировать по минимально возможной зарплате (возрастание)",
        },
        {
          value: "salaryBottomDsc",
          textContent: "Сортировать по минимально возможной зарплате (убывание)",
        },
        {
          value: "jobNameAsc",
          textContent: "Сортировать по алфавиту (возрастание)",
        },
        {
          value: "jobNameDsc",
          textContent: "Сортировать по алфавиту (убывание)",
        },
      ]}
      value={value}
      onChange={onChange}
    />
  );
};

export default VacanciesSort;
