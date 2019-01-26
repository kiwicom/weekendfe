webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContentContainer */ "./components/ContentContainer.js");
/* harmony import */ var _components_Interests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Interests */ "./components/Interests.js");
/* harmony import */ var _components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PlacesToVisit */ "./components/PlacesToVisit.js");
/* harmony import */ var _components_TopPart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TopPart */ "./components/TopPart.js");

var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/pages/index.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var NomadForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__NomadForm",
  componentId: "dj234z-0"
})(["max-width:816px;"]);
var StyledOrigin = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__StyledOrigin",
  componentId: "dj234z-1"
})(["max-width:756px;"]);

var placesToUrl = function placesToUrl(places) {
  return places.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        place = _ref2[0],
        days = _ref2[1];

    return [place && place.code, days];
  }).toString().replace(/,/g, "-");
};

var changePlacesState = function changePlacesState(newPlaces) {
  var newUrl = {
    pathname: next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname,
    query: _objectSpread({}, next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query, {
      stopovers: placesToUrl(newPlaces)
    }) // eslint-disable-next-line fp/no-mutating-methods

  };
  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(newUrl, newUrl, {
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

var FlyForm = function FlyForm(_ref3) {
  var query = _ref3.query,
      places = _ref3.places;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ContentContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "title1",
    spaceAfter: "largest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "What are you interested in?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Interests__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultValue: query.interest || _components_TopPart__WEBPACK_IMPORTED_MODULE_9__["defaultValues"].interest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NomadForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledOrigin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "title1",
    spaceAfter: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "What destinations do you want to visit?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_TopPart__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, query, {
    adults: query.adults || _components_TopPart__WEBPACK_IMPORTED_MODULE_9__["defaultValues"].adults,
    flyFrom: query.flyFrom || _components_TopPart__WEBPACK_IMPORTED_MODULE_9__["defaultValues"].flyFrom,
    flyTo: query.flyTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_PlacesToVisit__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: changePlacesState,
    defaultValue: places,
    onSearchClick: function onSearchClick(selectedPlaces) {
      var values = _objectSpread({}, _components_TopPart__WEBPACK_IMPORTED_MODULE_9__["defaultValues"], next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query);

      var newUrl = {
        pathname: "".concat('', "/result"),
        query: _objectSpread({}, values, {
          dateFrom: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(values.dateFrom, "YYYY-MM-DD"),
          dateTo: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(values.dateTo, "YYYY-MM-DD"),
          flyFrom: typeof values.flyFrom === "string" ? values.flyFrom : values.flyFrom.id,
          stopovers: placesToUrl(selectedPlaces),
          places: undefined
        })
      };
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(newUrl); // eslint-disable-line
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })));
};

FlyForm.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var req, query, places;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref4.req, query = _ref4.query;
            places = UrlToPlaces(query.stopovers) || _components_TopPart__WEBPACK_IMPORTED_MODULE_9__["defaultValues"].places;
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
    return _ref5.apply(this, arguments);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2ac2ff4a9f88d6fbe52c.hot-update.js.map