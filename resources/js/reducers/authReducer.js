import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Начальное состояние хранилища
const initialState = {
    token: "",
    status: "idle",
};

// Определение асинхронной операции для получения токена
export const adminAuth = createAsyncThunk(
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
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutAdmin: (state) => initialState,
        resetAuthStatusAdmin: (state) => {
            state.status = "idle";
        }
    },
    // Обработка результатов выполнения асинхронных операций
    extraReducers: (builder) => {
        builder
            .addCase(adminAuth.rejected, (state) => {
                state.status = "error";
            })
            .addCase(adminAuth.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.status = "success";
            })
    },
});

// Экспорт созданных действий  и редуктора из среза
export const { logoutAdmin, resetAuthStatusAdmin } = authSlice.actions;
export default authSlice.reducer;

