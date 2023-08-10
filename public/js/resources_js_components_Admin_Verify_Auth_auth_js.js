"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Verify_Auth_auth_js"],{

/***/ "./resources/js/components/Admin/Verify/Auth/auth.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/Verify/Auth/auth.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Auth(_ref) {
  var children = _ref.children;
  // Извлечение информации о токене из состояния
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.auth;
    }),
    token = _useSelector.token;

  // Получение текущего маршрута
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();

  // Проверка наличия токена
  if (!token) {
    // Если токена нет, перенаправление на страницу входа с сохранением текущего маршрута
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
      to: "/admin/login",
      state: {
        from: location
      },
      replace: true
    });
  }

  // Если токен есть, отображение дочерних компонентов (переданных через пропсы)
  return children;
}

/***/ })

}]);