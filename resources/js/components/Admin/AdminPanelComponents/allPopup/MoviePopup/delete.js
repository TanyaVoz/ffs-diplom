import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getSeances, getMovies } from "../../../../../reducers/createAdmin";
import { closePopup } from "../../../../../reducers/createPopup";
import SessionButton from "../../allButtons/sessionButton";

export default function CustomDeleteMovie() {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.popup);
    const { movies } = useSelector((state) => state.admin);

      // Находим выбранный фильм по его ID
    const selectedMovie = movies.find((movie) => movie.id === id);
    const movieTitle = selectedMovie ? selectedMovie.title : "неизвестный фильм";

    // const handleDelete = async (event) => {
        const handleDelete =  async (event) => {
        event.preventDefault();

        try {
            // await dispatch(deleteMovie(id));
            dispatch(deleteMovie(id)); // Удаление фильма
            dispatch(closePopup()); // Закрытие всплывающего окна
            dispatch(getSeances()); // Обновление списка сеансов
            dispatch(getMovies());  // Обновление списка фильмов
        } catch (error) {
            console.error("Ошибка при удалении фильма:", error);
            // Дополнительная обработка ошибок, вывод сообщений и т.д.
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <p className="conf-step__paragraph">
                Вы уверены, что хотите удалить фильм <span>{movieTitle}</span>?</p>
           {/* Кнопка подтверждения удаления */}
            <SessionButton text={"Удалить"} />
        </form>
    );
}


