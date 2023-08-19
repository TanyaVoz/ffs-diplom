import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../../../reducers/popupReducer";
import { updateSeance } from "../../../../../reducers/adminReducer";
import SeanceCard from "../../../AdminConfigurationsComponents/seance";

export default function EditSeance() {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.popup);
    const { seances } = useSelector((state) => state.admin);

    // Находим сеанс по ID из состояния всплывающего окна
    const session = seances.find((session) => session.id === id);

    // Преобразуем дату и время сеанса в соответствующие форматы
    const datetime = new Date(session.datetime);
    const date = `${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)}`;
    const time = `${('0' + datetime.getHours()).slice(-2)}:${('0' + datetime.getMinutes()).slice(-2)}`;

    return (
        <SeanceCard
            cinema_hall_id={session.cinema_hall_id}
            film_id={session.film_id}
            date={date}
            time={time}
            callbackSubmit={(datetime, cinema_hall_id, film_id) => dispatch(updateSeance({
                id,
                datetime,
                cinema_hall_id,
                film_id
            }))}
            callbackDelete={() => dispatch(showPopup({ title: "Удаление сеанса", form: "deleteSeance", id }))}
        />
    );
}



