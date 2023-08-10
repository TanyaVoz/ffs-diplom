import { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../reducers/createAdminSlice";
import { closePopup } from "../../../reducers/createPopupSlice";
import AcceptBtn from "../Buttons/acceptBtn";

export default function MovieCard(props) {
  // Извлечение данных из пропсов с использованием значений по умолчанию
  const { title = "", description = "", duration = "", country = "", poster, callbackSubmit, callbackDelete } = props;

  // Начальное состояние формы
  const INIT_STATE = { title, description, duration, country };
  const [form, setForm] = useState(INIT_STATE);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Создание рефа для файла
  const fileInput = useRef(null);

  // Обработчик изменения полей формы
  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка наличия файла в инпуте
    if (fileInput.current && fileInput.current.files.length > 0) {
      // Вызов коллбэка для добавления фильма
      callbackSubmit(form.title, form.description, form.duration, form.country, fileInput.current.files[0]).then(() => {
        // Закрытие всплывающего окна и обновление списка фильмов
        dispatch(closePopup());
        dispatch(getMovies());
      });
    }
  };

  return (
    <form acceptCharset="utf-8" onSubmit={handleSubmit}>
      {/* Инпут для загрузки постера фильма */}
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

      {/* Инпут для названия фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
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

      {/* Инпут для описания фильма */}
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

      {/* Инпут для длительности фильма */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
        Длительность фильма
        <input
          className="conf-step__input"
          type="number"
          placeholder="Например, 130"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          required
        />
      </label>

      {/* Инпут для страны производства */}
      <label className="conf-step__label conf-step__label-fullsize" htmlFor="country">
        Страна
        <input
          className="conf-step__input"
          type="text"
          placeholder="Например, Англия"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        />
      </label>

      {/* Кнопка подтверждения добавления фильма */}
      <AcceptBtn text={"Добавить фильм"} handleDelete={callbackDelete} />
    </form>
  );
}

