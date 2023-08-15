import { useSelector } from "react-redux";
import MovieSeanceItem from "./seanceTimeFilms";

export default function ClientHall(props) {
    // Получение данных о залах из состояния
    const { cinemaHalls } = useSelector((state) => state.calendar);

    // Получение идентификаторов зала и фильма из пропсов
    const { selectedCinemaHallId, selectedFilmId } = props;

    // Поиск информации о конкретном кинозале
    const selectedCinemaHall = cinemaHalls.find((selectedCinemaHall) => selectedCinemaHall.id === selectedCinemaHallId);

    // Фильтрация сеансов в выбранном кинозале для конкретного фильма
    const selectedCinemaHallSeances = selectedCinemaHall.sessions.filter((session) => +session.film_id === selectedFilmId);

    return (
        <div className="movie-seances__hall">
            {/* Отображение названия кинозала */}
            <h3 className="movie-seances__hall-title">{selectedCinemaHall.name}</h3>
            <ul className="movie-seances__list">
                {/* Отображение списка сеансов для данного кинозала и фильма */}
                {selectedCinemaHallSeances.map((seance) => (
                    <MovieSeanceItem
                        id={seance.id}
                        time={seance.datetime}
                        key={seance.id} // Используем id сеанса как ключ
                    />
                ))}
            </ul>
        </div>
    );
}
