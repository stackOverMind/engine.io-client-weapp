module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
			'use strict';

			var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
			};

			(function webpackUniversalModuleDefinition(root, factory) {
				if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["test"] = factory();else root["test"] = factory();
			})(undefined, function () {
				return (/******/function (modules) {
						// webpackBootstrap
						/******/ // The module cache
						/******/var installedModules = {};

						/******/ // The require function
						/******/function __webpack_require__(moduleId) {

							/******/ // Check if module is in cache
							/******/if (installedModules[moduleId])
								/******/return installedModules[moduleId].exports;

							/******/ // Create a new module (and put it into the cache)
							/******/var module = installedModules[moduleId] = {
								/******/exports: {},
								/******/id: moduleId,
								/******/loaded: false
								/******/ };

							/******/ // Execute the module function
							/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

							/******/ // Flag the module as loaded
							/******/module.loaded = true;

							/******/ // Return the exports of the module
							/******/return module.exports;
							/******/
						}

						/******/ // expose the modules object (__webpack_modules__)
						/******/__webpack_require__.m = modules;

						/******/ // expose the module cache
						/******/__webpack_require__.c = installedModules;

						/******/ // __webpack_public_path__
						/******/__webpack_require__.p = "";

						/******/ // Load entry module and return exports
						/******/return __webpack_require__(0);
						/******/
					}(
					/************************************************************************/
					/******/[
					/* 0 */
					/***/function (module, exports, __webpack_require__) {

						var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
							'use strict';

							var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
								return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							} : function (obj) {
								return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							};

							(function webpackUniversalModuleDefinition(root, factory) {
								if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["test"] = factory();else root["test"] = factory();
							})(undefined, function () {
								return (/******/function (modules) {
										// webpackBootstrap
										/******/ // The module cache
										/******/var installedModules = {};

										/******/ // The require function
										/******/function __webpack_require__(moduleId) {

											/******/ // Check if module is in cache
											/******/if (installedModules[moduleId])
												/******/return installedModules[moduleId].exports;

											/******/ // Create a new module (and put it into the cache)
											/******/var module = installedModules[moduleId] = {
												/******/exports: {},
												/******/id: moduleId,
												/******/loaded: false
												/******/ };

											/******/ // Execute the module function
											/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

											/******/ // Flag the module as loaded
											/******/module.loaded = true;

											/******/ // Return the exports of the module
											/******/return module.exports;
											/******/
										}

										/******/ // expose the modules object (__webpack_modules__)
										/******/__webpack_require__.m = modules;

										/******/ // expose the module cache
										/******/__webpack_require__.c = installedModules;

										/******/ // __webpack_public_path__
										/******/__webpack_require__.p = "";

										/******/ // Load entry module and return exports
										/******/return __webpack_require__(0);
										/******/
									}(
									/************************************************************************/
									/******/[
									/* 0 */
									/***/function (module, exports) {

										/* WEBPACK VAR INJECTION */(function (global) {
											"use strict";

											window == global;
											/* WEBPACK VAR INJECTION */
										}).call(exports, function () {
											return this;
										}());

										/***/
									}
									/******/])
								);
							});
							;
							/* WEBPACK VAR INJECTION */
						}).call(exports, __webpack_require__(1)(module));

						/***/
					},
					/* 1 */
					/***/function (module, exports) {

						module.exports = function (module) {
							if (!module.webpackPolyfill) {
								module.deprecate = function () {};
								module.paths = [];
								// module.parent = undefined by default
								module.children = [];
								module.webpackPolyfill = 1;
							}
							return module;
						};

						/***/
					}
					/******/])
				);
			});
			;
			/* WEBPACK VAR INJECTION */
		}).call(exports, __webpack_require__(1)(module));

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = function (module) {
			if (!module.webpackPolyfill) {
				module.deprecate = function () {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		};

		/***/
	}
	/******/]);

/***/ }
/******/ ]);