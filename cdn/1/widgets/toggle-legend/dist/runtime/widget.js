System.register(["jimu-core","jimu-arcgis","esri/core/reactiveUtils","esri/symbols/support/symbolUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_support_symbolUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_support_symbolUtils__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_support_symbolUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/toggle-legend/src/runtime/style.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/toggle-legend/src/runtime/style.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.toggle-legend-widget {
  height: 100%;
  width: 100%;
}

.tl-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.tl-header {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  border-bottom: 1px solid #eef2f7;
  background: #ffffff;
}

.tl-body {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: #fafafa;
}

.tl-empty {
  padding: 12px;
}

.tl-group,
.tl-layer {
  background: #ffffff;
  border: 1px solid #e8edf3;
  border-radius: 12px;
  margin-bottom: 10px;
}

.tl-group-header,
.tl-layer {
  padding-top: 10px;
  padding-right: 12px;
  padding-bottom: 10px;
}

.tl-group-children {
  padding: 0 0 10px 0;
}

.tl-checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  cursor: pointer;
}

.tl-checkbox-row input[type=checkbox] {
  width: 16px;
  height: 16px;
  margin: 2px;
  flex-shrink: 0;
  accent-color: #2e7d32;
}

.tl-expand-btn {
  border: 0;
  background: transparent;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  margin-right: 6px;
  color: #6b7280;
}

.tl-layer-title {
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
}

.tl-legend-list {
  margin-top: 8px;
  padding-left: 26px;
}

.tl-legend-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.tl-symbol-wrap {
  width: 22px;
  min-width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tl-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 16px;
}

.tl-legend-label {
  font-size: 12px;
  color: #4b5563;
  line-height: 1.35;
}

.tl-body::-webkit-scrollbar {
  width: 8px;
}

.tl-body::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 999px;
}

.tl-layer-header-row {
  display: flex;
  align-items: center;
}

.tl-expand-spacer {
  display: inline-block;
  width: 20px;
  min-width: 20px;
  margin-right: 6px;
}

.tl-header {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 1px solid #eef2f7;
  background: #2e7d32;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/toggle-legend/src/runtime/style.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,WAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,0CAAA;EACA,gBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,gCAAA;EACA,mBAAA;AACF;;AAEA;EACE,OAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,iBAAA;EACA,mBAAA;EACA,oBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,SAAA;EACA,eAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,SAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;EAEA,gBAAA;AAAF;;AAGA;EACE,eAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,cAAA;AAAF;;AAGA;EACE,WAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,eAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,UAAA;AAAF;;AAGA;EACE,mBAAA;EACA,oBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,gCAAA;EACA,mBAAA;AAAF","sourcesContent":[".toggle-legend-widget {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.tl-panel {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #ffffff;\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 0px;\r\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\r\n  overflow: hidden;\r\n}\r\n\r\n.tl-header {\r\n  padding: 12px 16px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n  border-bottom: 1px solid #eef2f7;\r\n  background: #ffffff;\r\n}\r\n\r\n.tl-body {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  padding: 10px;\r\n  background: #fafafa;\r\n}\r\n\r\n.tl-empty {\r\n  padding: 12px;\r\n}\r\n\r\n.tl-group,\r\n.tl-layer {\r\n  background: #ffffff;\r\n  border: 1px solid #e8edf3;\r\n  border-radius: 12px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tl-group-header,\r\n.tl-layer {\r\n  padding-top: 10px;\r\n  padding-right: 12px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.tl-group-children {\r\n  padding: 0 0 10px 0;\r\n}\r\n\r\n.tl-checkbox-row {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.tl-checkbox-row input[type='checkbox'] {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: 2px;\r\n  flex-shrink: 0;\r\n  accent-color: #2e7d32;\r\n}\r\n\r\n.tl-expand-btn {\r\n  border: 0;\r\n  background: transparent;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  margin-right: 6px;\r\n  color: #6b7280;\r\n}\r\n\r\n.tl-layer-title {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n\r\n  line-height: 1.3;\r\n}\r\n\r\n.tl-legend-list {\r\n  margin-top: 8px;\r\n  padding-left: 26px;\r\n}\r\n\r\n.tl-legend-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  padding: 4px 0;\r\n}\r\n\r\n.tl-symbol-wrap {\r\n  width: 22px;\r\n  min-width: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.tl-symbol {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 16px;\r\n}\r\n\r\n.tl-legend-label {\r\n  font-size: 12px;\r\n  color: #4b5563;\r\n  line-height: 1.35;\r\n}\r\n\r\n.tl-body::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.tl-body::-webkit-scrollbar-thumb {\r\n  background: #d1d5db;\r\n  border-radius: 999px;\r\n}\r\n\r\n.tl-layer-header-row {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.tl-expand-spacer {\r\n  display: inline-block;\r\n  width: 20px;\r\n  min-width: 20px;\r\n  margin-right: 6px;\r\n}\r\n\r\n.tl-header {\r\n  padding: 12px 16px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  border-bottom: 1px solid #eef2f7;\r\n  background: #2e7d32;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/toggle-legend/src/runtime/style.scss":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/toggle-legend/src/runtime/style.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/toggle-legend/src/runtime/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "@arcgis/core/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__;

/***/ }),

