import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../reducers/popupReducer";
import { getHalls } from "../../../reducers/adminReducer";
import Button from "../AdminPanelComponents/allButtons/button";
import DeleteHallAction from "../AdminActComponents/MainAct/deleteHall";

export default function CinemaHallControl() {
  // Получение данных из глобального состояния с использованием useSelector
  const { cinemaHalls } = useSelector((state) => state.admin);

  // Получение диспатча из React Redux
  const dispatch = useDispatch();

  // Загрузка списка залов при монтировании компонента
  useEffect(() => {
    dispatch(getHalls());
  }, []);

  // Функция обработки создания зала
  const handleCreateHall = () => {
    dispatch(showPopup({ title: "Добавление зала", form: "addHall" }));
  };

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
      <Button text={"Создать зал"} callback={handleCreateHall} />
    </div>
  );
}
