webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.sass */ \"./components/Header/Header.module.sass\");\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/angelito/development/personal/portafolio/components/Header/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Header = function Header() {\n  var down = function down(evt, id) {\n    evt.preventDefault();\n    document.getElementById(id).scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[\"header\"], \"center\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[\"img\"],\n    src: \"/perfil.jpg\",\n    alt: \"Luis \\xC1ngel V\\xE1squez Nepomuceno\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[\"botones\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[\"btn-link\"],\n    href: \"#proyects\",\n    onClick: function onClick(event) {\n      return down(event, 'projects');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Proyectos\"), __jsx(\"a\", {\n    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[\"btn-link\"],\n    href: \"#contacto\",\n    onClick: function onClick(event) {\n      return down(event, 'contacto');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Contacto\")));\n};\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz8zYTBjIl0sIm5hbWVzIjpbIkhlYWRlciIsImRvd24iLCJldnQiLCJpZCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQU1DLEVBQU4sRUFBYTtBQUN4QkQsT0FBRyxDQUFDRSxjQUFKO0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsRUFBeEIsRUFBNEJJLGNBQTVCLENBQTJDO0FBQ3pDQyxjQUFRLEVBQUUsUUFEK0I7QUFFekNDLFdBQUssRUFBRTtBQUZrQyxLQUEzQztBQUlELEdBTkQ7O0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0MsMERBQU0sQ0FBQyxRQUFELENBQVAsRUFBbUIsUUFBbkIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRUEsMERBQU0sQ0FBQyxLQUFELENBRG5CO0FBRUUsT0FBRyxFQUFDLGFBRk47QUFHRSxPQUFHLEVBQUMscUNBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBRUEsMERBQU0sQ0FBQyxTQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRUEsMERBQU0sQ0FBQyxVQUFELENBRG5CO0FBRUUsUUFBSSxFQUFDLFdBRlA7QUFHRSxXQUFPLEVBQUUsaUJBQUFDLEtBQUs7QUFBQSxhQUFJWCxJQUFJLENBQUNXLEtBQUQsRUFBUSxVQUFSLENBQVI7QUFBQSxLQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBUUU7QUFDRSxhQUFTLEVBQUVELDBEQUFNLENBQUMsVUFBRCxDQURuQjtBQUVFLFFBQUksRUFBQyxXQUZQO0FBR0UsV0FBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsYUFBSVgsSUFBSSxDQUFDVyxLQUFELEVBQVEsVUFBUixDQUFSO0FBQUEsS0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixDQVJGLENBREY7QUEyQkQsQ0FwQ0Q7O0tBQU1aLE07QUFzQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zYXNzJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRvd24gPSAoZXZ0LCBpZCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIGJsb2NrOiBcInN0YXJ0XCIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbXCJoZWFkZXJcIl0sIFwiY2VudGVyXCIpfT5cbiAgICAgIDxmaWd1cmU+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImltZ1wiXX1cbiAgICAgICAgICBzcmM9XCIvcGVyZmlsLmpwZ1wiXG4gICAgICAgICAgYWx0PVwiTHVpcyDDgW5nZWwgVsOhc3F1ZXogTmVwb211Y2Vub1wiXG4gICAgICAgIC8+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJib3RvbmVzXCJdfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJ0bi1saW5rXCJdfVxuICAgICAgICAgIGhyZWY9XCIjcHJveWVjdHNcIlxuICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IGRvd24oZXZlbnQsICdwcm9qZWN0cycpfVxuICAgICAgICA+XG4gICAgICAgICAgUHJveWVjdG9zXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJ0bi1saW5rXCJdfVxuICAgICAgICAgIGhyZWY9XCIjY29udGFjdG9cIlxuICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IGRvd24oZXZlbnQsICdjb250YWN0bycpfVxuICAgICAgICA+XG4gICAgICAgICAgQ29udGFjdG9cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

})