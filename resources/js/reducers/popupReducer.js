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
            const { form, title, id = -1 } = action.payload;
            state.form = form;
            state.title = title;
            state.id = id;
            state.active = true;
        },
        closePopup: (state) => {
            return initialState
        },
    },
});


// Экспорт действий и редуктора из среза
export const { showPopup, closePopup } = createPopupSlice.actions;
export default createPopupSlice.reducer;



