import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCalendar } from "../../../../reducers/calendarReducer";
import Movie from "./showBillboard";
import Main from "../../Main";

export default function MainMovie() {
    const { chosenDate, films, error } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    // При изменении выбранной даты вызывается функция getCalendar для получения расписания
    useEffect(() => {
        dispatch(getCalendar(chosenDate));
    }, [chosenDate]);

    if (error) {
        // Обработка ошибки
        return <div>Error: {error.message}</div>;
    }

    return (
        <Main nav>
            {films && films.map((film) => (
                <Movie
                    id={film.id}
                    key={film.id}
                />
            ))}
            {!films && <div>No films available for this date.</div>}
        </Main>
    );
}

