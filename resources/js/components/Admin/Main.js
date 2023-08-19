import React from "react";
import Header from "./AdminPanelComponents/adminHeader";
import CustomStepHeader from "./AdminPanelComponents/adminHeader/header";
import HallControl from "./AdminConfigurationsComponents/hallControl";
import HallConfig from "./AdminConfigurationsComponents/hallConfig";
import PriceConfig from "./AdminConfigurationsComponents/price";
import Session from "./AdminConfigurationsComponents/session";
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
          <HallControl />
        </CustomStepHeader>

        {/* Второй шаг: Конфигурация залов */}
        <CustomStepHeader title={'Конфигурация залов'}>
          <HallConfig />
        </CustomStepHeader>

        {/* Третий шаг: Конфигурация цен */}
        <CustomStepHeader title={'Конфигурация цен'}>
          <PriceConfig />
        </CustomStepHeader>

        {/* Четвёртый шаг: Сетка сеансов */}
        <CustomStepHeader title={'Сетка сеансов'}>
          <Session />
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

