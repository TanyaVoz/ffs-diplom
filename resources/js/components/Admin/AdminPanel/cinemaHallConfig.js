import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  createScheme,
  selectCinemaHallScheme,
  changeHallSize,
  getSeats,
  updateSeats,
  createSeats,
  updateHall,
  getHalls,
} from "../../../reducers/createAdminSlice";
import ActionBtn from "../Buttons/actionBtn";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import SeatStatus from "../Seats/seatStatus";
import SeatsScheme from "../Seats/seatsScheme";

const CinemaHallConfig = () => {
  const { cinemaHalls, selectedCinemaHallScheme } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  // Memoized callback for handleSelect
  const handleSelect = useCallback((id) => {
    dispatch(selectCinemaHallScheme(cinemaHalls.find((cinemaHall) => cinemaHall.id === id)));
    dispatch(getSeats(id));
  }, [cinemaHalls, dispatch]);

  // Memoized callback for handleChange
  const handleChange = useCallback(({ target }) => {
    const name = target.name;
    const value = target.value;

    const hallSize = {
      row: selectedCinemaHallScheme.row,
      chair: selectedCinemaHallScheme.chair,
      [name]: value,
    };
    dispatch(changeHallSize(hallSize));

    const seats = Array.from({ length: hallSize.row * hallSize.chair }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      status: "standard",
      cinema_hall_id: selectedCinemaHallScheme.id,
    }));
    dispatch(createScheme(seats));
  }, [dispatch, selectedCinemaHallScheme]);

  const handleSave = () => {
    const hallSource = cinemaHalls.find((cinemaHall) => cinemaHall.id === selectedCinemaHallScheme.id);
    if (hallSource.row === selectedCinemaHallScheme.row && hallSource.chair === selectedCinemaHallScheme.chair) {
      dispatch(updateSeats());
    } else {
      dispatch(updateHall(selectedCinemaHallScheme));
      dispatch(createSeats());
      dispatch(getHalls());
    }
    dispatch(selectCinemaHallScheme({}));
  };

  // Memoized JSX for hallOptions
  const hallOptions = useMemo(() =>
    cinemaHalls.map((cinemaHall) => (
      <ChooseHallBtn
        key={cinemaHall.id}
        name={cinemaHall.name}
        checked={selectedCinemaHallScheme ? cinemaHall.id === selectedCinemaHallScheme.id : false}
        callback={() => handleSelect(cinemaHall.id)}
      />
    ))
  , [cinemaHalls, selectedCinemaHallScheme, handleSelect]);

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {hallOptions}
      </ul>
      {selectedCinemaHallScheme.id && (
        <>
          <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">Рядов, шт
              <input
                type="text"
                className="conf-step__input"
                name="row"
                value={selectedCinemaHallScheme.row}
                onChange={handleChange}
              />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">Мест, шт
              <input
                type="text"
                className="conf-step__input"
                name="chair"
                value={selectedCinemaHallScheme.chair}
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <SeatStatus status="standard" /> — обычные кресла
            <SeatStatus status="vip" /> — VIP кресла
            <SeatStatus status="disabled" /> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>

          <SeatsScheme place={selectedCinemaHallScheme.row} />
          <ActionBtn cancel={() => dispatch(selectCinemaHallScheme({}))} save={() => handleSave()} />
        </>
      )}
    </div>
  );
};

CinemaHallConfig.propTypes = {
  cinemaHalls: PropTypes.array.isRequired,
  selectedCinemaHallScheme: PropTypes.object.isRequired,
};

export default CinemaHallConfig;
