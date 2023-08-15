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

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, [session.id, ticket.seanceId, navigate]);

    return (
        <Main>
            <section className="ticket">
                <TicketHeader text={"Ваши выбранные билеты:"} />

                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={selectedSeatNumbers.join(', ')}
                        cinemaHall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />

                    <Button text={"Получить код бронирования"} link={"/ticket"} />

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
