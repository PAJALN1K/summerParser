import classNames from "classnames";

const SPFieldset = ({
  legend,
  inputName,
  fields,
  fieldsetSecondaryClasses,
  value,
  onChange,
}) => {
  const fieldsetClass = classNames("sp-fieldset", fieldsetSecondaryClasses);

  const Input = ({ value, textContent }) => {
    return (
      <label>
        <input
          className="sp-fieldset__input"
          type="radio"
          name={inputName}
          value={value}
        />
        <span className="sp-fieldset__label">{textContent}</span>
      </label>
    );
  };

  return (
    <form className={fieldsetClass}>
      <fieldset
        value={value}
        onChange={(evt) =>
          onChange(evt.target.parentElement.lastChild.innerText)
        }
        className="sp-fieldset__btns"
      >
        <legend className="sp-fieldset__legend">{legend}</legend>
        {fields.map(({ value, textContent }) => (
          <Input key={value} value={value} textContent={textContent} />
        ))}
      </fieldset>
    </form>
  );
};

export default SPFieldset;
