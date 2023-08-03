
import React from 'react';
import { createRoot } from 'react-dom/client'; // Изменили импорт на "react-dom/client"
import App from './app';
import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root")); // Также используем createRoot из "react-dom/client"
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

