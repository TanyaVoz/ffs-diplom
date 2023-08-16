(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Main_js"],{

/***/ "./resources/js/components/Admin/AdminActComponents/MainAct/addMovie.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/MainAct/addMovie.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddMovieAction)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AdminPanelComponents/allButtons/button */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/button.js");
/* harmony import */ var _editMovie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editMovie */ "./resources/js/components/Admin/AdminActComponents/MainAct/editMovie.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function AddMovieAction() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    movies = _useSelector.movies,
    loading = _useSelector.loading;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Получаем список фильмов при загрузке компонента
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getMovies)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "conf-step__paragraph",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Добавить фильм",
        callback: function callback() {
          return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__.showPopup)({
            title: "Добавление фильма",
            form: "addMovie"
          }));
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "conf-step__movies",
      children: movies.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u043C\u043E\u0432."
      }) : movies.map(function (movie) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_editMovie__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: movie.id,
          img: movie.poster,
          title: movie.title,
          duration: movie.duration
        }, movie.id);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/MainAct/addSeance.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/MainAct/addSeance.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AdminPanelComponents/allButtons/choose */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/choose.js");
/* harmony import */ var _AdminActComponents_SeancesAct_hallTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AdminActComponents/SeancesAct/hallTime */ "./resources/js/components/Admin/AdminActComponents/SeancesAct/hallTime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







// Компонент для добавления сеанса


var AddSeanceAction = function AddSeanceAction(_ref) {
  var cinemaHallId = _ref.cinemaHallId,
    name = _ref.name;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  // Обработчик добавления сеанса
  var handleAddSeance = function handleAddSeance() {
    // Диспатч действия для показа всплывающего окна
    dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__.showPopup)({
      title: "Добавление сеанса",
      form: "addSeance",
      id: cinemaHallId
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "conf-step__seances-hall",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "conf-step__selectors-box",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: name,
        checked: false,
        callback: handleAddSeance
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminActComponents_SeancesAct_hallTime__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cinemaHall: cinemaHallId
    })]
  });
};

// Пропсы компонента
AddSeanceAction.propTypes = {
  cinemaHallId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSeanceAction);

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/MainAct/deleteHall.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/MainAct/deleteHall.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteHallAction)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// Компонент для действия удаления зала


function DeleteHallAction(props) {
  // Извлечение данных из пропсов
  var id = props.id,
    name = props.name;

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "conf-step__edit-hall",
      onClick: function onClick() {
        return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
          title: "Редактирование зала",
          form: "editHall",
          id: id
        }));
      },
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "conf-step__button conf-step__button-trash",
      onClick: function onClick() {
        return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
          title: "Удаление зала",
          form: "deleteHall",
          id: id
        }));
      }
    })]
  });
}

// Пропсы компонента
DeleteHallAction.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/MainAct/editMovie.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/MainAct/editMovie.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditMovieAction)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Client_additionalComponents_Formatting_timeFormWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Client/additionalComponents/Formatting/timeFormWords */ "./resources/js/components/Client/additionalComponents/Formatting/timeFormWords.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// Компонент для действия редактирования фильма


function EditMovieAction(props) {
  // Извлечение данных из пропсов
  var id = props.id,
    img = props.img,
    title = props.title,
    duration = props.duration;

  // Получение продолжительности фильма в соответствии с числом
  var filmDuration = (0,_Client_additionalComponents_Formatting_timeFormWords__WEBPACK_IMPORTED_MODULE_2__["default"])(duration);

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "conf-step__movie",
    onClick: function onClick() {
      return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
        title: "Редактирование фильма",
        form: "editMovie",
        id: id
      }));
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "conf-step__close"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      className: "conf-step__movie-poster",
      alt: "poster",
      src: "../images/".concat(img)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "conf-step__movie-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
      className: "conf-step__movie-duration",
      children: [duration, " ", " ", " ", filmDuration]
    })]
  });
}

// Пропсы компонента
EditMovieAction.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
  img: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  duration: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired)
};

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeancesAct/choose.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeancesAct/choose.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseOpenHalls)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function ChooseOpenHalls(props) {
  var id = props.id,
    name = props.name,
    free = props.free,
    callback = props.callback;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      id: "cinemaHallCheck".concat(id) // Уникальный идентификатор для связи с label
      ,
      className: "conf-step__custom-checkbox",
      type: "checkbox",
      checked: free // Определение состояния выбора (true/false)
      ,
      onChange: callback // Обработчик изменения состояния
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
      htmlFor: "cinemaHallCheck".concat(id),
      children: name
    }), " "]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeancesAct/chooseSession.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeancesAct/chooseSession.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseSessionDate)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ChooseSessionDate() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    chosenDate = _useSelector.chosenDate;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  var today = new Date();

  // Обработчик изменения выбранной даты
  var handleChange = function handleChange(_ref) {
    var target = _ref.target;
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.chooseDate)(target.value)); // Диспетчер для обновления выбранной даты в хранилище
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "datepicker",
      children: ["\u0414\u0430\u0442\u0430 \u0441\u0435\u0430\u043D\u0441\u043E\u0432:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        className: "conf-step__input",
        type: "date",
        name: "datepicker"
        // Устанавливаем минимальную дату как текущую дату
        ,
        min: "".concat(today.getFullYear(), "-").concat(('0' + (today.getMonth() + 1)).slice(-2), "-").concat(('0' + today.getDate()).slice(-2)),
        value: chosenDate // Установка значения даты
        ,
        onChange: handleChange // Привязка обработчика изменения
        ,
        pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}" // Паттерн для ввода даты
        ,
        required: true
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeancesAct/hallTime.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeancesAct/hallTime.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HallTime)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _movieTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieTime */ "./resources/js/components/Admin/AdminActComponents/SeancesAct/movieTime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // Импорт компонента для отображения времени сеанса

