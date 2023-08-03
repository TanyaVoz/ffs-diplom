import { useSelector } from "react-redux";
import SeanceSeatStatus from "./seanceSeatStatus";

const BuyingScheme = (props) => {
    const { callback } = props;
    const { session, seats } = useSelector((state) => state.seance);
    const priceStandard = session.price_standard;
    const priceVIP = session.price_vip;

    const rowSeats = getRowSeats(seats, session.row);

    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
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
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_standart" /> Свободно (
                        <span className="buying-scheme__legend-value">{priceStandard}</span>руб)
                    </p>

                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_vip" /> Свободно VIP (
                        <span className="buying-scheme__legend-value">{priceVIP}</span>руб)
                    </p>
                </div>

                <div className="col">
                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_taken" /> Занято
                    </p>

                    <p className="buying-scheme__legend-price">
                        <span className="buying-scheme__chair buying-scheme__chair_selected" /> Выбрано
                    </p>
                </div>
            </div>
        </div>
    );
};

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
