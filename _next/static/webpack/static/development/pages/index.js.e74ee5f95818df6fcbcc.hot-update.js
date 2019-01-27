webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlacesToVisit.js":
/*!*************************************!*\
  !*** ./components/PlacesToVisit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Heading */ "./node_modules/@kiwicom/orbit-components/lib/Heading/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Stack */ "./node_modules/@kiwicom/orbit-components/lib/Stack/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Button */ "./node_modules/@kiwicom/orbit-components/lib/Button/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kiwicom_orbit_components_lib_icons_CloseCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/icons/CloseCircle */ "./node_modules/@kiwicom/orbit-components/lib/icons/CloseCircle.js");
/* harmony import */ var _kiwicom_orbit_components_lib_icons_CloseCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_icons_CloseCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kiwicom_orbit_components_lib_icons_Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/icons/Plus */ "./node_modules/@kiwicom/orbit-components/lib/icons/Plus.js");
/* harmony import */ var _kiwicom_orbit_components_lib_icons_Plus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_icons_Plus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kiwicom_orbit_components_lib_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/icons/Search */ "./node_modules/@kiwicom/orbit-components/lib/icons/Search.js");
/* harmony import */ var _kiwicom_orbit_components_lib_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PlacePickerLocations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlacePickerLocations */ "./components/PlacePickerLocations.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Slider */ "./components/Slider/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debug */ "./components/debug.js");
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useOnClickOutside */ "./components/useOnClickOutside.js");
var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/components/PlacesToVisit.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var StyledButtons = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "PlacesToVisit__StyledButtons",
  componentId: "sc-1f5pc4-0"
})(["max-width:756px;"]);

var PlaceToVisit = function PlaceToVisit(_ref) {
  var place = _ref.place,
      changePlace = _ref.changePlace,
      _ref$days = _ref.days,
      days = _ref$days === void 0 ? [2, 8] : _ref$days,
      changeDays = _ref.changeDays,
      onRemoveClick = _ref.onRemoveClick;

  // const [tripFrom, setFrom] = useState(place)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(days),
      _useState2 = _slicedToArray(_useState, 2),
      tripDays = _useState2[0],
      setDaysState = _useState2[1];

  var setDays = function setDays(daysChanged) {
    setDaysState(daysChanged);
    if (changeDays) changeDays(daysChanged);
  }; // Create a ref that we add to the element for which we want to detect outside clicks


  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // State for our slider

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpenSlider = _useState4[0],
      setSliderVisibility = _useState4[1]; // Call hook passing in the ref and a function to call on outside click


  Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_11__["default"])(ref, function () {
    return setSliderVisibility(false);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlacePickerLocations__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultValue: place && place.id,
    onChange: changePlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    openRef: ref,
    isOpen: isOpenSlider,
    onFocus: function onFocus() {
      return setSliderVisibility(true);
    },
    defaultValues: tripDays,
    onChange: function onChange(from, to) {
      return setDays([from, to]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "secondary",
    iconLeft: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_icons_CloseCircle__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }),
    disabled: !onRemoveClick,
    onClick: onRemoveClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

var defaultDays = [2, 5];

function reducer(places, _ref2) {
  var type = _ref2.type,
      payload = _ref2.payload;
  var newPlaces = places && places.concat();

  switch (type) {
    case "reset":
      return payload || [["Australia", defaultDays]];

    case "addPlace":
      return places.concat([[null, [1, 3]]]);

    case "removePlace":
      return places.filter(function (val, index) {
        return index !== payload.index;
      });

    case "changeDays":
      newPlaces[payload.index][1] = payload.days;
      return newPlaces;

    case "changePlace":
      newPlaces[payload.index][0] = payload.place;
      return newPlaces;

    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return places;
  }
}

var logReducer = function logReducer(fn, logger) {
  return (// eslint-disable-next-line func-names
    function () {
      // eslint-disable-next-line
      var before = arguments[0]; // eslint-disable-next-line

      var result = fn.apply(void 0, arguments); // fn.apply(null, arguments)

      if (logger && before !== result) logger(result);
      return result;
    }
  );
};

var PlacesToVisit = function PlacesToVisit(_ref3) {
  var _ref3$defaultValue = _ref3.defaultValue,
      defaultValue = _ref3$defaultValue === void 0 ? [["Mexico", defaultDays]] : _ref3$defaultValue,
      _ref3$onChange = _ref3.onChange,
      onChange = _ref3$onChange === void 0 ? function (state) {
    return console.log("new places to visit", state);
  } : _ref3$onChange,
      onSearchClick = _ref3.onSearchClick,
      _ref3$showDebug = _ref3.showDebug,
      showDebug = _ref3$showDebug === void 0 ? false : _ref3$showDebug;
  var loggReducer = logReducer(reducer, onChange);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(loggReducer, defaultValue, {
    type: "reset",
    payload: defaultValue
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      places = _useReducer2[0],
      dispatch = _useReducer2[1];

  var action = function action(type, payload) {
    return dispatch({
      type: type,
      payload: payload
    });
  };

  var removePlace = function removePlace(index) {
    return function () {
      return action("removePlace", {
        index: index
      });
    };
  };

  var changeDays = function changeDays(index) {
    return function (days) {
      return action("changeDays", {
        index: index,
        days: days
      });
    };
  };

  var changePlace = function changePlace(index) {
    return function (place) {
      return action("changePlace", {
        index: index,
        place: place
      });
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "title2",
    spaceAfter: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Places to visit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    spaceAfter: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, places.map(function (_ref4, i) {
    var _ref5 = _slicedToArray(_ref4, 2),
        place = _ref5[0],
        days = _ref5[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlaceToVisit, {
      onRemoveClick: i !== 0 ? removePlace(i) : undefined,
      place: place,
      days: days // eslint-disable-next-line
      ,
      key: i,
      changeDays: changeDays(i),
      changePlace: changePlace(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "secondary",
    iconLeft: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_icons_Plus__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }),
    block: true,
    disabled: !places[places.length - 1][0],
    onClick: function onClick() {
      return action("addPlace");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Add destination"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    iconLeft: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }),
    block: true,
    disabled: typeof onSearchClick !== "function",
    onClick: function onClick() {
      return onSearchClick(places);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Search"))), showDebug && [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_debug__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, places, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }))]);
};

/* harmony default export */ __webpack_exports__["default"] = (PlacesToVisit);

/***/ })

})
//# sourceMappingURL=index.js.e74ee5f95818df6fcbcc.hot-update.js.map