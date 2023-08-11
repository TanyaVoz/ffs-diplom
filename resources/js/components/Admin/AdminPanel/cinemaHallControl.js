import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showPopup } from "../../../reducers/createPopupSlice";
import { getHalls } from "../../../reducers/createAdminSlice";
import Button from "../Buttons/btn";
import DeleteHallAction from "../Actions/deleteHallAction";
import React from "react";

export default function CinemaHallControl() {
  // Получение данных из глобального состояния с использованием useSelector
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Загрузка списка залов при монтировании компонента
  useEffect(() => {
    dispatch(getHalls());
  }, []);

  return (
    <div className="conf-step__wrapper">
      {/* Вывод списка доступных залов */}
      <p className="conf-step__paragraph">Доступные залы:</p>
      <ul className="conf-step__list">
        {cinemaHalls.map((cinemaHall) => (
          <DeleteHallAction
            id={cinemaHall.id}
            name={cinemaHall.name}
            key={cinemaHall.id}
          />
        ))}
      </ul>

      {/* Кнопка для создания нового зала */}
      <Button
        text={"Создать зал"}
        callback={() => dispatch(showPopup({ title: "Добавление зала", form: "addHall" }))}
      />
    </div>
  );
}