function HallTime(props) {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    seances = _useSelector.seances; // Получение данных о сеансах из Redux
  var cinemaHall = props.cinemaHall; // Получение ID кинозала из входных параметров

  // Фильтрация и сортировка сеансов для указанного кинозала
  var cinemaHallSeances = seances.filter(function (seance) {
    return +seance.cinema_hall_id === cinemaHall;
  });
  cinemaHallSeances.sort(function (a, b) {
    return Date.parse(a.datetime) - Date.parse(b.datetime);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "conf-step__seances-timeline",
    children: cinemaHallSeances.map(function (seance) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_movieTime__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: seance.film_id,
        seance: seance.id,
        time: seance.datetime
      }, seance.id);
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeancesAct/movieTime.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeancesAct/movieTime.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieTime)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function MovieTime(props) {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    movies = _useSelector.movies; // Получение данных о фильмах из Redux
  var id = props.id,
    seance = props.seance,
    time = props.time; // Получение данных о времени сеанса и фильме из входных параметров
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Поиск индекса фильма в массиве по его ID
  var index = movies.findIndex(function (movie) {
    return movie.id === +id;
  });
  var movie = movies[index]; // Выбранный фильм
  var width = movie.duration / 60 * 30; // Вычисление ширины блока сеанса в пикселях на основе длительности фильма
  var datetime = new Date(time); // Преобразование времени сеанса в объект типа Date
  var shift = (datetime.getHours() + datetime.getMinutes() / 60) * 30; // Вычисление сдвига блока сеанса по горизонтали

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "conf-step__seances-movie conf-step__seances-movie-".concat(index + 1),
    style: {
      width: "".concat(width, "px"),
      left: "".concat(shift, "px")
    },
    onClick: function onClick() {
      return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
        title: "Редактирование сеанса",
        form: "editSeance",
        id: seance
      }));
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "conf-step__seances-movie-title",
      children: movie.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "conf-step__seances-movie-start",
      children: datetime.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeancesAct/seances.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeancesAct/seances.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeancesHall)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _MainAct_addSeance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainAct/addSeance */ "./resources/js/components/Admin/AdminActComponents/MainAct/addSeance.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function SeancesHall() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls,
    chosenDate = _useSelector.chosenDate; // Получение данных о залах и выбранной дате из Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getSeances)()); // Получение списка сеансов при изменении выбранной даты
  }, [chosenDate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "conf-step__seances",
    children: cinemaHalls.map(function (cinemaHall) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MainAct_addSeance__WEBPACK_IMPORTED_MODULE_3__["default"], {
        cinemaHallId: cinemaHall.id,
        name: cinemaHall.name
      }, cinemaHall.id);
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seatType.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeatsAct/seatType.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeatStatus)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function SeatStatus(props) {
  var status = props.status,
    callback = props.callback; // Получение статуса места и функции обратного вызова из входных свойств

  var active;
  switch (status) {
    case "standard":
      active = "conf-step__chair_standart"; // Присваивание класса в зависимости от статуса
      break;
    case "disabled":
      active = "conf-step__chair_disabled"; // Присваивание класса в зависимости от статуса
      break;
    case "vip":
      active = "conf-step__chair_vip"; // Присваивание класса в зависимости от статуса
      break;
    default:
      active = "conf-step__chair_standart"; // По умолчанию используется стандартный класс
      break;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("conf-step__chair", active),
    onClick: callback
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seats.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminActComponents/SeatsAct/seats.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeatsScheme)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _seatType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seatType */ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seatType.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function SeatsScheme(props) {
  var place = props.place; // Получение количества мест в ряду из входных свойств
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    seats = _useSelector.seats; // Получение данных о местах из Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); // Получение функции dispatch из Redux для отправки действий

  var allStatus = ["standard", "vip", "disabled"]; // Список доступных статусов мест

  var chair = seats.length / place; // Расчет количества мест в ряду

  // Группировка мест по рядам
  var rowSeats = seats.reduce(function (result, seat, i) {
    var index = Math.floor(i / chair);
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(_objectSpread(_objectSpread({}, seat), {}, {
      key: "seat_".concat(i)
    }));
    return result;
  }, []);

  // Обработчик клика по месту для изменения его статуса
  var handleClick = function handleClick(id) {
    var seatStatus = seats.find(function (seat) {
      return seat.id === id;
    }).status;
    var statusIndex = allStatus.indexOf(seatStatus);
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.changeSeatStatus)({
      id: id,
      status: allStatus[(statusIndex + 1) % allStatus.length]
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "conf-step__hall",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "conf-step__hall-wrapper",
      children: rowSeats.map(function (row, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "conf-step__row",
          children: row.map(function (seat) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_seatType__WEBPACK_IMPORTED_MODULE_2__["default"], {
              status: seat.status,
              callback: function callback() {
                return handleClick(seat.id);
              }
            }, seat.key);
          })
        }, "row_".concat(i));
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/cinemaConfig.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/cinemaConfig.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminPanelComponents_allButtons_saveButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/saveButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/saveButton.js");
/* harmony import */ var _AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/choose */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/choose.js");
/* harmony import */ var _AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdminActComponents/SeatsAct/seatType */ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seatType.js");
/* harmony import */ var _AdminActComponents_SeatsAct_seats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AdminActComponents/SeatsAct/seats */ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seats.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var CinemaHallConfig = function CinemaHallConfig() {
  // Выбор данных из хранилища Redux с использованием хука useSelector
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls,
    selectedCinemaHallScheme = _useSelector.selectedCinemaHallScheme;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  // Функция обратного вызова для выбора кинозала
  var handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    // Диспетчеризация действий для обновления выбранной схемы кинозала и получения информации о местах
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.selectCinemaHallScheme)(cinemaHalls.find(function (hall) {
      return hall.id === id;
    })));
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getSeats)(id));
  }, [dispatch, cinemaHalls]);

  // Функция обратного вызова для обработки изменений в полях ввода размера зала
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;

    // Диспетчеризация действий для изменения выбранной схемы кинозала и создания новой схемы мест
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.changeHallSize)(_objectSpread(_objectSpread({}, selectedCinemaHallScheme), {}, _defineProperty({}, name, value))));

    // Создание новой схемы мест на основе обновленного размера зала и диспетчеризация действий
    var seats = Array.from({
      length: selectedCinemaHallScheme.row * selectedCinemaHallScheme.chair
    }, function (_, i) {
      return {
        id: i + 1,
        number: i + 1,
        status: "standard",
        cinema_hall_id: selectedCinemaHallScheme.id
      };
    });
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.createScheme)(seats));
  }, [dispatch, selectedCinemaHallScheme]);

  // Функция обратного вызова для сохранения изменений конфигурации
  var handleSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // Поиск исходного кинозала и проверка изменения размера зала
    var hallSource = cinemaHalls.find(function (hall) {
      return hall.id === selectedCinemaHallScheme.id;
    });
    if (hallSource.row === selectedCinemaHallScheme.row && hallSource.chair === selectedCinemaHallScheme.chair) {
      // Диспетчеризация действия для обновления информации о местах
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateSeats)());
    } else {
      // Диспетчеризация действий для обновления зала, создания новых мест и получения списка залов
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateHall)(selectedCinemaHallScheme));
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.createSeats)());
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getHalls)());
    }

    // Очистка выбранной схемы кинозала
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.selectCinemaHallScheme)({}));
  }, [dispatch, cinemaHalls, selectedCinemaHallScheme]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "conf-step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      className: "conf-step__paragraph",
      children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043B \u0434\u043B\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
      className: "conf-step__selectors-box",
      children: cinemaHalls.map(function (hall) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: hall.name,
          checked: selectedCinemaHallScheme ? hall.id === selectedCinemaHallScheme.id : false,
          callback: function callback() {
            return handleSelect(hall.id);
          }
        }, hall.id);
      })
    }), selectedCinemaHallScheme.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "conf-step__paragraph",
        children: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u044F\u0434\u043E\u0432 \u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0440\u0435\u0441\u0435\u043B \u0432 \u0440\u044F\u0434\u0443:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "conf-step__legend",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "conf-step__label",
          children: ["\u0420\u044F\u0434\u043E\u0432, \u0448\u0442", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "text",
            className: "conf-step__input",
            name: "row",
            value: selectedCinemaHallScheme.row,
            onChange: handleChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "multiplier",
          children: "x"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "conf-step__label",
          children: ["\u041C\u0435\u0441\u0442, \u0448\u0442", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "text",
            className: "conf-step__input",
            name: "chair",
            value: selectedCinemaHallScheme.chair,
            onChange: handleChange
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "conf-step__paragraph",
        children: "\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u0438\u043F\u044B \u043A\u0440\u0435\u0441\u0435\u043B \u043D\u0430 \u0441\u0445\u0435\u043C\u0435 \u0437\u0430\u043B\u0430:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "conf-step__legend",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: "standard"
        }), " \u2014 \u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u043A\u0440\u0435\u0441\u043B\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: "vip"
        }), " \u2014 VIP \u043A\u0440\u0435\u0441\u043B\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: "disabled"
        }), " \u2014 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 (\u043D\u0435\u0442 \u043A\u0440\u0435\u0441\u043B\u0430)", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "conf-step__hint",
          children: "\u0427\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0438\u0434 \u043A\u0440\u0435\u0441\u043B\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043E \u043D\u0435\u043C\u0443 \u043B\u0435\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043C\u044B\u0448\u0438"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminActComponents_SeatsAct_seats__WEBPACK_IMPORTED_MODULE_6__["default"], {
        place: selectedCinemaHallScheme.row
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminPanelComponents_allButtons_saveButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        cancel: function cancel() {
          return dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.selectCinemaHallScheme)({}));
        },
        save: handleSave // Передача функции сохранения напрямую, без вызова
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CinemaHallConfig);

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/cinemaControl.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/cinemaControl.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CinemaHallControl)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/button */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/button.js");
/* harmony import */ var _AdminActComponents_MainAct_deleteHall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdminActComponents/MainAct/deleteHall */ "./resources/js/components/Admin/AdminActComponents/MainAct/deleteHall.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function CinemaHallControl() {
  // Получение данных из глобального состояния с использованием useSelector
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls;

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Загрузка списка залов при монтировании компонента
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_3__.getHalls)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "conf-step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "conf-step__paragraph",
      children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u0430\u043B\u044B:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      className: "conf-step__list",
      children: cinemaHalls.map(function (cinemaHall) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminActComponents_MainAct_deleteHall__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: cinemaHall.id,
          name: cinemaHall.name
        }, cinemaHall.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Создать зал",
      callback: function callback() {
        return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__.showPopup)({
          title: "Добавление зала",
          form: "addHall"
        }));
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/filmsSales.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/filmsSales.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CinemaHallStatusManager)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminActComponents_SeancesAct_choose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminActComponents/SeancesAct/choose */ "./resources/js/components/Admin/AdminActComponents/SeancesAct/choose.js");
/* harmony import */ var _AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/button */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function CinemaHallStatusManager() {
  // Получение данных о залах из глобального состояния с использованием useSelector
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls;

  // Локальное состояние для хранения измененных данных о залах
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    changedCinemaHalls = _useState2[0],
    setChangedCinemaHalls = _useState2[1];

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Обновление локального состояния при изменении данных о залах
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setChangedCinemaHalls(cinemaHalls);
  }, [cinemaHalls]);

  // Обработчик изменения состояния зала (открыт/закрыт)
  var handleChange = function handleChange(cinemaHall) {
    setChangedCinemaHalls(function (prevState) {
      return prevState.map(function (item) {
        return item.id === cinemaHall.id ? _objectSpread(_objectSpread({}, item), {}, {
          free: !item.free
        }) : item;
      });
    });
  };

  // Обработчик сохранения изменений
  var handleSubmit = function handleSubmit() {
    changedCinemaHalls.forEach(function (item) {
      var originalCinemaHall = cinemaHalls.find(function (cinemaHall) {
        return cinemaHall.id === item.id;
      });
      // Проверка на изменение состояния зала и отправка обновления в хранилище
      if (originalCinemaHall && originalCinemaHall.free !== item.free) {
        dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateHall)(item));
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "conf-step__wrapper text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "conf-step__paragraph",
      children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043B:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
      className: "conf-step__list conf-step__list_start",
      children: changedCinemaHalls.map(function (cinemaHall) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminActComponents_SeancesAct_choose__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: cinemaHall.id,
            name: cinemaHall.name,
            free: cinemaHall.free,
            callback: function callback() {
              return handleChange(cinemaHall);
            }
          })
        }, cinemaHall.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "conf-step__paragraph",
      children: "\u0412\u0441\u0451 \u0433\u043E\u0442\u043E\u0432\u043E, \u0442\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminPanelComponents_allButtons_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Открыть продажу билетов",
      callback: handleSubmit
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/movie.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/movie.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _AdminPanelComponents_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function MovieCard(props) {
  // Деструктуризация свойств, переданных в компонент
  var _props$title = props.title,
    title = _props$title === void 0 ? "" : _props$title,
    _props$description = props.description,
    description = _props$description === void 0 ? "" : _props$description,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? "" : _props$duration,
    _props$country = props.country,
    country = _props$country === void 0 ? "" : _props$country,
    poster = props.poster,
    callbackSubmit = props.callbackSubmit,
    callbackDelete = props.callbackDelete;

  // Состояние формы фильма
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: title,
      description: description,
      duration: duration,
      country: country
    }),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var fileInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Обработчик изменений в полях формы
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {
    var target = _ref.target;
    var name = target.name,
      value = target.value;
    setForm(function (prevForm) {
      return _objectSpread(_objectSpread({}, prevForm), {}, _defineProperty({}, name, value));
    });
  }, []);

  // Обработчик отправки формы
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            if (!(fileInput.current && fileInput.current.files.length > 0)) {
              _context.next = 12;
              break;
            }
            _context.prev = 2;
            _context.next = 5;
            return callbackSubmit(form.title, form.description, form.duration, form.country, fileInput.current.files[0]);
          case 5:
            // Закрытие всплывающего окна и обновление списка фильмов
            dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__.closePopup)());
            dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getMovies)());
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            // Обработка ошибок при добавлении фильма
            console.error("Ошибка при добавлении фильма:", _context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9]]);
    }));
    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    acceptCharset: "utf-8",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "poster",
      children: ["\u041F\u043E\u0441\u0442\u0435\u0440 \u0444\u0438\u043B\u044C\u043C\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "file",
        accept: "image/*",
        name: "poster",
        ref: fileInput,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "title",
      children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u043C\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "text",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \xAB\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u043D \u041A\u0435\u0439\u043D\xBB",
        name: "title",
        value: form.title,
        onChange: handleChange,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "description",
      children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u043C\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "text",
        name: "description",
        value: form.description,
        onChange: handleChange,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "duration",
      children: ["\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0444\u0438\u043B\u044C\u043C\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "number",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 120",
        name: "duration",
        value: form.duration,
        onChange: handleChange,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "country",
      children: ["\u0421\u0442\u0440\u0430\u043D\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "text",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0420\u043E\u0441\u0441\u0438\u044F",
        name: "country",
        value: form.country,
        onChange: handleChange,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminPanelComponents_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Добавить фильм",
      handleDelete: callbackDelete
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/price.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/price.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriceConfig)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminPanelComponents_allButtons_saveButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/saveButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/saveButton.js");
/* harmony import */ var _AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/choose */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/choose.js");
/* harmony import */ var _AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdminActComponents/SeatsAct/seatType */ "./resources/js/components/Admin/AdminActComponents/SeatsAct/seatType.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function PriceConfig() {
  // Получение данных о залах из глобального состояния с использованием useSelector
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls;

  // Локальное состояние для хранения выбранного зала
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCinemaHall = _useState2[0],
    setSelectedCinemaHall = _useState2[1];

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Обработчик выбора зала для конфигурации
  var handleSelect = function handleSelect(id) {
    setSelectedCinemaHall(cinemaHalls.find(function (cinemaHall) {
      return cinemaHall.id === id;
    }));
  };

  // Обработчик изменения данных о ценах
  var handleChange = function handleChange(_ref) {
    var target = _ref.target;
    var name = target.name;
    var value = target.value;
    setSelectedCinemaHall(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  // Обработчик сохранения изменений
  var handleSave = function handleSave() {
    if (selectedCinemaHall) {
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateHall)(selectedCinemaHall));
      setSelectedCinemaHall(null);
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getHalls)());
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "conf-step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "conf-step__paragraph",
      children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043B \u0434\u043B\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"
    }), cinemaHalls.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      className: "conf-step__selectors-box",
      children: cinemaHalls.map(function (cinemaHall) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminPanelComponents_allButtons_choose__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: cinemaHall.name,
          checked: selectedCinemaHall ? cinemaHall.id === selectedCinemaHall.id : false,
          callback: function callback() {
            return handleSelect(cinemaHall.id);
          }
        }, cinemaHall.id);
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      children: "\u0417\u0430\u043B\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B."
    }), selectedCinemaHall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "conf-step__paragraph",
        children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0446\u0435\u043D\u044B \u0434\u043B\u044F \u0442\u0438\u043F\u043E\u0432 \u043A\u0440\u0435\u0441\u0435\u043B:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "conf-step__legend",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
          className: "conf-step__label",
          children: ["\u0426\u0435\u043D\u0430, \u0440\u0443\u0431\u043B\u0435\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            type: "number",
            className: "conf-step__input",
            name: "price_standard",
            value: selectedCinemaHall.price_standard,
            onChange: handleChange
          })]
        }), "\u0437\u0430 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: "standard"
        }), " \u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u043A\u0440\u0435\u0441\u043B\u0430"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "conf-step__legend",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
          className: "conf-step__label",
          children: ["\u0426\u0435\u043D\u0430, \u0440\u0443\u0431\u043B\u0435\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            type: "number",
            className: "conf-step__input",
            name: "price_vip",
            value: selectedCinemaHall.price_vip,
            onChange: handleChange
          })]
        }), "\u0437\u0430 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminActComponents_SeatsAct_seatType__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: "vip"
        }), " VIP \u043A\u0440\u0435\u0441\u043B\u0430"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AdminPanelComponents_allButtons_saveButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        cancel: function cancel() {
          return setSelectedCinemaHall(null);
        },
        save: function save() {
          return handleSave();
        }
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/seance.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/seance.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeanceCard)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminPanelComponents_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminPanelComponents/allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function SeanceCard(props) {
  // Получение данных из глобального состояния с использованием useSelector
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector.cinemaHalls,
    movies = _useSelector.movies;

  // Извлечение данных из пропсов с использованием значений по умолчанию
  var cinema_hall_id = props.cinema_hall_id,
    film_id = props.film_id,
    date = props.date,
    time = props.time,
    callbackSubmit = props.callbackSubmit,
    callbackDelete = props.callbackDelete;

  // Получение текущей даты
  var today = new Date();

  // Начальное состояние формы
  var INIT_STATE = {
    date: date,
    time: time,
    cinemaHall: cinema_hall_id,
    movie: film_id
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INIT_STATE),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];

  // Получение диспатча из React Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Обработчик изменения полей формы
  var handleChange = function handleChange(_ref) {
    var target = _ref.target;
    var name = target.name;
    var value = target.value;
    setForm(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  // Обработчик отправки формы
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    // Форматирование даты и времени для запроса
    var datetime = new Date(form.date);
    var datetimeFormatted = "".concat(datetime.getFullYear(), "-").concat(('0' + (datetime.getMonth() + 1)).slice(-2), "-").concat(('0' + datetime.getDate()).slice(-2), " ").concat(form.time);

    // Вызов коллбэка для добавления сеанса
    callbackSubmit(datetimeFormatted, form.cinemaHall, form.movie).then(function () {
      // Закрытие всплывающего окна и обновление списка сеансов
      dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__.closePopup)());
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_3__.getSeances)());
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    acceptCharset: "utf-8",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "cinemaHall",
      children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043B\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
        className: "conf-step__input",
        name: "cinemaHall",
        defaultValue: cinema_hall_id,
        onChange: handleChange,
        required: true,
        children: cinemaHalls.map(function (cinemaHall) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: cinemaHall.id,
            children: cinemaHall.name
          }, cinemaHall.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "date",
      children: ["\u0414\u0430\u0442\u0430 \u0441\u0435\u0430\u043D\u0441\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "date",
        value: form.date,
        onChange: handleChange,
        name: "date",
        pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}",
        min: "".concat(today.getFullYear(), "-").concat(('0' + (today.getMonth() + 1)).slice(-2), "-").concat(('0' + today.getDate()).slice(-2)),
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "time",
      children: ["\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "time",
        value: form.time,
        onChange: handleChange,
        name: "time",
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "movie",
      children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u043C\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
        className: "conf-step__input",
        name: "movie",
        onChange: handleChange,
        defaultValue: film_id,
        required: true,
        children: movies.map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: movie.id,
            children: movie.title
          }, movie.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AdminPanelComponents_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Добавить сеанс",
      handleDelete: callbackDelete
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigurationsComponents/session.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigurationsComponents/session.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionGrid)
/* harmony export */ });
/* harmony import */ var _AdminActComponents_MainAct_addMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminActComponents/MainAct/addMovie */ "./resources/js/components/Admin/AdminActComponents/MainAct/addMovie.js");
/* harmony import */ var _AdminActComponents_SeancesAct_seances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AdminActComponents/SeancesAct/seances */ "./resources/js/components/Admin/AdminActComponents/SeancesAct/seances.js");
/* harmony import */ var _AdminActComponents_SeancesAct_chooseSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AdminActComponents/SeancesAct/chooseSession */ "./resources/js/components/Admin/AdminActComponents/SeancesAct/chooseSession.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function SessionGrid() {
  // Отображение списка фильмов для добавления сеансов
  // и выбора даты сеанса
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "conf-step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AdminActComponents_MainAct_addMovie__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AdminActComponents_SeancesAct_chooseSession__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AdminActComponents_SeancesAct_seances__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/adminHeader/header.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/adminHeader/header.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StepHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function StepHeader(props) {
  // Состояние для открытия/закрытия раздела
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "conf-step",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("conf-step__header", {
        "conf-step__header_opened": opened,
        "conf-step__header_closed": !opened
      }),
      onClick: function onClick() {
        return setOpened(!opened);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "conf-step__title",
        children: props.title
      })
    }), props.children]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/adminHeader/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/adminHeader/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _Verify_Auth_exit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Verify/Auth/exit */ "./resources/js/components/Admin/Verify/Auth/exit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "page-header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
      className: "page-header__title",
      children: ["\u0418\u0434\u0451\u043C", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: "\u0432"
      }), "\u043A\u0438\u043D\u043E"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "page-header__subtitle",
      children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0440\u0440\u0441\u043A\u0430\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Verify_Auth_exit__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allButtons/button.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allButtons/button.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function Button(props) {
  var text = props.text,
    callback = props.callback,
    className = props.className;
  return (
    /*#__PURE__*/
    // Отображение кнопки с классами и текстом из пропсов
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "conf-step__button conf-step__button-accent ".concat(className || ''),
      onClick: callback // Вызов функции callback при клике на кнопку
      ,
      children: [text, " "]
    })
  );
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allButtons/choose.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allButtons/choose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseHall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ChooseHall(props) {
  var name = props.name,
    checked = props.checked,
    callback = props.callback;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "radio",
      className: "conf-step__radio",
      value: name,
      checked: checked // Проверка, выбрана ли радио-кнопка
      ,
      onChange: callback // Вызов функции обработчика при изменении состояния
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "conf-step__selector",
      children: name
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allButtons/saveButton.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allButtons/saveButton.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function SaveButton(props) {
  var cancel = props.cancel,
    save = props.save;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "conf-step__buttons text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      className: "conf-step__button conf-step__button-regular",
      onClick: cancel,
      children: "\u041E\u0442\u043C\u0435\u043D\u0430"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "submit",
      value: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      className: "conf-step__button conf-step__button-accent",
      onClick: save // Вызов функции save при клике на кнопку
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionButton)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SessionButton(props) {
  var text = props.text,
    handleDelete = props.handleDelete;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); // Получение функции dispatch из Redux

  // Обработчик для отмены (закрытия попапа)
  var CancelPopup = function CancelPopup(e) {
    e.preventDefault();
    dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.closePopup)()); // Вызов экшена для закрытия попапа
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "conf-step__buttons text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "submit",
      value: handleDelete ? "Сохранить" : text,
      className: "conf-step__button conf-step__button-accent"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "conf-step__button conf-step__button-regular",
      onClick: CancelPopup,
      children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
    }), handleDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "conf-step__button conf-step__button-regular",
      onClick: handleDelete,
      children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/add.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/add.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddHall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AddHall(props) {
  var dispatcher = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var editMode = props.editMode;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      hallName: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];

  // Получение данных о залах из состояния Redux
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.admin;
    }),
    hallData = _useSelector.hallData;
  var targetHall = editMode ? hallData.find(function (hall) {
    return hall.id === state.popup.id;
  }) : null;

  // Обработчик изменения полей формы
  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setFormData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  // Обработчик отправки формы
  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    if (editMode) {
      // Обновление данных о зале
      var updatedHallData = _objectSpread(_objectSpread({}, targetHall), {}, {
        hallName: formData.hallName
      });
      dispatcher((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateHall)(updatedHallData)).then(function () {
        dispatcher((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__.closePopup)());
        dispatcher((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getHalls)());
      });
    } else {
      // Создание нового зала
      dispatcher((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.createHall)(formData.hallName)).then(function () {
        dispatcher((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__.closePopup)());
        dispatcher((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getHalls)());
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    acceptCharset: "utf-8",
    onSubmit: handleFormSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      className: "conf-step__label conf-step__label-fullsize",
      htmlFor: "name",
      children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043B\u0430", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        className: "conf-step__input",
        type: "text",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \xAB\u0417\u0430\u043B 1\xBB",
        name: "hallName",
        value: formData.hallName,
        onChange: handleInputChange,
        required: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: editMode ? "Сохранить" : "Добавить зал"
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/delete.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/delete.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteHall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function DeleteHall() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector.id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.admin;
    }),
    cinemaHalls = _useSelector2.cinemaHalls;
  // const { cinemaHalls } = useSelector((state) => state.admin);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var hallToDelete = cinemaHalls.find(function (cinemaHall) {
    return cinemaHall.id === id;
  });
  //const hallToDelete = cinemaHalls.find((cinemaHall) => cinemaHall.id === id).name;

  // const handleDelete = () => {
  //     dispatch(deleteHall(id)).then(() => {
  //         dispatch(closePopup());
  //         dispatch(getHalls());
  //     });
  // };
  var handleDelete = function handleDelete(event) {
    event.preventDefault();

    // Удаление зала и обновление списка
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.deleteHall)(id)).then(function () {
      dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_3__.closePopup)());
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.getHalls)());
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    onSubmit: handleDelete,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
      className: "conf-step__paragraph",
      children: ["\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043B ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: hallToDelete.name
      }), "?"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Удалить"
    })]
  });

  // return (
  //     <div>
  //         <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{hallToDelete.name}</span>?</p>
  //         <SessionButton text={"Удалить"} onSubmit={handleDelete} />
  //     </div>
  // );
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/add.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/add.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddMovie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminConfigurationsComponents_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../AdminConfigurationsComponents/movie */ "./resources/js/components/Admin/AdminConfigurationsComponents/movie.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function AddMovie() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  // Обработчик создания нового фильма
  var handleMovieCreation = function handleMovieCreation(title, description, duration, country, poster) {
    // Диспетчеризация действия создания фильма с переданными данными
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.createMovie)({
      title: title,
      description: description,
      duration: duration,
      country: country,
      poster: poster
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "add-movie-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
      children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0444\u0438\u043B\u044C\u043C\u0430"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AdminConfigurationsComponents_movie__WEBPACK_IMPORTED_MODULE_3__["default"], {
      callbackSubmit: handleMovieCreation // Передача обработчика создания фильма
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/delete.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/delete.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDeleteMovie)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function CustomDeleteMovie() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector.id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    movies = _useSelector2.movies;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Получение названия фильма для вывода в сообщении
  var title = movies.find(function (movie) {
    return movie.id === id;
  }).title;
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    // Выполнение удаления фильма и дополнительных действий
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.deleteMovie)(id)).then(function () {
      dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__.closePopup)());
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.getSeances)()); // Обновление сеансов
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.getMovies)()); // Обновление списка фильмов
    });
  };

  return (
    /*#__PURE__*/
    // Форма для подтверждения удаления фильма
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "conf-step__paragraph",
        children: ["\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u043C ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: title
        }), "?"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Удалить"
      })]
    })
  );
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/edit.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/edit.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditMovie)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminConfigurationsComponents_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../AdminConfigurationsComponents/movie */ "./resources/js/components/Admin/AdminConfigurationsComponents/movie.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function EditMovie() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Получаем ID фильма из состояния всплывающего окна
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector.id;

  // Получаем список фильмов из состояния
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    movies = _useSelector2.movies;

  // Находим фильм по ID из состояния всплывающего окна
  var movie = movies.find(function (movie) {
    return movie.id === id;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AdminConfigurationsComponents_movie__WEBPACK_IMPORTED_MODULE_3__["default"]
  // Передаем данные о фильме в компонент MovieCard для редактирования
  , {
    title: movie.title,
    description: movie.description,
    duration: movie.duration,
    country: movie.country,
    poster: movie.poster

    // Callback-функция для обновления информации о фильме
    ,
    callbackSubmit: function callbackSubmit(title, description, duration, country, poster) {
      return dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateMovie)({
        id: id,
        title: title,
        description: description,
        duration: duration,
        country: country,
        poster: poster
      }));
    }

    // Callback-функция для показа всплывающего окна удаления фильма
    ,
    callbackDelete: function callbackDelete() {
      return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
        title: "Удаление фильма",
        form: "deleteMovie",
        id: id
      }));
    }
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/Popup/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/Popup/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _Images_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Images/close.png */ "./resources/js/components/Images/close.png");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HallsPopup_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HallsPopup/add */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/add.js");
/* harmony import */ var _HallsPopup_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HallsPopup/delete */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/HallsPopup/delete.js");
/* harmony import */ var _MoviePopup_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MoviePopup/add */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/add.js");
/* harmony import */ var _MoviePopup_delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MoviePopup/delete */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/delete.js");
/* harmony import */ var _SeancePopup_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SeancePopup/add */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/add.js");
/* harmony import */ var _SeancePopup_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SeancePopup/delete */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/delete.js");
/* harmony import */ var _MoviePopup_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MoviePopup/edit */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/MoviePopup/edit.js");
/* harmony import */ var _SeancePopup_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SeancePopup/edit */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/edit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














