import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHall, getHalls } from "../../../../../reducers/adminReducer";
import { closePopup } from "../../../../../reducers/popupReducer";
import SessionButton from "../../allButtons/sessionButton";

export default function DeleteHall() {
    const { id } = useSelector((state) => state.popup);
    const { cinemaHalls } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const hallToDelete = cinemaHalls.find((cinemaHall) => cinemaHall.id === id);

    const hallTitle = hallToDelete ? hallToDelete.title : "неизвестный зал";

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            dispatch(deleteHall(id));
            dispatch(closePopup());
            dispatch(getHalls());
        } catch (error) {
            console.error("Ошибка при удалении фильма:", error);
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <p className="conf-step__paragraph">
                Вы действительно хотите удалить зал <span>{hallTitle}</span>?</p>
            <SessionButton text={"Удалить"} />
        </form>
    );

}

