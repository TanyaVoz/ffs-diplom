import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../../reducers/popupReducer";

export default function MovieTime(props) {
    const { movies } = useSelector(state => state.admin);
    const { id, seance, time } = props;
    const dispatch = useDispatch();
    const movie = movies.find(movie => movie.id === +id);
    const width = (movie.duration / 60) * 30;
    const datetime = new Date(time);
    const shift = (datetime.getHours() + datetime.getMinutes() / 60) * 30;
    const movieTitle = movie ? movie.title : "Фильм не найден"; // Обработка случая, если фильм не найден

    return (
        <div
            className={`conf-step__seances-movie conf-step__seances-movie-${id}`}
            style={{ width: `${width}px`, left: `${shift}px` }}
            onClick={() => dispatch(showPopup({ title: "Редактирование сеанса", form: "editSeance", id: seance }))}>
            {/* Отображение названия фильма и времени начала сеанса */}
            <p className="conf-step__seances-movie-title">{movieTitle}</p>
            <p className="conf-step__seances-movie-start">{datetime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })}
            </p>
        </div>
    );
}
