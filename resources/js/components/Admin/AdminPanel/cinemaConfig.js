// import { useDispatch, useSelector } from "react-redux";
// import {
//     createScheme,
//     selectCinemaHallScheme,
//     changeHallSize,
//     getSeats,
//     updateSeats,
//     createSeats,
//     updateHall,
//     getHalls,
// } from "../../../reducers/createAdmin";
// import ActionBtn from "../allButtons/actionBtn";
// import ChooseHallBtn from "../allButtons/chooseBtn";
// import SeatStatus from "../Seats/seatType";
// import SeatsScheme from "../Seats/seats";

// export default function CinemaHallConfig() {
//     // Получение данных из глобального состояния с использованием useSelector
//     const { cinemaHalls, selectedCinemaHallScheme } = useSelector((state) => state.admin);

//     // Получение диспатча из React Redux
//     const dispatch = useDispatch();

//     // Обработчик выбора зала
//     const handleSelect = (id) => {
//         dispatch(selectCinemaHallScheme(cinemaHalls.find((cinemaHall) => cinemaHall.id === id)));
//         dispatch(getSeats(id));
//     };

//     // Обработчик изменения размеров зала
//     const handleChange = ({ target }) => {
//         const name = target.name;
//         const value = target.value;

//         const hallSize = {
//             "row": selectedCinemaHallScheme.row,
//             "chair": selectedCinemaHallScheme.chair,
//             [name]: value
//         };
//         dispatch(changeHallSize(hallSize));

//         const seats = Array.from({ length: hallSize.row * hallSize.chair }, (_, i) => {
//             return { "id": i + 1, "number": i + 1, "status": "standard", "cinema_hall_id": selectedCinemaHallScheme.id };
//         });
//         dispatch(createScheme(seats));
//     };

//     // Обработчик сохранения изменений
//     const handleSave = () => {
//         const hallSource = cinemaHalls.find((cinemaHall) => cinemaHall.id === selectedCinemaHallScheme.id);
//         if (hallSource.row === selectedCinemaHallScheme.row && hallSource.chair === selectedCinemaHallScheme.chair) {
//             dispatch(updateSeats());
//         } else {
//             dispatch(updateHall(selectedCinemaHallScheme));
//             dispatch(createSeats());
//             dispatch(getHalls());
//         }
//         dispatch(selectCinemaHallScheme({}));
//     };

//     return (
//         <div className="conf-step__wrapper">
//             {/* Вывод списка доступных залов */}
//             <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
//             <ul className="conf-step__selectors-box">
//                 {cinemaHalls.map((cinemaHall) =>
//                     <ChooseHallBtn
//                         name={cinemaHall.name}
//                         checked={selectedCinemaHallScheme ? cinemaHall.id === selectedCinemaHallScheme.id : false}
//                         callback={() => handleSelect(cinemaHall.id)}
//                         key={cinemaHall.id}
//                     />
//                 )}
//             </ul>

//             {/* Редактирование параметров выбранного зала */}
//             {selectedCinemaHallScheme.id &&
//                 <>
//                     <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
//                     <div className="conf-step__legend">
//                         <label className="conf-step__label">Рядов, шт
//                             <input type="text"
//                                 className="conf-step__input"
//                                 name="row"
//                                 value={selectedCinemaHallScheme.row}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <span className="multiplier">x</span>
//                         <label className="conf-step__label">Мест, шт
//                             <input type="text"
//                                 className="conf-step__input"
//                                 name="chair"
//                                 value={selectedCinemaHallScheme.chair}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                     </div>
//                     {/* Информация о типах кресел */}
//                     <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
//                     <div className="conf-step__legend">
//                         <SeatStatus status={"standard"} /> — обычные кресла
//                         <SeatStatus status={"vip"} /> — VIP кресла
//                         <SeatStatus status={"disabled"} /> — заблокированные (нет кресла)
//                         <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
//                     </div>

//                     {/* Визуализация схемы зала */}
//                     <SeatsScheme place={selectedCinemaHallScheme.row} />

//                     {/* Кнопки отмены и сохранения */}
//                     <ActionBtn cancel={() => dispatch(selectCinemaHallScheme({}))} save={() => handleSave()} />
//                 </>
//             }
//         </div>
//     );
// }

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
import ActionBtn from "../allButtons/actionBtn";
import ChooseHallBtn from "../allButtons/chooseBtn";
import SeatStatus from "../Seats/seatType";
import SeatsScheme from "../Seats/seats";

const CinemaHallConfig = () => {
  const { cinemaHalls, selectedCinemaHallScheme } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  const handleSelect = useCallback(
    (id) => {
      dispatch(selectCinemaHallScheme(cinemaHalls.find((hall) => hall.id === id)));
      dispatch(getSeats(id));
    },
    [dispatch, cinemaHalls]
  );

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      dispatch(changeHallSize({
        ...selectedCinemaHallScheme,
        [name]: value,
      }));

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

  const handleSave = useCallback(() => {
    const hallSource = cinemaHalls.find((hall) => hall.id === selectedCinemaHallScheme.id);
    if (hallSource.row === selectedCinemaHallScheme.row && hallSource.chair === selectedCinemaHallScheme.chair) {
      dispatch(updateSeats());
    } else {
      dispatch(updateHall(selectedCinemaHallScheme));
      dispatch(createSeats());
      dispatch(getHalls());
    }
    dispatch(selectCinemaHallScheme({}));
  }, [dispatch, cinemaHalls, selectedCinemaHallScheme]);

  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {cinemaHalls.map((hall) => (
          <ChooseHallBtn
            key={hall.id}
            name={hall.name}
            checked={selectedCinemaHallScheme ? hall.id === selectedCinemaHallScheme.id : false}
            callback={() => handleSelect(hall.id)}
          />
        ))}
      </ul>

      {selectedCinemaHallScheme.id && (
        <>
          <p className="conf-step__paragraph">
            Укажите количество рядов и максимальное количество кресел в ряду:
          </p>
          <div className="conf-step__legend">
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
          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <SeatStatus status={"standard"} /> — обычные кресла
            <SeatStatus status={"vip"} /> — VIP кресла
            <SeatStatus status={"disabled"} /> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>
          <SeatsScheme place={selectedCinemaHallScheme.row} />
          <ActionBtn
            cancel={() => dispatch(selectCinemaHallScheme({}))}
            save={handleSave} //  передаем функцию напрямую, без вызова
          />
        </>
      )}
    </div>
  );
};

export default CinemaHallConfig;

