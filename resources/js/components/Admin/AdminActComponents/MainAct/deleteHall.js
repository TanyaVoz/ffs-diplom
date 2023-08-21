import React from "react";
import { useDispatch } from "react-redux";
import { showPopup } from "../../../../reducers/popupReducer";
import PropTypes from "prop-types";

const DeleteHallAction = ({ id, name }) => {
  const dispatch = useDispatch();

  // Обработчик клика на кнопке редактирования зала
  const handleEditHallClick = () => {
    dispatch(
      showPopup({
        title: "Редактирование зала",
        form: "editHall",
        id,
      })
    );
  };

  // Обработчик клика на кнопке удаления зала
  const handleDeleteHallClick = () => {
    dispatch(
      showPopup({
        title: "Удаление зала",
        form: "deleteHall",
        id,
      })
    );
  };

  return (
    <li>
      <span className="conf-step__edit-hall" onClick={handleEditHallClick}>
        {name}
      </span>

      <button
        className="conf-step__button conf-step__button-trash"
        onClick={handleDeleteHallClick}
      />
    </li>
  );
};

// Пропсы компонента
DeleteHallAction.propTypes = {
  id: PropTypes.number.isRequired,// Обязательный номер (ID) зала
  name: PropTypes.string.isRequired,// Обязательное имя зала
};

export default DeleteHallAction;



