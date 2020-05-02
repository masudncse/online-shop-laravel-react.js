(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-toastify/dist/ReactToastify.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-toastify/dist/ReactToastify.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Toastify__toast-container {\n  z-index: 9999;\n  -webkit-transform: translate3d(0, 0, 9999px);\n  position: fixed;\n  padding: 4px;\n  width: 320px;\n  box-sizing: border-box;\n  color: #fff; }\n  .Toastify__toast-container--top-left {\n    top: 1em;\n    left: 1em; }\n  .Toastify__toast-container--top-center {\n    top: 1em;\n    left: 50%;\n    margin-left: -160px; }\n  .Toastify__toast-container--top-right {\n    top: 1em;\n    right: 1em; }\n  .Toastify__toast-container--bottom-left {\n    bottom: 1em;\n    left: 1em; }\n  .Toastify__toast-container--bottom-center {\n    bottom: 1em;\n    left: 50%;\n    margin-left: -160px; }\n  .Toastify__toast-container--bottom-right {\n    bottom: 1em;\n    right: 1em; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast-container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0; }\n    .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {\n      top: 0; }\n    .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {\n      bottom: 0; }\n    .Toastify__toast-container--rtl {\n      right: 0;\n      left: initial; } }\n\n.Toastify__toast {\n  position: relative;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 8px;\n  border-radius: 1px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: space-between;\n  max-height: 800px;\n  overflow: hidden;\n  font-family: sans-serif;\n  cursor: pointer;\n  direction: ltr; }\n  .Toastify__toast--rtl {\n    direction: rtl; }\n  .Toastify__toast--default {\n    background: #fff;\n    color: #aaa; }\n  .Toastify__toast--info {\n    background: #3498db; }\n  .Toastify__toast--success {\n    background: #07bc0c; }\n  .Toastify__toast--warning {\n    background: #f1c40f; }\n  .Toastify__toast--error {\n    background: #e74c3c; }\n  .Toastify__toast-body {\n    margin: auto 0;\n    flex: 1; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast {\n    margin-bottom: 0; } }\n\n.Toastify__close-button {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: 0.3s ease;\n  align-self: flex-start; }\n  .Toastify__close-button--default {\n    color: #000;\n    opacity: 0.3; }\n  .Toastify__close-button:hover, .Toastify__close-button:focus {\n    opacity: 1; }\n\n@-webkit-keyframes Toastify__trackProgress {\n  0% {\n    transform: scaleX(1); }\n  100% {\n    transform: scaleX(0); } }\n\n@keyframes Toastify__trackProgress {\n  0% {\n    transform: scaleX(1); }\n  100% {\n    transform: scaleX(0); } }\n\n.Toastify__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n  opacity: 0.7;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left; }\n  .Toastify__progress-bar--animated {\n    -webkit-animation: Toastify__trackProgress linear 1 forwards;\n            animation: Toastify__trackProgress linear 1 forwards; }\n  .Toastify__progress-bar--controlled {\n    transition: transform .2s; }\n  .Toastify__progress-bar--rtl {\n    right: 0;\n    left: initial;\n    transform-origin: right; }\n  .Toastify__progress-bar--default {\n    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }\n\n@-webkit-keyframes Toastify__bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@-webkit-keyframes Toastify__bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes Toastify__bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0); } }\n\n@-webkit-keyframes Toastify__bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    transform: translate3d(5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    transform: translate3d(5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@-webkit-keyframes Toastify__bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes Toastify__bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0); } }\n\n@-webkit-keyframes Toastify__bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    transform: translate3d(0, -5px, 0); }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    transform: translate3d(0, -5px, 0); }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@-webkit-keyframes Toastify__bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes Toastify__bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0); } }\n\n@-webkit-keyframes Toastify__bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    transform: translate3d(0, 5px, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    transform: translate3d(0, 5px, 0); }\n  to {\n    transform: none; } }\n\n@-webkit-keyframes Toastify__bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes Toastify__bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0); } }\n\n.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {\n  -webkit-animation-name: Toastify__bounceInLeft;\n          animation-name: Toastify__bounceInLeft; }\n\n.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {\n  -webkit-animation-name: Toastify__bounceInRight;\n          animation-name: Toastify__bounceInRight; }\n\n.Toastify__bounce-enter--top-center {\n  -webkit-animation-name: Toastify__bounceInDown;\n          animation-name: Toastify__bounceInDown; }\n\n.Toastify__bounce-enter--bottom-center {\n  -webkit-animation-name: Toastify__bounceInUp;\n          animation-name: Toastify__bounceInUp; }\n\n.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {\n  -webkit-animation-name: Toastify__bounceOutLeft;\n          animation-name: Toastify__bounceOutLeft; }\n\n.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {\n  -webkit-animation-name: Toastify__bounceOutRight;\n          animation-name: Toastify__bounceOutRight; }\n\n.Toastify__bounce-exit--top-center {\n  -webkit-animation-name: Toastify__bounceOutUp;\n          animation-name: Toastify__bounceOutUp; }\n\n.Toastify__bounce-exit--bottom-center {\n  -webkit-animation-name: Toastify__bounceOutDown;\n          animation-name: Toastify__bounceOutDown; }\n\n@-webkit-keyframes Toastify__zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes Toastify__zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@-webkit-keyframes Toastify__zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n@keyframes Toastify__zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.Toastify__zoom-enter {\n  -webkit-animation-name: Toastify__zoomIn;\n          animation-name: Toastify__zoomIn; }\n\n.Toastify__zoom-exit {\n  -webkit-animation-name: Toastify__zoomOut;\n          animation-name: Toastify__zoomOut; }\n\n@-webkit-keyframes Toastify__flipIn {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes Toastify__flipIn {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@-webkit-keyframes Toastify__flipOut {\n  from {\n    transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes Toastify__flipOut {\n  from {\n    transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.Toastify__flip-enter {\n  -webkit-animation-name: Toastify__flipIn;\n          animation-name: Toastify__flipIn; }\n\n.Toastify__flip-exit {\n  -webkit-animation-name: Toastify__flipOut;\n          animation-name: Toastify__flipOut; }\n\n@-webkit-keyframes Toastify__slideInRight {\n  from {\n    transform: translate3d(110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInRight {\n  from {\n    transform: translate3d(110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideInLeft {\n  from {\n    transform: translate3d(-110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInLeft {\n  from {\n    transform: translate3d(-110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideInUp {\n  from {\n    transform: translate3d(0, 110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInUp {\n  from {\n    transform: translate3d(0, 110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideInDown {\n  from {\n    transform: translate3d(0, -110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInDown {\n  from {\n    transform: translate3d(0, -110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(110%, 0, 0); } }\n\n@keyframes Toastify__slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(110%, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(-110%, 0, 0); } }\n\n@keyframes Toastify__slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(-110%, 0, 0); } }\n\n@-webkit-keyframes Toastify__slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 500px, 0); } }\n\n@keyframes Toastify__slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 500px, 0); } }\n\n@-webkit-keyframes Toastify__slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -500px, 0); } }\n\n@keyframes Toastify__slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -500px, 0); } }\n\n.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {\n  -webkit-animation-name: Toastify__slideInLeft;\n          animation-name: Toastify__slideInLeft; }\n\n.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {\n  -webkit-animation-name: Toastify__slideInRight;\n          animation-name: Toastify__slideInRight; }\n\n.Toastify__slide-enter--top-center {\n  -webkit-animation-name: Toastify__slideInDown;\n          animation-name: Toastify__slideInDown; }\n\n.Toastify__slide-enter--bottom-center {\n  -webkit-animation-name: Toastify__slideInUp;\n          animation-name: Toastify__slideInUp; }\n\n.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {\n  -webkit-animation-name: Toastify__slideOutLeft;\n          animation-name: Toastify__slideOutLeft; }\n\n.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {\n  -webkit-animation-name: Toastify__slideOutRight;\n          animation-name: Toastify__slideOutRight; }\n\n.Toastify__slide-exit--top-center {\n  -webkit-animation-name: Toastify__slideOutUp;\n          animation-name: Toastify__slideOutUp; }\n\n.Toastify__slide-exit--bottom-center {\n  -webkit-animation-name: Toastify__slideOutDown;\n          animation-name: Toastify__slideOutDown; }", ""]);

// exports


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gud__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud__WEBPACK_IMPORTED_MODULE_3___default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/moment/src/lib/create/check-overflow.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/check-overflow.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkOverflow; });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function checkOverflow(m) {
    var overflow,
        a = m._a;

    if (a && Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow === -2) {
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] > 11
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] > Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"]], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]])
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] < 0 ||
                  a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] > 24 ||
                  (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] === 24 &&
                      (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] !== 0))
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] > 999
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]
                : -1;

        if (
            Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowDayOfYear &&
            (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"] || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"])
        ) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEK"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEKDAY"];
        }

        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow = overflow;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/date-from-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/date-from-array.js ***!
  \***************************************************************/
/*! exports provided: createDate, createUTCDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDate", function() { return createDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTCDate", function() { return createUTCDate; });
function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-anything.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-anything.js ***!
  \*************************************************************/
/*! exports provided: prepareConfig, createLocalOrUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareConfig", function() { return prepareConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalOrUTC", function() { return createLocalOrUTC; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-string-and-array */ "./node_modules/moment/src/lib/create/from-string-and-array.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-object */ "./node_modules/moment/src/lib/create/from-object.js");




















function createFromConfig(config) {
    var res = new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(config._l);

    if (input === null || (format === undefined && input === '')) {
        return Object(_valid__WEBPACK_IMPORTED_MODULE_7__["createInvalid"])({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_8__["isMoment"])(input)) {
        return new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(input));
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = input;
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        Object(_from_string_and_array__WEBPACK_IMPORTED_MODULE_12__["configFromStringAndArray"])(config);
    } else if (format) {
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_13__["configFromStringAndFormat"])(config);
    } else {
        configFromInput(config);
    }

    if (!Object(_valid__WEBPACK_IMPORTED_MODULE_7__["isValid"])(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__["default"])(input)) {
        config._d = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].now());
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_14__["configFromString"])(config);
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
        config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_6__["default"])(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        Object(_from_array__WEBPACK_IMPORTED_MODULE_15__["configFromArray"])(config);
    } else if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input)) {
        Object(_from_object__WEBPACK_IMPORTED_MODULE_16__["configFromObject"])(config);
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
        strict = format;
        format = undefined;
    }

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if (
        (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input) && Object(_utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__["default"])(input)) ||
        (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && input.length === 0)
    ) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-array.js ***!
  \**********************************************************/
/*! exports provided: configFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromArray", function() { return configFromArray; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/defaults */ "./node_modules/moment/src/lib/utils/defaults.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");









