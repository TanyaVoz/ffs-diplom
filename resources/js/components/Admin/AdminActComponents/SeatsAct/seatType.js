import classNames from "classnames";

export default function SeatStatus(props) {
    const { status, callback } = props; // Получение статуса места и функции обратного вызова из входных свойств

    const getStatusClassName = (status) => {
        switch (status) {
            case "standard":
                return "conf-step__chair_standart";
            case "disabled":
                return "conf-step__chair_disabled";
            case "vip":
                return "conf-step__chair_vip";
            default:
                return "conf-step__chair_standart";
        }
    };

    const seatClassName = classNames("conf-step__chair", getStatusClassName(status));

    return (
        <span className={seatClassName} onClick={callback}>
            {/* Отображение статуса места с применением классов */}
        </span>
    );
}
