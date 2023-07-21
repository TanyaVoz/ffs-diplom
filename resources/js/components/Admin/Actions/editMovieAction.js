import { useDispatch } from "react-redux";
import { showPopup } from "../../../reducers/createPopupSlice";
import PropTypes from "prop-types";
import getNoun from "../../Client/wordsEndings/minEnd";

export default function EditMovieAction(props) {
    const { id, img, title, duration } = props;
    const filmDuration = getNoun(duration);
    const dispatch = useDispatch();

    return (
        <div className="conf-step__movie"
             onClick={() => dispatch(showPopup({ title: "Редактирование фильма", form: "editMovie", id }))}>

            <div className="conf-step__close"/>

            <img className="conf-step__movie-poster" alt="poster" src={`../images/${img}`}/>
            <h3 className="conf-step__movie-title">{title}</h3>
            <p className="conf-step__movie-duration">{duration} {" "} {filmDuration}</p>
        </div>
    );
}

EditMovieAction.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};
