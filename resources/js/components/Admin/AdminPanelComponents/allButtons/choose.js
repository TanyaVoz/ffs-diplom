export default function ChooseHall(props) {
    
    const { name, checked, callback } = props;

    return (
        <li>
            {/* Отображение радио-кнопки */}
            <input
                type="radio"
                className="conf-step__radio"
                value={name} 
                checked={checked} // Проверка, выбрана ли радио-кнопка
                onChange={callback} // Вызов функции обработчика при изменении состояния
            />
            {/* Отображение названия зала */}
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}

