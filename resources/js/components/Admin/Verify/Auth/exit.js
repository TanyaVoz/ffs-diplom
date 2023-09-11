import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../../../reducers/authReducer";

const Exit = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Обработчик для выхода из системы .
  const handleLogout = () => {
    dispatch(logoutAdmin());
  };

  if (!token) {
    return null;
  }

  return (
    <div className="page-header__exit" onClick={handleLogout}>
      Выход
    </div>
  );
};

export default Exit;
