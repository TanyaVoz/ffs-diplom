import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createTicket, getSeance } from "../../../../reducers/seanceReducer";
import Main from "../../Main";
import SeanceInformation from "./information";
import BuyingScheme from "./buying";
import Button from '../../additionalComponents/Button/buttonClients';

export default function MainSeance() {
    // Получение данных о сеансе из состояния
    const { session } = useSelector((state) => state.seance);

    // Получение идентификатора сеанса из параметров URL
    const seanceId = useParams().seanceId;

    // Получение функции для диспетчера Redux
    const dispatch = useDispatch();

    // Массив для выбранных мест
    const selectedSeats = [];

    // Загрузка данных о сеансе при монтировании компонента
    useEffect(() => {
        dispatch(getSeance(seanceId));
    }, []);

    // Обработчик выбора места
    const handleSeatSelection = (id, status) => {
        const price = status === 'vip' ? session.price_vip : session.price_standard;
        const seatIndex = selectedSeats.findIndex((seat) => seat.id === id);
        if (seatIndex !== -1) {
            selectedSeats.splice(seatIndex, 1);
        } else {
            selectedSeats.push({ id, price });
        }
    }

    // Обработчик бронирования мест
    const handleSeatBooking = () => {
        const ticket = selectedSeats.reduce((res, seat) => {
            res.seats.push(seat.id);
            res.cost += +seat.price;
            return res;
        }, { seats: [], cost: 0 });

        // Создание билета с выбранными местами и стоимостью
        dispatch(createTicket({ seanceId, seats: ticket.seats, cost: ticket.cost }));
    }

    return (
        <Main>
            <section className="buying">
                {/* Отображение информации о сеансе */}
                <SeanceInformation />

                {/* Отображение схемы выбора мест */}
                <BuyingScheme callback={handleSeatSelection} />

                {/* Кнопка для бронирования мест */}
                <Button text={"Забронировать"} link={"/payment"} callback={handleSeatBooking} />
            </section>
        </Main>
    );
}
