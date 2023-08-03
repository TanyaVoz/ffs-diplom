"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Auth_auth_js"],{

/***/ "./resources/js/components/Admin/Auth/auth.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/Auth/auth.js ***!
  \****************************************************/
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
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.auth;
    }),
    token = _useSelector.token;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  if (!token) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
      to: "/admin/login",
      state: {
        from: location
      },
      replace: true
    });
  }
  return children;
}

/***/ })

}]);