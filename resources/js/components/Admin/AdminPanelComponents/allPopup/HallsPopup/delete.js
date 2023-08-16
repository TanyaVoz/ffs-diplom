import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHall, getHalls } from "../../../../../reducers/createAdmin";
import { closePopup } from "../../../../../reducers/createPopup";
import SessionButton from "../../allButtons/sessionButton";

export default function DeleteHall() {
    const { id } = useSelector((state) => state.popup);
    const { cinemaHalls } = useSelector((state) => state.admin);
    // const { cinemaHalls } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const hallToDelete = cinemaHalls.find((cinemaHall) => cinemaHall.id === id);
    //const hallToDelete = cinemaHalls.find((cinemaHall) => cinemaHall.id === id).name;

    // const handleDelete = () => {
    //     dispatch(deleteHall(id)).then(() => {
    //         dispatch(closePopup());
    //         dispatch(getHalls());
    //     });
    // };
    const handleDelete = (event) => {
                event.preventDefault();
        
                // Удаление зала и обновление списка
                dispatch(deleteHall(id)).then(() => {
                    dispatch(closePopup());
                    dispatch(getHalls());
                });
            };

    return (
        <form onSubmit={handleDelete}>
            <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{hallToDelete.name}</span>?</p>
            {/* Кнопка подтверждения удаления */}
           <SessionButton text={"Удалить"} />
        </form>
    );

    // return (
    //     <div>
    //         <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{hallToDelete.name}</span>?</p>
    //         <SessionButton text={"Удалить"} onSubmit={handleDelete} />
    //     </div>
    // );
    
}

