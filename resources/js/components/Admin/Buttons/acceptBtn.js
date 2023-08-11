import { useDispatch as acceptBtnUseDispatch } from "react-redux";
import { closePopup } from "../../../reducers/createPopupSlice";

export default function AcceptBtn(props) {
    const { text, handleDelete } = props;
    const dispatch = acceptBtnUseDispatch(); // Получение функции dispatch из Redux

    // Обработчик для отмены (закрытия попапа)
    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(closePopup()); // Вызов экшена для закрытия попапа
    };

    return (
        <div className="conf-step__buttons text-center">
            {/* Кнопка "Сохранить" или с текстом, переданным через props */}
            <input
                type="submit"
                value={handleDelete ? "Сохранить" : text}
                className="conf-step__button conf-step__button-accent"
            />

            {/* Кнопка "Отменить" для закрытия попапа */}
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancel}>
                Отменить
            </button>

            {/* Опциональная кнопка "Удалить", если есть обработчик handleDelete */}
            {handleDelete && (
                <button className="conf-step__button conf-step__button-regular" onClick={handleDelete}>
                    Удалить
                </button>
            )}
        </div>
    );
}






