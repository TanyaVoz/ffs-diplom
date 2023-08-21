import React, { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../reducers/adminReducer";
import { closePopup } from "../../../reducers/popupReducer";
import SessionButton from "../AdminPanelComponents/allButtons/sessionButton";

export default function MovieCard(props) {
  // Деструктуризация свойств, переданных в компонент
  const {
    title = "",
    description = "",
    duration = "",
    country = "",
    poster,
    callbackSubmit,
    callbackDelete
  } = props;

  // Состояние формы фильма
  const [form, setForm] = useState({
    title,
    description,
    duration,
    country
  });

  const dispatch = useDispatch();

  const fileInput = useRef(null);

  // Обработчик изменений в полях формы
  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }, []);

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();

    if (fileInput.current && fileInput.current.files.length > 0) {
      try {
        // Вызов callbackSubmit для добавления фильма
        callbackSubmit(
          form.title,
          form.description,
          form.duration,
          form.country,
          fileInput.current.files[0]
        );

        // Закрытие всплывающего окна и обновление списка фильмов
        dispatch(closePopup());
        dispatch(getMovies());
      } catch (error) {
        // Обработка ошибок при добавлении фильма
        console.error("Ошибка при добавлении фильма:", error);
      }
    }
  };

  return (
    <form acceptCharset="utf-8" onSubmit={handleSubmit}>
      {/* Поле для загрузки постера фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="poster">
        Постер фильма
        <input
          className="conf-step__input"
          type="file"
          accept="image/*"
          name="poster"
          ref={fileInput}
          required
        />
      </label>

      {/* Поле для ввода названия фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="title">
        Название фильма
        <input
          className="conf-step__input"
          type="text"
          placeholder="Например, &laquo;Гражданин Кейн&raquo;"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      {/* Поле для ввода описания фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="description">
        Описание фильма
        <input
          className="conf-step__input"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>

      {/* Поле для ввода длительности фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
        Длительность фильма
        <input
          className="conf-step__input"
          type="number"
          placeholder="Например, 120"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          required
        />
      </label>

      {/* Поле для ввода страны производства фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="country">
        Страна
        <input
          className="conf-step__input"
          type="text"
          placeholder="Например, Россия"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        />
      </label>

      <SessionButton text={"Добавить фильм"} handleDelete={callbackDelete} />
    </form>
  );
}
