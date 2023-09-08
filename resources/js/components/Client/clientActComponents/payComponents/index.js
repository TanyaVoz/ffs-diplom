import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Main from "../../Main";
import TicketHeader from "../../additionalComponents/clientHeader/ticketHeaderClient";
import Button from "../../additionalComponents/Button/buttonClients";
import TicketInfo from "../ticketComponents/informationTicket";

export default function TicketConfirmation() {
    const { session, seats, ticket } = useSelector((state) => state.seance);
    const navigate = useNavigate();
    const selectedSeats = seats.filter((seat) => ticket.seats.includes(seat.id));
    const selectedSeatNumbers = selectedSeats.map((seat) => seat.number);

    // Проверка сеанса и билета при монтировании компонента
    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, [session.id, ticket.seanceId, navigate]);

    return (
        <Main>
            {/* Секция с информацией о билете */}
            <section className="ticket">
                <TicketHeader text={"Ваши выбранные билеты:"} />

                <div className="ticket__info-wrapper">
                    {/* Компонент с информацией о билете */}
                    <TicketInfo
                        film={session.title}
                        seats={selectedSeatNumbers.join(', ')}
                        cinemaHall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />

                    {/* Кнопка для получения кода бронирования */}
                    <Button text={"Получить код бронирования"} link={"/ticket"} />

                    {/* Подсказки для пользователя */}
                    <p className="ticket__hint">
                        После оплаты билеты будут доступны здесь и отправлены на вашу почту.
                        Просто предъявите QR-код контроллеру у входа, чтобы подтвердить бронирование.
                    </p>
                    <p className="ticket__hint">
                        Наслаждайтесь кино!
                    </p>
                </div>
            </section>
        </Main>
    );
}
