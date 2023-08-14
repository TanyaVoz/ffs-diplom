import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Main from "../../Main";
import TicketHeader from "../../Header/ticketHeaderClient";
import Button from "../../additionalComponents/Button/btn";
import TicketInfo from "../Ticket/info";

export default function MainPayment() {
    // Получение данных о сеансе, местах и билете из состояния
    const { session, seats, ticket } = useSelector((state) => state.seance);

    // Получение функции для навигации
    const navigate = useNavigate();

    // Фильтрация выбранных мест и получение их номеров
    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    // Проверка наличия необходимых данных сеанса и билета, редирект при их отсутствии
    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, []);

    return (
        <Main>
            <section className="ticket">
                {/* Заголовок с информацией о выбранных билетах */}
                <TicketHeader text={"Вы выбрали билеты:"} />

                <div className="ticket__info-wrapper">
                    {/* Отображение информации о билете */}
                    <TicketInfo
                        film={session.title}
                        seats={seatsNum.join(', ')}
                        cinemaHall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />

                    {/* Кнопка для получения кода бронирования */}
                    <Button text={"Получить код бронирования"} link={"/ticket"} />

                    <p className="ticket__hint">
                        {/* Подсказка о доступности билета после оплаты */}
                        После оплаты билет будет доступен в этом окне, а также придёт вам на почту.
                        Покажите QR-код нашему контроллёру у входа в зал.
                    </p>
                    <p className="ticket__hint">
                        {/* Пожелание приятного просмотра */}
                        Приятного просмотра!
                    </p>
                </div>
            </section>
        </Main>
    );
}
