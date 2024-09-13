/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval(
          '\r\n\r\nlet a = "";\r\nlet b = "";\r\nlet sign = "";\r\nlet finish = false;\r\n\r\nconst digit = ["0", "2", "3", "4", "5", "6", "7", "8", "9", ","];\r\nconst action = ["+", "-", "x", "÷", "+/-", "%"];\r\n\r\nconst out = document.querySelector(".result p");\r\n\r\nfunction clearAll() {\r\n  a = "";\r\n  b = "";\r\n  sign = "";\r\n  finish = false;\r\n  out.textContent = 0;\r\n}\r\n\r\ndocument.querySelector(".clear").addEventListener("click", clearAll);\r\n\r\ndocument.querySelector(".calculator").onclick = (event) => {\r\n  if (!event.target.classList.contains("btn")) return;\r\n  if (event.target.classList.contains("clear")) return;\r\n  out.textContent = "";\r\n\r\n  const key = event.target.textContent;\r\n\r\n  if (digit.includes(key)) {\r\n    if (b === "" && sign === "") {\r\n      a += key;\r\n      out.textContent = a;\r\n    } else if (a !== "" && b !== "" && finish) {\r\n      b = key;\r\n      finish = false;\r\n      out.textContent = b;\r\n    } else {\r\n      b = +key;\r\n      out.textContent = b;\r\n    }\r\n\r\n    return;\r\n  }\r\n  if (action.includes(key)) {\r\n    sign = key;\r\n    out.textContent = sign;\r\n    return;\r\n  }\r\n  if (key === "=") {\r\n    if (b === "") b = a;\r\n    switch (sign) {\r\n      case "+":\r\n        a = +a + +b;\r\n        break;\r\n      case "-":\r\n        a = a - b;\r\n        break;\r\n      case "x":\r\n        a = a * b;\r\n        break;\r\n      case "÷":\r\n        if (b == "0") {\r\n          out.textContent = "error";\r\n          a = "";\r\n          b = "";\r\n          sign = "";\r\n          return;\r\n        }\r\n        a = a / b;\r\n        break;\r\n      case "+/-":\r\n        a = -1 * a;\r\n        break;\r\n      case "%":\r\n        a = a / 100;\r\n        break;\r\n    }\r\n    finish = true;\r\n    out.textContent = a;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://calc/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();
