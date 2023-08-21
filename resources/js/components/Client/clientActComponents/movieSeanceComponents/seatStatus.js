import { useState } from "react";
import classnames from 'classnames';

export default function SeanceSeatStatus(props) {
  const { status, callback } = props;
  const [taken, setTaken] = useState(false);

  // Обработчик клика на место
  const handleClickSeats = () => {
    if (status === 'disabled' || status === 'sold') {
      return;
    }

    // Изменение состояния выбора места
    setTaken(!taken);
    callback();
  };

  // Определение CSS-классов с помощью библиотеки classnames
  const seatClasses = classnames(
    'buying-scheme__chair',
    taken ? 'buying-scheme__chair_selected' : '',
    {
      'buying-scheme__chair_standart': status === 'standard',
      'buying-scheme__chair_vip': status === 'vip',
      'buying-scheme__chair_taken': status === 'sold',
      'buying-scheme__chair_disabled': status === 'disabled' || status === 'unknown'
    }
  );

  return (
    <span className={seatClasses} onClick={handleClickSeats} />
  );
}



