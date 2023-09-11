import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function Auth({ children }) {
  const { token } = useSelector((state) => state.auth);
  const currentLocation = useLocation();

  // Проверка наличия токена
  if (!token) {
    return <Navigate to="/admin/login" state={{ from: currentLocation }} replace />;
  }

  return children;
}

