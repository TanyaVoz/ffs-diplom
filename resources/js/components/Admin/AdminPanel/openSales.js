import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateHall } from "../../../reducers/createAdminSlice";
import ChooseOpenHalls from "../Seances/chooseOpenHalls";
import Button from "../Buttons/btn";

export default function CinemaHallStatusManager() {
  // Получение данных о залах из глобального состояния с использованием useSelector
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Локальное состояние для хранения измененных данных о залах
  const [changedCinemaHalls, setChangedCinemaHalls] = useState([]);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Обновление локального состояния при изменении данных о залах
  useEffect(() => {
    setChangedCinemaHalls(cinemaHalls);
  }, [cinemaHalls]);

  // Обработчик изменения состояния зала (открыт/закрыт)
  const handleChange = (cinemaHall) => {
    setChangedCinemaHalls((prevState) =>
      prevState.map((item) =>
        item.id === cinemaHall.id ? { ...item, free: !item.free } : item
      )
    );
  };

  // Обработчик сохранения изменений
  const handleSubmit = () => {
    changedCinemaHalls.forEach((item) => {
      const originalCinemaHall = cinemaHalls.find(
        (cinemaHall) => cinemaHall.id === item.id
      );
      // Проверка на изменение состояния зала и отправка обновления в хранилище
      if (originalCinemaHall && originalCinemaHall.free !== item.free) {
        dispatch(updateHall(item));
      }
    });
  };

  return (
    <div className="conf-step__wrapper text-center">
      <p className="conf-step__paragraph">Открыть зал:</p>
      <ul className="conf-step__list conf-step__list_start">
        {/* Вывод списка залов с возможностью изменения их состояния */}
        {changedCinemaHalls.map((cinemaHall) => (
          <li key={cinemaHall.id}>
            <ChooseOpenHalls
              id={cinemaHall.id}
              name={cinemaHall.name}
              free={cinemaHall.free}
              callback={() => handleChange(cinemaHall)}
            />
          </li>
        ))}
      </ul>
      <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
      {/* Кнопка для сохранения изменений */}
      <Button
        text={"Открыть продажу билетов"}
        callback={handleSubmit}
      />
    </div>
  );
}
