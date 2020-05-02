(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/App.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/App.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#d-navigation .nav-link {\r\n    border-radius: 4px;\r\n    padding: .3rem 1rem;\r\n    transition: all 0.2s;\r\n}\r\n\r\n#d-navigation .nav-link.active {\r\n    background: #dc3545;\r\n    border-radius: 4px;\r\n    color: #f7f7f7 !important;\r\n}\r\n\r\n#d-navigation .nav-link:hover {\r\n    background: #dc3545;\r\n    color: #f7f7f7 !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/App.css":
/*!*****************************************!*\
  !*** ./resources/js/components/App.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/App.js":
/*!****************************************!*\
  !*** ./resources/js/components/App.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_Routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/Routes.js */ "./resources/js/components/routes/Routes.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./resources/js/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./resources/js/components/store/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/AppConfig */ "./resources/js/components/config/AppConfig.js");
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_AppConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilities_loader_FloatLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/loader/FloatLoader */ "./resources/js/components/utilities/loader/FloatLoader.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].configure();
/**
 * Axios Global Config
 *
 * @type {string}
 */

axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.baseURL = _config_AppConfig__WEBPACK_IMPORTED_MODULE_8__["API_URL"];

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.request.use(function (config) {
    setIsLoading(true);
    return config;
  }, function (error) {
    setIsLoading(false);
    return Promise.reject(error);
  });
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.response.use(function (response) {
    setIsLoading(false);
    return response;
  }, function (error) {
    setIsLoading(false);
    return Promise.reject(error);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utilities_loader_FloatLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isLoading: true
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_Routes_js__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./resources/js/components/components/Auth/LoginComponent.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/components/Auth/LoginComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var LoginComponent = /*#__PURE__*/function (_Component) {
  _inherits(LoginComponent, _Component);

  var _super = _createSuper(LoginComponent);

  function LoginComponent(props) {
    var _this;

    _classCallCheck(this, LoginComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _this.state = {
      email: "",
      errors: {}
    };
    _this.email = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(LoginComponent, [{
    key: "handleChange",
    value: function handleChange(e) {
      e.preventDefault();
      this.setState({
        email: this.email.current.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();

      if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(this.state.email)) {
        return Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"], 'error', {
          message: "Invalid request."
        });
      }

      localStorage.setItem('AUTH_EMAIL', this.state.email);
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"], 'success', {
        message: "Successfully login."
      });
      setTimeout(function () {
        window.location.href = "/orders";
      }, 500);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["setPageTitle"])();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "",
        method: "POST",
        onSubmit: function onSubmit(event) {
          _this2.handleSubmit(event);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "form__title"
      }, "Login Form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form__group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon fa fa-user-o",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        ref: this.email,
        value: this.state.email,
        placeholder: "Email Address",
        required: true,
        onChange: function onChange(event) {
          _this2.handleChange(event);
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form__group d-flex align-items-center justify-content-between mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form__footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Log in"
      })))));
    }
  }]);

  return LoginComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginComponent));

/***/ }),

/***/ "./resources/js/components/components/Auth/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/components/Auth/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LoginComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginComponent */ "./resources/js/components/components/Auth/LoginComponent.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AuthComponent = function AuthComponent(props) {
  // showPassword sate
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1]; // showPassword handleClick


  function handleShowPassword(e) {
    e.preventDefault();
    setShowPassword(showPassword === false);
  } // goBack


  function goBack(e) {
    e.preventDefault();
    props.history.goBack();
  } // login background


  var background = 'rgba(0, 0, 0, 0.4) url(/img/pizza.jpeg)  center / cover no-repeat';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "login",
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-7 login__bg d-none d-lg-block",
    style: {
      background: background,
      height: '100vh'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-5 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "//",
    id: "back",
    className: "btn btn-primary rounded-circle",
    onClick: goBack
  }, " \u2190 Back "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-content px-4"
  }, function () {
    switch (props.status) {
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
          showPassword: showPassword,
          handleShowPassword: handleShowPassword
        });
    }
  }()))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AuthComponent));

/***/ }),

