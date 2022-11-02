/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _form_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-data.js */ \"./js/form-data.js\");\n\n\n\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.initModal)();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.initMenuResponsive)();\n(0,_form_data_js__WEBPACK_IMPORTED_MODULE_2__.initFormDataController)();\n\n//# sourceURL=webpack://my-webpack-project/./js/app.js?");

/***/ }),

/***/ "./js/check-cond.js":
/*!**************************!*\
  !*** ./js/check-cond.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCond\": () => (/* binding */ checkCond)\n/* harmony export */ });\n/** ---------------------------------------------------\r\n * Check of number & constraints validity\r\n *  - check if required attribute is present\r\n *  - test field among min & max numbers if present\r\n */\nvar checkCond = function checkCond(field) {\n  // Get name of radiobutton\n  var checkName = field.getAttribute('name');\n  var valeur = document.querySelector('input[name=\"' + checkName + '\"]:checked');\n\n  // Check of field constraints\n  if (valeur === null) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"Veuillez accepter les conditions générales\"\n    };\n  } else {\n    // If field constraints are fullfiled\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-cond.js?");

/***/ }),

/***/ "./js/check-date.js":
/*!**************************!*\
  !*** ./js/check-date.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkDate\": () => (/* binding */ checkDate)\n/* harmony export */ });\n/** ---------------------------------------------------\r\n * Check of date & constraints validity\r\n *  - check if required attribute is present\r\n *  - test field among min & max dates if present\r\n */\nvar checkDate = function checkDate(field) {\n  // Get attributes\n  var req = field.getAttribute('required');\n  var required = req === null ? false : true;\n  var minD = field.getAttribute('min');\n  var minDate = minD === null ? null : new Date(minD);\n  var maxD = field.getAttribute('max');\n  var maxDate = maxD === null ? null : new Date(maxD);\n\n  // Check of field constraints\n  var textLength = field.value.length;\n  if (!required && textLength === 0) {\n    // Return ok if the field is not required\n    // and strlen == 0\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n  var date = new Date(field.value);\n\n  // check date constraints\n\n  if (!date instanceof Date || isNaN(date)) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"La date entrée est incorrecte\"\n    };\n  }\n  if (minDate !== null && date < minDate) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"La date entrée est trop ancienne\"\n    };\n  }\n  if (maxDate !== null && date > maxDate) {\n    return {\n      result: false,\n      message: \"La date entrée est trop grande\"\n    };\n  }\n  return {\n    result: true,\n    message: \"\"\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-date.js?");

/***/ }),

/***/ "./js/check-email.js":
/*!***************************!*\
  !*** ./js/check-email.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkEmail\": () => (/* binding */ checkEmail)\n/* harmony export */ });\n/** ---------------------------------------------------\r\n * Check of email address & constraints validity\r\n *  - email adress has correct format [user]@[domain].[extension]\r\n *  - check if required attribute is present\r\n */\nvar checkEmail = function checkEmail(field) {\n  // Get attributes\n  var req = field.getAttribute('required');\n  var required = req === null ? false : true;\n\n  // Check of field constraints\n  var textLength = field.value.length;\n  if (!required && textLength === 0) {\n    // Return ok if the field is not required\n    // and strlen == 0\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n\n  // check mail expression using regex\n\n  var reg = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  if (reg.test(field.value) === true) {\n    // If field constraints are fullfiled\n    return {\n      result: true,\n      message: \"\"\n    };\n  } else {\n    return {\n      result: false,\n      message: \"Votre adresse mail est incorrecte\"\n    };\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-email.js?");

/***/ }),

/***/ "./js/check-location.js":
/*!******************************!*\
  !*** ./js/check-location.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocation\": () => (/* binding */ checkLocation)\n/* harmony export */ });\n/** ---------------------------------------------------\r\n * Check of number & constraints validity\r\n *  - check if required attribute is present\r\n *  - test field among min & max numbers if present\r\n */\nvar checkLocation = function checkLocation(field) {\n  // Get name of radiobutton\n  var radioName = field.getAttribute('name');\n  var valeur = document.querySelector('input[name=\"' + radioName + '\"]:checked');\n\n  // Check of field constraints\n\n  if (valeur == null) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"Veuillez selectionner un tournoi\"\n    };\n  } else {\n    // If field constraints are fullfiled\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-location.js?");

/***/ }),

