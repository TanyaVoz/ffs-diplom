export default function ChooseOpenHalls(props) {
    const { id, name, free, callback } = props;

    const uniqueCheckboxId = `cinemaHallCheck${id}`;// Уникальный идентификатор 

    return (
        <div className="conf-step__hall-checkbox">
            <input
                id={uniqueCheckboxId}
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={free}// Определение состояния выбора (true/false)
                onChange={callback}// Обработчик изменения состояния
            />
            <label htmlFor={uniqueCheckboxId}>{name}</label>
        </div>
    );
}

