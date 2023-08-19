import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Начальное состояние хранилища сеанса
const initialState = {
    session: {},
    seats: [],
    ticket: {},
};

// Создание асинхронного действия для получения информации о сеансе
export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(`/api/client/seats/${id}`);
    return await response.json();
});

// Создание асинхронного действия для покупки билета
export const buyTicket = createAsyncThunk(
    "seance/buyTicket",
    async (_, { getState }) => {
        const { ticket } = getState().seance;
        const response = await fetch(`/api/ticket`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "session_id": ticket.seanceId, seats: ticket.seats }),
        });
        return await response.json();
    }
);

// Создание среза состояния и связанных с ним действий для сеанса
const createSeanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {
        resetSeance: (state) => {
            return initialState
        },
        createTicket: (state, action) => {
            const { seanceId, seats, cost } = action.payload;
            state.ticket = { seanceId, seats, cost };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                const { session, seats } = action.payload;
                state.session = session;
                state.seats = seats;
            })
            .addCase(buyTicket.fulfilled, (state, action) => {
                const { id } = action.payload;
                state.ticket.id = id;
            });
    },
});

// Экспорт действий и редуктора из среза
export const { createTicket, resetSeance } = createSeanceSlice.actions;
export default createSeanceSlice.reducer;
