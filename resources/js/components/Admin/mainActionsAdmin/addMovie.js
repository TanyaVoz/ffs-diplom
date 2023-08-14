import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../../reducers/createAdmin";
import { showPopup } from "../../../reducers/createPopup";
import Button from "../allButtons/btn";
import EditMovieAction from "./editMovie";

export default function AddMovieAction() {
  const { movies, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    // Получаем список фильмов при загрузке компонента
    dispatch(getMovies());
  }, []);

  return (
    <>
      {/* Кнопка для добавления нового фильма */}
      <p className="conf-step__paragraph">
        <Button
          text={"Добавить фильм"}
          callback={() =>
            dispatch(
              showPopup({
                title: "Добавление фильма",
                form: "addMovie",
              })
            )
          }
        />
      </p>

      {/* Список фильмов */}
      <div className="conf-step__movies">
        {movies.length === 0 ? (
          <p>Нет доступных фильмов.</p>
        ) : (
          movies.map((movie) => (
            <EditMovieAction
              id={movie.id}
              img={movie.poster}
              title={movie.title}
              duration={movie.duration}
              key={movie.id}
            />
          ))
        )}
      </div>
    </>
  );
}
