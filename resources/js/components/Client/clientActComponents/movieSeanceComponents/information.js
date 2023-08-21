import { useSelector } from "react-redux";

export default function SeanceInformation() {
    const { session } = useSelector((state) => state.seance);

    if (!session) {
        // Обработка случая, когда информация о сеансе недоступна
        return <div>Загрузка информации о сеансе...</div>;
    }

    const datetime = new Date(session.datetime);

    // Форматирование даты и времени для отображения отдельно
    const formattedDate = datetime.toLocaleDateString('ru-RU');
    const formattedTime = datetime.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    });



    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{session.title}</h2>
                <p className="buying__info-start">
                    Начало сеанса: {formattedDate}, {formattedTime}
                </p>
                <p className="buying__info-hall">{session.name}</p>
            </div>
        </div>
    );
}

