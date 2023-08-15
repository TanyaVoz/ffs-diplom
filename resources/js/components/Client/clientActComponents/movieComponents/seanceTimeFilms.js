
import { Link } from "react-router-dom";

// Создаем константу с путем к странице сеанса
const SEANCE_PATH = "/seance";

export default function MovieSeanceItem(props) {
    const { id, time } = props;
    const datetime = new Date(time);

    return (
        <li className="movie-seances__time-block">
            {/* Используем созданную константу для формирования ссылки */}
            <Link className="movie-seances__time" to={`${SEANCE_PATH}/${id}`}>
                {datetime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
            </Link>
        </li>
    );
}


