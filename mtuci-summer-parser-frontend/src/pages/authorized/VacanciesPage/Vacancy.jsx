const Vacancy = ({
  jobName,
  employerName,
  salaryBottom,
  salaryTop,
  salaryCurrency,
  salaryGross,
  schedule,
  employment,
}) => {
  const Salary = () => {
    if (salaryBottom === null && salaryTop === null) {
      return <></>;
    } else if (salaryBottom === null) {
      if (salaryGross === false) {
        return (
          <span className="vacancy__salary">
            До {salaryTop} {salaryCurrency} на руки
          </span>
        );
      }
      return (
        <span className="vacancy__salary">
          До {salaryTop} {salaryCurrency} до вычета налогов
        </span>
      );
    } else if (salaryTop === null) {
      if (salaryGross === false) {
        return (
          <span className="vacancy__salary">
            От {salaryBottom} {salaryCurrency} на руки
          </span>
        );
      }
      return (
        <span className="vacancy__salary">
          От {salaryBottom} {salaryCurrency} до вычета налогов
        </span>
      );
    } else {
      if (salaryGross === false) {
        return (
          <span className="vacancy__salary">
            {salaryBottom} — {salaryTop} {salaryCurrency} на руки
          </span>
        );
      }
      return (
        <span className="vacancy__salary">
          {salaryBottom} — {salaryTop} {salaryCurrency} до вычета налогов
        </span>
      );
    }
  };

  return (
    <li className="vacancy">
      <span className="vacancy__name">{jobName}</span>
      {<Salary />}
      <div className="vacancy__info">
        <span className="vacancy__employer">{employerName}</span>
        <span className="vacancy__schedule">{schedule}</span>
        <span className="vacancy__employment">{employment}</span>
      </div>
    </li>
  );
};

export default Vacancy;
