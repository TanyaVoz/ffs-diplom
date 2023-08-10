export default function ChooseOpenHalls(props) {
    const { id, name, free, callback } = props;

    return (
        <>
            {/* Пользовательский чекбокс для выбора открытого зала */}
            <input
                id={`cinemaHallCheck${id}`} // Уникальный идентификатор для связи с label
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={free} // Определение состояния выбора (true/false)
                onChange={callback} // Обработчик изменения состояния
            />
            <label htmlFor={`cinemaHallCheck${id}`}>{name}</label> {/* Метка для чекбокса */}
        </>
    );
}

