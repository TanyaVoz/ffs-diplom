import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../../../reducers/popupReducer";
import { updateMovie } from "../../../../../reducers/adminReducer";
import MovieCard from "../../../AdminConfigurationsComponents/movie";

export default function EditMovie() {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.popup);
  const { movies } = useSelector((state) => state.admin);

  const movie = movies.find((movie) => movie.id === id);

  const handleUpdateMovie = (title, description, duration, country, poster) => {
    dispatch(
      updateMovie({
        id,
        title,
        description,
        duration,
        country,
        poster,
      })
    );
  };

  const handleDeleteMovie = () => {
    dispatch(
      showPopup({ title: "Удаление фильма", form: "deleteMovie", id })
    );
  };

  return (
    <div className="edit-movie-container">
      <h2>Редактирование фильма</h2>
      <MovieCard
        title={movie.title}
        description={movie.description}
        duration={movie.duration}
        country={movie.country}
        poster={movie.poster}
        callbackSubmit={handleUpdateMovie}
        callbackDelete={handleDeleteMovie}
      />
    </div>
  );
}
