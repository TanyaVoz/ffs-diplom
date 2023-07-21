export default function ChooseHallBtn(props) {
    const { name, checked, callback } = props;

    return (
        <li>
            <input
                type="radio"
                className="conf-step__radio"
                value={name}
                checked={checked}
                onChange={callback} // Просто передаем функцию обработчика непосредственно
            />
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}
