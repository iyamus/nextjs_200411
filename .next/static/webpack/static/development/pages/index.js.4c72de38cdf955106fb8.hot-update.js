webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/iyamus/Documents/Dev/React/200411_nextjs/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.avatar()),
      avartar = _useState2[0],
      setAvatar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(faker__WEBPACK_IMPORTED_MODULE_3___default.a.internet.email()),
      email = _useState3[0],
      setEmail = _useState3[1];

  var generate = function generate() {
    setName(faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName());
    setAvatar(faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.avatar());
    setEmail(faker__WEBPACK_IMPORTED_MODULE_3___default.a.internet.email());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Index"), __jsx("button", {
    className: "btn btn-primary",
    onClick: generate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Change"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("dl", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Avatar"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: avartar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 46
    }
  })), __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Name"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, name), __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Email"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, email))));
}
;

/***/ })

})
//# sourceMappingURL=index.js.4c72de38cdf955106fb8.hot-update.js.map