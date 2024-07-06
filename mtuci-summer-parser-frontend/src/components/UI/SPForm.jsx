import classNames from "classnames";

const SPForm = ({
  secondaryClasses,
  headerContent,
  fields,
  submitButton,
  onSubmit,
  link,
  errParagraph,
}) => {
  const formClass = classNames("sp-form", secondaryClasses);

  return (
    <form className={formClass} onSubmit={onSubmit}>
      <h1 className="sp-form__header">{headerContent}</h1>
      {errParagraph}
      {fields}
      {submitButton}
      {link}
    </form>
  );
};

export default SPForm;