/***/ "./resources/js/components/components/Checkout/CheckoutComponent.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/components/Checkout/CheckoutComponent.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/AppConfig */ "./resources/js/components/config/AppConfig.js");
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_AppConfig__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_loader_FloatLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/loader/FloatLoader */ "./resources/js/components/utilities/loader/FloatLoader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var CheckoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(CheckoutComponent, _Component);

  var _super = _createSuper(CheckoutComponent);

  function CheckoutComponent(props) {
    var _this;

    _classCallCheck(this, CheckoutComponent);

    _this = _super.call(this, props);
    _this.state = {
      order: {
        name: "",
        email: "",
        address: "",
        phone: "",
        orderDetails: _this.props.cart,
        deliveryExpense: _config_AppConfig__WEBPACK_IMPORTED_MODULE_3__["DELIVERY_EXPENSE"]
      },
      isLoading: false
    };
    _this.name = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.email = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.address = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.phone = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckoutComponent, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.setState({
        order: _objectSpread(_objectSpread({}, this.state.order), {}, {
          name: this.name.current.value,
          email: this.email.current.value,
          address: this.address.current.value,
          phone: this.phone.current.value
        })
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var orderTotal = Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(this.getTotalDues());
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/orders", this.state.order).then(function (response) {
        if (response.data.success) {
          var orderId = response.data.last_insert_id;
          Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'success', response);

          _this2.setState({
            isLoading: false
          });

          _this2.resetForm();

          _this2.props.history.push("/confirm/".concat(orderId, "/").concat(orderTotal));

          _this2.props.REMOVE_ALL_CART_ITEMS();
        }
      })["catch"](function (error) {
        _this2.setState({
          isLoading: false
        });

        if (axios__WEBPACK_IMPORTED_MODULE_5___default.a.isCancel(error)) {
          console.log(error.message);
        } else {
          Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'error', error);
        }
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        order: _objectSpread(_objectSpread({}, this.state.order), {}, {
          name: "",
          email: "",
          address: "",
          phone: "",
          orderDetails: []
        })
      });
    }
  }, {
    key: "handleRemoveCartItem",
    value: function handleRemoveCartItem(productId) {
      if (window.confirm("Are you sure?")) {
        this.props.REMOVE_CART_ITEM(productId);
        Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'success', {
          message: "Successfully removed from cart"
        });
      }
    }
  }, {
    key: "handleUpdateCartItem",
    value: function handleUpdateCartItem(productId, event) {
      var newQuantity = parseInt(event.target.value);
      var updatedCartObj = this.props.cart.reduce(function (newCart, item, index) {
        if (item.productId === productId) {
          item.quantity = newQuantity;
          item.total = item.price * newQuantity;
          newCart.push(item);
        } else {
          newCart.push(item);
        }

        return newCart;
      }, []);
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'success', {
        message: "Successfully updated the item."
      });
      this.props.UPDATE_CART_ITEMS(updatedCartObj);
    }
  }, {
    key: "getCartTotal",
    value: function getCartTotal() {
      var total = 0;
      this.props.cart.forEach(function (item) {
        total += item.total;
      });
      return total;
    }
  }, {
    key: "getTotalDues",
    value: function getTotalDues() {
      var total = 0;
      this.props.cart.forEach(function (item) {
        total += item.total;
      });
      total += parseFloat(_config_AppConfig__WEBPACK_IMPORTED_MODULE_3__["DELIVERY_EXPENSE"]);
      return total;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken.source();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.cart !== this.props.cart) {
        this.setState({
          order: _objectSpread(_objectSpread({}, this.state.order), {}, {
            orderDetails: this.props.cart
          })
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "checkout",
        className: "py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkout__info text-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkout__table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-bordered table-condensed"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "#")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Particulars")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Quantity")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Total")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.props.cart.map(function (item, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, key + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-sm",
          onClick: function onClick() {
            _this3.handleRemoveCartItem(item.productId);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-times",
          "aria-hidden": "true"
        }), " Remove")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "mb-1",
          title: item.content
        }, "- ", item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: item.image,
          target: "_blank",
          rel: "noopener noreferrer",
          title: item.content
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.image,
          width: "80",
          className: "img-thumbnail",
          alt: item.title
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "number",
          defaultValue: item.quantity,
          min: "1",
          className: "form-control col-3 text-center",
          onChange: _this3.handleUpdateCartItem.bind(_this3, item.productId)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(item.total)));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "total_checkout_price font-weight-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "5",
        className: "text-right"
      }, "Sub Total:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(this.getCartTotal()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "total_checkout_price font-weight-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "5",
        className: "text-right"
      }, "(+) Delivery Expense:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(_config_AppConfig__WEBPACK_IMPORTED_MODULE_3__["DELIVERY_EXPENSE"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "total_checkout_price font-weight-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "5",
        className: "text-right"
      }, "Total Dues:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["makeCurrency"])(this.getTotalDues()))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 offset-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "",
        method: "POST",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "mb-3 mt-4 text-center",
        style: {
          borderBottom: "1px solid #ddd",
          paddingBottom: "7px"
        }
      }, "Shipping Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "font-weight-bold"
      }, "Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        ref: this.name,
        value: this.state.order.name,
        required: true,
        placeholder: "Name",
        onChange: this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "font-weight-bold"
      }, "Email ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Email",
        required: true,
        ref: this.email,
        value: this.state.order.email,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "font-weight-bold"
      }, "Address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        ref: this.address,
        value: this.state.order.address,
        required: true,
        placeholder: "Address",
        style: {
          resizeY: "none"
        },
        onChange: this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "font-weight-bold"
      }, "Phone ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        ref: this.phone,
        value: this.state.order.phone,
        required: true,
        placeholder: "Phone",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-block text-uppercase"
      }, "Place Your Order")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utilities_loader_FloatLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: this.state.isLoading
      }));
    }
  }]);

  return CheckoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    REMOVE_CART_ITEM: function REMOVE_CART_ITEM(productId) {
      return dispatch({
        type: 'REMOVE_CART_ITEM',
        productId: productId
      });
    },
    REMOVE_ALL_CART_ITEMS: function REMOVE_ALL_CART_ITEMS() {
      return dispatch({
        type: 'REMOVE_ALL_CART_ITEMS'
      });
    },
    UPDATE_CART_ITEMS: function UPDATE_CART_ITEMS(payload) {
      return dispatch({
        type: 'UPDATE_CART_ITEMS',
        payload: payload
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(CheckoutComponent)));

/***/ }),

