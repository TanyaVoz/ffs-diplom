import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showPopup } from "../../../../reducers/popupReducer";
import ChooseHall from "../../AdminPanelComponents/allButtons/choose";
import HallTime from "../../AdminActComponents/SeancesAct/hallTime";

// Компонент для добавления сеанса
const AddSeanceAction = ({ cinemaHallId, name }) => {
  const dispatch = useDispatch();

  // Обработчик добавления сеанса
  const handleAddSeance = () => {
    // Диспатч действия для показа всплывающего окна
    dispatch(
      showPopup({
        title: "Добавление сеанса",
        form: "addSeance",
        id: cinemaHallId,
      })
    );
  };

  return (
    <div className="conf-step__seances-hall">
      {/* Блок с выбором зала для добавления сеанса */}
      <div className="conf-step__selectors-box">
        {/* Кнопка выбора зала с обработчиком добавления сеанса */}
        <ChooseHall
          name={name}
          checked={false}
          callback={handleAddSeance}
        />
      </div>

      {/* Компонент для выбора времени сеанса */}
      <HallTime cinemaHall={cinemaHallId} />
    </div>
  );
};

// Пропсы компонента
AddSeanceAction.propTypes = {
  cinemaHallId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddSeanceAction;
