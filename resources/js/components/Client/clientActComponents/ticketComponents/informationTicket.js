import React from "react";
import PropTypes from "prop-types";
import getRussianRublesLabel from "../../additionalComponents/Formatting/moneyFormWords";

// Компонент для отображения информации о билете
function TicketInformation({ film, seats, cinemaHall, time, cost }) {
    const costEnding = getRussianRublesLabel(cost);
    const showTime = new Date(time).toLocaleDateString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>

            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>

            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{cinemaHall}</span></p>

            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{showTime}</span></p>

            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{cost} {costEnding}</span></p>
        </>
    );
}
// Проверка типов пропсов
TicketInformation.propTypes = {
    film: PropTypes.string.isRequired,
    seats: PropTypes.string.isRequired,
    cinemaHall: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
};

export default TicketInformation;
