import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const today = new Date();
const formatDate = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};

// Определение начального состояния хранилища Redux
const initialState = {
    chosenDate: formatDate(today),
    cinemaHalls: [],
    films: [],
};

// Определение асинхронного thunk-действия для получения данных календаря с сервера
export const getCalendar = createAsyncThunk("calendar/getCalendar", async (date) => {
    const response = await fetch(`/api/client/calendar/${date}`);
    return await response.json();
});

// Создание среза состояния и связанных с ним действий
const createCalendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        chooseDate: (state, action) => {
            state.chosenDate = action.payload;
        },
    },
    // Обработка результатов выполнения асинхронных операций
    extraReducers: (builder) => {
        builder
            .addCase(getCalendar.fulfilled, (state, action) => {
                const { cinemaHalls, sessions, films } = action.payload;
                state.cinemaHalls = cinemaHalls.map((cinemaHall) => ({
                    ...cinemaHall,
                    sessions: sessions.filter((session) => +session.cinema_hall_id === cinemaHall.id)
                }));
                state.films = films;
            });
    },
});

// Экспорт созданных действий  и редуктора из среза
export const { chooseDate } = createCalendarSlice.actions;
export default createCalendarSlice.reducer;


