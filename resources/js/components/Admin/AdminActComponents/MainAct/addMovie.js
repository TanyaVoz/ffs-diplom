import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../../reducers/adminReducer";
import { showPopup } from "../../../../reducers/popupReducer";
import Button from "../../AdminPanelComponents/allButtons/button";
import EditMovieAction from "./editMovie";

const AddMovieAction = () => {
  // Выборка списка фильмов и состояния загрузки из Redux-хранилища
  const { movies, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  // Загрузка списка фильмов при монтировании компонента
  useEffect(() => {
    const fetchMovies = () => {
      dispatch(getMovies()); // Вызов функции getMovies для получения списка фильмов
    };
    fetchMovies();
  }, [dispatch]);

  // Обработчик клика для отображения всплывающего окна "Добавление фильма"
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
        {/* Условное отображение в зависимости от наличия фильмов */}
        {movies.length === 0 ? (
          <p>Нет доступных фильмов.</p>
        ) : (
          // Отображение компонента EditMovieAction для каждого фильма
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
