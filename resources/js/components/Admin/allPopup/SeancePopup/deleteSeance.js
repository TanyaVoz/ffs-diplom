import { useDispatch, useSelector } from "react-redux";
import { deleteSeance, getSeances } from "../../../../reducers/createAdminSlice";
import { closePopup } from "../../../../reducers/createPopupSlice";
import AcceptBtn from "../../Buttons/acceptBtn";

export default function DeleteSeance() {
    const { id } = useSelector((state) => state.popup);
    const { seances, movies } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    // Находим сеанс по ID из состояния всплывающего окна
    const seance = seances.find((seance) => +seance.id === id);

    // Находим название фильма для данного сеанса
    const title = movies.find((movie) => movie.id === +seance.film_id).title;

    // Обработчик для удаления сеанса
    const handleSubmit = (event) => {
        event.preventDefault();

        // Диспатчим действие удаления сеанса, после чего обновляем список сеансов
        dispatch(deleteSeance(id)).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">
                Вы действительно хотите снять с сеанса фильм <span>{title}</span>?
            </p>
            <AcceptBtn text={"Удалить"} />
        </form>
    );
}


