import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSeance } from "../../../../../reducers/adminReducer";
import SeanceCard from "../../../AdminConfigurationsComponents/seance";

export default function AddSeance() {
    const dispatch = useDispatch();
    const { movies, chosenDate } = useSelector((state) => state.admin);

    // Получение ID зала из состояния всплывающего окна
    const { id } = useSelector((state) => state.popup);

    const handleSeanceCreation = async (datetime, cinema_hall_id, film_id) => {
        try {
            dispatch(createSeance({
                datetime,
                cinema_hall_id,
                film_id
            }));
        } catch (error) {
            console.error("Ошибка при создании сеанса:", error);
            throw error;
        }
    };

    return (
        // Компонент SeanceCard для добавления сеанса
        <SeanceCard
            // Передача callback-функции для создания сеанса
            callbackSubmit={handleSeanceCreation}
            // Передача ID зала
            cinema_hall_id={id}
            // Передача ID первого фильма в списке (предположим, что movies[0] существует)
            film_id={movies[0].id}
            // Передача выбранной даты и времени сеанса
            date={chosenDate}
            time={"00:00"}
        />
    );
}

