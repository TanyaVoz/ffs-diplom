import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Инициализация начального состояния
const initialState = {
    cinemaHalls: [],
    seats: [],
    selectedCinemaHallScheme: {},
    movies: [],
    chosenDate: new Date().toISOString().split('T')[0],
    seances: [],
};

// Создание асинхронных thunk-функций для работы с данными
export const getHalls = createAsyncThunk(
    "admin/getHalls",
    async (_, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/cinemaHall`, {
            headers: { "Authorization": `Bearer ${token}` },
        });
        return await response.json();
    }
);

export const createHall = createAsyncThunk(
    "admin/createHall",
    async (name, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/cinemaHall`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
        return response.ok;
    }
);

export const deleteHall = createAsyncThunk(
    "admin/deleteHall",
    async (id, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/cinemaHall/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.ok;
    }
);

export const updateHall = createAsyncThunk(
    "admin/updateHall",
    async (cinemaHall, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/cinemaHall/${cinemaHall.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cinemaHall),
        });
        return response.ok;
    }
);

export const getSeats = createAsyncThunk(
    "admin/getSeats",
    async (id, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/seats/${id}`, {
            headers: { "Authorization": `Bearer ${token}` },
        });
        return await response.json();
    }
);

export const createSeats = createAsyncThunk(
    "admin/createSeats",
    async (_, { getState }) => {
        const { token } = getState().auth;
        const { seats } = getState().admin;
        const response = await fetch(`/api/seats`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ seats }),
        });
        return response.ok;
    }
);

export const updateSeats = createAsyncThunk(
    "admin/updateSeats",
    async (_, { getState }) => {
        const { token } = getState().auth;
        const { seats } = getState().admin;
        const response = await fetch(`/api/seats/update`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ seats }),
        });
        return response.ok;
    }
);

export const getMovies = createAsyncThunk(
    "admin/getMovies",
    async (_, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/film`, {
            headers: { "Authorization": `Bearer ${token}` },
        });
        return await response.json();
    }
);

export const createMovie = createAsyncThunk(
    "admin/createMovie",
    async ({ title, description, duration, country, poster }, { getState }) => {
        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('country', country);
        formData.append('poster', poster);

        const { token } = getState().auth;
        const response = await fetch(`/api/film`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });

        return response.ok;
    }
);

export const deleteMovie = createAsyncThunk(
    "admin/deleteMovie",
    async (id, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/film/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.ok;
    }
);

export const updateMovie = createAsyncThunk(
    "admin/updateMovie",
    async ({ id, title, description, duration, country, poster }, { getState }) => {
        let formData = new FormData();
        formData.append('_method', 'put');
        formData.append('title', title);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('country', country);
        if (poster) {
            formData.append('poster', poster);
        }

        const { token } = getState().auth;
        const response = await fetch(`/api/film/${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });

        return response.ok;
    }
);

export const getSeances = createAsyncThunk(
    "admin/getSeances",
    async (_, { getState }) => {
        const { token } = getState().auth;
        const { chosenDate } = getState().admin;
        const response = await fetch(`/api/session/${chosenDate}`, {
            headers: { "Authorization": `Bearer ${token}` },
        });
        return await response.json();
    }
);

export const createSeance = createAsyncThunk(
    "admin/createSeance",
    async ({ datetime, cinema_hall_id, film_id }, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/session`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ datetime, cinema_hall_id, film_id }),
        });
        return response.ok;
    }
);

export const deleteSeance = createAsyncThunk(
    "admin/deleteSeance",
    async (id, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/session/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.ok;
    }
);

export const updateSeance = createAsyncThunk(
    "admin/updateSeance",
    async ({ id, datetime, cinema_hall_id, film_id }, { getState }) => {
        const { token } = getState().auth;
        const response = await fetch(`/api/session/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ datetime, cinema_hall_id, film_id }),
        });
        return response.ok;
    }
);

// Создание среза состояния и действий
const createAdminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        createScheme: (state, action) => {
            state.seats = action.payload;
        },
        selectCinemaHallScheme: (state, action) => {
            state.selectedCinemaHallScheme = action.payload;
        },
        changeHallSize: (state, action) => {
            const { row, chair } = action.payload;
            state.selectedCinemaHallScheme.row = row;
            state.selectedCinemaHallScheme.chair = chair;
        },
        changeSeatStatus: (state, action) => {
            const { id, status } = action.payload;
            const seat = state.seats.find((seat) => seat.id === id);
            seat.status = status;
        },
        chooseDate: (state, action) => {
            state.chosenDate = action.payload;
        },
    },
     // Обработка результатов выполнения асинхронных операций
    extraReducers: (builder) => {
        builder
            .addCase(getHalls.fulfilled, (state, action) => {
                state.cinemaHalls = action.payload;
            })
            .addCase(getSeats.fulfilled, (state, action) => {
                state.seats = action.payload;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getSeances.fulfilled, (state, action) => {
                state.seances = action.payload;
            });
    },
});

export const {
    createScheme,
    selectCinemaHallScheme,
    changeHallSize,
    changeSeatStatus,
    chooseDate,
} = createAdminSlice.actions;

// Экспорт среза как редьюсера
export default createAdminSlice.reducer;
