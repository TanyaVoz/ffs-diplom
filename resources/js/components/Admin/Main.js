import Header from "./adminHeader";
import StepHeader from "./adminHeader/header";
import CinemaHallControl from "./AdminPanel/cinemaControl";
import CinemaHallConfig from "./AdminPanel/cinemaConfig";
import PriceConfig from "./AdminPanel/price";
import SessionGrid from "./AdminPanel/session";
import OpenSales from "./AdminPanel/filmsSales";
import Popup from "./allPopup/Popup";

export default function Main() {
    return (
        <>
            {/* Отображение всплывающего окна */}
            <Popup />

            {/* Отображение заголовка страницы */}
            <Header />

            <main className="conf-steps">
                {/* Первый шаг: Управление залами */}
                <StepHeader title={'Управление залами'}>
                    <CinemaHallControl />
                </StepHeader>

                {/* Второй шаг: Конфигурация залов */}
                <StepHeader title={'Конфигурация залов'}>
                    <CinemaHallConfig />
                </StepHeader>

                {/* Третий шаг: Конфигурация цен */}
                <StepHeader title={'Конфигурация цен'}>
                    <PriceConfig />
                </StepHeader>

                {/* Четвёртый шаг: Сетка сеансов */}
                <StepHeader title={'Сетка сеансов'}>
                    <SessionGrid />
                </StepHeader>

                {/* Пятый шаг: Открыть продажи */}
                <StepHeader title={'Открыть продажи'}>
                    <OpenSales />
                </StepHeader>
            </main>
        </>
    );
}

