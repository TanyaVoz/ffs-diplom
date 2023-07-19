import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Admin/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieCard/>}/>
                <Route path="cinemaHall/:seanceId" element={<SeanceCard/>}/>
                <Route path="admin" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;