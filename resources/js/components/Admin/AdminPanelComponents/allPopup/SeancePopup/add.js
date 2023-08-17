import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSeance } from "../../../../../reducers/createAdmin";
import SeanceCard from "../../../AdminConfigurationsComponents/seance";

export default function AddSeance() {
    const dispatch = useDispatch();

    // Получение списка фильмов и выбранной даты из состояния
    const { movies, chosenDate } = useSelector((state) => state.admin);

    // Получение ID зала из состояния всплывающего окна
    const { id } = useSelector((state) => state.popup);

  
    // const handleSeanceCreation = async (datetime, cinema_hall_id, film_id) => {
        const handleSeanceCreation =  async (datetime, cinema_hall_id, film_id) => {
        try {
             dispatch(createSeance({
                datetime,
                cinema_hall_id,
                film_id
            }));
        } catch (error) {
            console.error("Ошибка при создании сеанса:", error);
            // Дополнительная обработка ошибок, вывод сообщений и т.д.
            throw error; // Прокидываем ошибку выше, чтобы вызывающий код мог обработать
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

