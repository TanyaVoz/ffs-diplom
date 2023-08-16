import classNames from "classnames";
import { format } from "date-fns"; // Используем библиотеку date-fns для работы с датами

export default function Navigation(props) {
  const { handleDateClick
    , date, chosen } = props;
  const shortWeekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const today = new Date();

  // Форматируем даты с помощью date-fns
  const formattedDate = format(new Date(date), 'dd');
  const formattedChosen = format(new Date(chosen), 'dd');

  const dayClass = classNames('page-nav__day', {
    'page-nav__day_today': format(new Date(date), 'yyyyMMdd') === format(today, 'yyyyMMdd'),
    'page-nav__day_chosen': format(new Date(date), 'yyyyMMdd') === format(new Date(chosen), 'yyyyMMdd'),
    'page-nav__day_weekend': new Date(date).getDay() === 0 || new Date(date).getDay() === 6,
  });

  return (
    <button className={dayClass} onClick={() => handleDateClick
      (date)}>
      <span className="page-nav__day-week">{shortWeekdays[new Date(date).getDay()]}</span>
      <span className="page-nav__day-number">{formattedDate}</span>
    </button>
  );
}