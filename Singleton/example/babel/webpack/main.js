/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _singleton = __webpack_require__(/*! ./singleton.js */ \"./src/singleton.js\");\n\nvar _singleton2 = _interopRequireDefault(_singleton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_singleton2.default.method1(); // main.js\n\n_singleton2.default.method2();\nconsole.log(_singleton2.default.method.time);\nconsole.log(_singleton2.default.method.name);\n_singleton2.default.method.getTime('main1');\nconsole.log(_singleton2.default.method.name);\n_singleton2.default.method.getTime('main2');\nconsole.log(_singleton2.default.method.name);\n\n//# sourceURL=webpack://babel/./src/main.js?");

/***/ }),

/***/ "./src/singleton.js":
/*!**************************!*\
  !*** ./src/singleton.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// singleton.js\nvar somePrivateState = [\"state\"];\nfunction privateMethod() {\n    console.log(\"privateMethod\");\n}\n\nfunction Obj() {\n    this.index = 0;\n    this.time = new Date();\n    this.name = '';\n}\n\nObj.prototype.getTime = function (name) {\n    console.log(this.index);\n    this.name = name;\n    this.index = this.index + 1;\n};\nvar obj = new Obj();\n\nexports[\"default\"] = {\n    method1: function method1() {\n        console.log(\"method1\");\n    },\n    method2: function method2() {\n        console.log(\"method2\");\n    },\n\n    method: obj\n};\n\n//# sourceURL=webpack://babel/./src/singleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;