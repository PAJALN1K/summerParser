import classNames from "classnames";

const SPLink = ({ textContent, linkContent, secondaryClasses }) => {
  const linkClass = classNames("sp-link", secondaryClasses);

  return (
    <a className={linkClass} href={linkContent}>
      {textContent}
    </a>
  );
};

export default SPLink;
