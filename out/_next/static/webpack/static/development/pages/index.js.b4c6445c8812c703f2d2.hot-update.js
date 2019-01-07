webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/query.js":
/*!*****************************!*\
  !*** ./components/query.js ***!
  \*****************************/
/*! exports provided: continentsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continentsQuery", function() { return continentsQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug */ "./components/debug.js");
var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/components/query.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    continents {\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var continentsQuery2 = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", variableDefinitions: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "country" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "code" }, value: { kind: "StringValue", value: "CZ", block: false } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "code" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "native" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "phone" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "languages" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "currency" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "emoji" }, arguments: [], directives: [] }] } }] } }], loc: { start: 0, end: 133, source: { body: "query {\n  country(code: \"CZ\") {\n    name\n    code\n    native\n    phone\n    languages {\n      name\n    }\n    currency\n    emoji\n  }\n}\n", name: "GraphQL request", locationOffset: { line: 1, column: 1 } } } };
var continentsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: continentsQuery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        continents = _ref.data.continents;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "error");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_debug__WEBPACK_IMPORTED_MODULE_3__["default"], {
      continents: continents,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: continentsQuery2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        country = _ref2.data.country;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "error");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_debug__WEBPACK_IMPORTED_MODULE_3__["default"], {
      continents: country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b4c6445c8812c703f2d2.hot-update.js.map