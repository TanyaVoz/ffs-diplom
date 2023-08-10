import { useSelector } from "react-redux";
import MovieSeance from "./movieSeance";

export default function MovieHall(props) {
    // Получение данных о залах из состояния
    const { cinemaHalls } = useSelector((state) => state.calendar);

    // Получение идентификаторов зала и фильма из пропсов
    const { cinemaHallId, filmId } = props;

    // Поиск информации о конкретном кинозале
    const cinemaHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === cinemaHallId);

    // Фильтрация сеансов в выбранном кинозале для конкретного фильма
    const cinemaHallSeances = cinemaHall.sessions.filter((session) => +session.film_id === filmId);

    return (
        <div className="movie-seances__hall">
            {/* Отображение названия кинозала */}
            <h3 className="movie-seances__hall-title">{cinemaHall.name}</h3>
            <ul className="movie-seances__list">
                {/* Отображение списка сеансов для данного кинозала и фильма */}
                {cinemaHallSeances.map((seance) => (
                    <MovieSeance
                        id={seance.id}
                        time={seance.datetime}
                        key={seance.id} // Используем id сеанса как ключ
                    />
                ))}
            </ul>
        </div>
    );
}

