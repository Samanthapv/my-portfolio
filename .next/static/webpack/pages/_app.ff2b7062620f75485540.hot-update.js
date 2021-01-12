webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/index.css */ \"./assets/index.css\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_MobileView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MobileView */ \"./components/MobileView.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/samanthapinosvalle/Documents/my-portfolio 2/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar width;\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MyApp);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      width: 0,\n      height: 0\n    };\n    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateWindowDimensions();\n      window.addEventListener('resize', this.updateWindowDimensions);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.updateWindowDimensions);\n    }\n  }, {\n    key: \"updateWindowDimensions\",\n    value: function updateWindowDimensions() {\n      this.setState({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps,\n          router = _this$props.router;\n      var spring = {\n        type: \"inertia\",\n        damping: 20,\n        stiffness: 80,\n        when: \"afterChildren\"\n      };\n      return width < 640 ? __jsx(_components_MobileView__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 22\n        }\n      }) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"AnimatePresence\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 1\n        }\n      }, __jsx(\"div\", {\n        className: \"page-transition-wrapper\",\n        style: {\n          backgroundColor: \"white\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n        transition: {\n          spring: spring\n        },\n        key: router.pathname,\n        initial: {\n          x: 300,\n          opacity: 0\n        },\n        animate: {\n          x: 0,\n          opacity: 1\n        },\n        exit: {\n          x: -300,\n          opacity: 0\n        },\n        id: \"page-transition-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n        key: router.pathname,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      })))));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIndpZHRoIiwiTXlBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGVpZ2h0IiwidXBkYXRlV2luZG93RGltZW5zaW9ucyIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwic3ByaW5nIiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJ3aGVuIiwiYmFja2dyb3VuZENvbG9yIiwicGF0aG5hbWUiLCJ4Iiwib3BhY2l0eSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxLQUFKOztJQUVNQyxLOzs7OztBQUdOLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVILFdBQUssRUFBRSxDQUFUO0FBQVlJLFlBQU0sRUFBRTtBQUFwQixLQUFiO0FBQ0EsVUFBS0Msc0JBQUwsR0FBOEIsTUFBS0Esc0JBQUwsQ0FBNEJDLElBQTVCLHlHQUE5QjtBQUhpQjtBQUlsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0Qsc0JBQUw7QUFDQUUsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLSCxzQkFBdkM7QUFDRDs7OzJDQUVzQjtBQUNyQkUsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLSixzQkFBMUM7QUFDRDs7OzZDQUV3QjtBQUN2QixXQUFLSyxRQUFMLENBQWM7QUFBRVYsYUFBSyxFQUFFTyxNQUFNLENBQUNJLFVBQWhCO0FBQTRCUCxjQUFNLEVBQUVHLE1BQU0sQ0FBQ0s7QUFBM0MsT0FBZDtBQUNEOzs7NkJBR1M7QUFBQSx3QkFHbUMsS0FBS1YsS0FIeEM7QUFBQSxVQUdFVyxTQUhGLGVBR0VBLFNBSEY7QUFBQSxVQUdhQyxTQUhiLGVBR2FBLFNBSGI7QUFBQSxVQUd3QkMsTUFIeEIsZUFHd0JBLE1BSHhCO0FBSU4sVUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFlBQUksRUFBRSxTQURPO0FBRWJDLGVBQU8sRUFBRSxFQUZJO0FBR2JDLGlCQUFTLEVBQUUsRUFIRTtBQUliQyxZQUFJLEVBQUU7QUFKTyxPQUFmO0FBT0osYUFBT3BCLEtBQUssR0FBRyxHQUFSLEdBQWMsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWQsR0FHUCxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBeUMsYUFBSyxFQUFFO0FBQUNxQix5QkFBZSxFQUFFO0FBQWxCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLHFEQUFELENBQVEsR0FBUjtBQUNFLGtCQUFVLEVBQUU7QUFBQ0wsZ0JBQU0sRUFBTkE7QUFBRCxTQURkO0FBRUUsV0FBRyxFQUFFRCxNQUFNLENBQUNPLFFBRmQ7QUFHRSxlQUFPLEVBQUU7QUFBRUMsV0FBQyxFQUFFLEdBQUw7QUFBVUMsaUJBQU8sRUFBRTtBQUFuQixTQUhYO0FBSUUsZUFBTyxFQUFFO0FBQUVELFdBQUMsRUFBRSxDQUFMO0FBQVFDLGlCQUFPLEVBQUU7QUFBakIsU0FKWDtBQUtFLFlBQUksRUFBRTtBQUFFRCxXQUFDLEVBQUUsQ0FBQyxHQUFOO0FBQVdDLGlCQUFPLEVBQUU7QUFBcEIsU0FMUjtBQU1FLFVBQUUsRUFBQywyQkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUUsTUFBQyxTQUFELHlGQUFlVixTQUFmO0FBQTBCLFdBQUcsRUFBRUMsTUFBTSxDQUFDTyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUkYsQ0FGRixDQURSLENBSEE7QUFtQkU7Ozs7RUFyRGtCRywrQzs7QUF3REh4QixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9hc3NldHMvaW5kZXguY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE1vYmlsZVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9iaWxlVmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmxldCB3aWR0aDtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuXG4gIFxuY29uc3RydWN0b3IocHJvcHMpIHtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xufVxuXG5jb21wb25lbnREaWRNb3VudCgpIHtcbiAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xufVxuXG5jb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG59XG5cbnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0pO1xufVxuXG5cbiByZW5kZXIoKSB7XG5cbiAgXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNwcmluZyA9IHtcbiAgICAgIHR5cGU6IFwiaW5lcnRpYVwiLFxuICAgICAgZGFtcGluZzogMjAsXG4gICAgICBzdGlmZm5lc3M6IDgwLFxuICAgICAgd2hlbjogXCJhZnRlckNoaWxkcmVuXCJcbiAgICB9O1xuXG5yZXR1cm4gd2lkdGggPCA2NDAgPyA8TW9iaWxlVmlldyAvPiA6XG4gKFxuXG48QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdHJhbnNpdGlvbi13cmFwcGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PlxuICAgIFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7c3ByaW5nfX1cbiAgICAgICAgICAgIGtleT17cm91dGVyLnBhdGhuYW1lfVxuICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAzMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eTogMX19XG4gICAgICAgICAgICBleGl0PXt7IHg6IC0zMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGlkPVwicGFnZS10cmFuc2l0aW9uLWNvbnRhaW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5wYXRobmFtZX0gLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcbiB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})