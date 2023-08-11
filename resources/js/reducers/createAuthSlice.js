import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Начальное состояние хранилища
const initialState = {
    token: "",
    status: "idle",
};
// Определение асинхронной операции для получения токена
export const getToken = createAsyncThunk(
    "auth/getToken",
    async ({ email, password }) => {
        const response = await fetch(`/api/tokens/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (response.status !== 200) {
            throw response.statusText;
        }
        return await response.json();
    }
);
// Создание среза состояния и связанных с ним действий
const createAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => initialState,
        resetAuthStatus: (state) => {
            state.status = "idle";
        }
    },
    // Обработка результатов выполнения асинхронных операций
    extraReducers: (builder) => {
        builder
            .addCase(getToken.rejected, (state) => {
                state.status = "error";
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.status = "success";
            })
    },
});

// Экспорт действий и редуктора из среза
export const { logout, resetAuthStatus } = createAuthSlice.actions;
export default createAuthSlice.reducer;
