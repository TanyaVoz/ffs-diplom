import { useDispatch } from "react-redux";
import { showPopup } from "../../../../reducers/createPopup";
import PropTypes from "prop-types";
import getRussianMinutesLabel from "../../../Client/additionalComponents/Formatting/timeFormWords";

// Компонент для действия редактирования фильма
export default function EditMovieAction(props) {
    // Извлечение данных из пропсов
    const { id, img, title, duration } = props;

    // Получение продолжительности фильма в соответствии с числом
    const filmDuration = getRussianMinutesLabel(duration);

    // Получение диспатча из React Redux
    const dispatch = useDispatch();

    return (
        <div
            className="conf-step__movie"
            onClick={() => dispatch(showPopup({ title: "Редактирование фильма", form: "editMovie", id }))}>

            {/* Иконка для закрытия */}
            <div className="conf-step__close" />

            {/* Постер фильма */}
            <img className="conf-step__movie-poster" alt="poster" src={`../images/${img}`} />

            {/* Заголовок фильма */}
            <h3 className="conf-step__movie-title">{title}</h3>

            {/* Продолжительность фильма */}
            <p className="conf-step__movie-duration">{duration} {" "} {filmDuration}</p>
        </div>
    );
}

// Пропсы компонента
EditMovieAction.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};
