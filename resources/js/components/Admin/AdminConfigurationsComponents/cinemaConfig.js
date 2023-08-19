import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createScheme,
  selectCinemaHallScheme,
  changeHallSize,
  getSeats,
  updateSeats,
  createSeats,
  updateHall,
  getHalls,
} from "../../../reducers/adminReducer";
import SaveButton from "../AdminPanelComponents/allButtons/saveButton";
import ChooseHall from "../AdminPanelComponents/allButtons/choose";
import SeatStatus from "../AdminActComponents/SeatsAct/seatType";
import SeatsScheme from "../AdminActComponents/SeatsAct/seats";

function CinemaHallConfig() {
  const { cinemaHalls, selectedCinemaHallScheme } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [updatedSize, setUpdatedSize] = useState({ row: 0, chair: 0 });

  // Обработчик выбора зала
  const handleSelect = (id) => {
    const selectedHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === id);
    dispatch(selectCinemaHallScheme(selectedHall)); // Выбор текущего зала
    dispatch(getSeats(id)); // Получение информации о местах в зале
    setUpdatedSize({ row: selectedHall.row, chair: selectedHall.chair }); // Обновление размеров зала
  };

  // Обработчик изменения размеров зала
  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newSize = { ...updatedSize, [name]: value };
    setUpdatedSize(newSize); // Обновление размеров зала

    // Создание новых мест в зале с обновленными размерами
    const updatedSeats = Array.from({ length: newSize.row * newSize.chair }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      status: "standard",
      cinema_hall_id: selectedCinemaHallScheme.id,
    }));

    dispatch(changeHallSize(newSize)); // Обновление размеров зала в хранилище
    dispatch(createScheme(updatedSeats)); // Создание новой схемы мест в зале
  };

  // Обработчик сохранения изменений
  const handleSave = () => {
    const sourceHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === selectedCinemaHallScheme.id);

    if (sourceHall.row === updatedSize.row && sourceHall.chair === updatedSize.chair) {
      dispatch(updateSeats()); // Обновление информации о местах в зале
    } else {
      dispatch(updateHall(selectedCinemaHallScheme)); // Обновление информации о зале
      dispatch(createSeats()); // Создание мест в зале с новыми размерами
      dispatch(getHalls()); // Получение обновленной информации о залах
    }

    dispatch(selectCinemaHallScheme({})); // Сброс выбранного зала
  };

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {cinemaHalls.map((cinemaHall) => (
          <ChooseHall
            name={cinemaHall.name}
            checked={selectedCinemaHallScheme ? cinemaHall.id === selectedCinemaHallScheme.id : false}
            callback={() => handleSelect(cinemaHall.id)}
            key={cinemaHall.id}
          />
        ))}
      </ul>
      {selectedCinemaHallScheme.id && (
        <>
          <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">
              Рядов, шт
              <input
                type="text"
                className="conf-step__input"
                name="row"
                value={updatedSize.row}
                onChange={handleChange}
              />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">
              Мест, шт
              <input
                type="text"
                className="conf-step__input"
                name="chair"
                value={updatedSize.chair}
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <SeatStatus status={"standard"} /> — обычные кресла
            <SeatStatus status={"vip"} /> — VIP кресла
            <SeatStatus status={"disabled"} /> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>

          <SeatsScheme place={updatedSize.row} />
          <SaveButton cancel={() => dispatch(selectCinemaHallScheme({}))} save={() => handleSave()} />
        </>
      )}
    </div>
  );
}

export default CinemaHallConfig;

