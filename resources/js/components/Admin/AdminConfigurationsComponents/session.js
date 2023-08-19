import AddMovieAction from "../AdminActComponents/MainAct/addMovie";
import SeancesHall from "../AdminActComponents/SeancesAct/seances";
import ChooseSessionDate from "../AdminActComponents/SeancesAct/chooseSession";

export default function Session() {
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
