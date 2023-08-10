import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHall, getHalls, updateHall } from "../../../../reducers/createAdminSlice";
import { closePopup } from "../../../../reducers/createPopupSlice";
import AcceptBtn from "../../Buttons/acceptBtn";

export default function AddHall(props) {
    const dispatch = useDispatch();
    const { edit } = props;

    // Инициализация состояния формы
    const INIT_STATE = { name: "" };
    const { cinemaHalls } = useSelector((state) => state.admin);
    let cinemaHall = {};
    
    // Если режим редактирования, получаем информацию о зале
    if (edit) {
        const { id } = useSelector((state) => state.popup);
        cinemaHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === id);
        INIT_STATE.name = cinemaHall.name;
    }
    
    // Состояние формы
    const [form, setForm] = useState(INIT_STATE);

    // Обработчик изменений в полях формы
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();

        if (edit) {
            // Обновление информации о зале
            dispatch(updateHall({ ...cinemaHall, name: form.name })).then(() => {
                dispatch(closePopup());
                dispatch(getHalls());
            });
        } else {
            // Создание нового зала
            dispatch(createHall(form.name)).then(() => {
                dispatch(closePopup());
                dispatch(getHalls());
            });
        }
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название зала
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, &laquo;Зал 1&raquo;"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            {/* Кнопка подтверждения действия */}
            <AcceptBtn text={edit ? "Сохранить" : "Добавить зал"} />
        </form>
    );
}

