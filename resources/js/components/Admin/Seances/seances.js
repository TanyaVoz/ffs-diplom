import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSeances } from "../../../reducers/createAdmin";
import AddSeanceAction from "../mainActionsAdmin/addSeance";

export default function SeancesHall() {
    const { cinemaHalls, chosenDate } = useSelector((state) => state.admin); // Получение данных о залах и выбранной дате из Redux
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances()); // Получение списка сеансов при изменении выбранной даты
    }, [chosenDate]);

    return (
        <div className="conf-step__seances">
            {/* Отображение кнопок для добавления сеансов в каждом зале */}
            {cinemaHalls.map((cinemaHall) =>
                <AddSeanceAction
                    cinemaHallId={cinemaHall.id}
                    name={cinemaHall.name}
                    key={cinemaHall.id}
                />
            )}
        </div>
    );
}

