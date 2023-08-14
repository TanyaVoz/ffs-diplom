import classNames from "classnames";

export default function SeatStatus(props) {
    const { status, callback } = props; // Получение статуса места и функции обратного вызова из входных свойств

    let active;
    switch (status) {
        case "standard":
            active = "conf-step__chair_standart"; // Присваивание класса в зависимости от статуса
            break;
        case "disabled":
            active = "conf-step__chair_disabled"; // Присваивание класса в зависимости от статуса
            break;
        case "vip":
            active = "conf-step__chair_vip"; // Присваивание класса в зависимости от статуса
            break;
        default:
            active = "conf-step__chair_standart"; // По умолчанию используется стандартный класс
            break;
    }

    return (
        <span className={classNames("conf-step__chair", active)} onClick={callback}>
            {/* Отображение статуса места с применением классов */}
        </span>
    );
}
