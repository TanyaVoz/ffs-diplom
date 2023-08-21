import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние хранилища попапа
const initialState = {
    active: false,
    title: "",
    form: "",
    id: -1,
};

// Создание среза состояния и связанных с ним действий для попапа
const createPopupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup: (state, action) => {
            return { ...state, ...action.payload, active: true };
        },

        // Действие closePopup: вызывается, чтобы закрыть попап и вернуть начальное состояние
        closePopup: () => initialState,
    },
});

// Экспорт созданных действий  и редуктора из среза
export const { showPopup, closePopup } = createPopupSlice.actions;
export default createPopupSlice.reducer;