/***/ "./js/check-quantity.js":
/*!******************************!*\
  !*** ./js/check-quantity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkQuantity\": () => (/* binding */ checkQuantity)\n/* harmony export */ });\n/** ---------------------------------------------------\r\n * Check of number & constraints validity\r\n *  - check if required attribute is present\r\n *  - test field among min & max numbers if present\r\n */\nvar checkQuantity = function checkQuantity(field) {\n  // Get attributes\n  var req = field.getAttribute('required');\n  var required = req === null ? false : true;\n  var minN = field.getAttribute('min');\n  var minNum = minN === null ? null : parseInt(minN);\n  var maxN = field.getAttribute('max');\n  var maxNum = maxN === null ? null : parseInt(maxN);\n\n  // Check of field constraints\n  var textLength = field.value.length;\n  if (!required && textLength === 0) {\n    // Return ok if the field is not required\n    // and strlen == 0\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n  var num = parseInt(field.value);\n\n  // check date constraints\n\n  if (!num instanceof Number || isNaN(num)) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"La nombre est incorrect\"\n    };\n  }\n  if (minNum !== null && num < minNum) {\n    // If field constraints are fullfiled\n    return {\n      result: false,\n      message: \"Le nombre entré est trop petit\"\n    };\n  }\n  if (maxNum !== null && num > maxNum) {\n    return {\n      result: false,\n      message: \"Le nombre entré est trop grand\"\n    };\n  }\n  return {\n    result: true,\n    message: \"\"\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-quantity.js?");

/***/ }),

/***/ "./js/check-text.js":
/*!**************************!*\
  !*** ./js/check-text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkText\": () => (/* binding */ checkText)\n/* harmony export */ });\n/* -------------------------------------------\r\n* Check text entry fills constraints\r\n * function gets constraints fromattributes :\r\n *  - check if required attribute is present\r\n *  - test field among minlength & maxlength if present\r\n*/\nvar checkText = function checkText(field) {\n  // Get attributes\n  var minL = field.getAttribute('minlength');\n  var minLength = minL === null ? null : parseInt(minL);\n  var maxL = field.getAttribute('maxlength');\n  var maxLength = maxL === null ? null : parseInt(maxL);\n  var req = field.getAttribute('required');\n  var required = req === null ? false : true;\n\n  // Check of field constraints\n  var textLength = field.value.length;\n  if (!required && textLength === 0) {\n    // Return ok if the field is not required and strlen == 0\n    return {\n      result: true,\n      message: \"\"\n    };\n  }\n  if (minLength !== null && textLength < minLength) {\n    return {\n      result: false,\n      message: \"Votre saisie est trop courte, il faut au moins \" + minLength + \" caractères\"\n    };\n  }\n  if (maxLength !== null && textLength > maxLength) {\n    return {\n      result: false,\n      message: \"Votre saisie est trop longue, il faut au maximum \" + maxLength + \" caractères\"\n    };\n  }\n  // Field constraints are fullfiled\n  return {\n    result: true,\n    message: \"\"\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/check-text.js?");

/***/ }),

