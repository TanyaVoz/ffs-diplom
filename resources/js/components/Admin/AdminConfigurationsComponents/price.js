import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHalls, updateHall } from "../../../reducers/adminReducer";
import SaveButton from "../AdminPanelComponents/allButtons/saveButton";
import ChooseHall from "../AdminPanelComponents/allButtons/choose";
import SeatStatus from "../AdminActComponents/SeatsAct/seatType";

export default function PriceConfig() {
  // Получение данных о залах из глобального состояния
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Локальное состояние для хранения выбранного зала и цен
  const [selectedCinemaHall, setSelectedCinemaHall] = useState(null);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Обработчик выбора зала для конфигурации
  const handleSelect = (id) => {
    const selectedHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === id);
    setSelectedCinemaHall(selectedHall);
  };

  // Обработчик изменения цены
  const handlePriceChange = (priceType, value) => {
    setSelectedCinemaHall((prevHall) => ({
      ...prevHall,
      [priceType]: value,
    }));
  };

  // Обработчик сохранения изменений
  const handleSave = () => {
    if (selectedCinemaHall) {
      dispatch(updateHall(selectedCinemaHall));
      setSelectedCinemaHall(null);
      dispatch(getHalls());
    }
  };

  // Генерация контента для выбора цены
  const generatePriceInput = (priceType, label) => (
    <div className="conf-step__legend">
      <label className="conf-step__label">
        {label}, рублей
        <input
          type="number"
          className="conf-step__input"
          name={priceType}
          value={selectedCinemaHall[priceType]}
          onChange={(e) => handlePriceChange(priceType, e.target.value)}
        />
      </label>
      за <SeatStatus status={priceType} /> {label.toLowerCase()}
    </div>
  );

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      {cinemaHalls.length > 0 ? (
        <ul className="conf-step__selectors-box">
          {cinemaHalls.map((cinemaHall) => (
            <ChooseHall
              name={cinemaHall.name}
              checked={selectedCinemaHall ? cinemaHall.id === selectedCinemaHall.id : false}
              callback={() => handleSelect(cinemaHall.id)}
              key={cinemaHall.id}
            />
          ))}
        </ul>
      ) : (
        <p>Залы не найдены.</p>
      )}

      {selectedCinemaHall && (
        <>
          <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
          {generatePriceInput("price_standard", "Обычные кресла")}
          {generatePriceInput("price_vip", "VIP кресла")}

          {/* Кнопки для отмены и сохранения изменений */}
          <SaveButton cancel={() => setSelectedCinemaHall(null)} save={handleSave} />
        </>
      )}
    </div>
  );
}

