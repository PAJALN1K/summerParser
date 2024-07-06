import classNames from "classnames";

const SPSelect = ({
  selectId,
  labelTextContent,
  defaultTextContent,
  fields,
  selectSecondaryClasses,
  value,
  onChange,
}) => {
  const selectClass = classNames("sp-select", selectSecondaryClasses);

  const DefaultOption = ({ textContent }) => {
    <option selected>{textContent}</option>;
  };

  const Option = ({ value, textContent }) => {
    return (
      <option className="sp-select__option" value={value}>
        {textContent}
      </option>
    );
  };

  return (
    <form className={selectClass}>
      <label className="sp-select__label" htmlFor={selectId}>
        {labelTextContent}
      </label>
      <select value={value} onChange={evt => onChange(evt.target.value)} className="sp-select__optns" id={selectId}>
        <DefaultOption textContent={defaultTextContent} />
        {fields.map(({ value, textContent }) => (
          <Option key={value} value={value} textContent={textContent} />
        ))}
      </select>
    </form>
  );
};

export default SPSelect;
