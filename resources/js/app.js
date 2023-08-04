// import React from "react";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Main from "./components/Admin/Main";
// import Login from "./components/Admin/Login/login";
// import Auth from "./components/Admin/Auth/auth";
// import MovieCard from "./components/Client/MovieCard";
// import SeanceCard from "./components/Client/SeanceCard";
// import MainPayment from "./components/Client/PaymentCard";
// import MainTicket from "./components/Client/TicketCard";

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<MovieCard/>}/>
//                 <Route path="seance/:seanceId" element={<SeanceCard/>}/>
//                 <Route path="payment" element={<MainPayment/>}/>
//                 <Route path="ticket" element={<MainTicket/>}/>
//                 <Route path="admin/login" element={<Login/>}/>
//                 <Route path="admin" element={
//                     <Auth>
//                         <Main/>
//                     </Auth>
//                 }/>
//             </Routes>
//         </BrowserRouter>
//     );
// }




import React, { Suspense, lazy } from 'react'; //  Импортируем необходимые зависимости

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomLoadingPlaceholder from './components/Placeholder/CustomLoadingPlaceholder'; // компонент заглушки

const Main = lazy(() => import('./components/Admin/Main')); //  Динамический импорт компонентов
const Auth = lazy(() => import('./components/Admin/Auth/auth'));
const MovieCard = lazy(() => import('./components/Client/MovieCard'));
const SeanceCard = lazy(() => import('./components/Client/SeanceCard'));
const MainPayment = lazy(() => import('./components/Client/PaymentCard'));
const MainTicket = lazy(() => import('./components/Client/TicketCard'));
const Login = lazy(() => import('./components/Admin/Login/login'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<CustomLoadingPlaceholder />}> 
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="seance/:seanceId" element={<SeanceCard />} />
          <Route path="payment" element={<MainPayment />} />
          <Route path="ticket" element={<MainTicket />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin" element={<Auth><Main /></Auth>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
//CustomLoadingPlaceholder