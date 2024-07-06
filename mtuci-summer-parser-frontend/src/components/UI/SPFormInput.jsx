import React from "react";

const SPFormInput = React.forwardRef(function (
  {
    inputName,
    inputType,
    isRequired,
    isAutoComplete,
    value,
    onChange,
    isValueValid,
    focusFunction,
  },
  ref
) {
  const renderRef = () => {
    if (ref === null) {
      return null;
    } else {
      return ref;
    }
  };

  return (
    <input
      className="sp-input sp-form__input"
      id={`sp-form__${inputName}`}
      name={inputName}
      type={inputType}
      ref={renderRef()}
      required={isRequired}
      autoComplete={isAutoComplete ? "on" : "off"}
    />
  );
});

export default SPFormInput;
