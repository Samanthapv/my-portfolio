webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/samantha/my-portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    changeFont();\n  }, []);\n\n  var changeMessage = function changeMessage() {\n    var messages = [\"dog\", \"cat\", \"giraffe\", \"bird\"]; //make state each one of the words\n    // take letters from the tail of the word one by one\n    //when \n\n    setInterval(function () {\n      setNumber(Math.floor(Math.random() * 6) + 1);\n    }, 3000);\n  };\n\n  return __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"flex h-screen justify-center items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"fontmain \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }, \" hi! I am \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 41\n    }\n  }, \"samantha!\"), \" a full-stack developer and a \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 93\n    }\n  }, message), \" based in Spain.\"))), __jsx(\"div\", {\n    className: \"m-72\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n    layoutId: \"header\",\n    className: \"mb-20 font-custom4 text-7xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"My projects\"), __jsx(\"div\", {\n    className: \"object-cover mt-50 container flex flex-row justify-around\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, [{\n    name: \"midori\",\n    color: \"blue\"\n  }, {\n    name: \"shareit\",\n    color: \"\"\n  }].map(function (product) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      href: product,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].img, {\n      layoutId: product.name,\n      className: \"border rounded \".concat(\"shadow-sm\" + product.color, \" mr-10 w-1/2\"),\n      src: product.name + \".png\",\n      animate: {\n        scale: 1\n      },\n      whileHover: {\n        scale: 1.1\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    })));\n  }))));\n}\n\n_s(Home, \"ClLa+zvPL6vd0LAuHSvav3BaFBg=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZUVmZmVjdCIsImNoYW5nZUZvbnQiLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRJbnRlcnZhbCIsInNldE51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJjb2xvciIsIm1hcCIsInByb2R1Y3QiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFFeEIsUUFBSUMsUUFBUSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxTQUFmLEVBQTBCLE1BQTFCLENBQWYsQ0FGd0IsQ0FJeEI7QUFDQTtBQUNBOztBQUdBQyxlQUFXLENBQUMsWUFBVTtBQUNwQkMsZUFBUyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLElBQWdDLENBQWpDLENBQVQ7QUFDRixLQUZXLEVBRVQsSUFGUyxDQUFYO0FBR0QsR0FaRDs7QUFjQSxTQUVDO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVIO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW5DLG9DQUF1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9WLE9BQVAsQ0FBdkYscUJBREgsQ0FERixDQUZHLEVBU0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFBVyxZQUFRLEVBQUMsUUFBcEI7QUFBNkIsYUFBUyxFQUFDLDZCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILEVBRUc7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUM7QUFBQ1csUUFBSSxFQUFFLFFBQVA7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQUFELEVBQWtDO0FBQUNELFFBQUksRUFBRSxTQUFQO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FBbEMsRUFBZ0VDLEdBQWhFLENBQW9FLFVBQUNDLE9BQUQ7QUFBQSxXQUNuRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxjQUFRLEVBQUVBLE9BQU8sQ0FBQ0gsSUFEcEI7QUFFRSxlQUFTLDJCQUFvQixjQUFjRyxPQUFPLENBQUNGLEtBQTFDLGlCQUZYO0FBR0UsU0FBRyxFQUFFRSxPQUFPLENBQUNILElBQVIsR0FBZSxNQUh0QjtBQUlFLGFBQU8sRUFBRTtBQUFFSSxhQUFLLEVBQUU7QUFBVCxPQUpYO0FBS0UsZ0JBQVUsRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBRG1FO0FBQUEsR0FBcEUsQ0FESCxDQUZILENBVEEsQ0FGRDtBQWdDRDs7R0FyRHVCakIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoYW5nZUZvbnQoKTtcbiAgfSwgW10pXG5cbiAgbGV0IGNoYW5nZU1lc3NhZ2UgPSAoKSA9PiB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBbXCJkb2dcIiwgXCJjYXRcIiwgXCJnaXJhZmZlXCIsIFwiYmlyZFwiXVxuXG4gICAgLy9tYWtlIHN0YXRlIGVhY2ggb25lIG9mIHRoZSB3b3Jkc1xuICAgIC8vIHRha2UgbGV0dGVycyBmcm9tIHRoZSB0YWlsIG9mIHRoZSB3b3JkIG9uZSBieSBvbmVcbiAgICAvL3doZW4gXG5cblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICBzZXROdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKTsgIFxuICAgfSwgMzAwMCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgXG4gICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXG48ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICA8cCBjbGFzc05hbWU9XCJmb250bWFpbiBcIj4gaGkhIEkgYW0gPHNwYW4+c2FtYW50aGEhPC9zcGFuPiBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIGFuZCBhIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj4gYmFzZWQgaW4gU3BhaW4uXG4gICAgPC9wPlxuICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cbiAgIDxkaXYgY2xhc3NOYW1lPVwibS03MlwiPlxuICAgICAgPG1vdGlvbi5oMSBsYXlvdXRJZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cIm1iLTIwIGZvbnQtY3VzdG9tNCB0ZXh0LTd4bFwiPk15IHByb2plY3RzPC9tb3Rpb24uaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBtdC01MCBjb250YWluZXIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICB7W3tuYW1lOiBcIm1pZG9yaVwiLCBjb2xvcjogXCJibHVlXCJ9LCB7bmFtZTogXCJzaGFyZWl0XCIsIGNvbG9yOiBcIlwifV0ubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvZHVjdH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciByb3VuZGVkICR7XCJzaGFkb3ctc21cIiArIHByb2R1Y3QuY29sb3J9IG1yLTEwIHctMS8yYH1cbiAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QubmFtZSArIFwiLnBuZ1wifVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})