/***/ "./resources/js/components/components/Checkout/ConfirmComponent.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/components/Checkout/ConfirmComponent.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ConfirmComponent = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmComponent, _Component);

  var _super = _createSuper(ConfirmComponent);

  function ConfirmComponent() {
    _classCallCheck(this, ConfirmComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["setPageTitle"])('Home');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "text-uppercase                            ",
        style: {
          padding: "170px 0 170px 0",
          lineHeight: 1
        }
      }, "Thank you for your order :)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "fs-22"
      }, "Order ID: #", this.props.match.params.orderId, " | Order Total: ", this.props.match.params.orderTotal))))));
    }
  }]);

  return ConfirmComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ConfirmComponent));

/***/ }),

/***/ "./resources/js/components/components/Footer/FooterComponent.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/components/Footer/FooterComponent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);




var FooterComponent = function FooterComponent(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // back-to-top
    // slideDown Or slideUp
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).scroll(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).scrollTop() > 50) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".back-to-top").slideDown('slow');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".back-to-top").slideUp('slow');
      }
    });
  }, []); // handleBackToTop

  function handleBackToTop(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("html, body").animate({
      scrollTop: 0
    }, 600);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer_logo text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/logo.png",
    alt: "",
    className: "img-fluid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copy_right text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9", new Date().getFullYear(), ". All Rights Reserved. Developed by Hasan Uj Jaman :)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/#",
    rel: "noreferrer noopener",
    className: "back-to-top",
    onClick: function onClick(e) {
      handleBackToTop(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-up"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterComponent);

/***/ }),

/***/ "./resources/js/components/components/Header/AdminHeaderComponent.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/components/Header/AdminHeaderComponent.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libraries/AuthLibrary */ "./resources/js/components/libraries/AuthLibrary.js");
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/AppConfig */ "./resources/js/components/config/AppConfig.js");
/* harmony import */ var _config_AppConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_AppConfig__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var AdminHeaderComponent = function AdminHeaderComponent(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "d-headerTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light py-4 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "navbar-brand d-inline-flex align-items-center py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/logo.png",
    width: "220",
    alt: "Logo",
    className: "ml-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerTop-navbar ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "//",
    className: "nav-link text-dark fs-17 dropdown-toggle",
    id: "navbarDropdownMenuLink",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, _config_AppConfig__WEBPACK_IMPORTED_MODULE_3__["APP_CURRENCY_TYPE"] === 'euro' ? 'EURO€' : 'USD$'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right rounded-0",
    "aria-labelledby": "navbarDropdownMenuLink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "//",
    className: "dropdown-item",
    onClick: function onClick(event) {
      event.preventDefault();
      localStorage.setItem('APP_CURRENCY_TYPE', 'euro');
      window.location.reload();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-euro"
  }), "\xA0\xA0EURO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "//",
    className: "dropdown-item",
    onClick: function onClick(event) {
      event.preventDefault();
      localStorage.setItem('APP_CURRENCY_TYPE', 'usd');
      window.location.reload();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-usd"
  }), "\xA0\xA0USD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/checkout",
    className: "nav-link text-dark fs-17"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg",
    className: "img-fluid rounded-circle mr-2",
    alt: "cart-icon",
    style: {
      width: '40px',
      height: '40px',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-secondary"
  }, props.cart.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link text-dark fs-17 dropdown-toggle",
    href: "//",
    id: "navbarDropdownMenuLink",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    className: "img-fluid rounded-circle mr-2",
    alt: "profile-pic",
    style: {
      width: '40px',
      height: '40px',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }), true), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right rounded-0",
    "aria-labelledby": "navbarDropdownMenuLink"
  }, !_libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__["default"].status() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "dropdown-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-sign-in"
  }), "\xA0\xA0Login") : null, _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__["default"].status() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "//",
    className: "dropdown-item",
    onClick: function onClick(event) {
      event.preventDefault();
      _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__["default"].logout();
      setTimeout(function () {
        window.location.href = '/';
      }, 500);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-power-off"
  }), "\xA0\xA0Signout") : null))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AdminHeaderComponent)));

