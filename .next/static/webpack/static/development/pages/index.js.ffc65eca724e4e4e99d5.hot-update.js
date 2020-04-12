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
  var generate = function generate() {
    console.log(faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName());
    console.log(faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.avatar());
    console.log(faker__WEBPACK_IMPORTED_MODULE_3___default.a.internet.email());
    userData.name = faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName();
  };

  var userData = {
    name: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName(),
    avartar: faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.avatar(),
    email: faker__WEBPACK_IMPORTED_MODULE_3___default.a.internet.email()
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Index"), __jsx("button", {
    className: "btn btn-primary",
    onClick: generate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Button"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("dl", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Avatar"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, userData.avartar), __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Name"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, userData.name), __jsx("dt", {
    className: "col-sm-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Email"), __jsx("dd", {
    className: "col-sm-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, userData.email))));
}
;

/***/ })

})
//# sourceMappingURL=index.js.ffc65eca724e4e4e99d5.hot-update.js.map