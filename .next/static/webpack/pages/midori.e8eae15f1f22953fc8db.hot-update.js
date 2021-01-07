webpackHotUpdate_N_E("pages/midori",{

/***/ "./pages/midori.js":
/*!*************************!*\
  !*** ./pages/midori.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\nvar _jsxFileName = \"/Users/samantha/my-portfolio/pages/midori.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction About() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      isHovered = _useState[0],\n      setHovered = _useState[1];\n\n  var container = {\n    hidden: {\n      opacity: 0\n    },\n    show: {\n      opacity: 1,\n      animate: {\n        x: 50\n      },\n      transition: {\n        staggerChildren: 0.5\n      }\n    }\n  };\n  var item = {\n    hidden: {\n      opacity: 0\n    },\n    show: {\n      opacity: 1\n    }\n  };\n  var techUsed = [\"React\", \"React Router\", \"Node\", \"Express\", \"Sequelize\", \"MySQL\", \"Tailwind CSS\", \"Heroku\", \"Multer\", \"Axios\", \"JWT\", \"Bcrypt\", \"Pusher\", \"Google Maps API\", \"Firebase\"];\n  return __jsx(\"div\", {\n    className: \"h-screen\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"header text-center flex flex-row justify-center mt-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"title animate-this wavy3 fontmain\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"shareIt\"), __jsx(\"p\", {\n    className: \"overflowy h-32 w-6/12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Lorem fistrum torpedo torpedo sexuarl qu\\xE9 dise usteer la caidita mamaar est\\xE1 la cosa muy malar condemor por la gloria de mi madre torpedo. De la pradera al ataquerl hasta luego Lucas torpedo tiene musho peligro por la gloria de mi madre benemeritaar. Por la gloria de mi madre al ataquerl sexuarl la caidita no puedor papaar papaar no te digo trigo por no llamarte Rodrigor hasta luego Lucas. Ese hombree tiene musho peligro por la gloria de mi madre se calle ust\\xE9e te va a has\\xE9 pupitaa. Hasta luego Lucas pecador ese que llega hasta luego Lucas la caidita tiene musho peligro. Por la gloria de mi madre fistro ese hombree ese pedazo de por la gloria de mi madre me cago en tus muelas papaar papaar sexuarl hasta luego Lucas diodenoo. Diodeno a gramenawer me cago en tus muelas me cago en tus muelas amatomaa amatomaa qu\\xE9 dise usteer qu\\xE9 dise usteer papaar papaar.\")), __jsx(\"div\", {\n    classname: \"flex flex-row \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"flex justify-center py-2 \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"iframe\", {\n    className: \"border-8 rounded border-green-lightGreen\",\n    width: \"800\",\n    height: \"600\",\n    src: \"https://www.loom.com/embed/38a9322267054843adb08ec95c7e5e87\",\n    frameborder: \"0\",\n    webkitallowfullscreen: true,\n    mozallowfullscreen: true,\n    allowfullscreen: true,\n    onMouseEnter: function onMouseEnter() {\n      return setHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setHovered(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].ul, {\n    variants: container,\n    initial: \"hidden\",\n    animate: \"show\",\n    className: \"ml-5 my-7 \".concat(isHovered ? \"opacity-100\" : \"opacity-0\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, techUsed.map(function (tech) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].li, {\n      variants: item,\n      className: \"bg-gray-700 border rounded text-white text-center my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    }, tech);\n  })))));\n}\n\n_s(About, \"/2flkKs1Bt6hpzG7zS4ecMenjD8=\");\n\n_c = About;\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWlkb3JpLmpzP2JkZWUiXSwibmFtZXMiOlsiQWJvdXQiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldEhvdmVyZWQiLCJjb250YWluZXIiLCJoaWRkZW4iLCJvcGFjaXR5Iiwic2hvdyIsImFuaW1hdGUiLCJ4IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsIml0ZW0iLCJ0ZWNoVXNlZCIsIm1hcCIsInRlY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFVBRFk7O0FBRzlCLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFE7QUFFaEJDLFFBQUksRUFBRTtBQUNKRCxhQUFPLEVBQUUsQ0FETDtBQUVKRSxhQUFPLEVBQUU7QUFBRUMsU0FBQyxFQUFFO0FBQUwsT0FGTDtBQUdKQyxnQkFBVSxFQUFFO0FBQ1ZDLHVCQUFlLEVBQUU7QUFEUDtBQUhSO0FBRlUsR0FBbEI7QUFXQSxNQUFNQyxJQUFJLEdBQUc7QUFDWFAsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBREc7QUFFWEMsUUFBSSxFQUFFO0FBQUVELGFBQU8sRUFBRTtBQUFYO0FBRkssR0FBYjtBQUtBLE1BQU1PLFFBQVEsR0FBRyxDQUNmLE9BRGUsRUFFZixjQUZlLEVBR2YsTUFIZSxFQUlmLFNBSmUsRUFLZixXQUxlLEVBTWYsT0FOZSxFQU9mLGNBUGUsRUFRZixRQVJlLEVBU2YsUUFUZSxFQVVmLE9BVmUsRUFXZixLQVhlLEVBWWYsUUFaZSxFQWFmLFFBYmUsRUFjZixpQkFkZSxFQWVmLFVBZmUsQ0FBakI7QUFrQkEsU0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFHRTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDAzQkFIRixDQUhGLEVBc0JFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsMENBRFo7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFVBQU0sRUFBQyxLQUhUO0FBSUUsT0FBRyxFQUFDLDZEQUpOO0FBS0UsZUFBVyxFQUFDLEdBTGQ7QUFNRSx5QkFBcUIsTUFOdkI7QUFPRSxzQkFBa0IsTUFQcEI7QUFRRSxtQkFBZSxNQVJqQjtBQVNFLGdCQUFZLEVBQUU7QUFBQSxhQUFNVixVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBVGhCO0FBVUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FWaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDRSxZQUFRLEVBQUVDLFNBRFo7QUFFRSxXQUFPLEVBQUMsUUFGVjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsYUFBUyxzQkFBZUYsU0FBUyxHQUFHLGFBQUgsR0FBbUIsV0FBM0MsQ0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdXLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNaLE1BQUMsb0RBQUQsQ0FBUSxFQUFSO0FBQ0UsY0FBUSxFQUFFSCxJQURaO0FBRUUsZUFBUyxFQUFDLHdEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0csSUFKSCxDQURZO0FBQUEsR0FBYixDQU5ILENBZEYsQ0FERixDQXRCRixDQURGO0FBMEREOztHQS9GdUJmLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9wYWdlcy9taWRvcmkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgIHNob3c6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBhbmltYXRlOiB7IHg6IDUwIH0sXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC41LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICBjb25zdCB0ZWNoVXNlZCA9IFtcbiAgICBcIlJlYWN0XCIsXG4gICAgXCJSZWFjdCBSb3V0ZXJcIixcbiAgICBcIk5vZGVcIixcbiAgICBcIkV4cHJlc3NcIixcbiAgICBcIlNlcXVlbGl6ZVwiLFxuICAgIFwiTXlTUUxcIixcbiAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgIFwiSGVyb2t1XCIsXG4gICAgXCJNdWx0ZXJcIixcbiAgICBcIkF4aW9zXCIsXG4gICAgXCJKV1RcIixcbiAgICBcIkJjcnlwdFwiLFxuICAgIFwiUHVzaGVyXCIsXG4gICAgXCJHb29nbGUgTWFwcyBBUElcIixcbiAgICBcIkZpcmViYXNlXCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XG4gICAgICA8U2lkZUJhciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTZcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGUtdGhpcyB3YXZ5MyBmb250bWFpblwiPnNoYXJlSXQ8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm92ZXJmbG93eSBoLTMyIHctNi8xMlwiPlxuICAgICAgICAgIExvcmVtIGZpc3RydW0gdG9ycGVkbyB0b3JwZWRvIHNleHVhcmwgcXXDqSBkaXNlIHVzdGVlciBsYSBjYWlkaXRhXG4gICAgICAgICAgbWFtYWFyIGVzdMOhIGxhIGNvc2EgbXV5IG1hbGFyIGNvbmRlbW9yIHBvciBsYSBnbG9yaWEgZGUgbWkgbWFkcmVcbiAgICAgICAgICB0b3JwZWRvLiBEZSBsYSBwcmFkZXJhIGFsIGF0YXF1ZXJsIGhhc3RhIGx1ZWdvIEx1Y2FzIHRvcnBlZG8gdGllbmVcbiAgICAgICAgICBtdXNobyBwZWxpZ3JvIHBvciBsYSBnbG9yaWEgZGUgbWkgbWFkcmUgYmVuZW1lcml0YWFyLiBQb3IgbGEgZ2xvcmlhIGRlXG4gICAgICAgICAgbWkgbWFkcmUgYWwgYXRhcXVlcmwgc2V4dWFybCBsYSBjYWlkaXRhIG5vIHB1ZWRvciBwYXBhYXIgcGFwYWFyIG5vIHRlXG4gICAgICAgICAgZGlnbyB0cmlnbyBwb3Igbm8gbGxhbWFydGUgUm9kcmlnb3IgaGFzdGEgbHVlZ28gTHVjYXMuIEVzZSBob21icmVlXG4gICAgICAgICAgdGllbmUgbXVzaG8gcGVsaWdybyBwb3IgbGEgZ2xvcmlhIGRlIG1pIG1hZHJlIHNlIGNhbGxlIHVzdMOpZSB0ZSB2YSBhXG4gICAgICAgICAgaGFzw6kgcHVwaXRhYS4gSGFzdGEgbHVlZ28gTHVjYXMgcGVjYWRvciBlc2UgcXVlIGxsZWdhIGhhc3RhIGx1ZWdvXG4gICAgICAgICAgTHVjYXMgbGEgY2FpZGl0YSB0aWVuZSBtdXNobyBwZWxpZ3JvLiBQb3IgbGEgZ2xvcmlhIGRlIG1pIG1hZHJlIGZpc3Ryb1xuICAgICAgICAgIGVzZSBob21icmVlIGVzZSBwZWRhem8gZGUgcG9yIGxhIGdsb3JpYSBkZSBtaSBtYWRyZSBtZSBjYWdvIGVuIHR1c1xuICAgICAgICAgIG11ZWxhcyBwYXBhYXIgcGFwYWFyIHNleHVhcmwgaGFzdGEgbHVlZ28gTHVjYXMgZGlvZGVub28uIERpb2Rlbm8gYVxuICAgICAgICAgIGdyYW1lbmF3ZXIgbWUgY2FnbyBlbiB0dXMgbXVlbGFzIG1lIGNhZ28gZW4gdHVzIG11ZWxhcyBhbWF0b21hYVxuICAgICAgICAgIGFtYXRvbWFhIHF1w6kgZGlzZSB1c3RlZXIgcXXDqSBkaXNlIHVzdGVlciBwYXBhYXIgcGFwYWFyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NuYW1lPVwiZmxleCBmbGV4LXJvdyBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgXCI+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTggcm91bmRlZCBib3JkZXItZ3JlZW4tbGlnaHRHcmVlblwiXG4gICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cubG9vbS5jb20vZW1iZWQvMzhhOTMyMjI2NzA1NDg0M2FkYjA4ZWM5NWM3ZTVlODdcIlxuICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgIHdlYmtpdGFsbG93ZnVsbHNjcmVlblxuICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPjwvaWZyYW1lPlxuXG4gICAgICAgICAgPG1vdGlvbi51bFxuICAgICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWwtNSBteS03ICR7aXNIb3ZlcmVkID8gXCJvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0ZWNoVXNlZC5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbXktMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21vdGlvbi51bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/midori.js\n");

/***/ })

})