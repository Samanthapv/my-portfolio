webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Introduction */ \"./components/Introduction.js\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.js\");\n/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe */ \"./components/AboutMe.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/samantha/my-portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var router2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"EN\"),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(router2.query.language);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({\n      pathname: '/',\n      query: {\n        lang: language\n      }\n    });\n  }, [language]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Introduction__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    language: language,\n    callback: setLanguage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Home, \"acz9CEJSYrSnjSqw7Ecb3uopwi0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicm91dGVyMiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImxhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTdCLE1BQU1DLE9BQU8sR0FBR0MsNkRBQVMsRUFBekI7O0FBRjZCLGtCQUdHQyxzREFBUSxDQUFDLElBQUQsQ0FIWDtBQUFBLE1BR3RCQyxRQUhzQjtBQUFBLE1BR1pDLFdBSFk7O0FBTS9CQyx5REFBUyxDQUFDLFlBQU07QUFFaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFPLENBQUNRLEtBQVIsQ0FBY0wsUUFBMUI7QUFDQyxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0FFLHlEQUFTLENBQUMsWUFBTTtBQUVkSSxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkgsV0FBSyxFQUFFO0FBQUVJLFlBQUksRUFBRVQ7QUFBUjtBQUZHLEtBQVo7QUFLRCxHQVBRLEVBT04sQ0FBQ0EsUUFBRCxDQVBNLENBQVQ7QUFTRSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFLE1BQUMsZ0VBQUQ7QUFBYyxZQUFRLEVBQUVBLFFBQXhCO0FBQWtDLFlBQVEsRUFBRUMsV0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBTUUsTUFBQyw0REFBRDtBQUFVLFlBQVEsRUFBRUQsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBUUUsTUFBQywyREFBRDtBQUFTLFlBQVEsRUFBRUEsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBVUUsTUFBQywyREFBRDtBQUFTLFlBQVEsRUFBRUEsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREY7QUFlRDs7R0FuQ3VCSixJO1VBRU5FLHFEOzs7S0FGTUYsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb25cIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRNZVwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCByb3V0ZXIyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcIkVOXCIpO1xuICBcbiAgXG51c2VFZmZlY3QoKCkgPT4ge1xuXG5jb25zb2xlLmxvZyhyb3V0ZXIyLnF1ZXJ5Lmxhbmd1YWdlKVxufSwgW10pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnLycsXG4gICAgcXVlcnk6IHsgbGFuZzogbGFuZ3VhZ2UgfSxcbn0pXG5cbn0sIFtsYW5ndWFnZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgICA8U2lkZUJhciAvPlxuXG4gICAgICA8SW50cm9kdWN0aW9uIGxhbmd1YWdlPXtsYW5ndWFnZX0gY2FsbGJhY2s9e3NldExhbmd1YWdlfSAvPlxuXG4gICAgICA8UHJvamVjdHMgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuXG4gICAgICA8QWJvdXRNZSBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+XG5cbiAgICAgIDxDb250YWN0IGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})