/***/ }),

/***/ "./resources/js/components/components/Navigation/AdminNavigationComponent.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/components/Navigation/AdminNavigationComponent.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libraries/AuthLibrary */ "./resources/js/components/libraries/AuthLibrary.js");




var AdminNavigationComponent = function AdminNavigationComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "d-navigation",
    className: "border-top border-bottom py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light px-0 py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-navigation-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    activeClassName: "active",
    className: "nav-link text-dark fs-18 "
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/products",
    activeClassName: "active",
    className: "nav-link text-dark fs-18 "
  }, "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/checkout",
    activeClassName: "active",
    className: "nav-link text-dark fs-18 "
  }, "Checkout")), _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__["default"].status() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/orders",
    activeClassName: "active",
    className: "nav-link text-dark fs-18 "
  }, "Orders")) : null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AdminNavigationComponent));

/***/ }),

/***/ "./resources/js/components/components/Order/OrderComponent.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/components/Order/OrderComponent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libraries/AuthLibrary */ "./resources/js/components/libraries/AuthLibrary.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RegisteredCourseComponent = /*#__PURE__*/function (_Component) {
  _inherits(RegisteredCourseComponent, _Component);

  var _super = _createSuper(RegisteredCourseComponent);

  function RegisteredCourseComponent(props) {
    var _this;

    _classCallCheck(this, RegisteredCourseComponent);

    _this = _super.call(this, props);
    _this.state = {
      orders: []
    };
    return _this;
  }

  _createClass(RegisteredCourseComponent, [{
    key: "loadOrders",
    value: function loadOrders() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/orders", {
        cancelToken: this.axiosCancelSource.token,
        params: {
          email: _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_6__["default"].email()
        }
      }).then(function (response) {
        var orderObj = response.data.data;

        if (response.data) {
          if (_this2._isMounted) {
            _this2.setState({
              orders: orderObj
            }, function () {
              Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["initDataTable"])();
            });
          }
        }
      })["catch"](function (error) {
        if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(error)) {
          console.log(error.message);
        } else {
          Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"], 'error', error);
        }
      });
    }
  }, {
    key: "getOrderTotal",
    value: function getOrderTotal(order) {
      var total = 0;
      order.orderDetails.forEach(function (item) {
        total += item.quantity * item.price;
      });
      total += parseFloat(order.delivery_expense);
      return total;
    }
  }, {
    key: "getOrderItems",
    value: function getOrderItems(order) {
      var items = "";
      order.orderDetails.forEach(function (item) {
        items += "<kbd class='p-1 d-inline-block bg-success' style=\"margin-bottom: 1px;\">".concat(item.product.title, " (").concat(item.quantity, " x ").concat(Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["makeCurrency"])(item.price), " = ").concat(Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["makeCurrency"])(item.quantity * item.price), ")</kbd><br />");
      });
      items += "<kbd class='p-1 d-inline-block bg-danger'>DELIVERY EXPENSE: ".concat(Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["makeCurrency"])(order.delivery_expense), "</kbd>");
      return items;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      this.loadOrders();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "d-courses",
        className: "py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "category-files"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-striped table-bordered dt-responsive order-listing nowrap w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.orders.map(function (order, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(moment__WEBPACK_IMPORTED_MODULE_3__["default"])(order.createdAt).format('DD MMM, YYYY hh:mm A')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          dangerouslySetInnerHTML: {
            __html: _this3.getOrderItems(order)
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_4__["makeCurrency"])(_this3.getOrderTotal(order))));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total Amount"))))))))));
    }
  }]);

  return RegisteredCourseComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(RegisteredCourseComponent));

