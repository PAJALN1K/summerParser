import React from "react";
import SPFormInput from "./SPFormInput";

const SPFormField = React.forwardRef(function (
  {
    nameLabel,
    inputName,
    inputType,
    isRequired,
    isAutoComplete,
    value,
    onChange,
    isValueValid,
    isValueFocused,
    focusFunction,
    errContent,
  },
  ref
) {
  return (
    <div className="sp-form__field">
      <label className="sp-form__label" htmlFor={`sp-form__${inputName}`}>
        {nameLabel}
      </label>
      <SPFormInput
        inputName={inputName}
        inputType={inputType}
        isRequired={isRequired}
        ref={ref}
        isAutoComplete={isAutoComplete}
      />
    </div>
  );
});

export default SPFormField;
