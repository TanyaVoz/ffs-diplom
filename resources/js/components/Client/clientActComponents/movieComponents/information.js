import { useSelector } from "react-redux";
import getRussianMinutesLabel from "../../additionalComponents/Formatting/timeFormWords";

export default function MovieInfo(props) {
    const { films } = useSelector((state) => state.calendar);
    const { id } = props;
    const film = films.find((film) => film.id === id);

    if (!film) {
        // Обработка случая, когда фильм с заданным id не найден
        return <div>Фильм не найден.</div>;
    }

    const processEnd = getRussianMinutesLabel(film.duration);

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img
                    className="movie__poster-image"
                    alt={`${film.title} постер`}
                    src={`images/${film.poster}`}
                    onError={(e) => {
                        // Обработка ошибки при загрузке изображения постера
                        e.target.src = "images/poster-not-available.png"; // Здесь можно указать путь к заглушке
                    }}
                />
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{film.duration} {processEnd}</span>
                    {", "}
                    <span className="movie__data-origin">{film.country}</span>
                </p>
            </div>
        </div>
    );
}

