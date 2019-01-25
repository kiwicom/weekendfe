webpackHotUpdate("static/development/pages/downshift.js",{

/***/ "./pages/downshift.js":
/*!****************************!*\
  !*** ./pages/downshift.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Heading */ "./node_modules/@kiwicom/orbit-components/lib/Heading/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Stack */ "./node_modules/@kiwicom/orbit-components/lib/Stack/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Checkbox */ "./node_modules/@kiwicom/orbit-components/lib/Checkbox/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContentContainer */ "./components/ContentContainer.js");
/* harmony import */ var _components_PlacePickerLocations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PlacePickerLocations */ "./components/PlacePickerLocations.js");
/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DatePicker */ "./components/DatePicker.js");
/* harmony import */ var _components_Interests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Interests */ "./components/Interests.js");
/* harmony import */ var _components_useOnClickOutside__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/useOnClickOutside */ "./components/useOnClickOutside.js");
/* harmony import */ var _components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PlacesToVisit */ "./components/PlacesToVisit.js");
/* harmony import */ var _components_Stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Stepper */ "./components/Stepper.js");
/* harmony import */ var _components_useUrl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/useUrl */ "./components/useUrl.js");

var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/pages/downshift.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var NomadForm = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "downshift__NomadForm",
  componentId: "sc-11ojhqj-0"
})(["max-width:696px;"]);
var StyledOrigin = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "downshift__StyledOrigin",
  componentId: "sc-11ojhqj-1"
})(["max-width:640px;"]);
var defaultValues = {
  adults: 2,
  interest: "gastronomy",
  flyFrom: {
    id: "brno_cz",
    name: "Brno"
  },
  dateFrom: new Date(),
  places: [[{
    name: "Italy",
    id: "IT",
    code: "IT"
  }, [2, 5]]]
};

var TopPart = function TopPart(_ref) {
  var flyFrom = _ref.flyFrom,
      flyTo = _ref.flyTo,
      dateFrom = _ref.dateFrom,
      dateTo = _ref.dateTo,
      adults = _ref.adults;

  var _useUrl = Object(_components_useUrl__WEBPACK_IMPORTED_MODULE_15__["default"])(flyFrom || defaultValues.flyFrom, "flyFrom", function (item) {
    return item ? item.id : undefined;
  }),
      _useUrl2 = _slicedToArray(_useUrl, 2),
      tripFrom = _useUrl2[0],
      setFrom = _useUrl2[1];

  var _useUrl3 = Object(_components_useUrl__WEBPACK_IMPORTED_MODULE_15__["default"])(adults, "adults"),
      _useUrl4 = _slicedToArray(_useUrl3, 2),
      tripAdults = _useUrl4[0],
      setAdults = _useUrl4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Boolean(flyTo)),
      _useState2 = _slicedToArray(_useState, 2),
      showDestination = _useState2[0],
      setDestinationVisibility = _useState2[1];

  var _useUrl5 = Object(_components_useUrl__WEBPACK_IMPORTED_MODULE_15__["default"])(flyTo, "flyTo", function (item) {
    return item ? item.id : undefined;
  }),
      _useUrl6 = _slicedToArray(_useUrl5, 2),
      tripTo = _useUrl6[0],
      setDestination = _useUrl6[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Boolean(dateTo)),
      _useState4 = _slicedToArray(_useState3, 2),
      showReturnDate = _useState4[0],
      setReturnDateVisibility = _useState4[1];

  var _useUrl7 = Object(_components_useUrl__WEBPACK_IMPORTED_MODULE_15__["default"])(dateFrom ? new Date(dateFrom) : defaultValues.dateFrom, "dateFrom", function (date) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, "YYYY-MM-DD");
  }),
      _useUrl8 = _slicedToArray(_useUrl7, 2),
      departureDate = _useUrl8[0],
      setDepartureDate = _useUrl8[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      departureDatePickerOpened = _useState6[0],
      setDepartureDatePickerVisibility = _useState6[1];

  var _useUrl9 = Object(_components_useUrl__WEBPACK_IMPORTED_MODULE_15__["default"])(dateTo ? new Date(dateTo) : Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["addDays"])(new Date(), 10), "dateTo", function (date) {
    return date ? Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, "YYYY-MM-DD") : undefined;
  }),
      _useUrl10 = _slicedToArray(_useUrl9, 2),
      returnDate = _useUrl10[0],
      setReturnDate = _useUrl10[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      returnDatePickerOpened = _useState8[0],
      setReturnDatePickerVisibility = _useState8[1];

  var selectDepartureDate = function selectDepartureDate(date) {
    setDepartureDate(date.date);
    setDepartureDatePickerVisibility(false);
  };

  var selectReturnDate = function selectReturnDate(date) {
    setReturnDate(date.date);
    setReturnDatePickerVisibility(false);
  };

  var departureDatepickerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_components_useOnClickOutside__WEBPACK_IMPORTED_MODULE_12__["default"])(departureDatepickerRef, function () {
    return setDepartureDatePickerVisibility(false);
  });
  var returnDatepickerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_components_useOnClickOutside__WEBPACK_IMPORTED_MODULE_12__["default"])(returnDatepickerRef, function () {
    return setReturnDatePickerVisibility(false);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    direction: "row",
    justify: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    basis: "calc(25% - 16px)",
    shrink: false,
    grow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Stepper__WEBPACK_IMPORTED_MODULE_14__["default"], {
    min: 1,
    max: 20,
    defaultValue: tripAdults,
    onChange: setAdults,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PlacePickerLocations__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "From",
    defaultValue: tripFrom,
    onChange: setFrom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    openRef: departureDatepickerRef,
    label: "Departure",
    onFocus: function onFocus() {
      return setDepartureDatePickerVisibility(true);
    },
    shown: departureDatePickerOpened,
    currentDate: departureDate,
    onDateSelected: selectDepartureDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), (showDestination || showReturnDate) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, showDestination && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PlacePickerLocations__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "To",
    defaultValue: tripTo,
    onChange: setDestination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), showReturnDate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    openRef: returnDatepickerRef,
    label: "Arrival",
    onFocus: function onFocus() {
      return setReturnDatePickerVisibility(true);
    },
    shown: returnDatePickerOpened,
    currentDate: returnDate,
    onDateSelected: selectReturnDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "Return to origin",
    checked: !showDestination,
    onChange: function onChange(e) {
      setDestinationVisibility(!e.target.checked);
      setDestination(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "Set return date",
    checked: showReturnDate,
    onChange: function onChange(e) {
      setReturnDateVisibility(e.target.checked);
      setReturnDate(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })));
};

