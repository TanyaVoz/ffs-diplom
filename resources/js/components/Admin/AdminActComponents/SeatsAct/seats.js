import { useSelector, useDispatch } from "react-redux";
import { changeSeatStatus } from "../../../../reducers/createAdmin";
import SeatStatus from "./seatType";

export default function SeatsScheme(props) {
    const { place } = props; // Получение количества мест в ряду из входных свойств
    const { seats } = useSelector((state) => state.admin); // Получение данных о местах из Redux
    const dispatch = useDispatch(); // Получение функции dispatch из Redux для отправки действий

    const allStatus = ["standard", "vip", "disabled"]; // Список доступных статусов мест

    const chair = seats.length / place; // Расчет количества мест в ряду

    // Группировка мест по рядам
    const rowSeats = seats.reduce((result, seat, i) => {
        const index = Math.floor(i / chair);
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push({ ...seat, key: `seat_${i}` });
        return result;
    }, []);

    // Обработчик клика по месту для изменения его статуса
    const handleClick = (id) => {
        const seatStatus = seats.find((seat) => seat.id === id).status;
        const statusIndex = allStatus.indexOf(seatStatus);
        dispatch(changeSeatStatus({ id, status: allStatus[(statusIndex + 1) % allStatus.length] }));
    };

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {/* Отображение мест в рядах с использованием компонента SeatStatus */}
                {rowSeats.map((row, i) => (
                    <div className="conf-step__row" key={`row_${i}`}>
                        {row.map((seat) => (
                            <SeatStatus
                                status={seat.status}
                                callback={() => handleClick(seat.id)}
                                key={seat.key}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
