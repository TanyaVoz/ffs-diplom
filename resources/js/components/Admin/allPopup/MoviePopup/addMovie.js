import { useDispatch } from "react-redux";
import { createMovie } from "../../../../reducers/createAdminSlice";
import MovieCard from "../../adminCards/movieCard";

export default function AddMovie() {
    const dispatch = useDispatch();

    return (
        // Рендеринг компонента MovieCard для добавления фильма
        <MovieCard
            // Callback-функция для создания фильма при отправке формы
            callbackSubmit={(title, description, duration, country, poster) =>
                dispatch(createMovie({
                    title,
                    description,
                    duration,
                    country,
                    poster
                }))
            }
        />
    );
}