function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now());
    if (config._useUTC) {
        return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(),
        ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]]);

        if (
            config._dayOfYear > Object(_units_year__WEBPACK_IMPORTED_MODULE_2__["daysInYear"])(yearToUse) ||
            config._dayOfYear === 0
        ) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowDayOfYear = true;
        }

        date = Object(_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(yearToUse, 0, config._dayOfYear);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MINUTE"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["SECOND"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MILLISECOND"]] === 0
    ) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 0;
    }

    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"] : _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createDate"]).apply(
        null,
        input
    );
    expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 24;
    }

    // check for mismatching day of week
    if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(
            w.GG,
            config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]],
            Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), 1, 4).year
        );
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.W, 1);
        weekday = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        curWeek = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), dow, doy);

        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], curWeek.year);

        // Default to current week.
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to beginning of week
            weekday = dow;
        }
    }
    if (week < 1 || week > Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weeksInYear"])(weekYear, dow, doy)) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeekday = true;
    } else {
        temp = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-object.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-object.js ***!
  \***********************************************************/
/*! exports provided: configFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromObject", function() { return configFromObject; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");




function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_2__["default"])(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-array.js ***!
  \*********************************************************************/
/*! exports provided: configFromStringAndArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndArray", function() { return configFromStringAndArray; });
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");






// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false;

    if (config._f.length === 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_0__["copyConfig"])({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_1__["configFromStringAndFormat"])(tempConfig);

        if (Object(_valid__WEBPACK_IMPORTED_MODULE_3__["isValid"])(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).charsLeftOver;

        //or tokens
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).unusedTokens.length * 10;

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    Object(_utils_extend__WEBPACK_IMPORTED_MODULE_4__["default"])(config, bestMoment || tempConfig);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-format.js":
/*!**********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-format.js ***!
  \**********************************************************************/
/*! exports provided: configFromStringAndFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndFormat", function() { return configFromStringAndFormat; });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");










// constant that refers to the ISO standard
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromISO"])(config);
        return;
    }
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromRFC2822"])(config);
        return;
    }
    config._a = [];
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era;

    tokens =
        Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["expandFormat"])(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_4__["formattingTokens"]) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["getParseRegexForToken"])(token, config)) ||
            [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(skipped);
            }
            string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_4__["formatTokenFunctions"][token]) {
            if (parsedInput) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = false;
            } else {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
            }
            Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addTimeToArrayFromToken"])(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).charsLeftOver =
        stringLength - totalParsedInputLength;
    if (string.length > 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] <= 12 &&
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] > 0
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour = undefined;
    }

    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).parsedDateParts = config._a.slice(0);
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = meridiemFixWrap(
        config._locale,
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]],
        config._meridiem
    );

    // handle era
    era = Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).era;
    if (era !== null) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]] = config._locale.erasConvertYear(era, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]]);
    }

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
    Object(_check_overflow__WEBPACK_IMPORTED_MODULE_5__["default"])(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string.js ***!
  \***********************************************************/
/*! exports provided: configFromISO, configFromRFC2822, configFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromISO", function() { return configFromISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromRFC2822", function() { return configFromRFC2822; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromString", function() { return configFromString; });
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");








// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, false],
        ['YYYY', /\d{4}/, false],
    ],
    // iso time formats and regexes
    isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

// date from iso format
function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_0__["configFromStringAndFormat"])(config);
    } else {
        config._isValid = false;
    }
}

function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr
) {
    var result = [
        untruncateYear(yearStr),
        _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"].indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeekdaysShort"].indexOf(weekdayStr),
            weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2]
            ).getDay();
        if (weekdayProvided !== weekdayActual) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
    if (match) {
        parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"].apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    if (config._strict) {
        config._isValid = false;
    } else {
        // Final attempt, use Input Fallback
        _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback(config);
    }
}

_utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);


/***/ }),

/***/ "./node_modules/moment/src/lib/create/local.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/local.js ***!
  \*****************************************************/
/*! exports provided: createLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return createLocal; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createLocal(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, false);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/parsing-flags.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/parsing-flags.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParsingFlags; });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/utc.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/create/utc.js ***!
  \***************************************************/
/*! exports provided: createUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return createUTC; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createUTC(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, true).utc();
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/some */ "./node_modules/moment/src/lib/utils/some.js");





function isValid(m) {
    if (m._isValid == null) {
        var flags = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m),
            parsedParts = _utils_some__WEBPACK_IMPORTED_MODULE_3__["default"].call(flags.parsedDateParts, function (i) {
                return i != null;
            }),
            isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = Object(_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"])(NaN);
    if (flags != null) {
        Object(_utils_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m), flags);
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).userInvalidated = true;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/abs.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/abs.js ***!
  \*****************************************************/
/*! exports provided: abs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
var mathAbs = Math.abs;

function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/add-subtract.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/add-subtract.js ***!
  \**************************************************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function addSubtract(duration, input, value, direction) {
    var other = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add(input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract(input, value) {
    return addSubtract(this, input, value, -1);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/as.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/as.js ***!
  \****************************************************/
/*! exports provided: as, valueOf, asMilliseconds, asSeconds, asMinutes, asHours, asDays, asWeeks, asMonths, asQuarters, asYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return as; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMilliseconds", function() { return asMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asSeconds", function() { return asSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMinutes", function() { return asMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asHours", function() { return asHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asDays", function() { return asDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asWeeks", function() { return asWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMonths", function() { return asMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asQuarters", function() { return asQuarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asYears", function() { return asYears; });
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days,
        months,
        milliseconds = this._milliseconds;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["daysToMonths"])(days);
        switch (units) {
            case 'month':
                return months;
            case 'quarter':
                return months / 3;
            case 'year':
                return months / 12;
        }
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["monthsToDays"])(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(this._months / 12) * 31536e6
    );
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');




/***/ }),

/***/ "./node_modules/moment/src/lib/duration/bubble.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/bubble.js ***!
  \********************************************************/
/*! exports provided: bubble, daysToMonths, monthsToDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysToMonths", function() { return daysToMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsToDays", function() { return monthsToDays; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ "./node_modules/moment/src/lib/utils/abs-ceil.js");



function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    data.minutes = minutes % 60;

    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    data.hours = hours % 24;

    days += Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(hours / 24);

    // convert days to months
    monthsFromDays = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(daysToMonths(days));
    months += monthsFromDays;
    days -= Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/clone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/clone.js ***!
  \*******************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function clone() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/constructor.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/constructor.js ***!
  \*************************************************************/
/*! exports provided: Duration, isDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return isDuration; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid.js */ "./node_modules/moment/src/lib/duration/valid.js");




function Duration(duration) {
    var normalizedInput = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = Object(_valid_js__WEBPACK_IMPORTED_MODULE_2__["default"])(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])();

    this._bubble();
}

function isDuration(obj) {
    return obj instanceof Duration;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/create.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/create.js ***!
  \********************************************************/
/*! exports provided: createDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");










// ASP.NET json date format regex
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months,
        };
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
            duration[key] = +input;
        } else {
            duration.milliseconds = +input;
        }
    } else if ((match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["DATE"]]) * sign,
            h: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]]) * sign,
            m: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]]) * sign,
            s: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["SECOND"]]) * sign,
            ms: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_3__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MILLISECOND"]] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
    } else if ((match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign),
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
    ) {
        diffRes = momentsDifference(
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.from),
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.to)
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"](duration);

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_locale')) {
        ret._locale = input._locale;
    }

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_isValid')) {
        ret._isValid = input._isValid;
    }

    return ret;
}

createDuration.fn = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;
createDuration.invalid = _valid__WEBPACK_IMPORTED_MODULE_8__["createInvalid"];

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = Object(_units_offset__WEBPACK_IMPORTED_MODULE_6__["cloneWithOffset"])(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/duration.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/duration.js ***!
  \**********************************************************/
/*! exports provided: createDuration, isDuration, getSetRelativeTimeRounding, getSetRelativeTimeThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/duration/prototype.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["createDuration"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return _constructor__WEBPACK_IMPORTED_MODULE_2__["isDuration"]; });

/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeRounding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeThreshold"]; });

// Side effect imports









/***/ }),

/***/ "./node_modules/moment/src/lib/duration/get.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/get.js ***!
  \*****************************************************/
/*! exports provided: get, milliseconds, seconds, minutes, hours, days, months, years, weeks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeks", function() { return weeks; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");



function get(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');



function weeks() {
    return Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__["default"])(this.days() / 7);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/humanize.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/humanize.js ***!
  \**********************************************************/
/*! exports provided: getSetRelativeTimeRounding, getSetRelativeTimeThreshold, humanize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return getSetRelativeTimeRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return getSetRelativeTimeThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanize", function() { return humanize; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


var round = Math.round,
    thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month/week
        w: null, // weeks to month
        M: 11, // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        weeks = round(duration.as('w')),
        years = round(duration.as('y')),
        a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
        a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var withSuffix = false,
        th = thresholds,
        locale,
        output;

    if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
        }
    }

    locale = this.localeData();
    output = relativeTime(this, !withSuffix, th, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/iso-string.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/iso-string.js ***!
  \************************************************************/
/*! exports provided: toISOString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");

var abs = Math.abs;

function sign(x) {
    return (x > 0) - (x < 0) || +x;
}

function toISOString() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs(this._milliseconds) / 1000,
        days = abs(this._days),
        months = abs(this._months),
        minutes,
        hours,
        years,
        s,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
        totalSign +
        'P' +
        (years ? ymSign + years + 'Y' : '') +
        (months ? ymSign + months + 'M' : '') +
        (days ? daysSign + days + 'D' : '') +
        (hours || minutes || seconds ? 'T' : '') +
        (hours ? hmsSign + hours + 'H' : '') +
        (minutes ? hmsSign + minutes + 'M' : '') +
        (seconds ? hmsSign + s + 'S' : '')
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/prototype.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/prototype.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abs */ "./node_modules/moment/src/lib/duration/abs.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/duration/add-subtract.js");
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as */ "./node_modules/moment/src/lib/duration/as.js");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/duration/clone.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ "./node_modules/moment/src/lib/duration/get.js");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
/* harmony import */ var _iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iso-string */ "./node_modules/moment/src/lib/duration/iso-string.js");
/* harmony import */ var _moment_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moment/locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;












proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_10__["isValid"];
proto.abs = _abs__WEBPACK_IMPORTED_MODULE_1__["abs"];
proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["add"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["subtract"];
proto.as = _as__WEBPACK_IMPORTED_MODULE_3__["as"];
proto.asMilliseconds = _as__WEBPACK_IMPORTED_MODULE_3__["asMilliseconds"];
proto.asSeconds = _as__WEBPACK_IMPORTED_MODULE_3__["asSeconds"];
proto.asMinutes = _as__WEBPACK_IMPORTED_MODULE_3__["asMinutes"];
proto.asHours = _as__WEBPACK_IMPORTED_MODULE_3__["asHours"];
proto.asDays = _as__WEBPACK_IMPORTED_MODULE_3__["asDays"];
proto.asWeeks = _as__WEBPACK_IMPORTED_MODULE_3__["asWeeks"];
proto.asMonths = _as__WEBPACK_IMPORTED_MODULE_3__["asMonths"];
proto.asQuarters = _as__WEBPACK_IMPORTED_MODULE_3__["asQuarters"];
proto.asYears = _as__WEBPACK_IMPORTED_MODULE_3__["asYears"];
proto.valueOf = _as__WEBPACK_IMPORTED_MODULE_3__["valueOf"];
proto._bubble = _bubble__WEBPACK_IMPORTED_MODULE_4__["bubble"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_5__["clone"];
proto.get = _get__WEBPACK_IMPORTED_MODULE_6__["get"];
proto.milliseconds = _get__WEBPACK_IMPORTED_MODULE_6__["milliseconds"];
proto.seconds = _get__WEBPACK_IMPORTED_MODULE_6__["seconds"];
proto.minutes = _get__WEBPACK_IMPORTED_MODULE_6__["minutes"];
proto.hours = _get__WEBPACK_IMPORTED_MODULE_6__["hours"];
proto.days = _get__WEBPACK_IMPORTED_MODULE_6__["days"];
proto.weeks = _get__WEBPACK_IMPORTED_MODULE_6__["weeks"];
proto.months = _get__WEBPACK_IMPORTED_MODULE_6__["months"];
proto.years = _get__WEBPACK_IMPORTED_MODULE_6__["years"];
proto.humanize = _humanize__WEBPACK_IMPORTED_MODULE_7__["humanize"];
proto.toISOString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toJSON = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.locale = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["locale"];
proto.localeData = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["localeData"];

// Deprecations


proto.toIsoString = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_11__["deprecate"])(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"]
);
proto.lang = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["lang"];


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/valid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/valid.js ***!
  \*******************************************************/
/*! exports provided: default, isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDurationValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");





var ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
];

function isDurationValid(m) {
    var key,
        unitHasDecimal = false,
        i;
    for (key in m) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(m, key) &&
            !(
                _utils_index_of__WEBPACK_IMPORTED_MODULE_2__["default"].call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
            )
        ) {
            return false;
        }
    }

    for (i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_1__["default"])(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_3__["createDuration"])(NaN);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/format/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/format/format.js ***!
  \******************************************************/
/*! exports provided: formattingTokens, formatTokenFunctions, addFormatToken, formatMoment, expandFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingTokens", function() { return formattingTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTokenFunctions", function() { return formatTokenFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFormatToken", function() { return addFormatToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoment", function() { return formatMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFormat", function() { return expandFormat; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");



var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};



// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(
                func.apply(this, arguments),
                token
            );
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '',
            i;
        for (i = 0; i < length; i++) {
            output += Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(array[i])
                ? array[i].call(mom, format)
                : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/base-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/base-config.js ***!
  \***********************************************************/
/*! exports provided: baseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConfig", function() { return baseConfig; });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");






// months


// week


// weekdays


// meridiem


var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_0__["defaultCalendar"],
    longDateFormat: _formats__WEBPACK_IMPORTED_MODULE_1__["defaultLongDateFormat"],
    invalidDate: _invalid__WEBPACK_IMPORTED_MODULE_2__["defaultInvalidDate"],
    ordinal: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultOrdinal"],
    dayOfMonthOrdinalParse: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultDayOfMonthOrdinalParse"],
    relativeTime: _relative__WEBPACK_IMPORTED_MODULE_4__["defaultRelativeTime"],

    months: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonths"],
    monthsShort: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"],

    week: _units_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeek"],

    weekdays: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdays"],
    weekdaysMin: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysMin"],
    weekdaysShort: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysShort"],

    meridiemParse: _units_hour__WEBPACK_IMPORTED_MODULE_8__["defaultLocaleMeridiemParse"],
};


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/calendar.js ***!
  \********************************************************/
/*! exports provided: defaultCalendar, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCalendar", function() { return defaultCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};



function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output) ? output.call(mom, now) : output;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/constructor.js ***!
  \***********************************************************/
/*! exports provided: Locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/en.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/en.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"])('en', {
    eras: [
        {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
        },
        {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
        },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                    ? 'st'
                    : b === 2
                    ? 'nd'
                    : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
    },
});


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/formats.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/formats.js ***!
  \*******************************************************/
/*! exports provided: defaultLongDateFormat, longDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLongDateFormat", function() { return defaultLongDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longDateFormat", function() { return longDateFormat; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
};

function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper
        .match(_format_format__WEBPACK_IMPORTED_MODULE_0__["formattingTokens"])
        .map(function (tok) {
            if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
            ) {
                return tok.slice(1);
            }
            return tok;
        })
        .join('');

    return this._longDateFormat[key];
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/invalid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/invalid.js ***!
  \*******************************************************/
/*! exports provided: defaultInvalidDate, invalidDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInvalidDate", function() { return defaultInvalidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidDate", function() { return invalidDate; });
var defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/lists.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/lists.js ***!
  \*****************************************************/
/*! exports provided: listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return listMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return listMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return listWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return listWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return listWeekdaysMin; });
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");




function get(format, index, field, setter) {
    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        utc = Object(_create_utc__WEBPACK_IMPORTED_MODULE_2__["createUTC"])().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locale.js ***!
  \******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales, listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["listLocales"]; });

/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ "./node_modules/moment/src/lib/locale/lists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonthsShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysMin"]; });

/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en */ "./node_modules/moment/src/lib/locale/en.js");
// Side effect imports











_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.lang is deprecated. Use moment.locale instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]
);
_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].langData = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.langData is deprecated. Use moment.localeData instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]
);




/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locales.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locales.js ***!
  \*******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keys */ "./node_modules/moment/src/lib/utils/keys.js");
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-config */ "./node_modules/moment/src/lib/locale/base-config.js");
var require;








// internal storage for locale config files
var locales = {},
    localeFamilies = {},
    globalLocale;

function commonPrefix(arr1, arr2) {
    var i,
        minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return i;
        }
    }
    return minl;
}

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
            ) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null,
        aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
        locales[name] === undefined &&
        typeof module !== 'undefined' &&
        module &&
        module.exports
    ) {
        try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(values)) {
            data = getLocale(key);
        } else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                    'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale(name, config) {
    if (config !== null) {
        var locale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];
        config.abbr = name;
        if (locales[name] != null) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_2__["deprecateSimple"])(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            );
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                    });
                    return null;
                }
            }
        }
        locales[name] = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];

        if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(locales[name]._config, config));
        } else {
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config);
            if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
            }
            locale = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
        }

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                    getSetGlobalLocale(name);
                }
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return Object(_utils_keys__WEBPACK_IMPORTED_MODULE_5__["default"])(locales);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/moment/src/lib/locale/ordinal.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/ordinal.js ***!
  \*******************************************************/
/*! exports provided: defaultOrdinal, defaultDayOfMonthOrdinalParse, ordinal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOrdinal", function() { return defaultOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDayOfMonthOrdinalParse", function() { return defaultDayOfMonthOrdinalParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;



function ordinal(number) {
    return this._ordinal.replace('%d', number);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/pre-post-format.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/pre-post-format.js ***!
  \***************************************************************/
/*! exports provided: preParsePostFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preParsePostFormat", function() { return preParsePostFormat; });
function preParsePostFormat(string) {
    return string;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/prototype.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _pre_post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-post-format */ "./node_modules/moment/src/lib/locale/pre-post-format.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Locale"].prototype;









proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_1__["calendar"];
proto.longDateFormat = _formats__WEBPACK_IMPORTED_MODULE_2__["longDateFormat"];
proto.invalidDate = _invalid__WEBPACK_IMPORTED_MODULE_3__["invalidDate"];
proto.ordinal = _ordinal__WEBPACK_IMPORTED_MODULE_4__["ordinal"];
proto.preparse = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.postformat = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.relativeTime = _relative__WEBPACK_IMPORTED_MODULE_6__["relativeTime"];
proto.pastFuture = _relative__WEBPACK_IMPORTED_MODULE_6__["pastFuture"];
proto.set = _set__WEBPACK_IMPORTED_MODULE_7__["set"];

// Eras

proto.eras = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeEras"];
proto.erasParse = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasParse"];
proto.erasConvertYear = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasConvertYear"];
proto.erasAbbrRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasAbbrRegex"];
proto.erasNameRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNameRegex"];
proto.erasNarrowRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNarrowRegex"];

// Month


proto.months = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonths"];
proto.monthsShort = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsShort"];
proto.monthsParse = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsParse"];
proto.monthsRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsRegex"];
proto.monthsShortRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsShortRegex"];

// Week

proto.week = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeWeek"];
proto.firstDayOfYear = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfYear"];
proto.firstDayOfWeek = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfWeek"];

// Day of Week


proto.weekdays = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdays"];
proto.weekdaysMin = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysMin"];
proto.weekdaysShort = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysShort"];
proto.weekdaysParse = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysParse"];

proto.weekdaysRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysRegex"];
proto.weekdaysShortRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysShortRegex"];
proto.weekdaysMinRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysMinRegex"];

// Hours


proto.isPM = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeIsPM"];
proto.meridiem = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeMeridiem"];


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/relative.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/relative.js ***!
  \********************************************************/
/*! exports provided: defaultRelativeTime, relativeTime, pastFuture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRelativeTime", function() { return defaultRelativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeTime", function() { return relativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pastFuture", function() { return pastFuture; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
};



function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(format) ? format(output) : format.replace(/%s/i, output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/set.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/set.js ***!
  \***************************************************/
/*! exports provided: set, mergeConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfigs", function() { return mergeConfigs; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");





function set(config) {
    var prop, i;
    for (i in config) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(config, i)) {
            prop = config[i];
            if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
    );
}

function mergeConfigs(parentConfig, childConfig) {
    var res = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop)) {
            if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop]) && Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(childConfig[prop])) {
                res[prop] = {};
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], parentConfig[prop]);
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(parentConfig, prop) &&
            !Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop) &&
            Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop])
        ) {
            // make sure changes to properties don't modify parent config
            res[prop] = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res[prop]);
        }
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/add-subtract.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/add-subtract.js ***!
  \************************************************************/
/*! exports provided: addSubtract, add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubtract", function() { return addSubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");







// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecateSimple"])(
                name,
                'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            );
            tmp = val;
            val = period;
            period = tmp;
        }

        dur = Object(_duration_create__WEBPACK_IMPORTED_MODULE_2__["createDuration"])(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._days),
        months = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        Object(_units_month__WEBPACK_IMPORTED_MODULE_1__["setMonth"])(mom, Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Month') + months * isAdding);
    }
    if (days) {
        Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["set"])(mom, 'Date', Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].updateOffset(mom, days || months);
    }
}

var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/calendar.js ***!
  \********************************************************/
/*! exports provided: getCalendarFormat, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarFormat", function() { return getCalendarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-moment-input */ "./node_modules/moment/src/lib/utils/is-moment-input.js");
/* harmony import */ var _utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-calendar-spec */ "./node_modules/moment/src/lib/utils/is-calendar-spec.js");







function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6
        ? 'sameElse'
        : diff < -1
        ? 'lastWeek'
        : diff < 0
        ? 'lastDay'
        : diff < 1
        ? 'sameDay'
        : diff < 2
        ? 'nextDay'
        : diff < 7
        ? 'nextWeek'
        : 'sameElse';
}

