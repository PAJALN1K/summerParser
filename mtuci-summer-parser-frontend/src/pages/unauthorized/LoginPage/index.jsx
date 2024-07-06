import SPButton from "../../../components/UI/SPButton";
import SPForm from "../../../components/UI/SPForm";
import SPFormField from "../../../components/UI/SPFormField";
import SPLink from "../../../components/UI/SPLink";
import { REGISTRATION_URL } from "../../../services/constants/URLs";
import { handleLoginSubmit } from "./handleLoginSubmit";

const LoginPage = () => {
  const LoginForm = () => {
    return (
      <SPForm
        secondaryClasses="sp-form--login"
        headerContent="Вход"
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
              nameLabel="Пароль"
              inputName="password"
              inputType="password"
              isRequired={true}
              isAutoComplete={false}
            />
          </>
        }
        submitButton={
          <SPButton textContent="Войти" secondaryClasses="sp-form__button" />
        }
        onSubmit={handleLoginSubmit}
        link={
          <SPLink
            textContent="Ещё нет аккаунта?"
            linkContent={REGISTRATION_URL}
            secondaryClasses="sp-form__link"
          />
        }
      />
    );
  };

  return <div className="sp-page sp-page--solo">{<LoginForm />}</div>;
};

export default LoginPage;
