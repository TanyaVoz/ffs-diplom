import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSeances } from "../../../../reducers/adminReducer";
import AddSeanceAction from "../MainAct/addSeance";

export default function SeancesHall() {
    const { cinemaHalls, chosenDate } = useSelector(state => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    }, [chosenDate]);

    // Функция для отображения кнопок добавления сеансов для каждого кинозала
    const renderCinemaHalls = () => {
        return cinemaHalls.map(cinemaHall => (
            <AddSeanceAction
                cinemaHallId={cinemaHall.id}
                name={cinemaHall.name}
                key={cinemaHall.id}
            />
        ));
    };

    return (
        <div className="conf-step__seances">
            {renderCinemaHalls()} {/* Отображение кнопок для добавления сеансов */}
        </div>
    );
}

