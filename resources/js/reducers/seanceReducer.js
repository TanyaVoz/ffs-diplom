import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Определяем начальное состояние для хранилища Redux
const initialState = {
    session: {},
    seats: [],
    ticket: {},
};

// Определяем асинхронную "thunk" функцию для получения информации о местах для заданного ID сессии
export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(`/api/client/seats/${id}`);
    return await response.json();
});

// Определяем асинхронную "thunk" функцию для покупки билета с выбранными местами
export const buyTicket = createAsyncThunk(
    "seance/buyTicket",
    async (_, { getState }) => {
        const { seance } = getState();
        const response = await fetch(`/api/ticket`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: seance.ticket.seanceId, seats: seance.ticket.seats }),
        });
        return await response.json();
    }
);

// Создаем "slice" Redux для управления состоянием, связанным с сеансами
const createSeanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {
        resetSeance: () => initialState,
        createTicket: (state, action) => {
            Object.assign(state.ticket, action.payload);
        },
    },
    // Обработка результатов выполнения асинхронных операций
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                Object.assign(state, action.payload);
            })
            .addCase(buyTicket.fulfilled, (state, action) => {
                state.ticket.id = action.payload.id;
            });
    },
});

// Экспорт созданных действий  и редуктора из среза
export const { createTicket, resetSeance } = createSeanceSlice.actions;
export default createSeanceSlice.reducer;
