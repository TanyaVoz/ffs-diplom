import React from "react";
import { useSelector } from "react-redux";
import MovieInfo from "./information";
import ClientHall from "./clientHall";

export default function MovieComponent(props) {
    const { cinemaHalls } = useSelector((state) => state.calendar);
    const { id } = props;

    // Фильтрация залов, где идет выбранный фильм
    const movieHalls = cinemaHalls.filter((selectedCinemaHall) => {
        return selectedCinemaHall.sessions.find((session) => +session.film_id === id);
    });

    return (
        <section className="movie">
            {/* Отображение информации о фильме */}
            <MovieInfo id={id} />

            {/* Отображение залов, в которых идет фильм */}
            {movieHalls.map((selectedCinemaHall) => (
                <ClientHall
                    selectedCinemaHallId={selectedCinemaHall.id}
                    selectedFilmId={id}
                    key={selectedCinemaHall.id} // Используем id зала как ключ
                />
            ))}
        </section>
    );
}
