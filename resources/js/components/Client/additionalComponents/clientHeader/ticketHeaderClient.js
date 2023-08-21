export default function TicketHeader(props) {
    // Получение текста заголовка из пропсов
    const { text } = props;

    return (
        // Основной контейнер заголовка билета
        <header className="tichet__check">
            {/* Заголовок билета */}
            <h2 className="ticket__check-title">{text}</h2>
        </header>
    );
}
