import { useDispatch, useSelector } from "react-redux";
import { createSeance } from "../../../../reducers/createAdminSlice";
import SeanceCard from "../../adminCards/seanceCard";

export default function AddSeance() {
    const dispatch = useDispatch();

    // Получение списка фильмов и выбранной даты из состояния
    const { movies, chosenDate } = useSelector((state) => state.admin);

    // Получение ID зала из состояния всплывающего окна
    const { id } = useSelector((state) => state.popup);

    return (
        // Компонент SeanceCard для добавления сеанса
        <SeanceCard
            // Передача callback-функции для создания сеанса
            callbackSubmit={(datetime, cinema_hall_id, film_id) =>
                dispatch(createSeance({
                    datetime,
                    cinema_hall_id,
                    film_id
                }))
            }
            // Передача ID зала
            cinema_hall_id={id}
            // Передача ID первого фильма в списке
            film_id={movies[0].id}
            // Передача выбранной даты и времени сеанса
            date={chosenDate}
            time={"00:00"}
        />
    );
}

