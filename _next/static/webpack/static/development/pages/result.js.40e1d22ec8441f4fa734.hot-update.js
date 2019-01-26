webpackHotUpdate("static/development/pages/result.js",{

/***/ "./pages/result.js":
/*!*************************!*\
  !*** ./pages/result.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Button */ "./node_modules/@kiwicom/orbit-components/lib/Button/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Stack */ "./node_modules/@kiwicom/orbit-components/lib/Stack/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Heading */ "./node_modules/@kiwicom/orbit-components/lib/Heading/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _kiwicom_orbit_components_lib_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/icons/ChevronLeft */ "./node_modules/@kiwicom/orbit-components/lib/icons/ChevronLeft.js");
/* harmony import */ var _kiwicom_orbit_components_lib_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/query */ "./components/query.js");
/* harmony import */ var _components_debug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/debug */ "./components/debug.js");
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ContentContainer */ "./components/ContentContainer.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Itinerary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Itinerary */ "./components/Itinerary/index.js");

var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/pages/result.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var search = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Search" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "params" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "SearchParams" } } } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "search" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "params" }, value: { kind: "Variable", name: { kind: "Name", value: "params" } } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "price" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "bookingToken" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "route" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "from" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "city" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "iata" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "timeLocal" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "to" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "city" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "iata" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "timeLocal" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "parts" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "carrier" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "from" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "timeLocal" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "to" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "timeLocal" }, arguments: [], directives: [] }] } }] } }, { kind: "Field", name: { kind: "Name", value: "interests" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] }] } }] } }] } }] } }], loc: { start: 0, end: 424, source: { body: "query Search($params: SearchParams!) {\n  search(params: $params) {\n    price\n    bookingToken\n    route {\n      from {\n        city\n        iata\n        timeLocal\n      }\n      to {\n        city\n        iata\n        timeLocal\n      }\n      parts {\n        type\n        carrier\n        from {\n          timeLocal\n        }\n        to {\n          timeLocal\n        }\n      }\n      interests {\n        name\n      }\n    }\n  }\n}\n", name: "GraphQL request", locationOffset: { line: 1, column: 1 } } } };




var ResultsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "result__ResultsContainer",
  componentId: "sc-1qhgnl-0"
})(["max-width:1024px;padding-bottom:90px;"]);
/*
For usage online
{
  "params": {
    "adults": 1,
    "dateFrom": "29/01/2019",
    "dateTo": "29/03/2019",
    "flyFrom": "vienna_at",
    "flyTo": "vienna_at",
    "stopovers": [
      {"locations": ["LON"], "nightsFrom": 1, "nightsTo": 7},
       {"locations": ["PAR"], "nightsFrom": 1, "nightsTo": 7}
    ]
  }
}
*/

var getStopovers = function getStopovers(placesInUrl) {
  if (!placesInUrl) return undefined;
  var items = placesInUrl.split("-");
  var result = []; // eslint-disable-next-line

  for (var i = 0; i < items.length; i += 3) {
    // eslint-disable-next-line fp/no-mutating-methods
    result.push({
      locations: [items[i]],
      nightsFrom: Number(items[i + 1]),
      nightsTo: Number(items[i + 2])
    });
  }

  return result;
};

var formatDate = function formatDate(date) {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(date, "DD/MM/YYYY");
};

var getParamsFromQuery = function getParamsFromQuery(_ref) {
  var _ref$adults = _ref.adults,
      adults = _ref$adults === void 0 ? 1 : _ref$adults,
      dateFrom = _ref.dateFrom,
      dateTo = _ref.dateTo,
      _ref$flyFrom = _ref.flyFrom,
      flyFrom = _ref$flyFrom === void 0 ? "brno_cz" : _ref$flyFrom,
      flyTo = _ref.flyTo,
      stopovers = _ref.stopovers;
  return {
    params: {
      adults: Number(adults),
      dateFrom: formatDate(dateFrom ? new Date(dateFrom) : Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1)),
      dateTo: formatDate(dateTo ? new Date(dateTo) : Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 30)),
      flyFrom: flyFrom,
      flyTo: flyTo || flyFrom,
      stopovers: getStopovers(stopovers) || [{
        locations: ["LON"],
        nightsFrom: 1,
        nightsTo: 7
      }, {
        locations: ["PAR"],
        nightsFrom: 1,
        nightsTo: 7
      }]
    }
  };
};

var Result = function Result(_ref2) {
  var query = _ref2.query;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, query.debug && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_debug__WEBPACK_IMPORTED_MODULE_10__["default"], {
    queryParams: getParamsFromQuery(query),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_query__WEBPACK_IMPORTED_MODULE_9__["default"], {
    query: search,
    variables: getParamsFromQuery(query),
    context: {
      uri: "https://weekend-api.now.sh/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, function (_ref3) {
    var data = _ref3.data;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResultsContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Stack__WEBPACK_IMPORTED_MODULE_5___default.a, {
      direction: "column",
      spacing: "extraLoose",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Heading__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "title1",
      spaceAfter: "largest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Choose your flight combination"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Itinerary__WEBPACK_IMPORTED_MODULE_13__["default"], {
      flights: data.search.slice(0, 10),
      interest: query.interest,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      leftActions: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        type: "secondary",
        iconLeft: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kiwicom_orbit_components_lib_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }),
        onClick: function onClick() {
          return (// eslint-disable-next-line fp/no-mutating-methods
            next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
              pathname: "/",
              query: next_router__WEBPACK_IMPORTED_MODULE_8___default.a.query
            })
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Previous Step"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  }));
}; // enable passing query to main component


Result.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var query;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref4.query;
            return _context.abrupt("return", {
              query: query
            });

          case 2:
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

/* harmony default export */ __webpack_exports__["default"] = (Result);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/result")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=result.js.40e1d22ec8441f4fa734.hot-update.js.map