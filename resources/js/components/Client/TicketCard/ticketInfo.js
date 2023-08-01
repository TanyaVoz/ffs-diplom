
// import getNoun from "../wordsEndings/rubEnd";
// import classnames from 'classnames';

// export default function TicketInfo(props) {
//     const { film, seats, cinemaHall, time, cost } = props;
//     const defineEnd = getNoun(cost);
//     const datetime = new Date(time);

//     // Форматирование стоимости
//     const formattedCost = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(cost);

//     return (
//         <>
//             <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>
//             <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>
//             <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{cinemaHall}</span></p>
//             <p className="ticket__info">Начало сеанса:
//                 {" "}
//                 <span className="ticket__details ticket__start">
//                     {time && datetime.toLocaleDateString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
//                 </span>
//             </p>
//             <p className="ticket__info">Стоимость: <span className={classnames("ticket__details", "ticket__cost")}>
//                 {formattedCost} {defineEnd}
//             </span></p>
//         </>
//     );
// }

import getNoun from "../wordsEndings/rubEnd";

export default function TicketInfo(props) {
    const {film, seats, cinemaHall, time, cost} = props;
    const defineEnd = getNoun(cost);
    const datetime = new Date(time);

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{cinemaHall}</span></p>
            <p className="ticket__info">Начало сеанса:
                {" "}
                <span className="ticket__details ticket__start">{time &&
                    datetime.toLocaleDateString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </span>
            </p>
            <p className="ticket__info">Стоимость: <span
                className="ticket__details ticket__cost">{cost}</span>{" "}{defineEnd}</p>
        </>
    );
}
