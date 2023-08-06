
import { useDispatch as acceptBtnUseDispatch } from "react-redux"; 
import { closePopup } from "../../../reducers/createPopupSlice";

export default function AcceptBtn(props) { 
    const { text, handleDelete } = props;
    const dispatch = acceptBtnUseDispatch(); 

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(closePopup());
    };

    return (
        <div className="conf-step__buttons text-center">
            <input
                type="submit"
                value={handleDelete ? "Сохранить" : text}
                className="conf-step__button conf-step__button-accent"
            />
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancel}>
                Отменить
            </button>
            {handleDelete && (
                <button className="conf-step__button conf-step__button-regular" onClick={handleDelete}>
                    Удалить
                </button>
            )}
        </div>
    );
}




