import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function Auth({ children }) {
    // Извлечение информации о токене из состояния
    const { token } = useSelector((state) => state.auth);

    // Получение текущего маршрута
    let location = useLocation();

    // Проверка наличия токена
    if (!token) {
        // Если токена нет, перенаправление на страницу входа с сохранением текущего маршрута
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    // Если токен есть, отображение дочерних компонентов (переданных через пропсы)
    return children;
}
