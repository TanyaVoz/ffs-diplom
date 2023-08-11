import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../reducers/createAuthSlice";

export default function Exit() {
    // Извлечение информации о токене из состояния
    const { token } = useSelector((state) => state.auth);

    // Получение диспетчера Redux
    const dispatch = useDispatch();

    // Обработчик для выхода из системы (вызов действия logout)
    const handleClick = () => {
        dispatch(logout());
    }

    return (
        <>
            {/* Если есть токен, отображаем компонент выхода */}
            {token &&
                <div className="page-header__exit" onClick={handleClick}>
                    Выход
                </div>
            }
        </>
    );
}
