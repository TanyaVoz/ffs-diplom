import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSeatStatus } from "../../../../reducers/adminReducer";
import SeatStatus from "./seatType";

export default function SeatsScheme(props) {
    const { place } = props; 
    const { seats } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const allStatus = ["standard", "vip", "disabled"]; // Список доступных статусов мест
    const chair = seats.length / place;

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
        const nextStatusIndex = (statusIndex + 1) % allStatus.length;
        const nextStatus = allStatus[nextStatusIndex];
        dispatch(changeSeatStatus({ id, status: nextStatus }));
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

