import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getSeances, getMovies } from "../../../../../reducers/adminReducer";
import { closePopup } from "../../../../../reducers/popupReducer";
import SessionButton from "../../allButtons/sessionButton";

export default function CustomDeleteMovie() {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.popup);
    const { movies } = useSelector((state) => state.admin);
    const selectedMovie = movies.find((movie) => movie.id === id);
    const movieTitle = selectedMovie ? selectedMovie.title : "неизвестный фильм";

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            dispatch(deleteMovie(id)); 
            dispatch(closePopup()); 
            dispatch(getSeances()); 
            dispatch(getMovies());  
        } catch (error) {
            console.error("Ошибка при удалении фильма:", error);
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <p className="conf-step__paragraph">
                Вы уверены, что хотите удалить фильм <span>{movieTitle}</span>?</p>
            <SessionButton text={"Удалить"} />
        </form>
    );
}


