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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sumMinorCredits = exports.sumMajorCredits = void 0;\nconst MAJOR_CREDIT_BRAND = Symbol('MAJOR_CREDIT_BRAND');\nconst MINOR_CREDIT_BRAND = Symbol('MINOR_CREDIT_BRAND');\nfunction sumMajorCredits(subject1, subject2) {\n    return {\n        [MAJOR_CREDIT_BRAND]: undefined,\n        credits: subject1.credits + subject2.credits,\n    };\n}\nexports.sumMajorCredits = sumMajorCredits;\nfunction sumMinorCredits(subject1, subject2) {\n    return {\n        [MINOR_CREDIT_BRAND]: undefined,\n        credits: subject1.credits + subject2.credits,\n    };\n}\nexports.sumMinorCredits = sumMinorCredits;\n// Example Usage\nconst majorSubject1 = { [MAJOR_CREDIT_BRAND]: undefined, credits: 3 };\nconst majorSubject2 = { [MAJOR_CREDIT_BRAND]: undefined, credits: 4 };\nconst minorSubject1 = { [MINOR_CREDIT_BRAND]: undefined, credits: 2 };\nconst minorSubject2 = { [MINOR_CREDIT_BRAND]: undefined, credits: 1 };\nconst totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);\nconst totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);\nconsole.log('Total Major Credits:', totalMajorCredits);\nconsole.log('Total Minor Credits:', totalMinorCredits);\n\n\n//# sourceURL=webpack://task_5/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;