function calendar(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
        if (Object(_utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__["isMomentInput"])(arguments[0])) {
            time = arguments[0];
            formats = undefined;
        } else if (Object(_utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__["default"])(arguments[0])) {
            formats = arguments[0];
            time = undefined;
        }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(),
        sod = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(now, this).startOf('day'),
        format = _utils_hooks__WEBPACK_IMPORTED_MODULE_3__["hooks"].calendarFormat(this, sod) || 'sameElse',
        output =
            formats &&
            (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

    return this.format(
        output || this.localeData().calendar(format, this, Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(now))
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/clone.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/clone.js ***!
  \*****************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");


function clone() {
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"](this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/compare.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/compare.js ***!
  \*******************************************************/
/*! exports provided: isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrAfter", function() { return isSameOrAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrBefore", function() { return isSameOrBefore; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");




function isAfter(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    var localFrom = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(from) ? from : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(from),
        localTo = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(to) ? to : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
    }
    inclusivity = inclusivity || '()';
    return (
        (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
    );
}

function isSame(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
        );
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/constructor.js ***!
  \***********************************************************/
/*! exports provided: copyConfig, Moment, isMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyConfig", function() { return copyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return isMoment; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = (_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].momentProperties = []),
    updateInProgress = false;

function copyConfig(to, from) {
    var i, prop, val;

    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._i)) {
        to._i = from._i;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._f)) {
        to._f = from._f;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._l)) {
        to._l = from._l;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._strict)) {
        to._strict = from._strict;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._offset)) {
        to._offset = from._offset;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._pf)) {
        to._pf = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(from);
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/creation-data.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/creation-data.js ***!
  \*************************************************************/
/*! exports provided: creationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creationData", function() { return creationData; });
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
    };
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/diff.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/diff.js ***!
  \****************************************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");




function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_2__["normalizeUnits"])(units);

    switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1e3;
            break; // 1000
        case 'minute':
            output = (this - that) / 6e4;
            break; // 1000 * 60
        case 'hour':
            output = (this - that) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = this - that;
    }

    return asFloat ? output : Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(output);
}

function monthDiff(a, b) {
    if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/format.js ***!
  \******************************************************/
/*! exports provided: toString, toISOString, inspect, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspect", function() { return inspect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");




_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true,
        m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
            m,
            utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(m, 'Z'));
        }
    }
    return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
    );
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
        zone = '',
        prefix,
        year,
        datetime,
        suffix;
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc()
            ? _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc
            : _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat;
    }
    var output = Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(this, inputString);
    return this.localeData().postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/from.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/from.js ***!
  \****************************************************/
/*! exports provided: from, fromNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNow", function() { return fromNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function from(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/get-set.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/get-set.js ***!
  \*******************************************************/
/*! exports provided: makeGetSet, get, set, stringGet, stringSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGetSet", function() { return makeGetSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringGet", function() { return stringGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSet", function() { return stringSet; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _units_priorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (
            unit === 'FullYear' &&
            Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__["isLeapYear"])(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
        ) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(value);
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                Object(_units_month__WEBPACK_IMPORTED_MODULE_4__["daysInMonth"])(value, mom.month())
            );
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if (typeof units === 'object') {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(units);
        var prioritized = Object(_units_priorities__WEBPACK_IMPORTED_MODULE_1__["getPrioritizedUnits"])(units),
            i;
        for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
        if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
            return this[units](value);
        }
    }
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/locale.js ***!
  \******************************************************/
/*! exports provided: locale, lang, localeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeData", function() { return localeData; });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");



// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_1__["deprecate"])(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData() {
    return this._locale;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/min-max.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/min-max.js ***!
  \*******************************************************/
/*! exports provided: prototypeMin, prototypeMax, min, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMin", function() { return prototypeMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMax", function() { return prototypeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");





var prototypeMin = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    ),
    prototypeMax = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_1__["default"])(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/moment.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/moment.js ***!
  \******************************************************/
/*! exports provided: now, min, max, isMoment, createUTC, createUnix, createLocal, createInZone, createInvalid, momentPrototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnix", function() { return createUnix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInZone", function() { return createInZone; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"]; });

/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return _create_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"]; });

/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return _create_valid__WEBPACK_IMPORTED_MODULE_2__["createInvalid"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return _constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"]; });

/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["max"]; });

/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./now */ "./node_modules/moment/src/lib/moment/now.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now__WEBPACK_IMPORTED_MODULE_5__["now"]; });

/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/moment/prototype.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "momentPrototype", function() { return _prototype__WEBPACK_IMPORTED_MODULE_6__["default"]; });









function createUnix(input) {
    return Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(input * 1000);
}

function createInZone() {
    return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"].apply(null, arguments).parseZone();
}




/***/ }),

/***/ "./node_modules/moment/src/lib/moment/now.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/now.js ***!
  \***************************************************/
/*! exports provided: now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
var now = function () {
    return Date.now ? Date.now() : +new Date();
};


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/prototype.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/moment/clone.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare */ "./node_modules/moment/src/lib/moment/compare.js");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diff */ "./node_modules/moment/src/lib/moment/diff.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format */ "./node_modules/moment/src/lib/moment/format.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from */ "./node_modules/moment/src/lib/moment/from.js");
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to */ "./node_modules/moment/src/lib/moment/to.js");
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-end-of */ "./node_modules/moment/src/lib/moment/start-end-of.js");
/* harmony import */ var _to_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-type */ "./node_modules/moment/src/lib/moment/to-type.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/moment/valid.js");
/* harmony import */ var _creation_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./creation-data */ "./node_modules/moment/src/lib/moment/creation-data.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../units/week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../units/quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../units/day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../units/day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _units_minute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../units/minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _units_second__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _units_millisecond__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../units/millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../units/timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"].prototype;

















proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["add"];
proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_2__["calendar"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_3__["clone"];
proto.diff = _diff__WEBPACK_IMPORTED_MODULE_5__["diff"];
proto.endOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["endOf"];
proto.format = _format__WEBPACK_IMPORTED_MODULE_6__["format"];
proto.from = _from__WEBPACK_IMPORTED_MODULE_7__["from"];
proto.fromNow = _from__WEBPACK_IMPORTED_MODULE_7__["fromNow"];
proto.to = _to__WEBPACK_IMPORTED_MODULE_8__["to"];
proto.toNow = _to__WEBPACK_IMPORTED_MODULE_8__["toNow"];
proto.get = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringGet"];
proto.invalidAt = _valid__WEBPACK_IMPORTED_MODULE_14__["invalidAt"];
proto.isAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isAfter"];
proto.isBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isBefore"];
proto.isBetween = _compare__WEBPACK_IMPORTED_MODULE_4__["isBetween"];
proto.isSame = _compare__WEBPACK_IMPORTED_MODULE_4__["isSame"];
proto.isSameOrAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrAfter"];
proto.isSameOrBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrBefore"];
proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_14__["isValid"];
proto.lang = _locale__WEBPACK_IMPORTED_MODULE_10__["lang"];
proto.locale = _locale__WEBPACK_IMPORTED_MODULE_10__["locale"];
proto.localeData = _locale__WEBPACK_IMPORTED_MODULE_10__["localeData"];
proto.max = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMax"];
proto.min = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMin"];
proto.parsingFlags = _valid__WEBPACK_IMPORTED_MODULE_14__["parsingFlags"];
proto.set = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringSet"];
proto.startOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["startOf"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["subtract"];
proto.toArray = _to_type__WEBPACK_IMPORTED_MODULE_13__["toArray"];
proto.toObject = _to_type__WEBPACK_IMPORTED_MODULE_13__["toObject"];
proto.toDate = _to_type__WEBPACK_IMPORTED_MODULE_13__["toDate"];
proto.toISOString = _format__WEBPACK_IMPORTED_MODULE_6__["toISOString"];
proto.inspect = _format__WEBPACK_IMPORTED_MODULE_6__["inspect"];
if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
    };
}
proto.toJSON = _to_type__WEBPACK_IMPORTED_MODULE_13__["toJSON"];
proto.toString = _format__WEBPACK_IMPORTED_MODULE_6__["toString"];
proto.unix = _to_type__WEBPACK_IMPORTED_MODULE_13__["unix"];
proto.valueOf = _to_type__WEBPACK_IMPORTED_MODULE_13__["valueOf"];
proto.creationData = _creation_data__WEBPACK_IMPORTED_MODULE_15__["creationData"];

// Era

proto.eraName = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraName"];
proto.eraNarrow = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraNarrow"];
proto.eraAbbr = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraAbbr"];
proto.eraYear = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraYear"];

// Year

proto.year = _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"];
proto.isLeapYear = _units_year__WEBPACK_IMPORTED_MODULE_17__["getIsLeapYear"];

// Week Year

proto.weekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetWeekYear"];
proto.isoWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetISOWeekYear"];

// Quarter

proto.quarter = proto.quarters = _units_quarter__WEBPACK_IMPORTED_MODULE_19__["getSetQuarter"];

// Month

proto.month = _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"];
proto.daysInMonth = _units_month__WEBPACK_IMPORTED_MODULE_20__["getDaysInMonth"];

// Week

proto.week = proto.weeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetWeek"];
proto.isoWeek = proto.isoWeeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetISOWeek"];
proto.weeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInYear"];
proto.weeksInWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInWeekYear"];
proto.isoWeeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInYear"];
proto.isoWeeksInISOWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInISOWeekYear"];

// Day



proto.date = _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"];
proto.day = proto.days = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetDayOfWeek"];
proto.weekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetLocaleDayOfWeek"];
proto.isoWeekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetISODayOfWeek"];
proto.dayOfYear = _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__["getSetDayOfYear"];

// Hour

proto.hour = proto.hours = _units_hour__WEBPACK_IMPORTED_MODULE_25__["getSetHour"];

// Minute

proto.minute = proto.minutes = _units_minute__WEBPACK_IMPORTED_MODULE_26__["getSetMinute"];

// Second

proto.second = proto.seconds = _units_second__WEBPACK_IMPORTED_MODULE_27__["getSetSecond"];

// Millisecond

proto.millisecond = proto.milliseconds = _units_millisecond__WEBPACK_IMPORTED_MODULE_28__["getSetMillisecond"];

// Offset

proto.utcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetOffset"];
proto.utc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToUTC"];
proto.local = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToLocal"];
proto.parseZone = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToParsedOffset"];
proto.hasAlignedHourOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["hasAlignedHourOffset"];
proto.isDST = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTime"];
proto.isLocal = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isLocal"];
proto.isUtcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtcOffset"];
proto.isUtc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];
proto.isUTC = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];

// Timezone

proto.zoneAbbr = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneAbbr"];
proto.zoneName = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneName"];

// Deprecations

proto.dates = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'dates accessor is deprecated. Use date instead.',
    _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"]
);
proto.months = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'months accessor is deprecated. Use month instead',
    _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"]
);
proto.years = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'years accessor is deprecated. Use year instead',
    _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"]
);
proto.zone = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetZone"]
);
proto.isDSTShifted = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTimeShifted"]
);

/* harmony default export */ __webpack_exports__["default"] = (proto);


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/start-end-of.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/start-end-of.js ***!
  \************************************************************/
/*! exports provided: startOf, endOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");



var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

function startOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}

function endOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to-type.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to-type.js ***!
  \*******************************************************/
/*! exports provided: valueOf, unix, toDate, toArray, toObject, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unix", function() { return unix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
    return Math.floor(this.valueOf() / 1000);
}

function toDate() {
    return new Date(this.valueOf());
}

function toArray() {
    var m = this;
    return [
        m.year(),
        m.month(),
        m.date(),
        m.hour(),
        m.minute(),
        m.second(),
        m.millisecond(),
    ];
}

function toObject() {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds(),
    };
}

function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to.js ***!
  \**************************************************/
/*! exports provided: to, toNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNow", function() { return toNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, parsingFlags, invalidAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsingFlags", function() { return parsingFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAt", function() { return invalidAt; });
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function isValid() {
    return Object(_create_valid__WEBPACK_IMPORTED_MODULE_0__["isValid"])(this);
}

function parsingFlags() {
    return Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this));
}

function invalidAt() {
    return Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this).overflow;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/regex.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/regex.js ***!
  \****************************************************/
/*! exports provided: match1, match2, match3, match4, match6, match1to2, match3to4, match5to6, match1to3, match1to4, match1to6, matchUnsigned, matchSigned, matchOffset, matchShortOffset, matchTimestamp, matchWord, addRegexToken, getParseRegexForToken, regexEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1", function() { return match1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match2", function() { return match2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3", function() { return match3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match4", function() { return match4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match6", function() { return match6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to2", function() { return match1to2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3to4", function() { return match3to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match5to6", function() { return match5to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to3", function() { return match1to3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to4", function() { return match1to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to6", function() { return match1to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchUnsigned", function() { return matchUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchSigned", function() { return matchSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOffset", function() { return matchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchShortOffset", function() { return matchShortOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchTimestamp", function() { return matchTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchWord", function() { return matchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegexToken", function() { return addRegexToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParseRegexForToken", function() { return getParseRegexForToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexEscape", function() { return regexEscape; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;






regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

function getParseRegexForToken(token, config) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                matched,
                p1,
                p2,
                p3,
                p4
            ) {
                return p1 || p2 || p3 || p4;
            })
    );
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/token.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/token.js ***!
  \****************************************************/
/*! exports provided: addParseToken, addWeekParseToken, addTimeToArrayFromToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParseToken", function() { return addParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeekParseToken", function() { return addWeekParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimeToArrayFromToken", function() { return addTimeToArrayFromToken; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(callback)) {
        func = function (input, array) {
            array[callback] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/aliases.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/aliases.js ***!
  \******************************************************/
