import React from "react";
import Header from "./AdminPanelComponents/adminHeader";
import CustomStepHeader from "./AdminPanelComponents/adminHeader/header";
import CinemaHallControl from "./AdminConfigurationsComponents/cinemaControl";
import CinemaHallConfig from "./AdminConfigurationsComponents/cinemaConfig";
import PriceConfig from "./AdminConfigurationsComponents/price";
import SessionGrid from "./AdminConfigurationsComponents/session";
import OpenSales from "./AdminConfigurationsComponents/filmsSales";
import Popup from "./AdminPanelComponents/allPopup/Popup";

const Main = () => {
  return (
    <div>
      {/* Отображение всплывающего окна */}
      <Popup />

      {/* Отображение заголовка страницы */}
      <Header />

      <main className="conf-steps">
        {/* Первый шаг: Управление залами */}
        <CustomStepHeader title={'Управление залами'}>
          <CinemaHallControl />
        </CustomStepHeader>

        {/* Второй шаг: Конфигурация залов */}
        <CustomStepHeader title={'Конфигурация залов'}>
          <CinemaHallConfig />
        </CustomStepHeader>

        {/* Третий шаг: Конфигурация цен */}
        <CustomStepHeader title={'Конфигурация цен'}>
          <PriceConfig />
        </CustomStepHeader>

        {/* Четвёртый шаг: Сетка сеансов */}
        <CustomStepHeader title={'Сетка сеансов'}>
          <SessionGrid />
        </CustomStepHeader>

        {/* Пятый шаг: Открыть продажи */}
        <CustomStepHeader title={'Открыть продажи'}>
          <OpenSales />
        </CustomStepHeader>
      </main>
    </div>
  );
};

export default Main;

