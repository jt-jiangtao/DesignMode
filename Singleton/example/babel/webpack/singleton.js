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

/***/ "./src/singleton.js":
/*!**************************!*\
  !*** ./src/singleton.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// singleton.js\nvar somePrivateState = [\"state\"];\nfunction privateMethod() {\n    console.log(\"privateMethod\");\n}\n\nfunction Obj() {\n    this.index = 0;\n    this.time = new Date();\n    this.name = '';\n}\n\nObj.prototype.getTime = function (name) {\n    console.log(this.index);\n    this.name = name;\n    this.index = this.index + 1;\n};\nvar obj = new Obj();\n\nexports[\"default\"] = {\n    method1: function method1() {\n        console.log(\"method1\");\n    },\n    method2: function method2() {\n        console.log(\"method2\");\n    },\n\n    method: obj\n};\n\n//# sourceURL=webpack://babel/./src/singleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/singleton.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;