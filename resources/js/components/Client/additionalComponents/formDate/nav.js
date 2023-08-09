
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "../../../../reducers/createCalendarSlice";
import Navigation from "./index";

export default function Navigate() {
    const [start, setStart] = useState(new Date());
    const { chosenDate } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();
    const today = new Date();

    const handleDateChange = (day, offset) => {
        const newDate = new Date(day);
        newDate.setDate(newDate.getDate() + offset);
        return newDate;
    };

    const handleClick = (day) => {
        dispatch(chooseDate(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`));
    };

    const handlePrevClick = () => {
        setStart((prevStart) => handleDateChange(prevStart, -6));
    };

    const handleNextClick = () => {
        setStart((prevStart) => handleDateChange(prevStart, 6));
    };

    const days = Array.from({ length: 7 }, (_, index) => handleDateChange(start, index));

    return (
        <nav className="page-nav">
            {!today.setHours(0, 0, 0, 0) === start.setHours(0, 0, 0, 0) && (
                <button className="page-nav__day page-nav__day_prev" onClick={handlePrevClick}>
                </button>
            )}
            {days.map((day) => (
                <Navigation
                    date={day}
                    chosen={chosenDate}
                    handleClick={handleClick}
                    key={day.getTime()} // Используем getTime() для уникального ключа
                />
            ))}
            <button className="page-nav__day page-nav__day_next" onClick={handleNextClick}>
            </button>
        </nav>
    );
}

