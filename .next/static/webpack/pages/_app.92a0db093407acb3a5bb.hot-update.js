webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/index.css */ \"./assets/index.css\");\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_MobileView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MobileView */ \"./components/MobileView.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/samanthapinosvalle/Documents/my-portfolio 2/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar width;\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MyApp);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      width: 0,\n      height: 0\n    };\n    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateWindowDimensions();\n      window.addEventListener('resize', this.updateWindowDimensions);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.updateWindowDimensions);\n    }\n  }, {\n    key: \"updateWindowDimensions\",\n    value: function updateWindowDimensions() {\n      this.setState({\n        width: window.innerWidth\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps,\n          router = _this$props.router;\n      var spring = {\n        type: \"inertia\",\n        damping: 20,\n        stiffness: 80,\n        when: \"afterChildren\"\n      };\n      return width < 640 ? __jsx(_components_MobileView__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 22\n        }\n      }) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"AnimatePresence\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 1\n        }\n      }, __jsx(\"div\", {\n        className: \"page-transition-wrapper\",\n        style: {\n          backgroundColor: \"white\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n        transition: {\n          spring: spring\n        },\n        key: router.pathname,\n        initial: {\n          x: 300,\n          opacity: 0\n        },\n        animate: {\n          x: 0,\n          opacity: 1\n        },\n        exit: {\n          x: -300,\n          opacity: 0\n        },\n        id: \"page-transition-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n        key: router.pathname,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      })))));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIndpZHRoIiwiTXlBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGVpZ2h0IiwidXBkYXRlV2luZG93RGltZW5zaW9ucyIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiaW5uZXJXaWR0aCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInNwcmluZyIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwid2hlbiIsImJhY2tncm91bmRDb2xvciIsInBhdGhuYW1lIiwieCIsIm9wYWNpdHkiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsS0FBSjs7SUFFTUMsSzs7Ozs7QUFHTixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFSCxXQUFLLEVBQUUsQ0FBVDtBQUFZSSxZQUFNLEVBQUU7QUFBcEIsS0FBYjtBQUNBLFVBQUtDLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCQyxJQUE1Qix5R0FBOUI7QUFIaUI7QUFJbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtELHNCQUFMO0FBQ0FFLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0gsc0JBQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckJFLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS0osc0JBQTFDO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsV0FBS0ssUUFBTCxDQUFjO0FBQUVWLGFBQUssRUFBRU8sTUFBTSxDQUFDSTtBQUFoQixPQUFkO0FBQ0Q7Ozs2QkFHUztBQUFBLHdCQUdtQyxLQUFLVCxLQUh4QztBQUFBLFVBR0VVLFNBSEYsZUFHRUEsU0FIRjtBQUFBLFVBR2FDLFNBSGIsZUFHYUEsU0FIYjtBQUFBLFVBR3dCQyxNQUh4QixlQUd3QkEsTUFIeEI7QUFJTixVQUFNQyxNQUFNLEdBQUc7QUFDYkMsWUFBSSxFQUFFLFNBRE87QUFFYkMsZUFBTyxFQUFFLEVBRkk7QUFHYkMsaUJBQVMsRUFBRSxFQUhFO0FBSWJDLFlBQUksRUFBRTtBQUpPLE9BQWY7QUFPSixhQUFPbkIsS0FBSyxHQUFHLEdBQVIsR0FBYyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBZCxHQUdQLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUF5QyxhQUFLLEVBQUU7QUFBQ29CLHlCQUFlLEVBQUU7QUFBbEIsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFLE1BQUMscURBQUQsQ0FBUSxHQUFSO0FBQ0Usa0JBQVUsRUFBRTtBQUFDTCxnQkFBTSxFQUFOQTtBQUFELFNBRGQ7QUFFRSxXQUFHLEVBQUVELE1BQU0sQ0FBQ08sUUFGZDtBQUdFLGVBQU8sRUFBRTtBQUFFQyxXQUFDLEVBQUUsR0FBTDtBQUFVQyxpQkFBTyxFQUFFO0FBQW5CLFNBSFg7QUFJRSxlQUFPLEVBQUU7QUFBRUQsV0FBQyxFQUFFLENBQUw7QUFBUUMsaUJBQU8sRUFBRTtBQUFqQixTQUpYO0FBS0UsWUFBSSxFQUFFO0FBQUVELFdBQUMsRUFBRSxDQUFDLEdBQU47QUFBV0MsaUJBQU8sRUFBRTtBQUFwQixTQUxSO0FBTUUsVUFBRSxFQUFDLDJCQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRSxNQUFDLFNBQUQseUZBQWVWLFNBQWY7QUFBMEIsV0FBRyxFQUFFQyxNQUFNLENBQUNPLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FSRixDQUZGLENBRFIsQ0FIQTtBQW1CRTs7OztFQXJEa0JHLCtDOztBQXdESHZCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Fzc2V0cy9pbmRleC5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTW9iaWxlVmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2JpbGVWaWV3XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xubGV0IHdpZHRoO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cbiAgXG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuICBzdXBlcihwcm9wcyk7XG4gIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG59XG5cbmNvbXBvbmVudERpZE1vdW50KCkge1xuICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG59XG5cbmNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbn1cblxudXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbn1cblxuXG4gcmVuZGVyKCkge1xuXG4gIFxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzcHJpbmcgPSB7XG4gICAgICB0eXBlOiBcImluZXJ0aWFcIixcbiAgICAgIGRhbXBpbmc6IDIwLFxuICAgICAgc3RpZmZuZXNzOiA4MCxcbiAgICAgIHdoZW46IFwiYWZ0ZXJDaGlsZHJlblwiXG4gICAgfTtcblxucmV0dXJuIHdpZHRoIDwgNjQwID8gPE1vYmlsZVZpZXcgLz4gOlxuIChcblxuPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRyYW5zaXRpb24td3JhcHBlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT5cbiAgICBcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e3NwcmluZ319XG4gICAgICAgICAgICBrZXk9e3JvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgIGluaXRpYWw9e3sgeDogMzAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAsIG9wYWNpdHk6IDF9fVxuICAgICAgICAgICAgZXhpdD17eyB4OiAtMzAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBpZD1cInBhZ2UtdHJhbnNpdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucGF0aG5hbWV9IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICk7XG4gfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})