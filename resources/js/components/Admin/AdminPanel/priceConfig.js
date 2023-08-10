import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getHalls, updateHall } from "../../../reducers/createAdminSlice";
import ActionBtn from "../Buttons/actionBtn";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import SeatStatus from "../Seats/seatStatus";

export default function PriceConfig() {
  // Получение данных о залах из глобального состояния с использованием useSelector
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Локальное состояние для хранения выбранного зала
  const [selectedCinemaHall, setSelectedCinemaHall] = useState(null);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Обработчик выбора зала для конфигурации
  const handleSelect = (id) => {
    setSelectedCinemaHall(cinemaHalls.find((cinemaHall) => cinemaHall.id === id));
  }

  // Обработчик изменения данных о ценах
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setSelectedCinemaHall((prevState) => ({ ...prevState, [name]: value }));
  };

  // Обработчик сохранения изменений
  const handleSave = () => {
    if (selectedCinemaHall) {
      dispatch(updateHall(selectedCinemaHall));
      setSelectedCinemaHall(null);
      dispatch(getHalls());
    }
  }

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      {cinemaHalls.length > 0 ? (
        <ul className="conf-step__selectors-box">
          {cinemaHalls.map((cinemaHall) => (
            <ChooseHallBtn
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
          <div className="conf-step__legend">
            <label className="conf-step__label">
              Цена, рублей
              <input
                type="number"
                className="conf-step__input"
                name="price_standard"
                value={selectedCinemaHall.price_standard}
                onChange={handleChange}
              />
            </label>
            за <SeatStatus status={"standard"} /> обычные кресла
          </div>
          <div className="conf-step__legend">
            <label className="conf-step__label">
              Цена, рублей
              <input
                type="number"
                className="conf-step__input"
                name="price_vip"
                value={selectedCinemaHall.price_vip}
                onChange={handleChange}
              />
            </label>
            за <SeatStatus status={"vip"} /> VIP кресла
          </div>

          {/* Кнопки для отмены и сохранения изменений */}
          <ActionBtn cancel={() => setSelectedCinemaHall(null)} save={() => handleSave()} />
        </>
      )}
    </div>
  );
}