/*! exports provided: addUnitAlias, normalizeUnits, normalizeObjectUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitAlias", function() { return addUnitAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return normalizeUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeObjectUnits", function() { return normalizeObjectUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var aliases = {};

function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/constants.js ***!
  \********************************************************/
/*! exports provided: YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, WEEK, WEEKDAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECOND", function() { return MILLISECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAY", function() { return WEEKDAY; });
var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-month.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-month.js ***!
  \***********************************************************/
/*! exports provided: getSetDayOfMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfMonth", function() { return getSetDayOfMonth; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('D', ['DD', 2], 'Do', 'date');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('date', 'D');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('date', 9);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('D', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Do', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"])[0]);
});

// MOMENTS

var getSetDayOfMonth = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Date', true);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-week.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-week.js ***!
  \**********************************************************/
/*! exports provided: defaultLocaleWeekdays, defaultLocaleWeekdaysShort, defaultLocaleWeekdaysMin, localeWeekdays, localeWeekdaysShort, localeWeekdaysMin, localeWeekdaysParse, getSetDayOfWeek, getSetLocaleDayOfWeek, getSetISODayOfWeek, weekdaysRegex, weekdaysShortRegex, weekdaysMinRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdays", function() { return defaultLocaleWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysShort", function() { return defaultLocaleWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysMin", function() { return defaultLocaleWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdays", function() { return localeWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysShort", function() { return localeWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysMin", function() { return localeWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysParse", function() { return localeWeekdaysParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfWeek", function() { return getSetDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetLocaleDayOfWeek", function() { return getSetLocaleDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISODayOfWeek", function() { return getSetISODayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysRegex", function() { return weekdaysRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysShortRegex", function() { return weekdaysShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysMinRegex", function() { return weekdaysMinRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('d', 0, 'do', 'day');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('e', 0, 0, 'weekday');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('E', 0, 0, 'isoWeekday');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('day', 'd');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekday', 'e');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekday', 'E');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('day', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekday', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekday', 11);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('d', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('e', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('E', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__["default"])(config).invalidWeekday = input;
    }
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES
function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];



function localeWeekdays(m, format) {
    var weekdays = Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_6__["default"])(this._weekdays)
        ? this._weekdays
        : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
          ];
    return m === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m
        ? weekdays[m.day()]
        : weekdays;
}

function localeWeekdaysShort(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
}

function localeWeekdaysMin(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ''
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
        }
        if (!this._weekdaysParse[i]) {
            regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex;
    }
}

function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex;
    }
}

function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        minp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysMin(mom, ''));
        shortp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysShort(mom, ''));
        longp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
    this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-year.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-year.js ***!
  \**********************************************************/
/*! exports provided: getSetDayOfYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfYear", function() { return getSetDayOfYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");







// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('dayOfYear', 'DDD');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('dayOfYear', 4);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to3"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match3"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear(input) {
    var dayOfYear =
        Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/era.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/units/era.js ***!
  \**************************************************/
/*! exports provided: localeEras, localeErasParse, localeErasConvertYear, getEraName, getEraNarrow, getEraAbbr, getEraYear, erasNameRegex, erasAbbrRegex, erasNarrowRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeEras", function() { return localeEras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasParse", function() { return localeErasParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasConvertYear", function() { return localeErasConvertYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraName", function() { return getEraName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraNarrow", function() { return getEraNarrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraAbbr", function() { return getEraAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraYear", function() { return getEraYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNameRegex", function() { return erasNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasAbbrRegex", function() { return erasAbbrRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNarrowRegex", function() { return erasNarrowRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");









Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('N', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNN', 0, 0, 'eraName');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNNN', 0, 0, 'eraNarrow');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['y', 1], 'yo', 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yy', 2], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyy', 3], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyyy', 4], 0, 'eraYear');

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('N', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNN', matchEraName);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNNN', matchEraNarrow);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
    input,
    array,
    config,
    token
) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).era = era;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).invalidEra = input;
    }
});

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('y', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yo', matchEraYearOrdinal);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['y', 'yy', 'yyy', 'yyyy'], _constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = config._locale.eraYearOrdinalParse(input, match);
    } else {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = parseInt(input, 10);
    }
});

function localeEras(m, format) {
    var i,
        l,
        date,
        eras = this._eras || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_5__["getLocale"])('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
        }

        switch (typeof eras[i].until) {
            case 'undefined':
                eras[i].until = +Infinity;
                break;
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
        }
    }
    return eras;
}

function localeErasParse(eraName, format, strict) {
    var i,
        l,
        eras = this.eras(),
        name,
        abbr,
        narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
            switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNN':
                    if (name === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNNN':
                    if (narrow === eraName) {
                        return eras[i];
                    }
                    break;
            }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
        }
    }
}

function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year();
    } else {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year() + (year - era.offset) * dir;
    }
}

function getEraName() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
        }
    }

    return '';
}

function getEraNarrow() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
        }
    }

    return '';
}

function getEraAbbr() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
        }
    }

    return '';
}

function getEraYear() {
    var i,
        l,
        dir,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1;

        // truncate time
        val = this.startOf('day').valueOf();

        if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
        ) {
            return (
                (this.year() - Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).year()) * dir +
                eras[i].offset
            );
        }
    }

    return this.year();
}

function erasNameRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNameRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
}

function erasAbbrRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
}

function erasNarrowRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
}

function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
}

function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
}

function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
}

function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"];
}

function computeErasParse() {
    var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i,
        l,
        eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        abbrPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        narrowPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));

        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
        '^(' + narrowPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/hour.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/hour.js ***!
  \***************************************************/
/*! exports provided: localeIsPM, defaultLocaleMeridiemParse, getSetHour, localeMeridiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeIsPM", function() { return localeIsPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMeridiemParse", function() { return defaultLocaleMeridiemParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetHour", function() { return getSetHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMeridiem", function() { return localeMeridiem; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");











// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('H', ['HH', 2], 0, 'hour');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('h', ['hh', 2], 0, hFormat);
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('k', ['kk', 2], 0, kFormat);

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmmss', 0, 0, function () {
    return (
        '' +
        hFormat.apply(this) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmm', 0, 0, function () {
    return '' + this.hours() + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmmss', 0, 0, function () {
    return (
        '' +
        this.hours() +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

function meridiem(token, lowercase) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(token, 0, 0, function () {
        return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
        );
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('hour', 'h');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('a', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('A', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('H', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('h', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('k', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['k', 'kk'], function (input, array, config) {
    var kInput = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = kInput === 24 ? 0 : kInput;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Hours', true);

function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/millisecond.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/millisecond.js ***!
  \**********************************************************/
/*! exports provided: getSetMillisecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMillisecond", function() { return getSetMillisecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSS', 3], 0, 'millisecond');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('millisecond', 'ms');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('millisecond', 16);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('S', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3"]);

var token, getSetMillisecond;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])(token, _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchUnsigned"]);
}

function parseMs(input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MILLISECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(token, parseMs);
}

getSetMillisecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Milliseconds', false);




/***/ }),

/***/ "./node_modules/moment/src/lib/units/minute.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/minute.js ***!
  \*****************************************************/
/*! exports provided: getSetMinute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMinute", function() { return getSetMinute; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('m', ['mm', 2], 0, 'minute');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('minute', 'm');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('minute', 14);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('m', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]);

// MOMENTS

var getSetMinute = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Minutes', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/month.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/month.js ***!
  \****************************************************/
/*! exports provided: daysInMonth, defaultLocaleMonths, defaultLocaleMonthsShort, localeMonths, localeMonthsShort, localeMonthsParse, setMonth, getSetMonth, getDaysInMonth, monthsShortRegex, monthsRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonths", function() { return defaultLocaleMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonthsShort", function() { return defaultLocaleMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonths", function() { return localeMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsShort", function() { return localeMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsParse", function() { return localeMonthsParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonth", function() { return setMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMonth", function() { return getSetMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsShortRegex", function() { return monthsShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsRegex", function() { return monthsRegex; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mod */ "./node_modules/moment/src/lib/utils/mod.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");


















function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = Object(_utils_mod__WEBPACK_IMPORTED_MODULE_12__["default"])(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
        ? Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__["isLeapYear"])(year)
            ? 29
            : 28
        : 31 - ((modMonth % 7) % 2);
}

// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('month', 'M');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('month', 8);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('M', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['M', 'MM'], function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) - 1;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = month;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__["default"])(config).invalidMonth = input;
    }
});

// LOCALES

var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
        '_'
    ),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"],
    defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"];



function localeMonths(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
            ? this._months
            : this._months['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
        ? this._months[m.month()]
        : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
          ][m.month()];
}

function localeMonthsShort(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i'
            );
            this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i'
            );
        }
        if (!strict && !this._monthsParse[i]) {
            regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_11__["default"])(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth(value) {
    if (value != null) {
        setMonth(this, value);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].updateOffset(this, true);
        return this;
    } else {
        return Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(this, 'Month');
    }
}

function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
}

function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
    }
}

function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex;
    }
}

function computeMonthsParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(shortPieces[i]);
        longPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/offset.js ***!
  \*****************************************************/
/*! exports provided: cloneWithOffset, getSetOffset, getSetZone, setOffsetToUTC, setOffsetToLocal, setOffsetToParsedOffset, hasAlignedHourOffset, isDaylightSavingTime, isDaylightSavingTimeShifted, isLocal, isUtcOffset, isUtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWithOffset", function() { return cloneWithOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetOffset", function() { return getSetOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetZone", function() { return getSetZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToUTC", function() { return setOffsetToUTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToLocal", function() { return setOffsetToLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToParsedOffset", function() { return setOffsetToParsedOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlignedHourOffset", function() { return hasAlignedHourOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTimeShifted", function() { return isDaylightSavingTimeShifted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocal", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtcOffset", function() { return isUtcOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtc", function() { return isUtc; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/compare-arrays */ "./node_modules/moment/src/lib/utils/compare-arrays.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
















// FORMATTING

function offset(token, separator) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["addFormatToken"])(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return (
            sign +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~(offset / 60), 2) +
            separator +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~offset % 60, 2)
        );
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
        chunk,
        parts,
        minutes;

    if (matches === null) {
        return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_11__["default"])(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff =
            (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"])(input) || Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_10__["default"])(input)
                ? input.valueOf()
                : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(res, false);
        return res;
    } else {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).local();
    }
}

function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
_utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__["addSubtract"])(
                    this,
                    Object(_duration_create__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(input - offset, 'm'),
                    1,
                    false
                );
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone(input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset() {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchOffset"], this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        } else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted() {
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__["default"])(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {},
        other;

    Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["copyConfig"])(c, this);
    c = Object(_create_from_anything__WEBPACK_IMPORTED_MODULE_8__["prepareConfig"])(c);

    if (c._a) {
        other = c._isUTC ? Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])(c._a) : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(c._a);
        this._isDSTShifted =
            this.isValid() && Object(_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__["default"])(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal() {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
}

function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/priorities.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/priorities.js ***!
  \*********************************************************/
/*! exports provided: addUnitPriority, getPrioritizedUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitPriority", function() { return addUnitPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrioritizedUnits", function() { return getPrioritizedUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [],
        u;
    for (u in unitsObj) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
        }
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/quarter.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/quarter.js ***!
  \******************************************************/
/*! exports provided: getSetQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetQuarter", function() { return getSetQuarter; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('Q', 0, 'Qo', 'quarter');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('quarter', 'Q');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('quarter', 7);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('Q', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MONTH"]] = (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/second.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/second.js ***!
  \*****************************************************/
/*! exports provided: getSetSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetSecond", function() { return getSetSecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('s', ['ss', 2], 0, 'second');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('second', 's');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('second', 15);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('s', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]);

// MOMENTS

var getSetSecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Seconds', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timestamp.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timestamp.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");





// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('X', 0, 0, 'unix');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('x', 0, 0, 'valueOf');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('x', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('X', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchTimestamp"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('x', function (input, array, config) {
    config._d = new Date(Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
});


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timezone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timezone.js ***!
  \*******************************************************/
/*! exports provided: getZoneAbbr, getZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneAbbr", function() { return getZoneAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneName", function() { return getZoneName; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('z', 0, 0, 'zoneAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/units.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/units.js ***!
  \****************************************************/
/*! exports provided: normalizeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ "./node_modules/moment/src/lib/units/timestamp.js");
/* harmony import */ var _timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return _aliases__WEBPACK_IMPORTED_MODULE_15__["normalizeUnits"]; });

