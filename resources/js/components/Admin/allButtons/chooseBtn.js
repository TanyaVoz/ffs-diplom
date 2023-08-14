export default function ChooseHallBtn(props) {
    // Извлечение пропсов
    const { name, checked, callback } = props;

    return (
        <li>
            {/* Отображение радио-кнопки */}
            <input
                type="radio"
                className="conf-step__radio"
                value={name} // Значение для радио-кнопки
                checked={checked} // Проверка, выбрана ли радио-кнопка
                onChange={callback} // Вызов функции обработчика при изменении состояния
            />
            {/* Отображение названия зала */}
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}

