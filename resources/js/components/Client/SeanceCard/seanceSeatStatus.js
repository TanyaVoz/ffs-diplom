
import { useState } from "react";
import classnames from 'classnames';

export default function SeanceSeatStatus(props) {
    const { status, callback } = props;
    const [taken, setTaken] = useState(false);

    const handleClick = () => {
        const newTaken = !taken;
        setTaken(newTaken);
        callback(newTaken); // Передаем новое значение taken в callback
    }

    const statusToClassName = {
        'disabled': 'buying-scheme__chair_disabled',
        'standard': 'buying-scheme__chair_standard',
        'vip': 'buying-scheme__chair_vip',
        'sold': 'buying-scheme__chair_taken'
    };

    const chairClassName = classnames(
        'buying-scheme__chair',
        taken ? 'buying-scheme__chair_selected' : statusToClassName[status]
    );

    return (
        <span
            className={chairClassName}
            onClick={() => (status === 'disabled' || status === 'sold') ? false : handleClick()}
        />
    );
}

