import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showPopup } from "../../../reducers/createPopupSlice";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import HallTime from "../Seances/hallTime";

const AddSeanceAction = ({ cinemaHallId, name }) => {
  const dispatch = useDispatch();

  const handleAddSeance = () => {
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
      <div className="conf-step__selectors-box">
        <ChooseHallBtn
          name={name}
          checked={false}
          callback={handleAddSeance}
        />
      </div>
      <HallTime cinemaHall={cinemaHallId} />
    </div>
  );
};

AddSeanceAction.propTypes = {
  cinemaHallId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddSeanceAction;

