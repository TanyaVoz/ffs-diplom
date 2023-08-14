import { useSelector } from "react-redux";
import SeanceSeatStatus from "./seatStatus";

const BuyingScheme = (props) => {
    const { callback } = props;

    // Получение данных о сеансе и местах из состояния
    const { session, seats } = useSelector((state) => state.seance);

    // Получение цен для стандартных и VIP мест из данных сеанса
    const priceStandard = session.price_standard;
    const priceVIP = session.price_vip;

    // Получение массива мест, разбитых на ряды
    const rowSeats = getRowSeats(seats, session.row);

    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {/* Отображение мест в рядах */}
                {rowSeats.map((row, i) => (
                    <div className="buying-scheme__row" key={i}>
                        {row.map((seat) => (
                            <SeanceSeatStatus
                                status={seat.status}
                                callback={() => callback(seat.id, seat.status)}
                                key={seat.id}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="buying-scheme__legend">
                <div className="col">
                    {/* Легенда для свободных стандартных мест */}
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_standart" /> Свободно (
                        <span className="buying-scheme__legend-value">{priceStandard}</span>руб)
                    </p>

                    {/* Легенда для свободных VIP мест */}
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_vip" /> Свободно VIP (
                        <span className="buying-scheme__legend-value">{priceVIP}</span>руб)
                    </p>
                </div>

                <div className="col">
                    {/* Легенда для занятых мест */}
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_taken" /> Занято
                    </p>

                    {/* Легенда для выбранных мест */}
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_selected" /> Выбрано
                    </p>
                </div>
            </div>
        </div>
    );
};

// Функция для разбиения мест на ряды
const getRowSeats = (seats, rowSize) => {
    if (!seats || seats.length === 0) {
        return [];
    }

    const chairs = seats.length / rowSize;

    return seats.reduce((result, seat, i) => {
        const index = Math.floor(i / chairs);

        if (!result[index]) {
            result[index] = [];
        }

        result[index].push(seat);
        return result;
    }, []);
};

export default BuyingScheme;

