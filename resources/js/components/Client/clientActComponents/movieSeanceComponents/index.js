import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createTicket, getSeance } from "../../../../reducers/createSeance";
import Main from "../../Main";
import SeanceInfo from "./info";
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
    const selectHandle = (id, status) => {
        const price = status === 'vip' ? session.price_vip : session.price_standard;
        const hasSeat = selectedSeats.findIndex((seat) => seat.id === id);
        if (hasSeat !== -1) {
            selectedSeats.splice(hasSeat, 1);
        } else {
            selectedSeats.push({ id, price });
        }
    }

    // Обработчик бронирования мест
    const submitHandle = () => {
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
                <SeanceInfo />

                {/* Отображение схемы выбора мест */}
                <BuyingScheme callback={selectHandle} />

                {/* Кнопка для бронирования мест */}
                <Button text={"Забронировать"} link={"/payment"} callback={submitHandle} />
            </section>
        </Main>
    );
}