// Side effect imports





















/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-calendar-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-calendar-utils.js ***!
  \******************************************************************/
/*! exports provided: dayOfYearFromWeeks, weekOfYear, weeksInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYearFromWeeks", function() { return dayOfYearFromWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekOfYear", function() { return weekOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeksInYear", function() { return weeksInYear; });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");



// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(resYear) + dayOfYear;
    } else if (dayOfYear > Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear,
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear,
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year) - weekOffset + weekOffsetNext) / 7;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-year.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-year.js ***!
  \********************************************************/
/*! exports provided: getSetWeekYear, getSetISOWeekYear, getISOWeeksInYear, getISOWeeksInISOWeekYear, getWeeksInYear, getWeeksInWeekYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeekYear", function() { return getSetWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeekYear", function() { return getSetISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function() { return getISOWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInISOWeekYear", function() { return getISOWeeksInISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInYear", function() { return getWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInWeekYear", function() { return getWeeksInWeekYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");










// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekYear', 'gg');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekYear', 'GG');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekYear', 1);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekYear', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 2)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gg', 'GG'], function (input, week, config, token) {
    week[token] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
    );
}

function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
    );
}

function getISOWeeksInYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), 1, 4);
}

function getISOWeeksInISOWeekYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.isoWeekYear(), 1, 4);
}

function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), weekInfo.dow, weekInfo.doy);
}

function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.weekYear(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weekOfYear"])(this, dow, doy).year;
    } else {
        weeksTarget = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy),
        date = Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__["createUTCDate"])(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week.js ***!
  \***************************************************/
/*! exports provided: localeWeek, defaultLocaleWeek, localeFirstDayOfWeek, localeFirstDayOfYear, getSetWeek, getSetISOWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeek", function() { return localeWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeek", function() { return defaultLocaleWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfWeek", function() { return localeFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfYear", function() { return localeFirstDayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeek", function() { return getSetWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeek", function() { return getSetISOWeek; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('w', ['ww', 2], 'wo', 'week');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('week', 'w');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeek', 'W');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('week', 5);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeek', 5);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('w', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('W', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['w', 'ww', 'W', 'WW'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 1)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// LOCALES

function localeWeek(mom) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

function localeFirstDayOfWeek() {
    return this._week.dow;
}

function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
    var week = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/year.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/year.js ***!
  \***************************************************/
/*! exports provided: daysInYear, isLeapYear, getSetYear, getIsLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInYear", function() { return daysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetYear", function() { return getSetYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLeapYear", function() { return getIsLeapYear; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"]; });

/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__["default"])(y, 4) : '+' + y;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYY', 4], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYY', 5], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('year', 'y');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('year', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YYYY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] =
        input.length === 2 ? _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input) : Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Y', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(year) ? 366 : 365;
}



// HOOKS

_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear = function (input) {
    return Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) + (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('FullYear', true);

function getIsLeapYear() {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(this.year());
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-ceil.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-ceil.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absCeil; });
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-floor.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-floor.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absFloor; });
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-round.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absRound; });
function absRound(number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/compare-arrays.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/compare-arrays.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareArrays; });
/* harmony import */ var _to_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-int */ "./node_modules/moment/src/lib/utils/to-int.js");


// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array1[i]) !== Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array2[i]))
        ) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/defaults.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/defaults.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaults; });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/deprecate.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/deprecate.js ***!
  \********************************************************/
/*! exports provided: deprecate, deprecateSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateSimple", function() { return deprecateSimple; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");




function warn(msg) {
    if (
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
    ) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return Object(_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
            _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [],
                arg,
                i,
                key;
            for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0]) {
                        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments[0], key)) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(
                msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
            );
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings = false;
_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler = null;


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/extend.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/extend.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extend; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function extend(a, b) {
    for (var i in b) {
        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, i)) {
            a[i] = b[i];
        }
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'toString')) {
        a.toString = b.toString;
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/has-own-prop.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/has-own-prop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasOwnProp; });
function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/hooks.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/hooks.js ***!
  \****************************************************/
/*! exports provided: hooks, setHookCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHookCallback", function() { return setHookCallback; });


var hookCallback;

function hooks() {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
    hookCallback = callback;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/index-of.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/index-of.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return indexOf; });
var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-array.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-array.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isArray; });
function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-calendar-spec.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-calendar-spec.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isCalendarSpec; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");




function isCalendarSpec(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-date.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-date.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDate; });
function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-function.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-function.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFunction; });
function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-leap-year.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-leap-year.js ***!
  \***********************************************************/
/*! exports provided: isLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-moment-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-moment-input.js ***!
  \**************************************************************/
/*! exports provided: isMomentInput, isMomentInputObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInput", function() { return isMomentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInputObject", function() { return isMomentInputObject; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-string */ "./node_modules/moment/src/lib/utils/is-string.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-array */ "./node_modules/moment/src/lib/utils/is-array.js");









// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input) {
    return (
        Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_6__["isMoment"])(input) ||
        Object(_is_date__WEBPACK_IMPORTED_MODULE_3__["default"])(input) ||
        Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input) ||
        Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === undefined
    );
}

function isMomentInputObject(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}

function isNumberOrStringArray(input) {
    var arrayTest = Object(_is_array__WEBPACK_IMPORTED_MODULE_7__["default"])(input),
        dataTypeTest = false;
    if (arrayTest) {
        dataTypeTest =
            input.filter(function (item) {
                return !Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(item) && Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
            }).length === 0;
    }
    return arrayTest && dataTypeTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-number.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-number.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNumber; });
function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object-empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object-empty.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectEmpty; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var k;
        for (k in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, k)) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-string.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-string.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isString; });
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-undefined.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-undefined.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
function isUndefined(input) {
    return input === void 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/keys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i,
            res = [];
        for (i in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/map.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/mod.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/mod.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mod; });
function mod(n, x) {
    return ((n % x) + x) % x;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/some.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/some.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/to-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/to-int.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toInt; });
/* harmony import */ var _abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");


function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = Object(_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(coercedNumber);
    }

    return value;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/zero-fill.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/zero-fill.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zeroFill; });
function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
    );
}


/***/ }),

/***/ "./node_modules/moment/src/moment.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/src/moment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/moment/moment */ "./node_modules/moment/src/lib/moment/moment.js");
/* harmony import */ var _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/moment/calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/locale/locale */ "./node_modules/moment/src/lib/locale/locale.js");
/* harmony import */ var _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/duration/duration */ "./node_modules/moment/src/lib/duration/duration.js");
/* harmony import */ var _lib_units_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/units/units */ "./node_modules/moment/src/lib/units/units.js");
/* harmony import */ var _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
//! moment.js
//! version : 2.25.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com



_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].version = '2.25.1';













Object(_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["setHookCallback"])(_lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createLocal"]);

_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].fn = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].min = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["min"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].max = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["max"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["now"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].utc = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUTC"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].unix = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUnix"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].months = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonths"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDate = _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__["default"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getSetGlobalLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].invalid = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInvalid"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].duration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["createDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isMoment = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdays = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdays"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].parseZone = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInZone"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].localeData = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDuration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["isDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].monthsShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonthsShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysMin = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysMin"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].defineLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["defineLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["updateLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locales = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listLocales"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].normalizeUnits = _lib_units_units__WEBPACK_IMPORTED_MODULE_5__["normalizeUnits"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeRounding = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeRounding"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeThreshold = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeThreshold"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].calendarFormat = _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__["getCalendarFormat"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].prototype = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];

// currently HTML5 input type only supports 24-hour formats
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

