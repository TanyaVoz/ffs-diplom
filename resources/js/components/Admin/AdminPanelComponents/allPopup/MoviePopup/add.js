import React from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../../../../../reducers/adminReducer";
import MovieCard from "../../../AdminConfigurationsComponents/movie";

export default function AddMovie() {

    const dispatch = useDispatch();

    // Обработчик создания нового фильма
    const handleMovieCreation = (title, description, duration, country, poster) => {
        // Диспетчеризация действия создания фильма с переданными данными
        dispatch(createMovie({
            title,
            description,
            duration,
            country,
            poster
        }));
    };

    return (
        <div className="add-movie-container">
            {/* Заголовок раздела добавления нового фильма */}
            <h2>Добавление нового фильма</h2>

            {/* Компонент MovieCard для ввода информации о фильме */}
            <MovieCard
                callbackSubmit={handleMovieCreation} // Передача обработчика создания фильма
            />
        </div>
    );
}



