"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/PostImages.js":
/*!****************************************!*\
  !*** ./pages/components/PostImages.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostImages = function(param) {\n    var images = param.images;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImagesZoom = ref[0], setShowImagesZoom = ref[1];\n    var onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setShowImagesZoom(true);\n    }, []);\n    if (images.length === 1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                src: images[0].src,\n                alt: \"\",\n                onClick: onZoom\n            }, void 0, false, {\n                fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false));\n    }\n    if (images.length === 2) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    src: images[0].src,\n                    alt: \"\",\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    src: images[0].src,\n                    alt: \"\",\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"구현중..\"\n    }, void 0, false, {\n        fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this));\n};\n_s(PostImages, \"o+jj60ydjwcX0vZa2kDA92fwncY=\");\n_c = PostImages;\nPostImages.propType = {\n    images: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ2hCOzs7QUFFbEMsR0FBSyxDQUFDSSxVQUFVLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBYkMsTUFBTSxTQUFOQSxNQUFNOztJQUN6QixHQUFLLENBQXVDSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuREksY0FBYyxHQUF1QkosR0FBZSxLQUFwQ0ssaUJBQWlCLEdBQUlMLEdBQWU7SUFFM0QsR0FBSyxDQUFDTSxNQUFNLEdBQUdQLGtEQUFXLENBQUMsUUFDNUIsR0FEaUMsQ0FBQztRQUMvQk0saUJBQWlCLENBQUMsSUFBSTtJQUN4QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxFQUFFRixNQUFNLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN4QixNQUFNO2tHQUVEQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBYztnQkFBQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxFQUFFTyxHQUFHO2dCQUFFQyxHQUFHLEVBQUMsQ0FBRTtnQkFBQ0MsT0FBTyxFQUFFTixNQUFNOzs7Ozs7O0lBR3pFLENBQUM7SUFDRCxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ksTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE1BQU07OzRGQUVEQyxDQUFHO29CQUFDQyxJQUFJLEVBQUMsQ0FBYztvQkFBQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxFQUFFTyxHQUFHO29CQUFFQyxHQUFHLEVBQUMsQ0FBRTtvQkFBQ0MsT0FBTyxFQUFFTixNQUFNOzs7Ozs7NEZBQ2xFRSxDQUFHO29CQUFDQyxJQUFJLEVBQUMsQ0FBYztvQkFBQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxFQUFFTyxHQUFHO29CQUFFQyxHQUFHLEVBQUMsQ0FBRTtvQkFBQ0MsT0FBTyxFQUFFTixNQUFNOzs7Ozs7OztJQUd6RSxDQUFDO0lBQ0QsTUFBTSw2RUFDSE8sQ0FBRztrQkFBQyxDQUFLOzs7Ozs7QUFFZCxDQUFDO0dBekJLWCxVQUFVO0tBQVZBLFVBQVU7QUEyQmhCQSxVQUFVLENBQUNZLFFBQVEsR0FBRyxDQUFDO0lBQ3JCWCxNQUFNLEVBQUVGLHlEQUFpQixDQUFDQSwwREFBZ0I7QUFDNUMsQ0FBQztBQUVELCtEQUFlQyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUG9zdEltYWdlcy5qcz9jZDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IFBvc3RJbWFnZXMgPSAoe2ltYWdlc30pID0+IHtcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCk9PiB7XG4gICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XG4gIH0sW10pO1xuXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD1cIlwiIG9uQ2xpY2s9e29uWm9vbX0gLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+6rWs7ZiE7KSRLi48L2Rpdj5cbiAgKVxufVxuXG5Qb3N0SW1hZ2VzLnByb3BUeXBlID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsImxlbmd0aCIsImltZyIsInJvbGUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiZGl2IiwicHJvcFR5cGUiLCJhcnJheU9mIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/PostImages.js\n");

/***/ })

});