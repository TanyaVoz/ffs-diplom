import AddMovieAction from "../mainActionsAdmin/addMovie";
import SeancesHall from "../Seances/seances";
import ChooseSessionDate from "../Seances/chooseSession";

export default function SessionGrid() {
    // Отображение списка фильмов для добавления сеансов
    // и выбора даты сеанса
    return (
        <div className="conf-step__wrapper">
            {/* Компонент для добавления нового фильма */}
            <AddMovieAction />

            {/* Компонент для выбора даты сеанса */}
            <ChooseSessionDate />

            {/* Компонент для отображения залов и сеансов */}
            <SeancesHall />
        </div>
    );
}
