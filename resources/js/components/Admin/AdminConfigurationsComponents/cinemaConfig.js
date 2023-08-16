import React, { useCallback } from "react";
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
} from "../../../reducers/createAdmin";
import SaveButton from "../AdminPanelComponents/allButtons/saveButton";
import ChooseHall from "../AdminPanelComponents/allButtons/choose";
import SeatStatus from "../AdminActComponents/SeatsAct/seatType";
import SeatsScheme from "../AdminActComponents/SeatsAct/seats";

const CinemaHallConfig = () => {
  // Выбор данных из хранилища Redux с использованием хука useSelector
  const { cinemaHalls, selectedCinemaHallScheme } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  // Функция обратного вызова для выбора кинозала
  const handleSelect = useCallback(
    (id) => {
      // Диспетчеризация действий для обновления выбранной схемы кинозала и получения информации о местах
      dispatch(selectCinemaHallScheme(cinemaHalls.find((hall) => hall.id === id)));
      dispatch(getSeats(id));
    },
    [dispatch, cinemaHalls]
  );

  // Функция обратного вызова для обработки изменений в полях ввода размера зала
  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      // Диспетчеризация действий для изменения выбранной схемы кинозала и создания новой схемы мест
      dispatch(changeHallSize({
        ...selectedCinemaHallScheme,
        [name]: value,
      }));

      // Создание новой схемы мест на основе обновленного размера зала и диспетчеризация действий
      const seats = Array.from(
        { length: selectedCinemaHallScheme.row * selectedCinemaHallScheme.chair },
        (_, i) => ({
          id: i + 1,
          number: i + 1,
          status: "standard",
          cinema_hall_id: selectedCinemaHallScheme.id,
        })
      );
      dispatch(createScheme(seats));
    },
    [dispatch, selectedCinemaHallScheme]
  );

  // Функция обратного вызова для сохранения изменений конфигурации
  const handleSave = useCallback(() => {
    // Поиск исходного кинозала и проверка изменения размера зала
    const hallSource = cinemaHalls.find((hall) => hall.id === selectedCinemaHallScheme.id);
    if (hallSource.row === selectedCinemaHallScheme.row && hallSource.chair === selectedCinemaHallScheme.chair) {
      // Диспетчеризация действия для обновления информации о местах
      dispatch(updateSeats());
    } else {
      // Диспетчеризация действий для обновления зала, создания новых мест и получения списка залов
      dispatch(updateHall(selectedCinemaHallScheme));
      dispatch(createSeats());
      dispatch(getHalls());
    }
    
    // Очистка выбранной схемы кинозала
    dispatch(selectCinemaHallScheme({}));
  }, [dispatch, cinemaHalls, selectedCinemaHallScheme]);

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {/* Проход по кинозалам и отображение кнопок выбора зала */}
        {cinemaHalls.map((hall) => (
          <ChooseHall
            key={hall.id}
            name={hall.name}
            checked={selectedCinemaHallScheme ? hall.id === selectedCinemaHallScheme.id : false}
            callback={() => handleSelect(hall.id)}
          />
        ))}
      </ul>

      {/* Отображение опций конфигурации зала, если выбран кинозал */}
      {selectedCinemaHallScheme.id && (
        <>
          {/* Поля ввода для указания количества рядов и мест в ряду */}
          <p className="conf-step__paragraph">
            Укажите количество рядов и максимальное количество кресел в ряду:
          </p>
          <div className="conf-step__legend">
            {/* Поле ввода для рядов */}
            <label className="conf-step__label">
              Рядов, шт
              <input
                type="text"
                className="conf-step__input"
                name="row"
                value={selectedCinemaHallScheme.row}
                onChange={handleChange}
              />
            </label>
            <span className="multiplier">x</span>
            {/* Поле ввода для мест */}
            <label className="conf-step__label">
              Мест, шт
              <input
                type="text"
                className="conf-step__input"
                name="chair"
                value={selectedCinemaHallScheme.chair}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* типы мест */}
          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <SeatStatus status={"standard"} /> — обычные кресла
            <SeatStatus status={"vip"} /> — VIP кресла
            <SeatStatus status={"disabled"} /> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>
          {/* Отображение схемы мест */}
          <SeatsScheme place={selectedCinemaHallScheme.row} />
          {/* Кнопки для отмены изменений или сохранения конфигурации */}
          <SaveButton
            cancel={() => dispatch(selectCinemaHallScheme({}))}
            save={handleSave} // Передача функции сохранения напрямую, без вызова
          />
        </>
      )}
    </div>
  );
};

export default CinemaHallConfig;