var placesToUrl = function placesToUrl(places) {
  return places.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        place = _ref3[0],
        days = _ref3[1];

    return [place && place.code, days];
  }).toString().replace(/,/g, "-");
};

var changePlacesState = function changePlacesState(newPlaces) {
  var newUrl = {
    pathname: next_router__WEBPACK_IMPORTED_MODULE_7___default.a.pathname,
    query: _objectSpread({}, next_router__WEBPACK_IMPORTED_MODULE_7___default.a.query, {
      places: placesToUrl(newPlaces)
    }) // eslint-disable-next-line fp/no-mutating-methods

  };
  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(newUrl, newUrl, {
    shallow: true
  });
};

var getPlaceFromString = function getPlaceFromString(val) {
  return typeof val === "string" ? {
    name: "[".concat(val, "]"),
    code: val,
    id: val
  } : val;
}; // Mexico,2,5,Poland,1,3 => [["Mexico", defaultDays]]


var UrlToPlaces = function UrlToPlaces(url) {
  if (!url) return undefined;
  var items = url.split("-");
  var result = []; // eslint-disable-next-line

  for (var i = 0; i < items.length; i += 3) {
    // eslint-disable-next-line fp/no-mutating-methods
    result.push([getPlaceFromString(items[i]), [items[i + 1], items[i + 2]]]);
  }

  return result;
};

var FlyForm = function FlyForm(_ref4) {
  var query = _ref4.query,
      places = _ref4.places;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "title1",
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "What are you interested in?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Interests__WEBPACK_IMPORTED_MODULE_11__["default"], {
    defaultValue: query.interest || defaultValues.interest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NomadForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledOrigin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "title1",
    spaceAfter: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "What destinations do you want to visit?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopPart, _extends({}, query, {
    adults: query.adults || defaultValues.adults,
    flyFrom: getPlaceFromString(query.flyFrom),
    flyTo: getPlaceFromString(query.flyTo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onChange: changePlacesState,
    defaultValue: places,
    onSearchClick: function onSearchClick(selectedPlaces) {
      var values = _objectSpread({}, defaultValues, next_router__WEBPACK_IMPORTED_MODULE_7___default.a.query);

      var newUrl = {
        pathname: "/result",
        query: _objectSpread({}, values, {
          dateFrom: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(values.dateFrom), "DD/MM/YYYY"),
          flyFrom: typeof values.flyFrom === "string" ? values.flyFrom : values.flyFrom.id,
          dateTo: values.dateTo && Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(values.dateTo), "DD/MM/YYYY"),
          stopovers: placesToUrl(selectedPlaces),
          places: undefined
        })
      };
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(newUrl); // eslint-disable-line
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })));
};

FlyForm.getInitialProps =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref5) {
    var req, query, places;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref5.req, query = _ref5.query;
            places = UrlToPlaces(query.places) || defaultValues.places;
            return _context.abrupt("return", {
              query: query,
              places: places
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref6.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (FlyForm);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/downshift")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=downshift.js.6aa96852851a58bbe68b.hot-update.js.map