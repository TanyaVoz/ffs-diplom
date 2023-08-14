import React from "react";
import { useSelector } from "react-redux";
import MovieInfo from "./Info";
import MovieHall from "./hall";

export default function MovieComponent(props) {
    // Получение данных о зале из состояния
    const { cinemaHalls } = useSelector((state) => state.calendar);

    // Получение идентификатора фильма из пропсов
    const { id } = props;

    // Фильтрация залов, где идет выбранный фильм
    const movieHalls = cinemaHalls.filter((cinemaHall) => {
        return cinemaHall.sessions.find((session) => +session.film_id === id);
    });

    return (
        <section className="movie">
            {/* Отображение информации о фильме */}
            <MovieInfo id={id} />

            {/* Отображение залов, в которых идет фильм */}
            {movieHalls.map((cinemaHall) => (
                <MovieHall
                    cinemaHallId={cinemaHall.id}
                    filmId={id}
                    key={cinemaHall.id} // Используем id зала как ключ
                />
            ))}
        </section>
    );
}


