webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProfileImage.js":
/*!************************************!*\
  !*** ./components/ProfileImage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/iyamus/Documents/Dev/React/200411_nextjs/components/ProfileImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProfileImage(props) {
  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.size || 300),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.size || 300),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.url || 'https://placeimg.com/300/300/man'),
      url = _useState3[0],
      setUrl = _useState3[1]; // this.state.width = this.state.height = props.size || 200;
  // this.state.url = props.url || 'ttps://placeimg.com/300/300/animals';


  var style = {
    display: 'inline-block',
    width: '{ width }',
    height: '{ height }',
    backgroundImage: "url(".concat(url, ")"),
    backgroundSize: 'cover',
    borderRadius: '50%'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, width, "-", height));
}

/***/ })

})
//# sourceMappingURL=index.js.a3267277da97a020b9a4.hot-update.js.map