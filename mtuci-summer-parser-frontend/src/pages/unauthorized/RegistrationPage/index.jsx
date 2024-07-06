import SPButton from "../../../components/UI/SPButton.jsx";
import SPForm from "../../../components/UI/SPForm";
import SPFormField from "../../../components/UI/SPFormField.jsx";
import SPLink from "../../../components/UI/SPLink";
import { LOGIN_URL } from "../../../services/constants/URLs.js";
import { handleRegistrationSubmit } from "./handleRegistrationSubmit.js";

const RegistrationPage = () => {
  const RegistrationForm = () => {
    return (
      <SPForm
        secondaryClasses="sp-form--registration"
        headerContent="Регистрация"
        fields={
          <>
            <SPFormField
              nameLabel="Имя пользователя"
              inputName="username"
              inputType="text"
              isRequired={true}
              isAutoComplete={true}
            />
            <SPFormField
              nameLabel="Почта"
              inputName="email"
              inputType="email"
              isRequired={true}
              isAutoComplete={true}
            />
            <SPFormField
              nameLabel="Пароль"
              inputName="password"
              inputType="password"
              isRequired={true}
              isAutoComplete={false}
            />
          </>
        }
        submitButton={
          <SPButton
            textContent="Зарегистрироваться"
            secondaryClasses="sp-form__button"
          />
        }
        onSubmit={handleRegistrationSubmit}
        link={
          <SPLink
            textContent="Уже есть аккаунт?"
            linkContent={LOGIN_URL}
            secondaryClasses="sp-form__link"
          />
        }
      />
    );
  };

  return <div className="sp-page sp-page--solo">{<RegistrationForm />}</div>;
};

export default RegistrationPage;
