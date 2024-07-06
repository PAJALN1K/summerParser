import classNames from "classnames";
import { useState, useEffect } from "react";

const SPButton = ({
  textContent,
  secondaryClasses,
  onClick,
  isDisabled,
  isLink,
  linkContent,
}) => {
  const buttonClass = classNames("sp-button", secondaryClasses);

  const renderIsDisabled = () => {
    if (isDisabled === null) {
      return false;
    }
    return isDisabled;
  };

  const [disabled, setDisabled] = useState(renderIsDisabled);

  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);

  return isLink ? (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      <a href={linkContent}>{textContent}</a>
    </button>
  ) : (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {textContent}
    </button>
  );
};

export default SPButton;
