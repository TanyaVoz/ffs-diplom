import { useDispatch, useSelector } from "react-redux";
import { deleteSeance, getSeances } from "../../../../../reducers/adminReducer";
import { closePopup } from "../../../../../reducers/popupReducer";
import SessionButton from "../../allButtons/sessionButton";

export default function DeleteSeance() {
    const { id } = useSelector((state) => state.popup);
    const { seances, movies } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const selectedSeance = seances.find((seance) => seance.id === id);
    const seanseTitle = movies.find((movie) => movie.id === +selectedSeance.film_id).title;

    // Обработчик для удаления сеанса
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            dispatch(deleteSeance(id));
            dispatch(closePopup());
            dispatch(getSeances());
        } catch (error) {
            console.error("Ошибка при удалении фильма:", error);
        }
    };


    return (
        <form onSubmit={handleDelete}>
            <p className="conf-step__paragraph">
                Вы действительно хотите снять с сеанса фильм <span>{seanseTitle}</span>?
            </p>
            <SessionButton text={"Удалить"} />
        </form>
    );
}
