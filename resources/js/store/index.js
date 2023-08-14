import { configureStore } from "@reduxjs/toolkit";
import calendar from '../reducers/createCalendar';
import seance from '../reducers/createSeance';
import popup from '../reducers/createPopup';
import admin from '../reducers/createAdmin';
import auth from '../reducers/createAuth';

export const store = configureStore({
    reducer: {
        calendar,
        seance,
        auth,
        admin,
        popup,
    },
});
