import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Admin/Main";
import Login from "./components/Admin/Login/login";
import Auth from "./components/Admin/Auth/auth";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieCard/>}/>
                <Route path="seance/:seanceId" element={<SeanceCard/>}/>
                <Route path="payment" element={<MainPayment/>}/>
                <Route path="ticket" element={<MainTicket/>}/>
                <Route path="admin/login" element={<Login/>}/>
                <Route path="admin" element={
                    <Auth>
                        <Main/>
                    </Auth>
                }/>
            </Routes>
        </BrowserRouter>
    );
}
