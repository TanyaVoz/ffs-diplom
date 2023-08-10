import { useDispatch as deleteMovieUseDispatch, useSelector } from "react-redux"; 
import { deleteMovie, getMovies, getSeances } from "../../../../reducers/createAdminSlice";
import { closePopup } from "../../../../reducers/createPopupSlice";
import AcceptBtn from "../../Buttons/acceptBtn"; 

export default function CustomDeleteMovie() { 
    const { id } = useSelector((state) => state.popup);
    const { movies } = useSelector((state) => state.admin);
    const dispatch = deleteMovieUseDispatch(); 

    // Получение названия фильма для вывода в сообщении
    const title = movies.find((movie) => movie.id === id).title;

    const handleSubmit = (event) => {
        event.preventDefault();

        // Выполнение удаления фильма и дополнительных действий
        dispatch(deleteMovie(id)).then(() => {
            dispatch(closePopup());
            dispatch(getSeances()); // Обновление сеансов
            dispatch(getMovies());  // Обновление списка фильмов
        });
    };

    return (
        // Форма для подтверждения удаления фильма
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">
                Вы действительно хотите удалить фильм <span>{title}</span>?
            </p>
            {/* Кнопка подтверждения удаления */}
            <AcceptBtn text={"Удалить"} /> 
        </form>
    );
}




