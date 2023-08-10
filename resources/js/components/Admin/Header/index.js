import Exit from "../Verify/Auth/exit";

export default function Header() {
    return (
        <header className="page-header">
            {/* Заголовок страницы */}
            <h1 className="page-header__title">Идём<span>в</span>кино</h1>
            
            {/* Подзаголовок страницы для администраторской области */}
            <span className="page-header__subtitle">Администраторррская</span>
            
            {/* Компонент для выхода из аккаунта */}
            <Exit/>
        </header>
    );
}
