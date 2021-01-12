webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Introduction */ \"./components/Introduction.js\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.js\");\n/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe */ \"./components/AboutMe.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\nvar _jsxFileName = \"/Users/samanthapinosvalle/Documents/my-portfolio 2/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var router = useRouter();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(router.query.language),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Always do navigations after the first render\n    router.push(\"/?language=\".concat(language), undefined, {\n      shallow: true\n    });\n  }, [language]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // The counter changed!\n    console.log(router.query);\n  }, [router.query.language]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Introduction__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    language: language,\n    callback: setLanguage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Home, \"9z6g+SpgQN0VJ67BZCAYgsU52YQ=\", true);\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJxdWVyeSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VFZmZlY3QiLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTdCLE1BQU1DLE1BQU0sR0FBR0MsU0FBUyxFQUF4Qjs7QUFGNkIsa0JBR0dDLHNEQUFRLENBQUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxRQUFkLENBSFg7QUFBQSxNQUd0QkEsUUFIc0I7QUFBQSxNQUdaQyxXQUhZOztBQUs3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQU4sVUFBTSxDQUFDTyxJQUFQLHNCQUEwQkgsUUFBMUIsR0FBc0NJLFNBQXRDLEVBQWlEO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWpEO0FBQ0QsR0FIUSxFQUdOLENBQUNMLFFBQUQsQ0FITSxDQUFUO0FBS0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFNLENBQUNHLEtBQW5CO0FBQ0QsR0FIUSxFQUdOLENBQUNILE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxRQUFkLENBSE0sQ0FBVDtBQU1BLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUUsTUFBQyxnRUFBRDtBQUFjLFlBQVEsRUFBRUEsUUFBeEI7QUFBa0MsWUFBUSxFQUFFQyxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFNRSxNQUFDLDREQUFEO0FBQVUsWUFBUSxFQUFFRCxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFRRSxNQUFDLDJEQUFEO0FBQVMsWUFBUSxFQUFFQSxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFVRSxNQUFDLDJEQUFEO0FBQVMsWUFBUSxFQUFFQSxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQWVEOztHQS9CdUJMLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHNcIjtcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0TWVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5Lmxhbmd1YWdlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBkbyBuYXZpZ2F0aW9ucyBhZnRlciB0aGUgZmlyc3QgcmVuZGVyXG4gICAgcm91dGVyLnB1c2goYC8/bGFuZ3VhZ2U9JHtsYW5ndWFnZX1gLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICB9LCBbbGFuZ3VhZ2VdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVGhlIGNvdW50ZXIgY2hhbmdlZCFcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXG4gIH0sIFtyb3V0ZXIucXVlcnkubGFuZ3VhZ2VdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgICA8U2lkZUJhciAvPlxuXG4gICAgICA8SW50cm9kdWN0aW9uIGxhbmd1YWdlPXtsYW5ndWFnZX0gY2FsbGJhY2s9e3NldExhbmd1YWdlfSAvPlxuXG4gICAgICA8UHJvamVjdHMgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuXG4gICAgICA8QWJvdXRNZSBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+XG5cbiAgICAgIDxDb250YWN0IGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})