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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostImages = function(param) {\n    var images = param.images;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImagesZoom = ref[0], setShowImagesZoom = ref[1];\n    var onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setShowImagesZoom(true);\n    }, []);\n    if (images.length === 1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                src: images[0].src,\n                alt: \"\",\n                onClick: onZoom\n            }, void 0, false, {\n                fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false));\n    }\n    if (images.length === 2) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    width: \"50%\",\n                    src: images[0].src,\n                    alt: \"\",\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    width: \"50%\",\n                    src: images[1].src,\n                    alt: \"\",\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    width: \"50%\",\n                    src: images[0].src,\n                    alt: \"\",\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"presentation\",\n                    style: {\n                        display: 'inline-block',\n                        width: \"50%\",\n                        textAlign: \"center\",\n                        verticalAlign: \"middle\"\n                    },\n                    onClick: onZoom,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {}, void 0, false, {\n                            fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyunjoo/cording/react-nodebird/prepare/front/pages/components/PostImages.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(PostImages, \"o+jj60ydjwcX0vZa2kDA92fwncY=\");\n_c = PostImages;\nPostImages.propType = {\n    images: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNoQjtBQUNZOzs7QUFFOUMsR0FBSyxDQUFDSyxVQUFVLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBYkMsTUFBTSxTQUFOQSxNQUFNOztJQUN6QixHQUFLLENBQXVDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuREssY0FBYyxHQUF1QkwsR0FBZSxLQUFwQ00saUJBQWlCLEdBQUlOLEdBQWU7SUFFM0QsR0FBSyxDQUFDTyxNQUFNLEdBQUdSLGtEQUFXLENBQUMsUUFDNUIsR0FEaUMsQ0FBQztRQUMvQk8saUJBQWlCLENBQUMsSUFBSTtJQUN4QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxFQUFFRixNQUFNLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN4QixNQUFNO2tHQUVEQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBYztnQkFBQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxFQUFFTyxHQUFHO2dCQUFFQyxHQUFHLEVBQUMsQ0FBRTtnQkFBQ0MsT0FBTyxFQUFFTixNQUFNOzs7Ozs7O0lBR3pFLENBQUM7SUFDRCxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ksTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE1BQU07OzRGQUVEQyxDQUFHO29CQUFDQyxJQUFJLEVBQUMsQ0FBYztvQkFBQ0ksS0FBSyxFQUFDLENBQUs7b0JBQUNILEdBQUcsRUFBRVAsTUFBTSxDQUFDLENBQUMsRUFBRU8sR0FBRztvQkFBRUMsR0FBRyxFQUFDLENBQUU7b0JBQUNDLE9BQU8sRUFBRU4sTUFBTTs7Ozs7OzRGQUM5RUUsQ0FBRztvQkFBQ0MsSUFBSSxFQUFDLENBQWM7b0JBQUNJLEtBQUssRUFBQyxDQUFLO29CQUFDSCxHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFDLEVBQUVPLEdBQUc7b0JBQUVDLEdBQUcsRUFBQyxDQUFFO29CQUFDQyxPQUFPLEVBQUVOLE1BQU07Ozs7Ozs7O0lBR3JGLENBQUM7SUFDRCxNQUFNOzhGQUVEUSxDQUFHOzs0RkFDRE4sQ0FBRztvQkFBQ0MsSUFBSSxFQUFDLENBQWM7b0JBQUNJLEtBQUssRUFBQyxDQUFLO29CQUFDSCxHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFDLEVBQUVPLEdBQUc7b0JBQUVDLEdBQUcsRUFBQyxDQUFFO29CQUFDQyxPQUFPLEVBQUVOLE1BQU07Ozs7Ozs0RkFDOUVRLENBQUc7b0JBQ0ZMLElBQUksRUFBQyxDQUFjO29CQUNuQk0sS0FBSyxFQUFFLENBQUNDO3dCQUFBQSxPQUFPLEVBQUUsQ0FBYzt3QkFBRUgsS0FBSyxFQUFHLENBQUs7d0JBQUVJLFNBQVMsRUFBQyxDQUFRO3dCQUFFQyxhQUFhLEVBQUcsQ0FBUTtvQkFBQSxDQUFDO29CQUM3Rk4sT0FBTyxFQUFFTixNQUFNOztvR0FFZEwsMkRBQVk7Ozs7O29HQUNaa0IsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2IsQ0FBQztHQXZDS2pCLFVBQVU7S0FBVkEsVUFBVTtBQXlDaEJBLFVBQVUsQ0FBQ2tCLFFBQVEsR0FBRyxDQUFDO0lBQ3JCakIsTUFBTSxFQUFFSCx5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzVDLENBQUM7QUFFRCwrREFBZUUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanM/Y2Q4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtQbHVzT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5jb25zdCBQb3N0SW1hZ2VzID0gKHtpbWFnZXN9KSA9PiB7XG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpPT4ge1xuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xuICB9LFtdKTtcblxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD1cIlwiIG9uQ2xpY2s9e29uWm9vbX0gLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjUwJVwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjUwJVwiIHNyYz17aW1hZ2VzWzFdLnNyY30gYWx0PVwiXCIgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiNTAlXCIgc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9XCJcIiBvbkNsaWNrPXtvblpvb219IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aCA6IFwiNTAlXCIsIHRleHRBbGlnbjpcImNlbnRlclwiLCB2ZXJ0aWNhbEFsaWduIDogXCJtaWRkbGVcIn19XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAgID5cbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5Qb3N0SW1hZ2VzLnByb3BUeXBlID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJQbHVzT3V0bGluZWQiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsImxlbmd0aCIsImltZyIsInJvbGUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwid2lkdGgiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiYnIiLCJwcm9wVHlwZSIsImFycmF5T2YiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/PostImages.js\n");

/***/ })

});