/***/ }),

/***/ "./resources/js/components/components/Product/ProductComponent.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/components/Product/ProductComponent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ProductComponent = /*#__PURE__*/function (_Component) {
  _inherits(ProductComponent, _Component);

  var _super = _createSuper(ProductComponent);

  function ProductComponent(props) {
    var _this;

    _classCallCheck(this, ProductComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _this.state = {
      products: []
    };
    return _this;
  }

  _createClass(ProductComponent, [{
    key: "loadProducts",
    value: function loadProducts() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/products", {
        cancelToken: this.axiosCancelSource.token
      }).then(function (response) {
        var productObj = response.data.data;

        if (productObj) {
          if (_this2._isMounted) {
            _this2.setState({
              products: productObj
            });
          }
        }
      })["catch"](function (error) {
        if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(error)) {
          console.log(error.message);
        } else {
          Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'error', error);
        }
      });
    }
  }, {
    key: "handleAddToCartItem",
    value: function handleAddToCartItem(product) {
      if (this.isExistInCart(product)) {
        return Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'warning', {
          message: "Already added into the cart."
        });
      } else {
        this.props.ADD_CART_ITEM({
          productId: product.id,
          title: product.title,
          content: product.content,
          image: product.image,
          quantity: 1,
          price: product.price,
          total: product.price * 1
        });
        Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["toastNotify"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"], 'success', {
          message: "Successfully added to cart."
        });
        this.reload();
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this3 = this;

      var current = this.props.location.pathname;
      this.props.history.replace("/reload");
      setTimeout(function () {
        _this3.props.history.replace(current);
      });
    }
  }, {
    key: "isExistInCart",
    value: function isExistInCart(product) {
      var isExisted = false;
      this.props.cart.forEach(function (item) {
        if (item.productId === product.id) {
          isExisted = true;
        }
      });
      return isExisted;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      this.loadProducts();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "product"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product__posts mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.state.products.map(function (product, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "col-md-3 mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "post-slide border p-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "post-img"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: product.image,
          alt: product.title
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "post-review"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "post-title mt-2"
        }, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "post-description",
          title: striptags__WEBPACK_IMPORTED_MODULE_5___default()(product.content)
        }, striptags__WEBPACK_IMPORTED_MODULE_5___default()(product.content).substring(0, 120) + '...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "post-title text-success mt-2"
        }, Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["makeCurrency"])(product.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-block mt-3 text-uppercase",
          onClick: function onClick() {
            _this4.handleAddToCartItem(product);
          }
        }, "Add to Cart"))));
      }))))));
    }
  }]);

  return ProductComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    ADD_CART_ITEM: function ADD_CART_ITEM(payload) {
      return dispatch({
        type: 'ADD_CART_ITEM',
        payload: payload
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ProductComponent)));

/***/ }),

/***/ "./resources/js/components/components/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/components/index.js ***!
  \*****************************************************/
/*! exports provided: ProductComponent, OrderComponent, CheckoutComponent, ConfirmComponent, AuthComponent, AdminHeaderComponent, AdminNavigationComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ "./resources/js/components/components/Auth/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header_AdminHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/AdminHeaderComponent */ "./resources/js/components/components/Header/AdminHeaderComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return _Header_AdminHeaderComponent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Navigation_AdminNavigationComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation/AdminNavigationComponent */ "./resources/js/components/components/Navigation/AdminNavigationComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminNavigationComponent", function() { return _Navigation_AdminNavigationComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Footer_FooterComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer/FooterComponent */ "./resources/js/components/components/Footer/FooterComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _Footer_FooterComponent__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Order_OrderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Order/OrderComponent */ "./resources/js/components/components/Order/OrderComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return _Order_OrderComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Checkout_CheckoutComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Checkout/CheckoutComponent */ "./resources/js/components/components/Checkout/CheckoutComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return _Checkout_CheckoutComponent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Checkout_ConfirmComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checkout/ConfirmComponent */ "./resources/js/components/components/Checkout/ConfirmComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return _Checkout_ConfirmComponent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Product_ProductComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product/ProductComponent */ "./resources/js/components/components/Product/ProductComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _Product_ProductComponent__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./resources/js/components/config/AppConfig.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/config/AppConfig.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * API Server URL
 *
 * @type {string}
 */
