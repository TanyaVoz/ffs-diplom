import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../../../reducers/createPopup";
import { updateMovie } from "../../../../../reducers/createAdmin";
import MovieCard from "../../../AdminConfigurationsComponents/movie";

export default function EditMovie() {
    const dispatch = useDispatch();

    // Получаем ID фильма из состояния всплывающего окна
    const { id } = useSelector((state) => state.popup);

    // Получаем список фильмов из состояния
    const { movies } = useSelector((state) => state.admin);

    // Находим фильм по ID из состояния всплывающего окна
    const movie = movies.find((movie) => movie.id === id);

    return (
        <MovieCard
            // Передаем данные о фильме в компонент MovieCard для редактирования
            title={movie.title}
            description={movie.description}
            duration={movie.duration}
            country={movie.country}
            poster={movie.poster}

            // Callback-функция для обновления информации о фильме
            callbackSubmit={(title, description, duration, country, poster) => dispatch(updateMovie({
                id,
                title,
                description,
                duration,
                country,
                poster
            }))}

            // Callback-функция для показа всплывающего окна удаления фильма
            callbackDelete={() => dispatch(showPopup({ title: "Удаление фильма", form: "deleteMovie", id }))}
        />
    );
}
