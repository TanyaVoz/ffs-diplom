import Header from "./additionalComponents/clientHeader";
import CalendarNavigation from "./additionalComponents/Formatting/formDays";

// Главный компонент страницы
export default function Main(props) {
    return (
        <>
            {/* Включение компонента заголовка */}
            <Header />

            {/* Включение компонента навигации (если передана пропс nav) */}
            {props.nav && <CalendarNavigation />}

            {/* Основной контент страницы */}
            <main>
                {/* Включение дочерних компонентов (основного контента) */}
                {props.children}
            </main>
        </>
    );
}


