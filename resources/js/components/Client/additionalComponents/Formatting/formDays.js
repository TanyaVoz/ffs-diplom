import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "../../../../reducers/createCalendar";
import Navigation from "./index";

export default function Navigate() {

    const [start, setStartDays] = useState(new Date()); // Состояние для отслеживания начальной даты
    const { chosenDate } = useSelector((state) => state.calendar); // Получение выбранной даты из состояния Redux
    const dispatch = useDispatch(); // Получение функции dispatch из Redux
    const todayDayWeek = new Date(); // Текущая дата
    const handleDateClick = (day) => {
        dispatch(chooseDate(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`));
    }
    // Обработчик для переключения даты назад или вперед
    const handleDateChange = (day, arg) => {
        setStartDays(new Date(day.setDate(day.getDate() + arg)));
    }
    // Создание массива дней для отображения
    const weekDates = [new Date(start.getTime())];
    for (let i = 0; i < 5; i++) {
        const next = new Date(weekDates[i].getTime());
        next.setDate(next.getDate() + 1);
        weekDates.push(next);
    }
    //Отображение дней и переключатель на следующую неделю
    return (
        <nav className="page-nav">
            {start.setHours(0, 0, 0, 0) === todayDayWeek.setHours(0, 0, 0, 0) ||
                <a
                    className="page-nav__day page-nav__day_prev" onClick={() => handleDateChange(start, -6)} href="#">
                </a>}
            {weekDates.map((day) =>
                <Navigation
                    date={day}
                    chosen={chosenDate}
                    handleDateClick={() => handleDateClick(day)}
                    key={day}
                />
            )}
            <a
                className="page-nav__day page-nav__day_next" onClick={() => handleDateChange(start, 6)} href="#">
            </a>
        </nav>
    );
}
