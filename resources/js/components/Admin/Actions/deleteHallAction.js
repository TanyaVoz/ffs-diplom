import { useDispatch } from "react-redux";
import { showPopup } from "../../../reducers/createPopupSlice";
import PropTypes from "prop-types";

// Компонент для действия удаления зала
export default function DeleteHallAction(props) {
    // Извлечение данных из пропсов
    const { id, name } = props;

    // Получение диспатча из React Redux
    const dispatch = useDispatch();

    return (
        <li>
            {/* Элемент для редактирования зала */}
            <span
                className="conf-step__edit-hall"
                onClick={() => dispatch(showPopup({ title: "Редактирование зала", form: "editHall", id }))}>
                {name}
            </span>

            {/* Кнопка для удаления зала */}
            <button
                className="conf-step__button conf-step__button-trash"
                onClick={() => dispatch(showPopup({ title: "Удаление зала", form: "deleteHall", id }))} />
        </li>
    );
}

// Пропсы компонента
DeleteHallAction.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};



