import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../../reducers/popupReducer";

export default function MovieTime(props) {
    const { movies } = useSelector(state => state.admin); // Получение данных о фильмах из Redux
    const { id, seance, time } = props; // Получение данных о времени сеанса и фильме из входных параметров
    const dispatch = useDispatch();

    // Поиск индекса фильма в массиве по его ID
    const movie = movies.find(movie => movie.id === +id); // Выбранный фильм
    const width = (movie.duration / 60) * 30; // Вычисление ширины блока сеанса в пикселях на основе длительности фильма
    const datetime = new Date(time); // Преобразование времени сеанса в объект типа Date
    const shift = (datetime.getHours() + datetime.getMinutes() / 60) * 30; // Вычисление сдвига блока сеанса по горизонтали

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