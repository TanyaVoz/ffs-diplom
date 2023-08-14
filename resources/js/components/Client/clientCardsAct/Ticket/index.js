import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { buyTicket, resetSeance } from "../../../../reducers/createSeance";
import Main from "../../Main";
import TicketHeader from "../../Header/ticketHeaderClient";
import TicketInfo from "./info";
import TicketQRCode from "./qrcode";

// Компонент для отображения информации о билете
function TicketContent({ session, seats, ticket }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Фильтрация и получение номеров выбранных мест
    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    useEffect(() => {
        // Проверка наличия данных о сеансе и билете, перенаправление при их отсутствии
        if (!session.id || !ticket.seanceId) {
            navigate("/");
        }

        // Вызов Redux-экшена для покупки билета
        dispatch(buyTicket());

        // Очистка данных о сеансе после завершения компонента
        return () => dispatch(resetSeance());
    }, [dispatch, navigate, session.id, ticket.seanceId]);

    return (
        <section className="ticket">
            {/* Заголовок для билета */}
            <TicketHeader text={"Электронный билет"} />
            <div className="ticket__info-wrapper">
                {/* Информация о билете */}
                <TicketInfo
                    film={session.title}
                    seats={seatsNum.join(', ')}
                    cinemaHall={session.name}
                    time={session.datetime}
                    cost={ticket.cost}
                />

                {/* Отображение QR-кода только если есть идентификатор билета */}
                {ticket.id &&
                    <TicketQRCode
                        code={`Билет: ${ticket.id}. Зал: ${session.name}. Время: ${session.time}. Места: ${seatsNum.join(', ')}`}
                    />
                }
                <p className="ticket__hint">
                    {/* Подсказка по использованию QR-кода */}
                    Покажите QR-код нашему контроллеру для подтверждения бронирования.
                </p>
                <p className="ticket__hint">
                    {/* Пожелание приятного просмотра */}
                    Приятного просмотра!
                </p>
            </div>
        </section>
    );
}

// Главный компонент для отображения информации о билете
export default function MainTicket() {
    const { session, seats, ticket } = useSelector((state) => state.seance);

    return (
        <Main>
            {/* Вывод компонента для отображения информации о билете */}
            <TicketContent session={session} seats={seats} ticket={ticket} />
        </Main>
    );
}
