import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSeance } from "../../../../../reducers/adminReducer";
import SeanceCard from "../../../AdminConfigurationsComponents/seance";

export default function AddSeance() {
    const dispatch = useDispatch();
    const { movies, chosenDate } = useSelector((state) => state.admin);
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
            callbackSubmit={handleSeanceCreation}
            cinema_hall_id={id}
            film_id={movies[0].id}
            date={chosenDate}
            time={"00:00"}
        />
    );
}

