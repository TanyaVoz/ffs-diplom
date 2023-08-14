import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closePopup, showPopup } from "../../../reducers/createPopup";
import { getSeances } from "../../../reducers/createAdmin";
import AcceptBtn from "../allButtons/btns";

export default function SeanceCard(props) {
    // Получение данных из глобального состояния с использованием useSelector
    const { cinemaHalls, movies } = useSelector((state) => state.admin);

    // Извлечение данных из пропсов с использованием значений по умолчанию
    const { cinema_hall_id, film_id, date, time, callbackSubmit, callbackDelete } = props;

    // Получение текущей даты
    const today = new Date();

    // Начальное состояние формы
    const INIT_STATE = { date, time, cinemaHall: cinema_hall_id, movie: film_id };
    const [form, setForm] = useState(INIT_STATE);

    // Получение диспатча из React Redux
    const dispatch = useDispatch();

    // Обработчик изменения полей формы
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();

        // Форматирование даты и времени для запроса
        const datetime = new Date(form.date);
        const datetimeFormatted = `${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)} ${form.time}`;

        // Вызов коллбэка для добавления сеанса
        callbackSubmit(datetimeFormatted, form.cinemaHall, form.movie).then(() => {
            // Закрытие всплывающего окна и обновление списка сеансов
            dispatch(closePopup());
            dispatch(getSeances());
        });
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            {/* Инпут для выбора зала */}
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="cinemaHall">
                Название зала
                <select className="conf-step__input"
                    name="cinemaHall"
                    defaultValue={cinema_hall_id}
                    onChange={handleChange}
                    required>
                    {cinemaHalls.map((cinemaHall) =>
                        <option value={cinemaHall.id}
                            key={cinemaHall.id}>
                            {cinemaHall.name}
                        </option>)}
                </select>
            </label>

            {/* Инпут для выбора даты */}
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="date">
                Дата сеанса
                <input className="conf-step__input"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    name="date"
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
                    required />
            </label>

            {/* Инпут для выбора времени */}
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
                Время начала
                <input className="conf-step__input"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    name="time"
                    required />
            </label>

            {/* Инпут для выбора фильма */}
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="movie">
                Название фильма
                <select className="conf-step__input"
                    name="movie"
                    onChange={handleChange}
                    defaultValue={film_id}
                    required>
                    {movies.map((movie) =>
                        <option value={movie.id}
                            key={movie.id}>
                            {movie.title}
                        </option>)}
                </select>
            </label>

            {/* Кнопка подтверждения добавления сеанса */}
            <AcceptBtn text={"Добавить сеанс"} handleDelete={callbackDelete} />
        </form>
    );
}
