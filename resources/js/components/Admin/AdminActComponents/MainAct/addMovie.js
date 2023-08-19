import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../../reducers/adminReducer";
import { showPopup } from "../../../../reducers/popupReducer";
import Button from "../../AdminPanelComponents/allButtons/button";
import EditMovieAction from "./editMovie";

const AddMovieAction = () => {
  const { movies, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = () => {
      dispatch(getMovies());
    };
    fetchMovies();
  }, [dispatch]);

  const handleAddMovieClick = () => {
    dispatch(
      showPopup({
        title: "Добавление фильма",
        form: "addMovie",
      })
    );
  };

  return (
    <div>
      <p className="conf-step__paragraph">
        <Button text={"Добавить фильм"} callback={handleAddMovieClick} />
      </p>
      <div className="conf-step__movies">
        {movies.length === 0 ? (
          <p>Нет доступных фильмов.</p>
        ) : (
          movies.map((movie) => (
            <EditMovieAction
              key={movie.id}
              id={movie.id}
              img={movie.poster}
              title={movie.title}
              duration={movie.duration}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AddMovieAction;
