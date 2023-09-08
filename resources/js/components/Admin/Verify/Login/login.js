import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminAuth, resetAuthStatusAdmin } from "../../../../reducers/authReducer";
import Header from "../../AdminPanelComponents/adminHeader";

const Login = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialLoginForm = { mail: "", pwd: "" };
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  // Эффект для обработки изменений статуса аутентификации
  useEffect(() => {
    if (status === "success") {
      dispatch(resetAuthStatusAdmin());
      navigate("/admin");
    } else if (status === "error") {
      setLoginForm(initialLoginForm);
    }
  }, [status]);

  // Обработчик изменения полей формы
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(adminAuth({ email: loginForm.mail, password: loginForm.pwd }));
  };

  return (
    <div>
      {/* Отображение заголовка страницы */}
      <Header />
      <main>
        <section className="login">
          <header className="login__header">
            <h2 className="login__title">Авторизация</h2>
          </header>
          <div className="login__wrapper">
            <form className="login__form" acceptCharset="utf-8" onSubmit={handleSubmit}>
              {/* Поле ввода e-mail */}
              <label className="login__label" htmlFor="mail">
                E-mail
                <input
                  className="login__input"
                  type="email"
                  placeholder="example@domain.xyz"
                  name="mail"
                  value={loginForm.mail}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {/* Поле ввода пароля */}
              <label className="login__label" htmlFor="pwd">
                Пароль
                <input
                  className="login__input"
                  type="password"
                  placeholder=""
                  name="pwd"
                  value={loginForm.pwd}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="text-center">
                {/* Кнопка для отправки формы */}
                <input type="submit" value="Авторизоваться" className="login__button" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;

