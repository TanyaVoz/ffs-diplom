import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHall, getHalls, updateHall } from "../../../../../reducers/createAdmin";
import { closePopup } from "../../../../../reducers/createPopup";
import SessionButton from "../../allButtons/sessionButton";

export default function AddHall(props) {
    const dispatcher = useDispatch();
    const { editMode } = props;
    const [formData, setFormData] = useState({ hallName: "" });

    // Получение данных о залах из состояния Redux
    const { hallData } = useSelector((state) => state.admin);
    const targetHall = editMode ? hallData.find((hall) => hall.id === state.popup.id) : null;

    // Обработчик изменения полей формы
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Обработчик отправки формы
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (editMode) {
            // Обновление данных о зале
            const updatedHallData = { ...targetHall, hallName: formData.hallName };
            dispatcher(updateHall(updatedHallData)).then(() => {
                dispatcher(closePopup());
                dispatcher(getHalls());
            });
        } else {
            // Создание нового зала
            dispatcher(createHall(formData.hallName)).then(() => {
                dispatcher(closePopup());
                dispatcher(getHalls());
            });
        }
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleFormSubmit}>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название зала
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, &laquo;Зал 1&raquo;"
                    name="hallName"
                    value={formData.hallName}
                    onChange={handleInputChange}
                    required
                />
            </label>
            {/* Кнопка подтверждения действия */}
            <SessionButton text={editMode ? "Сохранить" : "Добавить зал"} />
        </form>
    );
}




