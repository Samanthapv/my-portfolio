webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/index.css */ \"./assets/index.css\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_MobileView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MobileView */ \"./components/MobileView.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/samanthapinosvalle/Documents/my-portfolio 2/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar width;\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var width = window.innerWidth;\n      console.lo;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps,\n          router = _this$props.router;\n      var spring = {\n        type: \"inertia\",\n        damping: 20,\n        stiffness: 80,\n        when: \"afterChildren\"\n      };\n      return width < 640 ? __jsx(_components_MobileView__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 22\n        }\n      }) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__[\"AnimatePresence\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 1\n        }\n      }, __jsx(\"div\", {\n        className: \"page-transition-wrapper\",\n        style: {\n          backgroundColor: \"white\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__[\"motion\"].div, {\n        transition: {\n          spring: spring\n        },\n        key: router.pathname,\n        initial: {\n          x: 300,\n          opacity: 0\n        },\n        animate: {\n          x: 0,\n          opacity: 1\n        },\n        exit: {\n          x: -300,\n          opacity: 0\n        },\n        id: \"page-transition-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }\n      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n        key: router.pathname,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }\n      })))));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIndpZHRoIiwiTXlBcHAiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJzcHJpbmciLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIndoZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXRobmFtZSIsIngiLCJvcGFjaXR5IiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxLQUFKOztJQUVNQyxLOzs7Ozs7Ozs7Ozs7O3dDQUlnQjtBQUNyQixVQUFJRCxLQUFLLEdBQUdFLE1BQU0sQ0FBQ0MsVUFBbkI7QUFDQUMsYUFBTyxDQUFDQyxFQUFSO0FBQ0U7Ozs2QkFJTztBQUFBLHdCQUdtQyxLQUFLQyxLQUh4QztBQUFBLFVBR0VDLFNBSEYsZUFHRUEsU0FIRjtBQUFBLFVBR2FDLFNBSGIsZUFHYUEsU0FIYjtBQUFBLFVBR3dCQyxNQUh4QixlQUd3QkEsTUFIeEI7QUFJTixVQUFNQyxNQUFNLEdBQUc7QUFDYkMsWUFBSSxFQUFFLFNBRE87QUFFYkMsZUFBTyxFQUFFLEVBRkk7QUFHYkMsaUJBQVMsRUFBRSxFQUhFO0FBSWJDLFlBQUksRUFBRTtBQUpPLE9BQWY7QUFPSixhQUFPZCxLQUFLLEdBQUcsR0FBUixHQUFjLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFkLEdBR1AsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1E7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQXlDLGFBQUssRUFBRTtBQUFDZSx5QkFBZSxFQUFFO0FBQWxCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLHFEQUFELENBQVEsR0FBUjtBQUNFLGtCQUFVLEVBQUU7QUFBQ0wsZ0JBQU0sRUFBTkE7QUFBRCxTQURkO0FBRUUsV0FBRyxFQUFFRCxNQUFNLENBQUNPLFFBRmQ7QUFHRSxlQUFPLEVBQUU7QUFBRUMsV0FBQyxFQUFFLEdBQUw7QUFBVUMsaUJBQU8sRUFBRTtBQUFuQixTQUhYO0FBSUUsZUFBTyxFQUFFO0FBQUVELFdBQUMsRUFBRSxDQUFMO0FBQVFDLGlCQUFPLEVBQUU7QUFBakIsU0FKWDtBQUtFLFlBQUksRUFBRTtBQUFFRCxXQUFDLEVBQUUsQ0FBQyxHQUFOO0FBQVdDLGlCQUFPLEVBQUU7QUFBcEIsU0FMUjtBQU1FLFVBQUUsRUFBQywyQkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUUsTUFBQyxTQUFELHlGQUFlVixTQUFmO0FBQTBCLFdBQUcsRUFBRUMsTUFBTSxDQUFDTyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUkYsQ0FGRixDQURSLENBSEE7QUFtQkU7Ozs7RUF6Q2tCRywrQzs7QUE0Q0hsQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9hc3NldHMvaW5kZXguY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE1vYmlsZVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9iaWxlVmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmxldCB3aWR0aDtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuXG4gIFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuIGNvbnNvbGUubG9cbiAgfVxuXG5cblxuIHJlbmRlcigpIHtcblxuICBcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3ByaW5nID0ge1xuICAgICAgdHlwZTogXCJpbmVydGlhXCIsXG4gICAgICBkYW1waW5nOiAyMCxcbiAgICAgIHN0aWZmbmVzczogODAsXG4gICAgICB3aGVuOiBcImFmdGVyQ2hpbGRyZW5cIlxuICAgIH07XG5cbnJldHVybiB3aWR0aCA8IDY0MCA/IDxNb2JpbGVWaWV3IC8+IDpcbiAoXG5cbjxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10cmFuc2l0aW9uLXdyYXBwZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+XG4gICAgXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tzcHJpbmd9fVxuICAgICAgICAgICAga2V5PXtyb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgICAgICBpbml0aWFsPXt7IHg6IDMwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgeDogLTMwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgaWQ9XCJwYWdlLXRyYW5zaXRpb24tY29udGFpbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnBhdGhuYW1lfSAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICApO1xuIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})