exports.API_URL = process.env.REACT_APP_API_URL || "";
/**
 * Delivery Expense
 *
 * @type {*|string}
 */

exports.DELIVERY_EXPENSE = process.env.REACT_APP_DELIVERY_EXPENSE || 0.50;
/**
 * Application Currency
 *
 * @type {string}
 */

exports.APP_CURRENCY_TYPE = localStorage.getItem('APP_CURRENCY_TYPE') || 'usd';
/**
 * Delivery Expense
 *
 * @type {*|string}
 */

exports.USD_TO_EURO_RATE = process.env.REACT_APP_USD_TO_EURO_RATE || 0.92;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/components/helpers/AppHelper.js":
/*!******************************************************!*\
  !*** ./resources/js/components/helpers/AppHelper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _require = __webpack_require__(/*! ../config/AppConfig */ "./resources/js/components/config/AppConfig.js"),
    USD_TO_EURO_RATE = _require.USD_TO_EURO_RATE,
    APP_CURRENCY_TYPE = _require.APP_CURRENCY_TYPE;
/**
 * Init data table
 */


exports.initDataTable = function () {
  window.$(".order-listing").dataTable({
    iDisplayLength: 10,
    retrieve: true
  });
};
/**
 * Toast Notification
 *
 * @param toast
 * @param type
 * @param error
 * @returns {ToastId | void | never | *|*}
 */


exports.toastNotify = function (toast, type, error) {
  var message = "";

  if (!_.isUndefined(error.data) && !_.isUndefined(error.data.message)) {
    // Success Message
    message = error.data.message;
  } else if (!_.isUndefined(error.response) && !_.isUndefined(error.response.data)) {
    // Error Message
    message = error.response.data.message;
  } else {
    // Error Message
    message = error.message;
  }

  if (type === 'success') {
    return toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  } else if (type === 'info') {
    return toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  } else if (type === 'warning') {
    return toast.warn(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  } else if (type === 'error') {
    return toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
};
/**
 * Making title from slug
 *
 * @param slug
 * @returns {*}
 */


function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}
/**
 * Set page title
 *
 * @param title
 */


exports.setPageTitle = function (title) {
  if (!_.isEmpty(title)) {
    document.title = title + ' | Yummy Pizza';
  } else {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    document.title = makeTitle(page) + ' | Yummy Pizza';
  }
};
/**
 * Currency Converter
 *
 * @param amount
 * @returns {string}
 */


exports.makeCurrency = function (amount) {
  if (APP_CURRENCY_TYPE === 'euro') {
    var amountCalc = parseFloat(amount) * parseFloat(USD_TO_EURO_RATE);
    return "\u20AC".concat(amountCalc.toFixed(2));
  } else {
    var _amountCalc = parseFloat(amount);

    return "$".concat(_amountCalc.toFixed(2));
  }
};

/***/ }),

/***/ "./resources/js/components/helpers/SafeRouteHelper.js":
/*!************************************************************!*\
  !*** ./resources/js/components/helpers/SafeRouteHelper.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libraries/AuthLibrary */ "./resources/js/components/libraries/AuthLibrary.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SafeRouteHelper = function SafeRouteHelper(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: function render(props) {
      if (_libraries_AuthLibrary__WEBPACK_IMPORTED_MODULE_2__["default"].status()) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/login"
        });
      }
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SafeRouteHelper);

/***/ }),

/***/ "./resources/js/components/libraries/AuthLibrary.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/libraries/AuthLibrary.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Auth Service
 */
