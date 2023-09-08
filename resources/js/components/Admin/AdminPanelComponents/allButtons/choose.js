export default function ChooseHall(props) {

    const { name, checked, callback } = props;

    return (
        <li>
            {/* Отображение радио-кнопки */}
            <input
                type="radio"
                className="conf-step__radio"
                value={name}
                checked={checked} 
                onChange={callback} 
            />
            {/* Отображение названия зала */}
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}

