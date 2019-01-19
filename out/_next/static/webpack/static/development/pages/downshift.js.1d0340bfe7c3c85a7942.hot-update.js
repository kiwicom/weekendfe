webpackHotUpdate("static/development/pages/downshift.js",{

/***/ "./pages/downshift.js":
/*!****************************!*\
  !*** ./pages/downshift.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Heading */ "./node_modules/@kiwicom/orbit-components/lib/Heading/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Stack */ "./node_modules/@kiwicom/orbit-components/lib/Stack/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Checkbox */ "./node_modules/@kiwicom/orbit-components/lib/Checkbox/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContentContainer */ "./components/ContentContainer.js");
/* harmony import */ var _components_PlacePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PlacePicker */ "./components/PlacePicker.js");
/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DatePicker */ "./components/DatePicker.js");
/* harmony import */ var _components_Interests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Interests */ "./components/Interests.js");
/* harmony import */ var _components_debug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/debug */ "./components/debug.js");
/* harmony import */ var _components_useOnClickOutside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/useOnClickOutside */ "./components/useOnClickOutside.js");
/* harmony import */ var _components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PlacesToVisit */ "./components/PlacesToVisit.js");
var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/pages/downshift.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var NomadForm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "downshift__NomadForm",
  componentId: "sc-11ojhqj-0"
})(["max-width:696px;"]);
var StyledOrigin = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "downshift__StyledOrigin",
  componentId: "sc-11ojhqj-1"
})(["max-width:640px;"]);

var TopPart = function TopPart() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Czech Republic"),
      _useState2 = _slicedToArray(_useState, 2),
      tripFrom = _useState2[0],
      setFrom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tripTo = _useState4[0],
      setDestination = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showDestination = _useState6[0],
      setDestinationVisibility = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showReturnDate = _useState8[0],
      setReturnDateVisibility = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDate = _useState10[0],
      setDate = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      returnDate = _useState12[0],
      setReturnDate = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      datePickerOpened = _useState14[0],
      setDatePickerVisibility = _useState14[1];

  var selectDate = function selectDate(date) {
    setDate(date.date);
    setDatePickerVisibility(false);
  };

  var openDatePicker = function openDatePicker() {
    return setDatePickerVisibility(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlacePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "From",
    defaultValue: tripFrom,
    onChange: setFrom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DatePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Departure",
    onFocus: openDatePicker // TODO: onBlur or clickOutside ref
    // onBlur={closeDatePicker}
    ,
    shown: datePickerOpened,
    currentDate: selectedDate,
    onDateSelected: selectDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, showDestination && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlacePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "To",
    defaultValue: tripTo,
    onChange: setDestination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), showReturnDate && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DatePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Arrival",
    onFocus: openDatePicker // TODO: onBlur or clickOutside ref
    // onBlur={closeDatePicker}
    ,
    shown: datePickerOpened,
    currentDate: selectedDate,
    onDateSelected: selectDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Return to origin",
    checked: !showDestination,
    onChange: function onChange(e) {
      setDestinationVisibility(!e.target.checked);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Set return date",
    checked: !showReturnDate,
    onChange: function onChange(e) {
      setReturnDateVisibility(!e.target.checked);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })));
};

var DownShift = function DownShift() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "title1",
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "What are you interested in?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Interests__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NomadForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledOrigin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "title1",
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "What destinations do you want to visit?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopPart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DownShift);
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
//# sourceMappingURL=downshift.js.1d0340bfe7c3c85a7942.hot-update.js.map