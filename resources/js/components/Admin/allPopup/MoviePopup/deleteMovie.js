
import { useDispatch as deleteMovieUseDispatch, useSelector } from "react-redux"; 
import { deleteMovie, getMovies, getSeances } from "../../../../reducers/createAdminSlice";
import { closePopup } from "../../../../reducers/createPopupSlice";
import AcceptBtn from "../../Buttons/acceptBtn"; 

export default function CustomDeleteMovie() { 
    const { id } = useSelector((state) => state.popup);
    const { movies } = useSelector((state) => state.admin);
    const dispatch = deleteMovieUseDispatch(); 

    const title = movies.find((movie) => movie.id === id).title;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteMovie(id)).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
            dispatch(getMovies());
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">
                Вы действительно хотите удалить фильм <span>{title}</span>?
            </p>
            <AcceptBtn text={"Удалить"} /> 
        </form>
    );
}


