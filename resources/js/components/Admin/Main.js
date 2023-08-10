import Header from "./Header";
import StepHeader from "./Header/stepHeader";
import CinemaHallControl from "./AdminPanel/cinemaHallControl";
import CinemaHallConfig from "./AdminPanel/cinemaHallConfig";
import PriceConfig from "./AdminPanel/priceConfig";
import SessionGrid from "./AdminPanel/sessionGrid";
import OpenSales from "./AdminPanel/openSales";
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

