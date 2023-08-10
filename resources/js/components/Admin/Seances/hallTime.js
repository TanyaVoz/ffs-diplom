import { useSelector } from "react-redux";
import MovieTime from "./movieTime"; // Импорт компонента для отображения времени сеанса

export default function HallTime(props) {
    const { seances } = useSelector((state) => state.admin); // Получение данных о сеансах из Redux
    const { cinemaHall } = props; // Получение ID кинозала из входных параметров

    // Фильтрация и сортировка сеансов для указанного кинозала
    const cinemaHallSeances = seances.filter((seance) => +seance.cinema_hall_id === cinemaHall);
    cinemaHallSeances.sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime));

    return (
        <div className="conf-step__seances-timeline">
            {/* Отображение времени сеансов для указанного кинозала */}
            {cinemaHallSeances.map((seance) => (
                <MovieTime
                    id={seance.film_id}
                    seance={seance.id}
                    time={seance.datetime}
                    key={seance.id}
                />
            ))}
        </div>
    );
}

