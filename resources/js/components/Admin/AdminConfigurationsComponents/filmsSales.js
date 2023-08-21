import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHall } from "../../../reducers/adminReducer";
import ChooseOpenHalls from "../AdminActComponents/SeancesAct/choose";
import Button from "../AdminPanelComponents/allButtons/button";

export default function CinemaHallStatusManager() {
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Локальное состояние для хранения измененных данных о залах
  const [modifiedHalls, setModifiedHalls] = useState([]);
  const dispatch = useDispatch();

  // Обновление локального состояния при изменении данных о залах
  useEffect(() => {
    setModifiedHalls(cinemaHalls);
  }, [cinemaHalls]);

  // Обработчик изменения состояния зала (открыт/закрыт)
  const toggleHallState = (hall) => {
    setModifiedHalls((prevHalls) =>
      prevHalls.map((item) =>
        item.id === hall.id ? { ...item, free: !item.free } : item
      )
    );
  };

  // Обработчик сохранения изменений
  const handleSaveChanges = () => {
    modifiedHalls.forEach((hall) => {
      const originalHall = cinemaHalls.find((item) => item.id === hall.id);
      if (originalHall && originalHall.free !== hall.free) {
        dispatch(updateHall(hall)); // Отправка обновления состояния зала в хранилище
      }
    });
  };

  return (
    <div className="conf-step__wrapper text-center">
      <p className="conf-step__paragraph">Управление состоянием залов:</p>
      <ul className="conf-step__list conf-step__list_start">
        {/* Вывод списка залов с возможностью изменения их состояния */}
        {modifiedHalls.map((hall) => (
          <li key={hall.id}>
            <ChooseOpenHalls
              id={hall.id}
              name={hall.name}
              free={hall.free}
              callback={() => toggleHallState(hall)}
            />
          </li>
        ))}
      </ul>
      <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
      <Button text={"Открыть продажу билетов"} callback={handleSaveChanges} />
    </div>
  );
}
