import { useSelector } from "react-redux";
import MovieSeanceItem from "./seanceTimeFilms";

export default function ClientHall(props) {
    const { cinemaHalls } = useSelector((state) => state.calendar);
    const { selectedCinemaHallId, selectedFilmId } = props;
    const selectedCinemaHall = cinemaHalls.find((selectedCinemaHall) => selectedCinemaHall.id === selectedCinemaHallId);
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
                        key={seance.id} 
                    />
                ))}
            </ul>
        </div>
    );
}
