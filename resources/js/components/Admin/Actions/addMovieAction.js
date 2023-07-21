import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createAdminSlice } from "../../../reducers/createAdminSlice";
import { createPopupSlice } from "../../../reducers/createPopupSlice";
import Button from "../Buttons/btn";
import EditMovieAction from "./editMovieAction";

export default function AddMovieAction() {
  const { movies, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAdminSlice.actions.getMovies());
  }, []);

  return (
    <>
      <p className="conf-step__paragraph">
        <Button
          text={"Добавить фильм"}
          callback={() =>
            dispatch(
              createPopupSlice.actions.showPopup({
                title: "Добавление фильма",
                form: "addMovie",
              })
            )
          }
        />
      </p>
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
