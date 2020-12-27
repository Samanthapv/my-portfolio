webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/samantha/my-portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      number = _useState[0],\n      setNumber = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    changeFont();\n  }, []);\n\n  var changeFont = function changeFont() {\n    setInterval(function () {\n      setNumber(Math.floor(Math.random() * 6) + 1);\n    }, 3000);\n  };\n\n  return __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"flex h-screen justify-center items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"fontmain \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 6\n    }\n  }, \" hi! I am \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 41\n    }\n  }, \"samantha!\"), \" a \"), __jsx(\"p\", {\n    className: \"fontmain\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 6\n    }\n  }, \" \", __jsx(\"span\", {\n    className: \"font\".concat(number, \" inline-block h-10 w-30\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 31\n    }\n  }, \" full-stack \"), \" \", __jsx(\"span\", {\n    className: \"mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 108\n    }\n  }, \" developer \")), __jsx(\"p\", {\n    className: \"fontmain\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 29\n    }\n  }, \"based in Spain.\")))), __jsx(\"div\", {\n    className: \"m-72\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n    layoutId: \"header\",\n    className: \"mb-20 font-custom4 text-7xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"My projects\"), __jsx(\"div\", {\n    className: \"object-cover mt-50 container flex flex-row justify-around\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, [{\n    name: \"midori\",\n    color: \"blue\"\n  }, {\n    name: \"shareit\",\n    color: \"\"\n  }].map(function (product) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      href: product,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].img, {\n      layoutId: product.name,\n      className: \"border rounded \".concat(\"shadow-sm\" + product.color, \" mr-10 w-1/2\"),\n      src: product.name + \".png\",\n      animate: {\n        scale: 1\n      },\n      whileHover: {\n        scale: 1.1\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    })));\n  }))));\n}\n\n_s(Home, \"PA65DSKxrwWRvhZl2dML57ITPQw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VGb250Iiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYW1lIiwiY29sb3IiLCJtYXAiLCJwcm9kdWN0Iiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFHN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFJQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCQyxlQUFXLENBQUMsWUFBVTtBQUNwQkgsZUFBUyxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLElBQWdDLENBQWpDLENBQVQ7QUFDRixLQUZXLEVBRVQsSUFGUyxDQUFYO0FBR0QsR0FKRDs7QUFNQSxTQUVDO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVIO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW5DLFFBREgsRUFFRztBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBeUI7QUFBTSxhQUFTLGdCQUFTUCxNQUFULDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXpCLE9BQXNHO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXRHLENBRkgsRUFJRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0I7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEIsQ0FKRixDQURGLENBRkcsRUFZQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLFlBQVEsRUFBQyxRQUFwQjtBQUE2QixhQUFTLEVBQUMsNkJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsRUFFRztBQUFLLGFBQVMsRUFBQywyREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQztBQUFDUSxRQUFJLEVBQUUsUUFBUDtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBQUQsRUFBa0M7QUFBQ0QsUUFBSSxFQUFFLFNBQVA7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUFsQyxFQUFnRUMsR0FBaEUsQ0FBb0UsVUFBQ0MsT0FBRDtBQUFBLFdBQ25FLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGNBQVEsRUFBRUEsT0FBTyxDQUFDSCxJQURwQjtBQUVFLGVBQVMsMkJBQW9CLGNBQWNHLE9BQU8sQ0FBQ0YsS0FBMUMsaUJBRlg7QUFHRSxTQUFHLEVBQUVFLE9BQU8sQ0FBQ0gsSUFBUixHQUFlLE1BSHRCO0FBSUUsYUFBTyxFQUFFO0FBQUVJLGFBQUssRUFBRTtBQUFULE9BSlg7QUFLRSxnQkFBVSxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FEbUU7QUFBQSxHQUFwRSxDQURILENBRkgsQ0FaQSxDQUZEO0FBbUNEOztHQWhEdUJkLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hhbmdlRm9udCgpO1xuICB9LCBbXSlcblxuICBsZXQgY2hhbmdlRm9udCA9ICgpID0+IHtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgc2V0TnVtYmVyKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMSk7ICBcbiAgIH0sIDMwMDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgIFxuICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cblxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgPHAgY2xhc3NOYW1lPVwiZm9udG1haW4gXCI+IGhpISBJIGFtIDxzcGFuPnNhbWFudGhhITwvc3Bhbj4gYSA8L3A+XG4gICAgIDxwIGNsYXNzTmFtZT1cImZvbnRtYWluXCI+IDxzcGFuIGNsYXNzTmFtZT17YGZvbnQke251bWJlcn0gaW5saW5lLWJsb2NrIGgtMTAgdy0zMGB9PiBmdWxsLXN0YWNrIDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibXQtMVwiPiBkZXZlbG9wZXIgPC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmb250bWFpblwiPjxzcGFuIGNsYXNzTmFtZT1cIm10LTFcIj5iYXNlZCBpbiBTcGFpbi48L3NwYW4+XG4gICAgPC9wPlxuICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cbiAgIDxkaXYgY2xhc3NOYW1lPVwibS03MlwiPlxuICAgICAgPG1vdGlvbi5oMSBsYXlvdXRJZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cIm1iLTIwIGZvbnQtY3VzdG9tNCB0ZXh0LTd4bFwiPk15IHByb2plY3RzPC9tb3Rpb24uaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBtdC01MCBjb250YWluZXIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICB7W3tuYW1lOiBcIm1pZG9yaVwiLCBjb2xvcjogXCJibHVlXCJ9LCB7bmFtZTogXCJzaGFyZWl0XCIsIGNvbG9yOiBcIlwifV0ubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvZHVjdH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciByb3VuZGVkICR7XCJzaGFkb3ctc21cIiArIHByb2R1Y3QuY29sb3J9IG1yLTEwIHctMS8yYH1cbiAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QubmFtZSArIFwiLnBuZ1wifVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})