/***/ "./js/form-data.js":
/*!*************************!*\
  !*** ./js/form-data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFormDataController\": () => (/* binding */ initFormDataController)\n/* harmony export */ });\n/* harmony import */ var _check_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-text.js */ \"./js/check-text.js\");\n/* harmony import */ var _check_email_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email.js */ \"./js/check-email.js\");\n/* harmony import */ var _check_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-date.js */ \"./js/check-date.js\");\n/* harmony import */ var _check_quantity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-quantity.js */ \"./js/check-quantity.js\");\n/* harmony import */ var _check_location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-location.js */ \"./js/check-location.js\");\n/* harmony import */ var _check_cond_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-cond.js */ \"./js/check-cond.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/**\r\n * This file implements validation of form fields\r\n * In order to fix #2 #3 and #4\r\n */\n\n\n\n\n\n\n\n\n/* -------------------------------------------\r\n* Check if user entries are correct\r\n*/\n/**\r\n *\r\n * @param {Event} e\r\n */\n\nvar checkInputs = function checkInputs(e) {\n  var validationFailed = false;\n  var a;\n\n  // Select all inputs after .modal-body\n  var inp = document.querySelectorAll(\".modal-body input\");\n\n  // Prevent submit of form\n  e.preventDefault();\n  var validationFunctions = {\n    first: _check_text_js__WEBPACK_IMPORTED_MODULE_0__.checkText,\n    last: _check_text_js__WEBPACK_IMPORTED_MODULE_0__.checkText,\n    email: _check_email_js__WEBPACK_IMPORTED_MODULE_1__.checkEmail,\n    birthdate: _check_date_js__WEBPACK_IMPORTED_MODULE_2__.checkDate,\n    quantity: _check_quantity_js__WEBPACK_IMPORTED_MODULE_3__.checkQuantity,\n    location: _check_location_js__WEBPACK_IMPORTED_MODULE_4__.checkLocation,\n    cond: _check_cond_js__WEBPACK_IMPORTED_MODULE_5__.checkCond\n  };\n  inp.forEach(function (field) {\n    var validationFunction = validationFunctions[field.getAttribute('name')];\n    if (validationFunction) {\n      a = validationFunction(field);\n      var formData = field.parentElement;\n      if (a.result == true) {\n        // Field constraints are fullfilled\n        // Clear eventually previous error message\n        formData.setAttribute(\"data-error\", \"\");\n        formData.setAttribute(\"data-error-visible\", false);\n      } else {\n        validationFailed = true;\n        // Get previous formData class in order to fill\n        // error-msg attached to it\n\n        // Select :after pseudo class and then message zone\n        formData.setAttribute(\"data-error\", a.message);\n        formData.setAttribute(\"data-error-visible\", true);\n      }\n    }\n  });\n  if (!validationFailed) {\n    // In this cas, display a confirmation box as specified\n    // in Figma templates\n    // And then, display confirmation box\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_6__.initConfirm)();\n  }\n};\nvar initFormDataController = function initFormDataController() {\n  // Setup a trigger for submit button in modal box\n\n  var form = document.getElementById(\"submit-action\");\n  form.addEventListener('click', function (e) {\n    return checkInputs(e);\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/form-data.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMenuResponsive\": () => (/* binding */ initMenuResponsive)\n/* harmony export */ });\n/**\r\n * Fonction utilisée pour faire apparaitre le menu \"hamburger\" en mode display mobile\r\n */\nvar editNav = function editNav() {\n  var x = document.getElementById(\"myTopnav\");\n  if (x.className === \"topnav\") {\n    x.className += \" responsive\";\n  } else {\n    x.className = \"topnav\";\n  }\n};\nvar initMenuResponsive = function initMenuResponsive() {\n  // Recherche du bouton de menu\n  var button = document.querySelector('.icon');\n  button.addEventListener(\"click\", editNav);\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/menu.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initConfirm\": () => (/* binding */ initConfirm),\n/* harmony export */   \"initModal\": () => (/* binding */ initModal)\n/* harmony export */ });\n// btnSignup is the button on main page to enter signup modal\nvar btnSignup = document.querySelectorAll(\".btn-signup\");\n// modalBg is the modal box DIV on which we apply opacity\nvar modalBg = document.querySelector(\".bground.input\");\n// closeModal is the button (cross) to close modal box\nvar closeModal = document.querySelector(\".close-modal\");\n\n// modalCnf is the confirmation (thanks) modal box DIV on which we apply opacity\nvar confirmBg = document.querySelector(\".bground.cnf\");\n// closeModal is the button (fermer) to close modal box\nvar closeModalConfirm = document.querySelector(\".modal-btn.cnf\");\n// closeModal is the button (cross) to close modal box\nvar closeCrossModal = document.querySelector(\".close-cnf\");\n\n// launch modal form\nvar funcLaunchModal = function funcLaunchModal() {\n  modalBg.style.display = \"block\";\n  // modalBg.style.opacity = \"1\";\n};\n\n// Close modal form\nvar funcCloseModal = function funcCloseModal(e) {\n  modalBg.style.display = \"none\";\n  // modalBg.style.opacity = \"0\";\n};\n\n// launch confirm form\nvar funcLaunchModalConfirm = function funcLaunchModalConfirm() {\n  confirmBg.style.display = \"block\";\n  // modalBg.style.opacity = \"1\";\n};\n\n// Close modal form\nvar funcCloseModalConfirm = function funcCloseModalConfirm(e) {\n  confirmBg.style.display = \"none\";\n  // modalBg.style.opacity = \"0\";\n};\n\nvar initModal = function initModal() {\n  // launch modal event\n  btnSignup.forEach(function (field) {\n    return field.addEventListener(\"click\", funcLaunchModal);\n  });\n  closeModal.addEventListener(\"click\", funcCloseModal);\n};\nvar initConfirm = function initConfirm() {\n  // launch modal event\n  funcCloseModal();\n  funcLaunchModalConfirm();\n  //btnSignup.addEventListener(\"click\", funcLaunchModalConfirm)\n  closeModalConfirm.addEventListener(\"click\", funcCloseModalConfirm);\n  closeCrossModal.addEventListener(\"click\", funcCloseModalConfirm);\n\n  // Reset entries for next inputs\n  var inp = document.querySelectorAll(\".modal-body input\");\n  inp.forEach(function (elem) {\n    var name = elem.attributes.name.value;\n    if (name === 'location') elem.checked = false;else if (name === 'cond') elem.checked = false;else if (name === 'prevenu') elem.checked = true;else if (name !== 'go') elem.value = '';\n  });\n  document.getElementById('checkbox2').checked = true;\n};\n\n//# sourceURL=webpack://my-webpack-project/./js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;