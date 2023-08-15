import getRussianRublesLabel from "../../additionalComponents/Formatting/moneyFormWords";

export default function TicketInfo(props) {
    // Деструктурируем свойства из объекта props
    const { film, seats, cinemaHall, time, cost } = props;

    // Получаем окончание для слова "рубль" в зависимости от стоимости
    const costEnding = getRussianRublesLabel(cost);

    // Преобразуем строку времени в объект Date
    const datetime = new Date(time);

    return (
        <>
            {/* Информация о фильме */}
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>

            {/* Информация о местах */}
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>

            {/* Информация о зале */}
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{cinemaHall}</span></p>

            {/* Время начала сеанса */}
            <p className="ticket__info">Начало сеанса:
                {" "}
                <span className="ticket__details ticket__start">
                    {time && datetime.toLocaleDateString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </span>
            </p>

            {/* Стоимость билета */}
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{cost}</span>{" "}{costEnding}</p>
        </>
    );
}

