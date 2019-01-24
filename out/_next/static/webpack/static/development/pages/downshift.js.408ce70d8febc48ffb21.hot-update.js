webpackHotUpdate("static/development/pages/downshift.js",{

/***/ "./components/query.js":
/*!*****************************!*\
  !*** ./components/query.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kiwicom_orbit_components_lib_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Alert */ "./node_modules/@kiwicom/orbit-components/lib/Alert/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kiwicom_orbit_components_lib_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Loading */ "./node_modules/@kiwicom/orbit-components/lib/Loading/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Loading__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./debug */ "./components/debug.js");
var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/components/query.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Loading__WEBPACK_IMPORTED_MODULE_3___default.a, {
      loading: true,
      type: "boxLoader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "critical",
      title: "Error!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "$", error.message);
    return props.children ? props.children({
      loading: loading,
      error: error,
      data: data
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_debug__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, data, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  });
});

/***/ })

})
//# sourceMappingURL=downshift.js.408ce70d8febc48ffb21.hot-update.js.map