function Popup() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    active = _useSelector.active,
    title = _useSelector.title,
    form = _useSelector.form;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Определение компонентов формы на основе значения `form`
  var formsComponents = {
    addHall: _HallsPopup_add__WEBPACK_IMPORTED_MODULE_4__["default"],
    editHall: _HallsPopup_add__WEBPACK_IMPORTED_MODULE_4__["default"],
    deleteHall: _HallsPopup_delete__WEBPACK_IMPORTED_MODULE_5__["default"],
    addMovie: _MoviePopup_add__WEBPACK_IMPORTED_MODULE_6__["default"],
    editMovie: _MoviePopup_edit__WEBPACK_IMPORTED_MODULE_10__["default"],
    deleteMovie: _MoviePopup_delete__WEBPACK_IMPORTED_MODULE_7__["default"],
    addSeance: _SeancePopup_add__WEBPACK_IMPORTED_MODULE_8__["default"],
    editSeance: _SeancePopup_edit__WEBPACK_IMPORTED_MODULE_11__["default"],
    deleteSeance: _SeancePopup_delete__WEBPACK_IMPORTED_MODULE_9__["default"]
  };

  // Компонент формы, который будет отображен на основе значения `form`
  var FormComponent = formsComponents[form];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("popup", {
      "active": active
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "popup__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "popup__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "popup__header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h2", {
            className: "popup__title",
            children: [title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
              className: "popup__dismiss",
              onClick: function onClick() {
                return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.closePopup)());
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                src: _Images_close_png__WEBPACK_IMPORTED_MODULE_2__["default"],
                alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "popup__wrapper",
          children: FormComponent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(FormComponent, {})
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/add.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/add.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddSeance)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminConfigurationsComponents_seance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AdminConfigurationsComponents/seance */ "./resources/js/components/Admin/AdminConfigurationsComponents/seance.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function AddSeance() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Получение списка фильмов и выбранной даты из состояния
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    movies = _useSelector.movies,
    chosenDate = _useSelector.chosenDate;

  // Получение ID зала из состояния всплывающего окна
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector2.id;
  return (
    /*#__PURE__*/
    // Компонент SeanceCard для добавления сеанса
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AdminConfigurationsComponents_seance__WEBPACK_IMPORTED_MODULE_2__["default"]
    // Передача callback-функции для создания сеанса
    , {
      callbackSubmit: function callbackSubmit(datetime, cinema_hall_id, film_id) {
        return dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.createSeance)({
          datetime: datetime,
          cinema_hall_id: cinema_hall_id,
          film_id: film_id
        }));
      }
      // Передача ID зала
      ,
      cinema_hall_id: id
      // Передача ID первого фильма в списке
      ,
      film_id: movies[0].id
      // Передача выбранной даты и времени сеанса
      ,
      date: chosenDate,
      time: "00:00"
    })
  );
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/delete.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/delete.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteSeance)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../allButtons/sessionButton */ "./resources/js/components/Admin/AdminPanelComponents/allButtons/sessionButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function DeleteSeance() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector.id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    seances = _useSelector2.seances,
    movies = _useSelector2.movies;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Находим сеанс по ID из состояния всплывающего окна
  var seance = seances.find(function (seance) {
    return +seance.id === id;
  });

  // Находим название фильма для данного сеанса
  var title = movies.find(function (movie) {
    return movie.id === +seance.film_id;
  }).title;

  // Обработчик для удаления сеанса
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    // Диспатчим действие удаления сеанса, после чего обновляем список сеансов
    dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.deleteSeance)(id)).then(function () {
      dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_2__.closePopup)());
      dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_1__.getSeances)());
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
      className: "conf-step__paragraph",
      children: ["\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043D\u044F\u0442\u044C \u0441 \u0441\u0435\u0430\u043D\u0441\u0430 \u0444\u0438\u043B\u044C\u043C ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: title
      }), "?"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_allButtons_sessionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Удалить"
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/edit.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPanelComponents/allPopup/SeancePopup/edit.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditSeance)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../reducers/createPopup */ "./resources/js/reducers/createPopup.js");
/* harmony import */ var _reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../reducers/createAdmin */ "./resources/js/reducers/createAdmin.js");
/* harmony import */ var _AdminConfigurationsComponents_seance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../AdminConfigurationsComponents/seance */ "./resources/js/components/Admin/AdminConfigurationsComponents/seance.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function EditSeance() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.popup;
    }),
    id = _useSelector.id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.admin;
    }),
    seances = _useSelector2.seances;

  // Находим сеанс по ID из состояния всплывающего окна
  var session = seances.find(function (session) {
    return session.id === id;
  });

  // Преобразуем дату и время сеанса в соответствующие форматы
  var datetime = new Date(session.datetime);
  var date = "".concat(datetime.getFullYear(), "-").concat(('0' + (datetime.getMonth() + 1)).slice(-2), "-").concat(('0' + datetime.getDate()).slice(-2));
  var time = "".concat(('0' + datetime.getHours()).slice(-2), ":").concat(('0' + datetime.getMinutes()).slice(-2));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AdminConfigurationsComponents_seance__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cinema_hall_id: session.cinema_hall_id,
    film_id: session.film_id,
    date: date,
    time: time,
    callbackSubmit: function callbackSubmit(datetime, cinema_hall_id, film_id) {
      return dispatch((0,_reducers_createAdmin__WEBPACK_IMPORTED_MODULE_2__.updateSeance)({
        id: id,
        datetime: datetime,
        cinema_hall_id: cinema_hall_id,
        film_id: film_id
      }));
    },
    callbackDelete: function callbackDelete() {
      return dispatch((0,_reducers_createPopup__WEBPACK_IMPORTED_MODULE_1__.showPopup)({
        title: "Удаление сеанса",
        form: "deleteSeance",
        id: id
      }));
    }
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/Main.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Admin/Main.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _AdminPanelComponents_adminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPanelComponents/adminHeader */ "./resources/js/components/Admin/AdminPanelComponents/adminHeader/index.js");
/* harmony import */ var _AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPanelComponents/adminHeader/header */ "./resources/js/components/Admin/AdminPanelComponents/adminHeader/header.js");
/* harmony import */ var _AdminConfigurationsComponents_cinemaControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminConfigurationsComponents/cinemaControl */ "./resources/js/components/Admin/AdminConfigurationsComponents/cinemaControl.js");
/* harmony import */ var _AdminConfigurationsComponents_cinemaConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminConfigurationsComponents/cinemaConfig */ "./resources/js/components/Admin/AdminConfigurationsComponents/cinemaConfig.js");
/* harmony import */ var _AdminConfigurationsComponents_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdminConfigurationsComponents/price */ "./resources/js/components/Admin/AdminConfigurationsComponents/price.js");
/* harmony import */ var _AdminConfigurationsComponents_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminConfigurationsComponents/session */ "./resources/js/components/Admin/AdminConfigurationsComponents/session.js");
/* harmony import */ var _AdminConfigurationsComponents_filmsSales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminConfigurationsComponents/filmsSales */ "./resources/js/components/Admin/AdminConfigurationsComponents/filmsSales.js");
/* harmony import */ var _AdminPanelComponents_allPopup_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdminPanelComponents/allPopup/Popup */ "./resources/js/components/Admin/AdminPanelComponents/allPopup/Popup/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function Main() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_allPopup_Popup__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main", {
      className: "conf-steps",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Управление залами',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminConfigurationsComponents_cinemaControl__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Конфигурация залов',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminConfigurationsComponents_cinemaConfig__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Конфигурация цен',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminConfigurationsComponents_price__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Сетка сеансов',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminConfigurationsComponents_session__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminPanelComponents_adminHeader_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Открыть продажи',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AdminConfigurationsComponents_filmsSales__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Admin/Verify/Auth/exit.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/Verify/Auth/exit.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Exit)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_createAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/createAuth */ "./resources/js/reducers/createAuth.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Exit() {
  // Извлечение информации о токене из состояния
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.auth;
    }),
    token = _useSelector.token;

  // Получение диспетчера Redux
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  // Обработчик для выхода из системы (вызов действия logout)
  var handleClick = function handleClick() {
    dispatch((0,_reducers_createAuth__WEBPACK_IMPORTED_MODULE_1__.logout)());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: token && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "page-header__exit",
      onClick: handleClick,
      children: "\u0412\u044B\u0445\u043E\u0434"
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Client/additionalComponents/Formatting/timeFormWords.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Client/additionalComponents/Formatting/timeFormWords.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRussianMinutesLabel)
/* harmony export */ });
function getRussianMinutesLabel(number) {
  var num = Math.abs(number);
  var remainder100 = num % 100;
  var remainder10 = num % 10;
  if (remainder100 >= 5 && remainder100 <= 20) {
    return 'минут';
  }
  if (remainder10 === 1) {
    return 'минута';
  }
  if (remainder10 >= 2 && remainder10 <= 4) {
    return 'минуты';
  }
  return 'минут';
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./resources/js/components/Images/close.png":
/*!**************************************************!*\
  !*** ./resources/js/components/Images/close.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/close.png?e6bf2a5c2fe1361d1a56a65c76d25003");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ })

}]);