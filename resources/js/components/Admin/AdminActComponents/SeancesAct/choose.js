export default function ChooseOpenHalls(props) {
    const { id, name, free, callback } = props;

    const uniqueCheckboxId = `cinemaHallCheck${id}`;

    return (
        <div className="conf-step__hall-checkbox">
            <input
                id={uniqueCheckboxId}
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={free}
                onChange={callback}
            />
            <label htmlFor={uniqueCheckboxId}>{name}</label>
        </div>
    );
}

