import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, showPopup } from "../../../reducers/popupReducer";
import { getSeances } from "../../../reducers/adminReducer";
import SessionButton from "../AdminPanelComponents/allButtons/sessionButton";

export default function SeanceCard(props) {
  const { cinemaHalls, movies } = useSelector((state) => state.admin);
  const { cinema_hall_id, film_id, date, time, callbackSubmit, callbackDelete } = props;
  const today = new Date();
  const initialFormState = { date, time, cinemaHall: cinema_hall_id, movie: film_id };
  const [form, setForm] = useState(initialFormState);
  const dispatch = useDispatch();

  // Обработчик изменения полей формы
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Форматирование даты и времени для запроса
    const datetime = new Date(form.date);
    const formattedDatetime = `${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)} ${form.time}`;

    try {
      await callbackSubmit(formattedDatetime, form.cinemaHall, form.movie);
      dispatch(closePopup());
      dispatch(getSeances());
    } catch (error) {
      console.error("Ошибка при отправке сеанса:", error);
    }
  };

  return (
    <form acceptCharset="utf-8" onSubmit={handleSubmit}>
      {/* Инпут для выбора зала */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="cinemaHall">
        Название зала
        <select
          className="conf-step__input"
          name="cinemaHall"
          value={form.cinemaHall}
          onChange={handleInputChange}
          required>
          {cinemaHalls.map((cinemaHall) => (
            <option value={cinemaHall.id} key={cinemaHall.id}>
              {cinemaHall.name}
            </option>
          ))}
        </select>
      </label>

      {/* Инпут для выбора даты */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="date">
        Дата сеанса
        <input
          className="conf-step__input"
          type="date"
          value={form.date}
          onChange={handleInputChange}
          name="date"
          min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
          required />
      </label>

      {/* Инпут для выбора времени */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
        Время начала
        <input
          className="conf-step__input"
          type="time"
          value={form.time}
          onChange={handleInputChange}
          name="time"
          required />
      </label>

      {/* Инпут для выбора фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="movie">
        Название фильма
        <select
          className="conf-step__input"
          name="movie"
          value={form.movie}
          onChange={handleInputChange}
          required>
          {movies.map((movie) => (
            <option value={movie.id} key={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </label>

      <SessionButton text={"Добавить сеанс"} handleDelete={callbackDelete} />
    </form>
  );
}