/* harmony default export */ __webpack_exports__["default"] = (_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"]);


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  HashRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
      true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(context).history;
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  return path ? matchPath(useLocation().pathname, path) : useContext(context).match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/react-router/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./ReactToastify.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-toastify/dist/ReactToastify.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-toastify/esm/react-toastify.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-toastify/esm/react-toastify.js ***!
  \***********************************************************/
/*! exports provided: Bounce, Flip, Slide, ToastContainer, ToastPosition, ToastType, Zoom, cssTransition, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flip", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainer", function() { return ToastContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPosition", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastType", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssTransition", function() { return cssTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);









var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};
var ACTION = {
  SHOW: 0,
  CLEAR: 1,
  DID_MOUNT: 2,
  WILL_UNMOUNT: 3,
  ON_CHANGE: 4
};
var NOOP = function NOOP() {};
var RT_NAMESPACE = 'Toastify';

function isValidDelay(val) {
  return typeof val === 'number' && !isNaN(val) && val > 0;
}
function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withRequired(fn) {
  fn.isRequired = function (props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop === 'undefined') {
      return new Error("The prop " + propName + " is marked as required in \n      " + componentName + ", but its value is undefined.");
    }

    fn(props, propName, componentName);
  };

  return fn;
}

var falseOrDelay = withRequired(function (props, propName, componentName) {
  var prop = props[propName];

  if (prop !== false && !isValidDelay(prop)) {
    return new Error(componentName + " expect " + propName + " \n      to be a valid Number > 0 or equal to false. " + prop + " given.");
  }

  return null;
});

var eventManager = {
  list: new Map(),
  emitQueue: new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event) {
    this.list.delete(event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.emitQueue.delete(event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition;
  return function Animation(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["children", "position", "preventExitTransition"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var enterDuration, exitDuration;

    if (Array.isArray(duration) && duration.length === 2) {
      enterDuration = duration[0];
      exitDuration = duration[1];
    } else {
      enterDuration = exitDuration = duration;
    }

    var onEnter = function onEnter(node) {
      node.classList.add(enterClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = enterDuration * 0.001 + "s";
    };

    var onEntered = function onEntered(node) {
      node.classList.remove(enterClassName);
      node.style.cssText = '';
    };

    var onExit = function onExit(node) {
      node.classList.add(exitClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = exitDuration * 0.001 + "s";
    };

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["Transition"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      timeout: preventExitTransition ? 0 : {
        enter: enterDuration,
        exit: exitDuration
      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? NOOP : onExit
    }), children);
  };
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl;

  var style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1,
    transform: controlledProgress ? "scaleX(" + progress + ")" : null
  });

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__progress-bar", controlledProgress ? RT_NAMESPACE + "__progress-bar--controlled" : RT_NAMESPACE + "__progress-bar--animated", RT_NAMESPACE + "__progress-bar--" + type, (_cx = {}, _cx[RT_NAMESPACE + "__progress-bar--rtl"] = rtl, _cx), className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : closeToast, _animationEvent);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classNames,
    style: style
  }, animationEvent));
}

ProgressBar.propTypes = {
  /**
   * The animation delay which determine when to close the toast
   */
  delay: falseOrDelay.isRequired,

  /**
   * Whether or not the animation is running or paused
   */
  isRunning: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * Func to close the current toast
   */
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /**
   * Support rtl content
   */
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * Optional type : info, success ...
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Hide or not the progress bar
   */
  hide: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Optionnal className
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * Controlled progress value
   */
  progress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * Tell wether or not controlled progress bar is used
   */
  controlledProgress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

var iLoveInternetExplorer = canUseDom && /(msie|trident)/i.test(navigator.userAgent);

var Toast =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Toast, _Component);

  function Toast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isRunning: true,
      preventExitTransition: false
    };
    _this.flag = {
      canCloseOnClick: true,
      canDrag: false
    };
    _this.drag = {
      start: 0,
      x: 0,
      y: 0,
      deltaX: 0,
      removalDistance: 0
    };
    _this.boundingRect = null;
    _this.ref = null;

    _this.pauseToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: false
        });
      }
    };

    _this.playToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: true
        });
      }
    };

    _this.onDragStart = function (e) {
      _this.flag.canCloseOnClick = true;
      _this.flag.canDrag = true;
      _this.boundingRect = _this.ref.getBoundingClientRect();
      _this.ref.style.transition = '';
      _this.drag.start = _this.drag.x = getX(e.nativeEvent);
      _this.drag.removalDistance = _this.ref.offsetWidth * (_this.props.draggablePercent / 100);
    };

    _this.onDragMove = function (e) {
      if (_this.flag.canDrag) {
        if (_this.state.isRunning) {
          _this.pauseToast();
        }

        _this.drag.x = getX(e);
        _this.drag.deltaX = _this.drag.x - _this.drag.start;
        _this.drag.y = getY(e); // prevent false positif during a toast click

        _this.drag.start !== _this.drag.x && (_this.flag.canCloseOnClick = false);
        _this.ref.style.transform = "translateX(" + _this.drag.deltaX + "px)";
        _this.ref.style.opacity = 1 - Math.abs(_this.drag.deltaX / _this.drag.removalDistance);
      }
    };

    _this.onDragEnd = function (e) {
      if (_this.flag.canDrag) {
        _this.flag.canDrag = false;

        if (Math.abs(_this.drag.deltaX) > _this.drag.removalDistance) {
          _this.setState({
            preventExitTransition: true
          }, _this.props.closeToast);

          return;
        }

        _this.ref.style.transition = 'transform 0.2s, opacity 0.2s';
        _this.ref.style.transform = 'translateX(0)';
        _this.ref.style.opacity = 1;
      }
    };

    _this.onDragTransitionEnd = function () {
      if (_this.boundingRect) {
        var _this$boundingRect = _this.boundingRect,
            top = _this$boundingRect.top,
            bottom = _this$boundingRect.bottom,
            left = _this$boundingRect.left,
            right = _this$boundingRect.right;

        if (_this.props.pauseOnHover && _this.drag.x >= left && _this.drag.x <= right && _this.drag.y >= top && _this.drag.y <= bottom) {
          _this.pauseToast();
        } else {
          _this.playToast();
        }
      }
    };

    _this.onExitTransitionEnd = function () {
      if (iLoveInternetExplorer) {
        _this.props.onExited();

        return;
      }

      var height = _this.ref.scrollHeight;
      var style = _this.ref.style;
      requestAnimationFrame(function () {
        style.minHeight = 'initial';
        style.height = height + 'px';
        style.transition = 'all 0.4s ';
        requestAnimationFrame(function () {
          style.height = 0;
          style.padding = 0;
          style.margin = 0;
        });
        setTimeout(function () {
          return _this.props.onExited();
        }, 400);
      });
    };

    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.onOpen(this.props.children.props);

    if (this.props.draggable) {
      this.bindDragEvents();
    } // Maybe I could bind the event in the ToastContainer and rely on delegation


    if (this.props.pauseOnFocusLoss) {
      this.bindFocusEvents();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      if (this.props.draggable) {
        this.bindDragEvents();
      } else {
        this.unbindDragEvents();
      }
    }

    if (prevProps.pauseOnFocusLoss !== this.props.pauseOnFocusLoss) {
      if (this.props.pauseOnFocusLoss) {
        this.bindFocusEvents();
      } else {
        this.unbindFocusEvents();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onClose(this.props.children.props);

    if (this.props.draggable) {
      this.unbindDragEvents();
    }

    if (this.props.pauseOnFocusLoss) {
      this.unbindFocusEvents();
    }
  };

  _proto.bindFocusEvents = function bindFocusEvents() {
    window.addEventListener('focus', this.playToast);
    window.addEventListener('blur', this.pauseToast);
  };

  _proto.unbindFocusEvents = function unbindFocusEvents() {
    window.removeEventListener('focus', this.playToast);
    window.removeEventListener('blur', this.pauseToast);
  };

  _proto.bindDragEvents = function bindDragEvents() {
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchmove', this.onDragMove);
    document.addEventListener('touchend', this.onDragEnd);
  };

  _proto.unbindDragEvents = function unbindDragEvents() {
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.onDragEnd);
    document.removeEventListener('touchmove', this.onDragMove);
    document.removeEventListener('touchend', this.onDragEnd);
  };

  _proto.render = function render() {
    var _cx,
        _this2 = this;

    var _this$props = this.props,
        closeButton = _this$props.closeButton,
        children = _this$props.children,
        autoClose = _this$props.autoClose,
        pauseOnHover = _this$props.pauseOnHover,
        onClick = _this$props.onClick,
        closeOnClick = _this$props.closeOnClick,
        type = _this$props.type,
        hideProgressBar = _this$props.hideProgressBar,
        closeToast = _this$props.closeToast,
        Transition = _this$props.transition,
        position = _this$props.position,
        className = _this$props.className,
        bodyClassName = _this$props.bodyClassName,
        progressClassName = _this$props.progressClassName,
        progressStyle = _this$props.progressStyle,
        updateId = _this$props.updateId,
        role = _this$props.role,
        progress = _this$props.progress,
        rtl = _this$props.rtl;
    var toastProps = {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast", RT_NAMESPACE + "__toast--" + type, (_cx = {}, _cx[RT_NAMESPACE + "__toast--rtl"] = rtl, _cx), className)
    };

    if (autoClose && pauseOnHover) {
      toastProps.onMouseEnter = this.pauseToast;
      toastProps.onMouseLeave = this.playToast;
    } // prevent toast from closing when user drags the toast


    if (closeOnClick) {
      toastProps.onClick = function (e) {
        onClick && onClick(e);
        _this2.flag.canCloseOnClick && closeToast();
      };
    }

    var controlledProgress = parseFloat(progress) === progress;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, {
      in: this.props.in,
      appear: true,
      onExited: this.onExitTransitionEnd,
      position: position,
      preventExitTransition: this.state.preventExitTransition
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      onClick: onClick
    }, toastProps, {
      ref: function ref(_ref) {
        return _this2.ref = _ref;
      },
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseUp: this.onDragTransitionEnd,
      onTouchEnd: this.onDragTransitionEnd
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.in && {
      role: role
    }, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast-body", bodyClassName)
    }), children), closeButton && closeButton, (autoClose || controlledProgress) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProgressBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateId && !controlledProgress ? {
      key: "pb-" + updateId
    } : {}, {
      rtl: rtl,
      delay: autoClose,
      isRunning: this.state.isRunning,
      closeToast: closeToast,
      hide: hideProgressBar,
      type: type,
      style: progressStyle,
      className: progressClassName,
      controlledProgress: controlledProgress,
      progress: progress
    }))));
  };

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Toast.propTypes = {
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]).isRequired,
  autoClose: falseOrDelay.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(POSITION)).isRequired,
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  pauseOnFocusLoss: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  closeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  hideProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  draggablePercent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(TYPE)),
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  bodyClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  updateId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  containerId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
Toast.defaultProps = {
  type: TYPE.DEFAULT,
  in: true,
  onOpen: NOOP,
  onClose: NOOP,
  className: null,
  bodyClassName: null,
  progressClassName: null,
  updateId: null
};

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: RT_NAMESPACE + "__close-button " + RT_NAMESPACE + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, "\u2716\uFE0E");
}

