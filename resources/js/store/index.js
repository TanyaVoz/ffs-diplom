import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from '../reducers/calendarReducer';
import seanceReducer from '../reducers/seanceReducer';
import popupReducer from '../reducers/popupReducer';
import adminReducer from '../reducers/adminReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = {
    calendar: calendarReducer,
    seance: seanceReducer,
    auth: authReducer,
    admin: adminReducer,
    popup: popupReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});



