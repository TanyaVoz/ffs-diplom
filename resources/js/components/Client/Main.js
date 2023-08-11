import Header from "./Header";
import Navigate from "./additionalComponents/formDate/nav";

// Главный компонент страницы
export default function Main(props) {
    return (
        <>
            {/* Включение компонента заголовка */}
            <Header />

            {/* Включение компонента навигации (если передана пропс nav) */}
            {props.nav && <Navigate />}

            {/* Основной контент страницы */}
            <main>
                {/* Включение дочерних компонентов (основного контента) */}
                {props.children}
            </main>
        </>
    );
}


