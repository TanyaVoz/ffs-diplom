import React from "react";
import { useDispatch } from "react-redux";
import { showPopup } from "../../../../reducers/popupReducer";
import PropTypes from "prop-types";
import getRussianMinutesLabel from "../../../Client/additionalComponents/Formatting/timeFormWords";


const EditMovieAction = ({ id, img, title, duration }) => {
   
    const filmDuration = getRussianMinutesLabel(duration);
    const dispatch = useDispatch();

    // Обработчик клика по компоненту фильма
    const handleMovieClick = () => {
        dispatch(showPopup({ title: "Редактирование фильма", form: "editMovie", id }));
    };

    return (
        <div className="conf-step__movie" onClick={handleMovieClick}>

            {/* Иконка для закрытия */}
            <div className="conf-step__close" />

            {/* Постер фильма */}
            <img className="conf-step__movie-poster" alt="poster" src={`../images/${img}`} />

            {/* Заголовок фильма */}
            <h3 className="conf-step__movie-title">{title}</h3>

            {/* Продолжительность фильма */}
            <p className="conf-step__movie-duration">{duration} минут {filmDuration}</p>
        </div>
    );
};

// Пропсы компонента
EditMovieAction.propTypes = {
    id: PropTypes.number.isRequired, 
    img: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    duration: PropTypes.number.isRequired, 
};

export default EditMovieAction;