var AuthLibrary = function AuthLibrary() {
  _classCallCheck(this, AuthLibrary);

  _defineProperty(this, "logout", function () {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  _defineProperty(this, "status", function () {
    return Boolean(localStorage.getItem('AUTH_EMAIL'));
  });

  _defineProperty(this, "email", function () {
    return localStorage.getItem('AUTH_EMAIL') || "";
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new AuthLibrary());

/***/ }),

/***/ "./resources/js/components/pages/Checkout.js":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Checkout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./resources/js/components/components/index.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__);




var Checkout = function Checkout() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["setPageTitle"])();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["AdminHeaderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./resources/js/components/pages/Confirm.js":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Confirm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ "./resources/js/components/components/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Confirm = /*#__PURE__*/function (_Component) {
  _inherits(Confirm, _Component);

  var _super = _createSuper(Confirm);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _super.apply(this, arguments);
  }

  _createClass(Confirm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["setPageTitle"])('Confirm');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminHeaderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], null));
    }
  }]);

  return Confirm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./resources/js/components/pages/Home.js":
/*!***********************************************!*\
  !*** ./resources/js/components/pages/Home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ "./resources/js/components/components/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.axiosCancelSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_3__["setPageTitle"])('Home');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.axiosCancelSource.cancel('Cancel request.');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminHeaderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          padding: "200px 0 200px 0"
        }
      }, "Welcome to, Yummi Pizza :)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/components/pages/Login.js":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Login.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./resources/js/components/components/index.js");



var Login = function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/js/components/pages/Order.js":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Order.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ "./resources/js/components/components/index.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__);




var Course = function Course() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["setPageTitle"])();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminHeaderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ }),

/***/ "./resources/js/components/pages/Product.js":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Product.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./resources/js/components/components/index.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/AppHelper */ "./resources/js/components/helpers/AppHelper.js");
/* harmony import */ var _helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__);




var Product = function Product() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helpers_AppHelper__WEBPACK_IMPORTED_MODULE_2__["setPageTitle"])();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["AdminHeaderComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/components/reducers/cartReducer.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/reducers/cartReducer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  cart: []
};

function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var cartObj = state.cart;

  switch (action.type) {
    case "ADD_CART_ITEM":
      cartObj.push(action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: cartObj
      });

    case "UPDATE_CART_ITEMS":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case "REMOVE_CART_ITEM":
      var newCartObj = cartObj.filter(function (item) {
        return item.productId !== action.productId;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: newCartObj
      });

    case "REMOVE_ALL_CART_ITEMS":
      cartObj = [];
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: cartObj
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./resources/js/components/reducers/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/reducers/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./resources/js/components/reducers/cartReducer.js");


var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./resources/js/components/routes/Routes.js":
/*!**************************************************!*\
  !*** ./resources/js/components/routes/Routes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_SafeRouteHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/SafeRouteHelper */ "./resources/js/components/helpers/SafeRouteHelper.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home */ "./resources/js/components/pages/Home.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Login */ "./resources/js/components/pages/Login.js");
/* harmony import */ var _pages_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Order */ "./resources/js/components/pages/Order.js");
/* harmony import */ var _pages_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Product */ "./resources/js/components/pages/Product.js");
/* harmony import */ var _pages_Checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Checkout */ "./resources/js/components/pages/Checkout.js");
/* harmony import */ var _utilities_errors_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/errors/NotFound */ "./resources/js/components/utilities/errors/NotFound.js");
/* harmony import */ var _pages_Confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Confirm */ "./resources/js/components/pages/Confirm.js");











var Routes = function Routes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _pages_Login__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/products",
    component: _pages_Product__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/checkout",
    component: _pages_Checkout__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/confirm/:orderId/:orderTotal",
    component: _pages_Confirm__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/reload",
    component: null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_SafeRouteHelper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/orders",
    component: _pages_Order__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "*",
    component: _utilities_errors_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./resources/js/components/store/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/store/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./resources/js/components/reducers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Example: https://github.com/the-road-to-learn-react/react-redux-example
 * localStorage: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
 */



var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {// ignore write errors
  }
};

var persistedState = loadState();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], persistedState);
store.subscribe(function () {
  saveState(_objectSpread({}, store.getState()));
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/js/components/utilities/errors/NotFound.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/utilities/errors/NotFound.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center justify-content-center text-center",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-meh-o fa-5x text-danger",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mb-1 text-danger mt-3"
  }, " Error #404 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-dark"
  }, " \u2014 The page you requested has flown the coop ")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./resources/js/components/utilities/loader/FloatLoader.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/utilities/loader/FloatLoader.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FloatLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./resources/js/components/utilities/loader/Loader.css");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_css__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @return {null}
 */

function FloatLoader(props) {
  if (!props.isLoading) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "preFloatLoader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle-loader"
  })));
}

/***/ })

}]);