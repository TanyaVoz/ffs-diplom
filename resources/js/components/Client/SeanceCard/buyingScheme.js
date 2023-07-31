
import { useSelector } from "react-redux";
import SeanceSeatStatus from "./seanceSeatStatus";

const groupSeatsByRows = (seats, chairsPerRow) => {
  return seats.reduce((result, seat, i) => {
    const rowIndex = Math.floor(i / chairsPerRow);

    if (!result[rowIndex]) {
      result[rowIndex] = [];
    }
    result[rowIndex].push(seat);
    return result;
  }, []);
};

export default function BuyingScheme(props) {
  const { callback } = props;
  const { session, seats } = useSelector((state) => state.seance);
  const chairsPerRow = seats.length / session.row;
  const rowSeats = groupSeatsByRows(seats, chairsPerRow);

//   if (!session || !seats) {
//     // Обработка случая, когда данные отсутствуют
//     return <div>Loading...</div>; // Или другая обработка
//   }

  return (
    <div className="buying-scheme">
      <div className="buying-scheme__wrapper">
        {rowSeats.map((row, rowIndex) => (
          <div className="buying-scheme__row" key={rowIndex}>
            {row.map((seat) => (
              <SeanceSeatStatus
                seat={seat}
                callback={callback}
                key={seat.id}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="buying-scheme__legend">
        <div className="col">
          <p className="buying-scheme__legend-price">
            <span className="buying-scheme__chair buying-scheme__chair_standart" />
            Свободно (<span className="buying-scheme__legend-value">{session.price_standard}</span>руб)
          </p>

          <p className="buying-scheme__legend-price">
            <span className="buying-scheme__chair buying-scheme__chair_vip" />
            Свободно VIP (<span className="buying-scheme__legend-value">{session.price_vip}</span>руб)
          </p>
        </div>

        <div className="col">
          <p className="buying-scheme__legend-price">
            <span className="buying-scheme__chair buying-scheme__chair_taken" />
            Занято
          </p>

          <p className="buying-scheme__legend-price">
            <span className="buying-scheme__chair buying-scheme__chair_selected" />
            Выбрано
          </p>
        </div>
      </div>
    </div>
  );
}
