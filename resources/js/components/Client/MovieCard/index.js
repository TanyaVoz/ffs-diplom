
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCalendar } from "../../../reducers/createCalendarSlice";
import Movie from "./movie";
import Main from "../Main";

export default function MainMovie() {
    const { chosenDate, films, loading, error } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCalendar(chosenDate));
    }, [chosenDate]);

    // if (loading) {
    //     // Обработка состояния загрузки
    //     return <div>Loading...</div>;
    // }

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