CloseButton.propTypes = {
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  arialLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
CloseButton.defaultProps = {
  ariaLabel: 'close'
};

var Bounce = cssTransition({
  enter: RT_NAMESPACE + "__bounce-enter",
  exit: RT_NAMESPACE + "__bounce-exit",
  appendPosition: true
});
var Slide = cssTransition({
  enter: RT_NAMESPACE + "__slide-enter",
  exit: RT_NAMESPACE + "__slide-exit",
  duration: [450, 750],
  appendPosition: true
});
var Zoom = cssTransition({
  enter: RT_NAMESPACE + "__zoom-enter",
  exit: RT_NAMESPACE + "__zoom-exit"
});
var Flip = cssTransition({
  enter: RT_NAMESPACE + "__flip-enter",
  exit: RT_NAMESPACE + "__flip-exit"
});

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToastContainer, _Component);

  function ToastContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      toast: []
    };
    _this.toastKey = 1;
    _this.collection = {};

    _this.isToastActive = function (id) {
      return _this.state.toast.indexOf(id) !== -1;
    };

    return _this;
  }

  var _proto = ToastContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    eventManager.cancelEmit(ACTION.WILL_UNMOUNT).on(ACTION.SHOW, function (content, options) {
      return _this2.ref ? _this2.buildToast(content, options) : null;
    }).on(ACTION.CLEAR, function (id) {
      return !_this2.ref ? null : id == null ? _this2.clear() : _this2.removeToast(id);
    }).emit(ACTION.DID_MOUNT, this);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    eventManager.emit(ACTION.WILL_UNMOUNT, this);
  };

  _proto.removeToast = function removeToast(id) {
    this.setState({
      toast: this.state.toast.filter(function (v) {
        return v !== id;
      })
    }, this.dispatchChange);
  };

  _proto.dispatchChange = function dispatchChange() {
    eventManager.emit(ACTION.ON_CHANGE, this.state.toast.length, this.props.containerId);
  };

  _proto.makeCloseButton = function makeCloseButton(toastClose, toastId, type) {
    var _this3 = this;

    var closeButton = this.props.closeButton;

    if (Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(toastClose) || toastClose === false) {
      closeButton = toastClose;
    } else if (toastClose === true) {
      closeButton = this.props.closeButton && typeof this.props.closeButton !== 'boolean' ? this.props.closeButton : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CloseButton, null);
    }

    return closeButton === false ? false : Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(closeButton, {
      closeToast: function closeToast() {
        return _this3.removeToast(toastId);
      },
      type: type
    });
  };

  _proto.getAutoCloseDelay = function getAutoCloseDelay(toastAutoClose) {
    return toastAutoClose === false || isValidDelay(toastAutoClose) ? toastAutoClose : this.props.autoClose;
  };

  _proto.canBeRendered = function canBeRendered(content) {
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(content) || typeof content === 'string' || typeof content === 'number' || typeof content === 'function';
  };

  _proto.parseClassName = function parseClassName(prop) {
    if (typeof prop === 'string') {
      return prop;
    } else if (prop !== null && typeof prop === 'object' && 'toString' in prop) {
      return prop.toString();
    }

    return null;
  };

  _proto.belongToContainer = function belongToContainer(_ref) {
    var containerId = _ref.containerId;
    return containerId === this.props.containerId;
  };

  _proto.buildToast = function buildToast(content, _ref2) {
    var _this4 = this;

    var delay = _ref2.delay,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["delay"]);

    if (!this.canBeRendered(content)) {
      throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof content);
    }

    var toastId = options.toastId,
        updateId = options.updateId; // Check for multi-container and also for duplicate toastId
    // Maybe it would be better to extract it

    if (this.props.enableMultiContainer && !this.belongToContainer(options) || this.isToastActive(toastId) && updateId == null) {
      return;
    }

    var closeToast = function closeToast() {
      return _this4.removeToast(toastId);
    };

    var toastOptions = {
      id: toastId,
      // ⚠️ if no options.key, this.toastKey - 1 is assigned
      key: options.key || this.toastKey++,
      type: options.type,
      closeToast: closeToast,
      updateId: options.updateId,
      rtl: this.props.rtl,
      position: options.position || this.props.position,
      transition: options.transition || this.props.transition,
      className: this.parseClassName(options.className || this.props.toastClassName),
      bodyClassName: this.parseClassName(options.bodyClassName || this.props.bodyClassName),
      onClick: options.onClick || this.props.onClick,
      closeButton: this.makeCloseButton(options.closeButton, toastId, options.type),
      pauseOnHover: typeof options.pauseOnHover === 'boolean' ? options.pauseOnHover : this.props.pauseOnHover,
      pauseOnFocusLoss: typeof options.pauseOnFocusLoss === 'boolean' ? options.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
      draggable: typeof options.draggable === 'boolean' ? options.draggable : this.props.draggable,
      draggablePercent: typeof options.draggablePercent === 'number' && !isNaN(options.draggablePercent) ? options.draggablePercent : this.props.draggablePercent,
      closeOnClick: typeof options.closeOnClick === 'boolean' ? options.closeOnClick : this.props.closeOnClick,
      progressClassName: this.parseClassName(options.progressClassName || this.props.progressClassName),
      progressStyle: this.props.progressStyle,
      autoClose: this.getAutoCloseDelay(options.autoClose),
      hideProgressBar: typeof options.hideProgressBar === 'boolean' ? options.hideProgressBar : this.props.hideProgressBar,
      progress: parseFloat(options.progress),
      role: typeof options.role === 'string' ? options.role : this.props.role
    };
    typeof options.onOpen === 'function' && (toastOptions.onOpen = options.onOpen);
    typeof options.onClose === 'function' && (toastOptions.onClose = options.onClose); // add closeToast function to react component only

    if (Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(content) && typeof content.type !== 'string' && typeof content.type !== 'number') {
      content = Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(content, {
        closeToast: closeToast
      });
    } else if (typeof content === 'function') {
      content = content({
        closeToast: closeToast
      });
    }

    if (isValidDelay(delay)) {
      setTimeout(function () {
        _this4.appendToast(toastOptions, content, options.staleToastId);
      }, delay);
    } else {
      this.appendToast(toastOptions, content, options.staleToastId);
    }
  };

  _proto.appendToast = function appendToast(options, content, staleToastId) {
    var _extends2;

    var id = options.id,
        updateId = options.updateId;
    this.collection = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.collection, (_extends2 = {}, _extends2[id] = {
      options: options,
      content: content,
      position: options.position
    }, _extends2));
    this.setState({
      toast: (updateId ? [].concat(this.state.toast) : [].concat(this.state.toast, [id])).filter(function (id) {
        return id !== staleToastId;
      })
    }, this.dispatchChange);
  };

  _proto.clear = function clear() {
    this.setState({
      toast: []
    });
  };

  _proto.renderToast = function renderToast() {
    var _this5 = this;

    var toastToRender = {};
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        newestOnTop = _this$props.newestOnTop;
    var collection = newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection); // group toast by position

    collection.forEach(function (toastId) {
      var _this5$collection$toa = _this5.collection[toastId],
          position = _this5$collection$toa.position,
          options = _this5$collection$toa.options,
          content = _this5$collection$toa.content;
      toastToRender[position] || (toastToRender[position] = []);

      if (_this5.state.toast.indexOf(options.id) !== -1) {
        toastToRender[position].push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Toast, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          isDocumentHidden: _this5.state.isDocumentHidden,
          key: "toast-" + options.key
        }), content));
      } else {
        toastToRender[position].push(null);
        delete _this5.collection[toastId];
      }
    });
    return Object.keys(toastToRender).map(function (position) {
      var _cx;

      var disablePointer = toastToRender[position].length === 1 && toastToRender[position][0] === null;
      var props = {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast-container", RT_NAMESPACE + "__toast-container--" + position, (_cx = {}, _cx[RT_NAMESPACE + "__toast-container--rtl"] = _this5.props.rtl, _cx), _this5.parseClassName(className)),
        style: disablePointer ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
          pointerEvents: 'none'
        }) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style)
      };
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["TransitionGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        key: "container-" + position
      }), toastToRender[position]);
    });
  };

  _proto.render = function render() {
    var _this6 = this;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(node) {
        return _this6.ref = node;
      },
      className: "" + RT_NAMESPACE
    }, this.renderToast());
  };

  return ToastContainer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

ToastContainer.propTypes = {
  /**
   * Set toast position
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(POSITION)),

  /**
   * Disable or set autoClose delay
   */
  autoClose: falseOrDelay,

  /**
   * Disable or set a custom react element for the close button
   */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * Hide or not progress bar when autoClose is enabled
   */
  hideProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Pause toast duration on hover
   */
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Dismiss toast on click
   */
  closeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Newest on top
   */
  newestOnTop: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * An optional className
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional style
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * An optional className for the toast
   */
  toastClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional className for the toast body
   */
  bodyClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional className for the toast progress bar
   */
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional style for the toast progress bar
   */
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Define enter and exit transition using react-transition-group
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Support rtl display
   */
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Allow toast to be draggable
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The percentage of the toast's width it takes for a drag to dismiss a toast
   */
  draggablePercent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * Pause the toast on focus loss
   */
  pauseOnFocusLoss: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Show the toast only if it includes containerId and it's the same as containerId
   */
  enableMultiContainer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Set id to handle multiple container
   */
  containerId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * Set role attribute for the toast body
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Fired when clicking inside toaster
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CloseButton, null),
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null,
  progressStyle: null,
  role: 'alert'
};

var containers = new Map();
var latestInstance = null;
var containerDomNode = null;
var containerConfig = {};
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  if (!containerId) return containers.get(latestInstance);
  return containers.get(containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  var toast = container.collection[toastId];
  if (typeof toast === 'undefined') return null;
  return toast;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(options, type) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    type: type,
    toastId: getToastId(options)
  });
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (typeof options.toastId === 'string' || typeof options.toastId === 'number' && !isNaN(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(ACTION.SHOW, content, options);
  } else {
    queue.push({
      action: ACTION.SHOW,
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ToastContainer, containerConfig), containerDomNode);
    }
  }

  return options.toastId;
}

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(options, options && options.type || TYPE.DEFAULT));
};
/**
 * For each available type create a shortcut
 */


var _loop = function _loop(t) {
  if (TYPE[t] !== TYPE.DEFAULT) {
    toast[TYPE[t].toLowerCase()] = function (content, options) {
      return dispatchToast(content, mergeOptions(options, options && options.type || TYPE[t]));
    };
  }
};

for (var t in TYPE) {
  _loop(t);
}
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  if (id === void 0) {
    id = null;
  }

  return isAnyContainerMounted() && eventManager.emit(ACTION.CLEAR, id);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;

  if (containers.size > 0) {
    containers.forEach(function (container) {
      if (container.isToastActive(id)) {
        isToastActive = true;
      }
    });
  }

  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.options,
          oldContent = toast.content;

      var nextOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldOptions, {}, options, {
        toastId: options.toastId || toastId
      });

      if (!options.toastId || options.toastId === toastId) {
        nextOptions.updateId = generateToastId();
      } else {
        nextOptions.staleToastId = toastId;
      }

      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 */


toast.onChange = function (callback) {
  if (typeof callback === 'function') {
    eventManager.on(ACTION.ON_CHANGE, callback);
  }
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(ACTION.DID_MOUNT, function (containerInstance) {
  latestInstance = containerInstance.props.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(item.action, item.content, item.options);
  });
  queue = [];
}).on(ACTION.WILL_UNMOUNT, function (containerInstance) {
  if (containerInstance) containers.delete(containerInstance.props.containerId || containerInstance);else containers.clear();

  if (containers.size === 0) {
    eventManager.off(ACTION.SHOW).off(ACTION.CLEAR);
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});




/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided and it
   * will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
   * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 *
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */

var SwitchTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out: New element transitions in first, then when complete, the current element transitions out.`
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (global) {

    // minimal symbol polyfill for IE11 and others
    if (typeof Symbol !== 'function') {
        var Symbol = function(name) {
            return name;
        }

        Symbol.nonNative = true;
    }

    const STATE_PLAINTEXT = Symbol('plaintext');
    const STATE_HTML      = Symbol('html');
    const STATE_COMMENT   = Symbol('comment');

    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;

    function striptags(html, allowable_tags, tag_replacement) {
        html            = html || '';
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return striptags_internal(html, context);
    }

    function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return function striptags_stream(html) {
            return striptags_internal(html || '', context);
        };
    }

    striptags.init_streaming_mode = init_striptags_stream;

    function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);

        return {
            allowable_tags : allowable_tags,
            tag_replacement: tag_replacement,

            state         : STATE_PLAINTEXT,
            tag_buffer    : '',
            depth         : 0,
            in_quote_char : ''
        };
    }

    function striptags_internal(html, context) {
        let allowable_tags  = context.allowable_tags;
        let tag_replacement = context.tag_replacement;

        let state         = context.state;
        let tag_buffer    = context.tag_buffer;
        let depth         = context.depth;
        let in_quote_char = context.in_quote_char;
        let output        = '';

        for (let idx = 0, length = html.length; idx < length; idx++) {
            let char = html[idx];

            if (state === STATE_PLAINTEXT) {
                switch (char) {
                    case '<':
                        state       = STATE_HTML;
                        tag_buffer += char;
                        break;

                    default:
                        output += char;
                        break;
                }
            }

            else if (state === STATE_HTML) {
                switch (char) {
                    case '<':
                        // ignore '<' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // we're seeing a nested '<'
                        depth++;
                        break;

                    case '>':
                        // ignore '>' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // something like this is happening: '<<>>'
                        if (depth) {
                            depth--;

                            break;
                        }

                        // this is closing the tag in tag_buffer
                        in_quote_char = '';
                        state         = STATE_PLAINTEXT;
                        tag_buffer   += '>';

                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
                            output += tag_buffer;
                        } else {
                            output += tag_replacement;
                        }

                        tag_buffer = '';
                        break;

                    case '"':
                    case '\'':
                        // catch both single and double quotes

                        if (char === in_quote_char) {
                            in_quote_char = '';
                        } else {
                            in_quote_char = in_quote_char || char;
                        }

                        tag_buffer += char;
                        break;

                    case '-':
                        if (tag_buffer === '<!-') {
                            state = STATE_COMMENT;
                        }

                        tag_buffer += char;
                        break;

                    case ' ':
                    case '\n':
                        if (tag_buffer === '<') {
                            state      = STATE_PLAINTEXT;
                            output    += '< ';
                            tag_buffer = '';

                            break;
                        }

                        tag_buffer += char;
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }

            else if (state === STATE_COMMENT) {
                switch (char) {
                    case '>':
                        if (tag_buffer.slice(-2) == '--') {
                            // close the comment
                            state = STATE_PLAINTEXT;
                        }

                        tag_buffer = '';
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }
        }

        // save the context for future iterations
        context.state         = state;
        context.tag_buffer    = tag_buffer;
        context.depth         = depth;
        context.in_quote_char = in_quote_char;

        return output;
    }

    function parse_allowable_tags(allowable_tags) {
        let tag_set = new Set();

        if (typeof allowable_tags === 'string') {
            let match;

            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
                tag_set.add(match[1]);
            }
        }

        else if (!Symbol.nonNative &&
                 typeof allowable_tags[Symbol.iterator] === 'function') {

            tag_set = new Set(allowable_tags);
        }

        else if (typeof allowable_tags.forEach === 'function') {
            // IE11 compatible
            allowable_tags.forEach(tag_set.add, tag_set);
        }

        return tag_set;
    }

    function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);

        return match ? match[1].toLowerCase() : null;
    }

    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function module_factory() { return striptags; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    else {}
}(this));


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);