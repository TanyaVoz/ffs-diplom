import { useSelector, useDispatch } from "react-redux";
import { changeSeatStatus } from "../../../reducers/createAdminSlice";
import SeatStatus from "./seatStatus";

export default function SeatsScheme(props) {
    const { place } = props;
    const { seats } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const allStatus = ["standard", "vip", "disabled"];

    const chair = seats.length / place;

    const rowSeats = seats.reduce((result, seat, i) => {
        const index = Math.floor(i / chair);
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push({ ...seat, key: `seat_${i}` });
        return result;
    }, []);

    const handleClick = (id) => {
        const seatStatus = seats.find((seat) => seat.id === id).status;
        const statusIndex = allStatus.indexOf(seatStatus);
        dispatch(changeSeatStatus({ id, status: allStatus[(statusIndex + 1) % allStatus.length] }));
    };

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
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
