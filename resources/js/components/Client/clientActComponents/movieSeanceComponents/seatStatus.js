import { useState } from "react";
import classnames from 'classnames';

export default function SeanceSeatStatus(props) {
  // Получение свойств из пропсов: статус и колбэк
  const { status, callback } = props;

  // Инициализация состояния для состояния выбора места
  const [taken, setTaken] = useState(false);

  // Обработчик клика на место
  const handleClickSeats = () => {
    // Изменение состояния выбора места
    setTaken(!taken);

    // Вызов переданной функции колбэка
    callback();
  }

  // Определение CSS-класса в зависимости от статуса
  let activeClass = "buying-scheme__chair_disabled";
  switch (status) {
    case 'standard':
      activeClass = "buying-scheme__chair_standart";
      break;
    case 'vip':
      activeClass = "buying-scheme__chair_vip";
      break;
    case 'sold':
      activeClass = "buying-scheme__chair_taken";
      break;
    default:
      activeClass = "buying-scheme__chair_disabled";
  }

  return (
    <span
      className={classnames(
        'buying-scheme__chair',
        taken ? 'buying-scheme__chair_selected' : activeClass
      )}
      onClick={() => (status === 'disabled' || status === 'sold') ? false : handleClickSeats()}
    />
  );
}



