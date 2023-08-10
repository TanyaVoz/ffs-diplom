import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken, resetAuthStatus } from "../../../../reducers/createAuthSlice";
import Header from "../../Header";

export default function Login() {
    // Извлечение информации о статусе аутентификации из состояния
    const { status } = useSelector((state) => state.auth);
    
    // Изначальное состояние формы для входа
    const EMPTY_STATE = { mail: "", pwd: "" };
    
    // Состояние формы для входа
    const [loginForm, setLoginForm] = useState(EMPTY_STATE);
    
    // Получение диспетчера Redux
    const dispatch = useDispatch();
    
    // Получение функции навигации
    const navigate = useNavigate();

    useEffect(() => {
        // При изменении статуса аутентификации
        if (status === "success") {
            // Сброс статуса аутентификации и переход на главную страницу администратора
            dispatch(resetAuthStatus());
            navigate('/admin');
        } else if (status === "error") {
            // Если статус - ошибка, сбрасываем данные формы
            setLoginForm(EMPTY_STATE);
        }
    }, [status]);

    // Обработчик изменения полей формы
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setLoginForm((prevState) => ({ ...prevState, [name]: value }));
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        // Вызываем действие для получения токена с указанными данными
        dispatch(getToken({ email: loginForm.mail, password: loginForm.pwd }));
    };

    return (
        <>
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="text-center">
                                {/* Кнопка для отправки формы */}
                                <input value="Авторизоваться" type="submit" className="login__button" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
