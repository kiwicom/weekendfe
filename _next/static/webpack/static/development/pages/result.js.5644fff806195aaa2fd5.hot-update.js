webpackHotUpdate("static/development/pages/result.js",{

/***/ "./components/Itinerary/Route.js":
/*!***************************************!*\
  !*** ./components/Itinerary/Route.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kiwicom_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kiwicom/relay */ "./node_modules/@kiwicom/relay/src/index.js");
/* harmony import */ var _kiwicom_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_relay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _kiwicom_orbit_components_lib_getTokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/getTokens */ "./node_modules/@kiwicom/orbit-components/lib/getTokens.js");
/* harmony import */ var _kiwicom_orbit_components_lib_getTokens__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_getTokens__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kiwicom_orbit_components_lib_CarrierLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/CarrierLogo */ "./node_modules/@kiwicom/orbit-components/lib/CarrierLogo/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_CarrierLogo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_CarrierLogo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kiwicom_orbit_components_lib_Hide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Hide */ "./node_modules/@kiwicom/orbit-components/lib/Hide/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Hide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Hide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Text */ "./node_modules/@kiwicom/orbit-components/lib/Text/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Stack */ "./node_modules/@kiwicom/orbit-components/lib/Stack/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _kiwicom_orbit_components_lib_icons_FlightDirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/icons/FlightDirect */ "./node_modules/@kiwicom/orbit-components/lib/icons/FlightDirect.js");
/* harmony import */ var _kiwicom_orbit_components_lib_icons_FlightDirect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_icons_FlightDirect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/ludekveprek/WebstormProjects/weekendfe/components/Itinerary/Route.js";










var StyledNights = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Route__StyledNights",
  componentId: "sc-2qnjaq-0"
})(["display:flex;flex-direction:row;align-items:center;width:150px;"]);
var StyledLine = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Route__StyledLine",
  componentId: "sc-2qnjaq-1"
})(["display:block;height:1px;width:150px;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteCloudNormal;
});

var getCarrierFromParts = function getCarrierFromParts(parts) {
  return parts.map(function (part) {
    return {
      code: part.carrier
    };
  });
};

var Route = function Route(_ref2) {
  var flight = _ref2.flight,
      nights = _ref2.nights;
  var parts = flight.parts,
      from = flight.from,
      to = flight.to;
  var carriers = getCarrierFromParts(parts);
  var departureTimeLocal = new Date(from.timeLocal * 1000);
  var arrivalTimeLocal = new Date(to.timeLocal * 1000);
  var departureTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["format"])(departureTimeLocal, "HH:mm");
  var departureArrival = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["format"])(arrivalTimeLocal, "HH:mm");
  var hours = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInHours"])(arrivalTimeLocal, departureTimeLocal);
  var minutes = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInMinutes"])(arrivalTimeLocal, departureTimeLocal) - hours * 60;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "row",
    shrink: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "column",
    shrink: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "row",
    shrink: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "column",
    grow: false,
    basis: "150px",
    spacing: "comfy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "row",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: {
      orbit: _kiwicom_orbit_components_lib_getTokens__WEBPACK_IMPORTED_MODULE_3___default()()
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_CarrierLogo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    carriers: carriers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, carriers.map(function (carrier) {
    return carrier.code;
  }).join(", ")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "column",
    shrink: true,
    basis: "250px",
    spacing: "compact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "column",
    spacing: "extraTight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    weight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "".concat(departureTime, " - ").concat(departureArrival)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["format"])(departureTimeLocal, "ddd D MMM")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "column",
    spacing: "extraTight",
    shrink: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Hide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: ["smallMobile", "mediumMobile", "largeMobile"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, hours && "".concat(hours, "h"), " ", minutes && "".concat(minutes, "m")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "row",
    align: "center",
    spacing: "tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: "small",
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, from.city, " ", from.iata), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_icons_FlightDirect__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: "small",
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, to.city, " ", to.iata))))), nights && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_7___default.a, {
    direction: "row",
    shrink: true,
    grow: false,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledLine, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledNights, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiwicom_orbit_components_lib_Text__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, nights <= 1 ? "".concat(nights, " night ") : "".concat(nights, " nights "), "in ", to.city)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_kiwicom_relay__WEBPACK_IMPORTED_MODULE_1__["createFragmentContainer"])(Route, {
  flight: function flight() {
    var node = __webpack_require__(/*! ./__generated__/Route_flight.graphql */ "./components/Itinerary/__generated__/Route_flight.graphql.js");

    if (node.hash && node.hash !== "3cebdf443597d3513853438caf85ce88") {
      console.error("The definition of 'Route_flight' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/Route_flight.graphql */ "./components/Itinerary/__generated__/Route_flight.graphql.js");
  }
}));

/***/ })

})
//# sourceMappingURL=result.js.5644fff806195aaa2fd5.hot-update.js.map