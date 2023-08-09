
import React, { Suspense, lazy } from 'react'; //  Импортируем необходимые зависимости

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomLoadingPlaceholder from './components/Placeholder/CustomLoadingPlaceholder'; // компонент заглушки

const Main = lazy(() => import('./components/Admin/Main')); //  Динамический импорт компонентов
const Auth = lazy(() => import('./components/Admin/Verify/Auth/auth'));
const MovieCard = lazy(() => import('./components/Client/clientCards/MovieCard'));
const SeanceCard = lazy(() => import('./components/Client/clientCards/SeanceCard'));
const MainPayment = lazy(() => import('./components/Client/clientCards/PaymentCard'));
const MainTicket = lazy(() => import('./components/Client/clientCards/TicketCard'));
const Login = lazy(() => import('./components/Admin/Verify/Login/login'));

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