/***/ "@arcgis/core/symbols/support/symbolUtils":
/*!***************************************************!*\
  !*** external "esri/symbols/support/symbolUtils" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_support_symbolUtils__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/toggle-legend/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./your-extensions/widgets/toggle-legend/src/runtime/style.scss");
/* harmony import */ var _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/core/reactiveUtils */ "@arcgis/core/core/reactiveUtils");
/* harmony import */ var _arcgis_core_symbols_support_symbolUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/symbols/support/symbolUtils */ "@arcgis/core/symbols/support/symbolUtils");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */





class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.watchHandles = [];
        this.clearWatches = () => {
            this.watchHandles.forEach((h) => { var _a; return (_a = h.remove) === null || _a === void 0 ? void 0 : _a.call(h); });
            this.watchHandles = [];
        };
        this.activeViewChangeHandler = (jimuMapView) => {
            if (!jimuMapView)
                return;
            if (this.state.jimuMapView !== jimuMapView) {
                this.setState({ jimuMapView });
            }
        };
        this.initializeLayerTree = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            if (!(view === null || view === void 0 ? void 0 : view.map))
                return;
            this.clearWatches();
            yield view.when();
            const topLayers = view.map.layers
                .toArray()
                .slice()
                .reverse()
                .filter((layer) => {
                const title = (layer.title || '').trim().toLowerCase();
                return title !== 'comments' && title !== '';
            });
            const layerTree = yield Promise.all(topLayers.map((layer) => this.buildLayerNode(layer)));
            const expandedGroups = Object.assign({}, this.state.expandedGroups);
            const expandedLegends = Object.assign({}, this.state.expandedLegends);
            const seedExpansionState = (nodes) => {
                nodes.forEach((node) => {
                    if (node.isGroup && expandedGroups[node.id] === undefined) {
                        expandedGroups[node.id] = true;
                    }
                    if (!node.isGroup && node.legendItems.length > 0 && expandedLegends[node.id] === undefined) {
                        expandedLegends[node.id] = false;
                    }
                    if (node.children.length > 0) {
                        seedExpansionState(node.children);
                    }
                });
            };
            seedExpansionState(layerTree);
            this.setState({ layerTree, expandedGroups, expandedLegends });
            const mapWatch = _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_3__.watch(() => view.map.allLayers.map((layer) => `${layer.id}:${layer.visible}:${layer.title}`).toArray(), () => __awaiter(this, void 0, void 0, function* () {
                const rebuilt = yield Promise.all(view.map.layers
                    .toArray()
                    .slice()
                    .reverse()
                    .filter((layer) => {
                    const title = (layer.title || '').trim().toLowerCase();
                    return title !== 'comments' && title !== '';
                })
                    .map((layer) => this.buildLayerNode(layer)));
                this.setState({ layerTree: rebuilt });
            }));
            this.watchHandles.push(mapWatch);
        });
        this.buildLayerNode = (layer) => __awaiter(this, void 0, void 0, function* () {
            const isGroup = layer.type === 'group';
            let children = [];
            let legendItems = [];
            if (isGroup) {
                const groupLayer = layer;
                children = yield Promise.all(groupLayer.layers.toArray().map((child) => this.buildLayerNode(child)));
            }
            else {
                legendItems = yield this.getLegendItems(layer);
            }
            return {
                id: layer.id,
                title: layer.title || `[untitled: ${layer.type} / ${layer.id}]`,
                layer,
                isGroup,
                visible: layer.visible,
                children,
                legendItems
            };
        });
        this.getLegendItems = (layer) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const anyLayer = layer;
                const renderer = anyLayer.renderer;
                if (!renderer)
                    return [];
                if (renderer.type === 'simple') {
                    return [
                        {
                            label: layer.title || 'Symbol',
                            symbol: (_a = renderer.symbol) !== null && _a !== void 0 ? _a : null
                        }
                    ];
                }
                if (renderer.type === 'unique-value') {
                    const items = [];
                    (_b = renderer.uniqueValueInfos) === null || _b === void 0 ? void 0 : _b.forEach((info) => {
                        var _a;
                        items.push({
                            label: info.label || info.value || 'Value',
                            symbol: (_a = info.symbol) !== null && _a !== void 0 ? _a : null
                        });
                    });
                    return items;
                }
                if (renderer.type === 'class-breaks') {
                    const items = [];
                    (_c = renderer.classBreakInfos) === null || _c === void 0 ? void 0 : _c.forEach((info) => {
                        var _a;
                        items.push({
                            label: info.label || `${info.minValue} - ${info.maxValue}`,
                            symbol: (_a = info.symbol) !== null && _a !== void 0 ? _a : null
                        });
                    });
                    return items;
                }
                return [];
            }
            catch (err) {
                console.error('Legend build error', err);
                return [];
            }
        });
        this.toggleLayerVisibility = (layer) => {
            layer.visible = !layer.visible;
            this.forceUpdate();
        };
        this.toggleGroupExpanded = (layerId) => {
            this.setState((prev) => ({
                expandedGroups: Object.assign(Object.assign({}, prev.expandedGroups), { [layerId]: !prev.expandedGroups[layerId] })
            }));
        };
        this.toggleLegendExpanded = (layerId) => {
            this.setState((prev) => ({
                expandedLegends: Object.assign(Object.assign({}, prev.expandedLegends), { [layerId]: !prev.expandedLegends[layerId] })
            }));
        };
        this.renderLegendSymbol = (symbol, key) => {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(SymbolPreview, { symbol: symbol, symbolKey: key });
        };
        this.renderLayerNode = (node, level = 0) => {
            const isExpanded = this.state.expandedGroups[node.id];
            if (node.isGroup) {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-group", key: node.id },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-group-header", style: { paddingLeft: `${12 + level * 16}px` } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "tl-expand-btn", onClick: () => this.toggleGroupExpanded(node.id), type: "button" }, isExpanded ? '▾' : '▸'),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "tl-checkbox-row" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: node.layer.visible, onChange: () => this.toggleLayerVisibility(node.layer) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "tl-layer-title" }, node.title))),
                    isExpanded && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-group-children" }, node.children.map((child) => this.renderLayerNode(child, level + 1))))));
            }
            const legendExpanded = this.state.expandedLegends[node.id];
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-layer", key: node.id, style: { paddingLeft: `${20 + level * 16}px` } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-layer-header-row" },
                    node.legendItems.length > 0 ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "tl-expand-btn", onClick: () => this.toggleLegendExpanded(node.id), type: "button" }, legendExpanded ? '▾' : '▸')) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "tl-expand-spacer" })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "tl-checkbox-row" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: node.layer.visible, onChange: () => this.toggleLayerVisibility(node.layer) }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "tl-layer-title" }, node.title))),
                node.legendItems.length > 0 && legendExpanded && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-legend-list" }, node.legendItems.map((item, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-legend-row", key: `${node.id}-${idx}` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-symbol-wrap" }, this.renderLegendSymbol(item.symbol, `${node.id}-${idx}`)),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-legend-label" }, item.label))))))));
        };
        this.state = {
            jimuMapView: null,
            layerTree: [],
            expandedGroups: {},
            expandedLegends: {}
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.jimuMapView &&
            (!prevState.jimuMapView || prevState.jimuMapView !== this.state.jimuMapView)) {
            this.initializeLayerTree();
        }
    }
    componentWillUnmount() {
        this.clearWatches();
    }
    render() {
        var _a;
        if (!this.props.useMapWidgetIds || this.props.useMapWidgetIds.length === 0) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-empty" }, "Please select a Map widget for this custom widget.");
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "toggle-legend-widget" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-panel" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-header" }, "Layers / Legend"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-body" }, this.state.layerTree.map((node) => this.renderLayerNode(node))))));
    }
}
class SymbolPreview extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.containerRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.drawSymbol = () => __awaiter(this, void 0, void 0, function* () {
            const container = this.containerRef.current;
            if (!container)
                return;
            container.innerHTML = '';
            if (!this.props.symbol)
                return;
            try {
                const el = yield _arcgis_core_symbols_support_symbolUtils__WEBPACK_IMPORTED_MODULE_4__.renderPreviewHTML(this.props.symbol, {
                    size: 16
                });
                if (el) {
                    container.appendChild(el);
                }
            }
            catch (err) {
                console.error('Symbol preview error', err);
            }
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.drawSymbol();
        });
    }
    componentDidUpdate(prevProps) {
        return __awaiter(this, void 0, void 0, function* () {
            if (prevProps.symbolKey !== this.props.symbolKey ||
                prevProps.symbol !== this.props.symbol) {
                yield this.drawSymbol();
            }
        });
    }
    render() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tl-symbol", ref: this.containerRef });
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90b2dnbGUtbGVnZW5kL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtIQUErSCxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxX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T0FBTTtZQUU5QixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxFQUFFLEdBQUcsTUFBTSx1RkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEUsSUFBSSxFQUFFLEVBQUU7aUJBQ1QsQ0FBQztnQkFFRixJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUNQLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUM7SUFLSCxDQUFDO0lBckNPLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ3pCLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLFNBQTZCOztZQUNwRCxJQUNFLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUM1QyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN0QyxDQUFDO2dCQUNELE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBdUJELE1BQU07UUFDSixPQUFPLHdEQUFLLFNBQVMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUk7SUFDOUQsQ0FBQztDQUNGO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdG9nZ2xlLWxlZ2VuZC9zcmMvcnVudGltZS9zdHlsZS5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90b2dnbGUtbGVnZW5kL3NyYy9ydW50aW1lL3N0eWxlLnNjc3M/MDVhOSIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvc3VwcG9ydC9zeW1ib2xVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90b2dnbGUtbGVnZW5kL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b2dnbGUtbGVnZW5kLXdpZGdldCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50bC1wYW5lbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50bC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY3O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4udGwtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi50bC1lbXB0eSB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi50bC1ncm91cCxcbi50bC1sYXllciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGVkZjM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50bC1ncm91cC1oZWFkZXIsXG4udGwtbGF5ZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50bC1ncm91cC1jaGlsZHJlbiB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG59XG5cbi50bC1jaGVja2JveC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRsLWNoZWNrYm94LXJvdyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMnB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYWNjZW50LWNvbG9yOiAjMmU3ZDMyO1xufVxuXG4udGwtZXhwYW5kLWJ0biB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuXG4udGwtbGF5ZXItdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4udGwtbGVnZW5kLWxpc3Qge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbn1cblxuLnRsLWxlZ2VuZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbi50bC1zeW1ib2wtd3JhcCB7XG4gIHdpZHRoOiAyMnB4O1xuICBtaW4td2lkdGg6IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGwtc3ltYm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE2cHg7XG59XG5cbi50bC1sZWdlbmQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuLnRsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLnRsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2QxZDVkYjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi50bC1sYXllci1oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRsLWV4cGFuZC1zcGFjZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4udGwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmNztcbiAgYmFja2dyb3VuZDogIzJlN2QzMjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RvZ2dsZS1sZWdlbmQvc3JjL3J1bnRpbWUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZ2dsZS1sZWdlbmQtd2lkZ2V0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGwtcGFuZWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50bC1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMWYyOTM3O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjc7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGwtYm9keSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcclxcbn1cXHJcXG5cXHJcXG4udGwtZW1wdHkge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWdyb3VwLFxcclxcbi50bC1sYXllciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZWRmMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGwtZ3JvdXAtaGVhZGVyLFxcclxcbi50bC1sYXllciB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWdyb3VwLWNoaWxkcmVuIHtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50bC1jaGVja2JveC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGwtY2hlY2tib3gtcm93IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYWNjZW50LWNvbG9yOiAjMmU3ZDMyO1xcclxcbn1cXHJcXG5cXHJcXG4udGwtZXhwYW5kLWJ0biB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxuICBjb2xvcjogIzZiNzI4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWxheWVyLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzFmMjkzNztcXHJcXG5cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbi50bC1sZWdlbmQtbGlzdCB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi50bC1sZWdlbmQtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLXN5bWJvbC13cmFwIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbiAgbWluLXdpZHRoOiAyMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLXN5bWJvbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWxlZ2VuZC1sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogIzRiNTU2MztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xcclxcbn1cXHJcXG5cXHJcXG4udGwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRsLWxheWVyLWhlYWRlci1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50bC1leHBhbmQtc3BhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxufVxcclxcblxcclxcbi50bC1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjc7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmU3ZDMyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb3JlX3JlYWN0aXZlVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3N5bWJvbHNfc3VwcG9ydF9zeW1ib2xVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgR3JvdXBMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0dyb3VwTGF5ZXInXHJcbmltcG9ydCAqIGFzIHJlYWN0aXZlVXRpbHMgZnJvbSAnQGFyY2dpcy9jb3JlL2NvcmUvcmVhY3RpdmVVdGlscydcclxuaW1wb3J0ICogYXMgc3ltYm9sVXRpbHMgZnJvbSAnQGFyY2dpcy9jb3JlL3N5bWJvbHMvc3VwcG9ydC9zeW1ib2xVdGlscydcclxuaW1wb3J0IHR5cGUgSGFuZGxlIGZyb20gJ0BhcmNnaXMvY29yZS9jb3JlL0hhbmRsZSdcclxuXHJcbnR5cGUgTGVnZW5kSXRlbSA9IHtcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgc3ltYm9sOiBfX2VzcmkuU3ltYm9sIHwgbnVsbFxyXG59XHJcblxyXG50eXBlIExheWVyTm9kZSA9IHtcclxuICBpZDogc3RyaW5nXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGxheWVyOiBfX2VzcmkuTGF5ZXJcclxuICBpc0dyb3VwOiBib29sZWFuXHJcbiAgdmlzaWJsZTogYm9vbGVhblxyXG4gIGNoaWxkcmVuOiBMYXllck5vZGVbXVxyXG4gIGxlZ2VuZEl0ZW1zOiBMZWdlbmRJdGVtW11cclxufVxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcgfCBudWxsXHJcbiAgbGF5ZXJUcmVlOiBMYXllck5vZGVbXVxyXG4gIGV4cGFuZGVkR3JvdXBzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfVxyXG4gIGV4cGFuZGVkTGVnZW5kczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBTdGF0ZT4ge1xyXG4gIHByaXZhdGUgd2F0Y2hIYW5kbGVzOiBIYW5kbGVbXSA9IFtdXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgICBsYXllclRyZWU6IFtdLFxyXG4gICAgICBleHBhbmRlZEdyb3Vwczoge30sXHJcbiAgICAgIGV4cGFuZGVkTGVnZW5kczoge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmXHJcbiAgICAgICghcHJldlN0YXRlLmppbXVNYXBWaWV3IHx8IHByZXZTdGF0ZS5qaW11TWFwVmlldyAhPT0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldylcclxuICAgICkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVMYXllclRyZWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLmNsZWFyV2F0Y2hlcygpXHJcbiAgfVxyXG5cclxuICBjbGVhcldhdGNoZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLndhdGNoSGFuZGxlcy5mb3JFYWNoKChoKSA9PiBoLnJlbW92ZT8uKCkpXHJcbiAgICB0aGlzLndhdGNoSGFuZGxlcyA9IFtdXHJcbiAgfVxyXG5cclxuICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICE9PSBqaW11TWFwVmlldykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXcgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVMYXllclRyZWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKCF2aWV3Py5tYXApIHJldHVyblxyXG5cclxuICAgIHRoaXMuY2xlYXJXYXRjaGVzKClcclxuXHJcbiAgICBhd2FpdCB2aWV3LndoZW4oKVxyXG5cclxuICAgIGNvbnN0IHRvcExheWVycyA9IHZpZXcubWFwLmxheWVyc1xyXG4gICAgICAudG9BcnJheSgpXHJcbiAgICAgIC5zbGljZSgpXHJcbiAgICAgIC5yZXZlcnNlKClcclxuICAgICAgLmZpbHRlcigobGF5ZXIpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChsYXllci50aXRsZSB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICByZXR1cm4gdGl0bGUgIT09ICdjb21tZW50cycgJiYgdGl0bGUgIT09ICcnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgbGF5ZXJUcmVlID0gYXdhaXQgUHJvbWlzZS5hbGwodG9wTGF5ZXJzLm1hcCgobGF5ZXIpID0+IHRoaXMuYnVpbGRMYXllck5vZGUobGF5ZXIpKSlcclxuXHJcbiAgICBjb25zdCBleHBhbmRlZEdyb3VwcyA9IHsgLi4udGhpcy5zdGF0ZS5leHBhbmRlZEdyb3VwcyB9XHJcbiAgICBjb25zdCBleHBhbmRlZExlZ2VuZHMgPSB7IC4uLnRoaXMuc3RhdGUuZXhwYW5kZWRMZWdlbmRzIH1cclxuXHJcbiAgICBjb25zdCBzZWVkRXhwYW5zaW9uU3RhdGUgPSAobm9kZXM6IExheWVyTm9kZVtdKSA9PiB7XHJcbiAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBpZiAobm9kZS5pc0dyb3VwICYmIGV4cGFuZGVkR3JvdXBzW25vZGUuaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGV4cGFuZGVkR3JvdXBzW25vZGUuaWRdID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW5vZGUuaXNHcm91cCAmJiBub2RlLmxlZ2VuZEl0ZW1zLmxlbmd0aCA+IDAgJiYgZXhwYW5kZWRMZWdlbmRzW25vZGUuaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGV4cGFuZGVkTGVnZW5kc1tub2RlLmlkXSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNlZWRFeHBhbnNpb25TdGF0ZShub2RlLmNoaWxkcmVuKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWVkRXhwYW5zaW9uU3RhdGUobGF5ZXJUcmVlKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXllclRyZWUsIGV4cGFuZGVkR3JvdXBzLCBleHBhbmRlZExlZ2VuZHMgfSlcclxuXHJcbiAgICBjb25zdCBtYXBXYXRjaCA9IHJlYWN0aXZlVXRpbHMud2F0Y2goXHJcbiAgICAgICgpID0+IHZpZXcubWFwLmFsbExheWVycy5tYXAoKGxheWVyKSA9PiBgJHtsYXllci5pZH06JHtsYXllci52aXNpYmxlfToke2xheWVyLnRpdGxlfWApLnRvQXJyYXkoKSxcclxuICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlYnVpbHQgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgIHZpZXcubWFwLmxheWVyc1xyXG4gICAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAgIC5zbGljZSgpXHJcbiAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgLmZpbHRlcigobGF5ZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IChsYXllci50aXRsZSB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICByZXR1cm4gdGl0bGUgIT09ICdjb21tZW50cycgJiYgdGl0bGUgIT09ICcnXHJcbiAgICB9KVxyXG4gICAgLm1hcCgobGF5ZXIpID0+IHRoaXMuYnVpbGRMYXllck5vZGUobGF5ZXIpKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF5ZXJUcmVlOiByZWJ1aWx0IH0pXHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICB0aGlzLndhdGNoSGFuZGxlcy5wdXNoKG1hcFdhdGNoKVxyXG4gIH1cclxuXHJcbiAgYnVpbGRMYXllck5vZGUgPSBhc3luYyAobGF5ZXI6IF9fZXNyaS5MYXllcik6IFByb21pc2U8TGF5ZXJOb2RlPiA9PiB7XHJcbiAgICBjb25zdCBpc0dyb3VwID0gbGF5ZXIudHlwZSA9PT0gJ2dyb3VwJ1xyXG4gICAgbGV0IGNoaWxkcmVuOiBMYXllck5vZGVbXSA9IFtdXHJcbiAgICBsZXQgbGVnZW5kSXRlbXM6IExlZ2VuZEl0ZW1bXSA9IFtdXHJcblxyXG4gICAgaWYgKGlzR3JvdXApIHtcclxuICAgICAgY29uc3QgZ3JvdXBMYXllciA9IGxheWVyIGFzIEdyb3VwTGF5ZXJcclxuICAgICAgY2hpbGRyZW4gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBncm91cExheWVyLmxheWVycy50b0FycmF5KCkubWFwKChjaGlsZCkgPT4gdGhpcy5idWlsZExheWVyTm9kZShjaGlsZCkpXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxlZ2VuZEl0ZW1zID0gYXdhaXQgdGhpcy5nZXRMZWdlbmRJdGVtcyhsYXllcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogbGF5ZXIuaWQsXHJcbiAgICAgIHRpdGxlOiBsYXllci50aXRsZSB8fCBgW3VudGl0bGVkOiAke2xheWVyLnR5cGV9IC8gJHtsYXllci5pZH1dYCxcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIGlzR3JvdXAsXHJcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBsZWdlbmRJdGVtc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGVnZW5kSXRlbXMgPSBhc3luYyAobGF5ZXI6IF9fZXNyaS5MYXllcik6IFByb21pc2U8TGVnZW5kSXRlbVtdPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhbnlMYXllciA9IGxheWVyIGFzIGFueVxyXG4gICAgICBjb25zdCByZW5kZXJlciA9IGFueUxheWVyLnJlbmRlcmVyXHJcblxyXG4gICAgICBpZiAoIXJlbmRlcmVyKSByZXR1cm4gW11cclxuXHJcbiAgICAgIGlmIChyZW5kZXJlci50eXBlID09PSAnc2ltcGxlJykge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBsYXllci50aXRsZSB8fCAnU3ltYm9sJyxcclxuICAgICAgICAgICAgc3ltYm9sOiByZW5kZXJlci5zeW1ib2wgPz8gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlbmRlcmVyLnR5cGUgPT09ICd1bmlxdWUtdmFsdWUnKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXM6IExlZ2VuZEl0ZW1bXSA9IFtdXHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnVuaXF1ZVZhbHVlSW5mb3M/LmZvckVhY2goKGluZm8pID0+IHtcclxuICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogaW5mby5sYWJlbCB8fCBpbmZvLnZhbHVlIHx8ICdWYWx1ZScsXHJcbiAgICAgICAgICAgIHN5bWJvbDogaW5mby5zeW1ib2wgPz8gbnVsbFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXNcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlbmRlcmVyLnR5cGUgPT09ICdjbGFzcy1icmVha3MnKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXM6IExlZ2VuZEl0ZW1bXSA9IFtdXHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmNsYXNzQnJlYWtJbmZvcz8uZm9yRWFjaCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBpbmZvLmxhYmVsIHx8IGAke2luZm8ubWluVmFsdWV9IC0gJHtpbmZvLm1heFZhbHVlfWAsXHJcbiAgICAgICAgICAgIHN5bWJvbDogaW5mby5zeW1ib2wgPz8gbnVsbFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXNcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTGVnZW5kIGJ1aWxkIGVycm9yJywgZXJyKVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUxheWVyVmlzaWJpbGl0eSA9IChsYXllcjogX19lc3JpLkxheWVyKSA9PiB7XHJcbiAgICBsYXllci52aXNpYmxlID0gIWxheWVyLnZpc2libGVcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlR3JvdXBFeHBhbmRlZCA9IChsYXllcklkOiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+ICh7XHJcbiAgICAgIGV4cGFuZGVkR3JvdXBzOiB7XHJcbiAgICAgICAgLi4ucHJldi5leHBhbmRlZEdyb3VwcyxcclxuICAgICAgICBbbGF5ZXJJZF06ICFwcmV2LmV4cGFuZGVkR3JvdXBzW2xheWVySWRdXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTGVnZW5kRXhwYW5kZWQgPSAobGF5ZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2KSA9PiAoe1xyXG4gICAgICBleHBhbmRlZExlZ2VuZHM6IHtcclxuICAgICAgICAuLi5wcmV2LmV4cGFuZGVkTGVnZW5kcyxcclxuICAgICAgICBbbGF5ZXJJZF06ICFwcmV2LmV4cGFuZGVkTGVnZW5kc1tsYXllcklkXVxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIHJlbmRlckxlZ2VuZFN5bWJvbCA9IChzeW1ib2w6IF9fZXNyaS5TeW1ib2wgfCBudWxsLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIDxTeW1ib2xQcmV2aWV3IHN5bWJvbD17c3ltYm9sfSBzeW1ib2xLZXk9e2tleX0gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlckxheWVyTm9kZSA9IChub2RlOiBMYXllck5vZGUsIGxldmVsID0gMCkgPT4ge1xyXG4gICAgY29uc3QgaXNFeHBhbmRlZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRHcm91cHNbbm9kZS5pZF1cclxuXHJcbiAgICBpZiAobm9kZS5pc0dyb3VwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bC1ncm91cFwiIGtleT17bm9kZS5pZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsLWdyb3VwLWhlYWRlclwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHsxMiArIGxldmVsICogMTZ9cHhgIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGwtZXhwYW5kLWJ0blwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVHcm91cEV4cGFuZGVkKG5vZGUuaWQpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzRXhwYW5kZWQgPyAn4pa+JyA6ICfilrgnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0bC1jaGVja2JveC1yb3dcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtub2RlLmxheWVyLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGVMYXllclZpc2liaWxpdHkobm9kZS5sYXllcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0bC1sYXllci10aXRsZVwiPntub2RlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtpc0V4cGFuZGVkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bC1ncm91cC1jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgIHtub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHRoaXMucmVuZGVyTGF5ZXJOb2RlKGNoaWxkLCBsZXZlbCArIDEpKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVnZW5kRXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkTGVnZW5kc1tub2RlLmlkXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGwtbGF5ZXJcIiBrZXk9e25vZGUuaWR9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHsyMCArIGxldmVsICogMTZ9cHhgIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGwtbGF5ZXItaGVhZGVyLXJvd1wiPlxyXG4gICAgICAgICAge25vZGUubGVnZW5kSXRlbXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRsLWV4cGFuZC1idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTGVnZW5kRXhwYW5kZWQobm9kZS5pZCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGVnZW5kRXhwYW5kZWQgPyAn4pa+JyA6ICfilrgnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRsLWV4cGFuZC1zcGFjZXJcIiAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGwtY2hlY2tib3gtcm93XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17bm9kZS5sYXllci52aXNpYmxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnRvZ2dsZUxheWVyVmlzaWJpbGl0eShub2RlLmxheWVyKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGwtbGF5ZXItdGl0bGVcIj57bm9kZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7bm9kZS5sZWdlbmRJdGVtcy5sZW5ndGggPiAwICYmIGxlZ2VuZEV4cGFuZGVkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGwtbGVnZW5kLWxpc3RcIj5cclxuICAgICAgICAgICAge25vZGUubGVnZW5kSXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsLWxlZ2VuZC1yb3dcIiBrZXk9e2Ake25vZGUuaWR9LSR7aWR4fWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bC1zeW1ib2wtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMZWdlbmRTeW1ib2woaXRlbS5zeW1ib2wsIGAke25vZGUuaWR9LSR7aWR4fWApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsLWxlZ2VuZC1sYWJlbFwiPntpdGVtLmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyB8fCB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGwtZW1wdHlcIj5QbGVhc2Ugc2VsZWN0IGEgTWFwIHdpZGdldCBmb3IgdGhpcyBjdXN0b20gd2lkZ2V0LjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLWxlZ2VuZC13aWRnZXRcIj5cclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGwtcGFuZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGwtaGVhZGVyXCI+TGF5ZXJzIC8gTGVnZW5kPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsLWJvZHlcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubGF5ZXJUcmVlLm1hcCgobm9kZSkgPT4gdGhpcy5yZW5kZXJMYXllck5vZGUobm9kZSkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBTeW1ib2xQcmV2aWV3UHJvcHMgPSB7XHJcbiAgc3ltYm9sOiBfX2VzcmkuU3ltYm9sIHwgbnVsbFxyXG4gIHN5bWJvbEtleTogc3RyaW5nXHJcbn1cclxuXHJcbmNsYXNzIFN5bWJvbFByZXZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFN5bWJvbFByZXZpZXdQcm9wcz4ge1xyXG4gIHByaXZhdGUgY29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpXHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgYXdhaXQgdGhpcy5kcmF3U3ltYm9sKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFN5bWJvbFByZXZpZXdQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBwcmV2UHJvcHMuc3ltYm9sS2V5ICE9PSB0aGlzLnByb3BzLnN5bWJvbEtleSB8fFxyXG4gICAgICBwcmV2UHJvcHMuc3ltYm9sICE9PSB0aGlzLnByb3BzLnN5bWJvbFxyXG4gICAgKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZHJhd1N5bWJvbCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3U3ltYm9sID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJSZWYuY3VycmVudFxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5zeW1ib2wpIHJldHVyblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVsID0gYXdhaXQgc3ltYm9sVXRpbHMucmVuZGVyUHJldmlld0hUTUwodGhpcy5wcm9wcy5zeW1ib2wsIHtcclxuICAgICAgICBzaXplOiAxNlxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU3ltYm9sIHByZXZpZXcgZXJyb3InLCBlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0bC1zeW1ib2xcIiByZWY9e3RoaXMuY29udGFpbmVyUmVmfSAvPlxyXG4gIH1cclxufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=