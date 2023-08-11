import AddMovieAction from "../Actions/addMovieAction";
import SeancesHall from "../Seances/seancesHall";
import ChooseSessionDate from "../Seances/chooseSessionDate";

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
