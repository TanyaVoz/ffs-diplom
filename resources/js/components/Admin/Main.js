import Header from "./AdminPanelComponents/adminHeader";
import StepHeader from "./AdminPanelComponents/adminHeader/header";
import CinemaHallControl from "./AdminConfigurationsComponents/cinemaControl";
import CinemaHallConfig from "./AdminConfigurationsComponents/cinemaConfig";
import PriceConfig from "./AdminConfigurationsComponents/price";
import SessionGrid from "./AdminConfigurationsComponents/session";
import OpenSales from "./AdminConfigurationsComponents/filmsSales";
import Popup from "./AdminPanelComponents/allPopup/Popup";

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

