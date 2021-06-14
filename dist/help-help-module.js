(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm5/ng-select.js ***!
  \**************************************************************/
/*! exports provided: NgSelectComponent, SELECTION_MODEL_FACTORY, NgSelectModule, NgSelectConfig, ɵs, ɵo, ɵt, ɵr, ɵi, ɵh, ɵf, ɵn, ɵl, ɵg, ɵj, ɵe, ɵd, ɵm, ɵk, ɵc, ɵb, ɵp, ɵq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return NgOptionHighlightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return VirtualScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    NgOptionTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-option-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptionTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgOptionTemplateDirective;
}());
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    NgOptgroupTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-optgroup-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgOptgroupTemplateDirective;
}());
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    NgLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLabelTemplateDirective;
}());
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    NgMultiLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-multi-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgMultiLabelTemplateDirective;
}());
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    NgHeaderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-header-tmp]' },] }
    ];
    /** @nocollapse */
    NgHeaderTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgHeaderTemplateDirective;
}());
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    NgFooterTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-footer-tmp]' },] }
    ];
    /** @nocollapse */
    NgFooterTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgFooterTemplateDirective;
}());
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    NgNotFoundTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-notfound-tmp]' },] }
    ];
    /** @nocollapse */
    NgNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgNotFoundTemplateDirective;
}());
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    NgTypeToSearchTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-typetosearch-tmp]' },] }
    ];
    /** @nocollapse */
    NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgTypeToSearchTemplateDirective;
}());
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingTextTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-loadingtext-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLoadingTextTemplateDirective;
}());
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    NgTagTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-tag-tmp]' },] }
    ];
    /** @nocollapse */
    NgTagTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgTagTemplateDirective;
}());
var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function NgLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingSpinnerTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-loadingspinner-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLoadingSpinnerTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    ConsoleService.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.warn(message);
    };
    ConsoleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ConsoleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
    return ConsoleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    var match = function (a) {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModel.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.selectedItems.length - 1;
            for (; i >= 0; i--) {
                /** @type {?} */
                var item = this.selectedItems[i];
                if (!item.disabled) {
                    return item;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} items
     * @return {?}
     */
    ItemsList.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemsList.prototype.findItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var findBy;
        if (this._ngSelect.compareWith) {
            findBy = function (item) { return _this._ngSelect.compareWith(item.value, value); };
        }
        else if (this._ngSelect.bindValue) {
            findBy = function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; };
        }
        else {
            findBy = function (item) { return item.value === value ||
                !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); };
        }
        return this._items.find(function (item) { return findBy(item); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    ItemsList.prototype.clearSelected = /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        if (keepDisabled === void 0) { keepDisabled = false; }
        this._selectionModel.clear(keepDisabled);
        this._items.forEach(function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.findByLabel = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var e_1, _a;
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        var hideSelected = this._ngSelect.hideSelected;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            /** @type {?} */
            var matchedItems = [];
            try {
                for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                        continue;
                    }
                    /** @type {?} */
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    /** @type {?} */
                    var head = this_1._items.find(function (x) { return x === last_1.parent; });
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.resetFilteredItems = /**
     * @return {?}
     */
    function () {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(function (x) { return !x.selected; });
        }
        else {
            this._filteredItems = this._items;
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.unmarkItem = /**
     * @return {?}
     */
    function () {
        this._markedIndex = -1;
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markNextItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(+1);
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markPreviousItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.markItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    ItemsList.prototype.markSelectedOrDefault = /**
     * @param {?=} markDefault
     * @return {?}
     */
    function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            if (this._ngSelect.excludeGroupsFromDefaultSelection) {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled && !x.children; }) : -1;
            }
            else {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    ItemsList.prototype.resolveNested = /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ItemsList.prototype.mapItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        /** @type {?} */
        var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: newId(),
        };
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.mapSelectedItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_3, _a;
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selected = _c.value;
                /** @type {?} */
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                /** @type {?} */
                var item = isDefined(value) ? this.findItem(value) : null;
                this._selectionModel.unselect(selected, multiple);
                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(function (x) { return _this.selectedItems.indexOf(x) === -1; });
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._showSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_4, _a;
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            var parent_1 = item.parent;
            /** @type {?} */
            var parentExists = this._filteredItems.find(function (x) { return x === parent_1; });
            if (!parentExists) {
                this._filteredItems.push(parent_1);
            }
        }
        else if (item.children) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.selected = false;
                    this._filteredItems.push(child);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._hideSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
        if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;
            if (children.every(function (x) { return x.selected; })) {
                this._filteredItems = this._filteredItems.filter(function (x) { return x !== item.parent; });
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(function (x) { return x.parent !== item; });
        }
    };
    /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    ItemsList.prototype._defaultSearchFn = /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    function (search, opt) {
        /** @type {?} */
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    /**
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._getNextItemIndex = /**
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    /**
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._stepToItem = /**
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    ItemsList.prototype._groupBy = /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    function (items, prop) {
        var _this = this;
        var e_5, _a, e_6, _b;
        /** @type {?} */
        var groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[/** @type {?} */ (prop)])) {
            try {
                for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    /** @type {?} */
                    var children = (item.value[/** @type {?} */ (prop)] || []).map(function (x, index) { return _this.mapItem(x, index); });
                    groups.set(item, children);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return groups;
        }
        /** @type {?} */
        var isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var keyFn = function (item) {
            /** @type {?} */
            var key = isFnKey ? (/** @type {?} */ (prop))(item.value) : item.value[/** @type {?} */ (prop)];
            return isDefined(key) ? key : undefined;
        };
        try {
            // Group items by key.
            for (var items_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                /** @type {?} */
                var key = keyFn(item);
                /** @type {?} */
                var group = groups.get(key);
                if (group) {
                    group.push(item);
                }
                else {
                    groups.set(key, [item]);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return groups;
    };
    /**
     * @param {?} groups
     * @return {?}
     */
    ItemsList.prototype._flatten = /**
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        var e_7, _a;
        /** @type {?} */
        var isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var withoutGroup = groups.get(undefined) || [];
        items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(withoutGroup));
        /** @type {?} */
        var i = withoutGroup.length;
        var _loop_2 = function (key) {
            if (!isDefined(key)) {
                return "continue";
            }
            /** @type {?} */
            var isObjectKey = isObject(key);
            /** @type {?} */
            var parent_2 = {
                label: isObjectKey ? '' : /** @type {?} */ (key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this_2._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : /** @type {?} */ (this_2._ngSelect.groupBy);
            /** @type {?} */
            var groupValue = this_2._ngSelect.groupValue || (function () {
                var _a;
                if (isObjectKey) {
                    return (/** @type {?} */ (key)).value;
                }
                return _a = {}, _a[groupKey] = key, _a;
            });
            /** @type {?} */
            var children = groups.get(key).map(function (x) {
                x.parent = parent_2;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent_2.children = children;
            parent_2.value = groupValue(key, children.map(function (x) { return x.value; }));
            items.push(parent_2);
            items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(children));
        };
        var this_2 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_2(key);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return items;
    };
    return ItemsList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    WindowService.prototype.requestAnimationFrame = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return window.requestAnimationFrame(fn);
    };
    /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    WindowService.prototype.setTimeout = /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    function (handler, timeout) {
        return window.setTimeout(handler, timeout);
    };
    WindowService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ WindowService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
    return WindowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var VirtualScrollService = /** @class */ (function () {
    function VirtualScrollService() {
    }
    /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    VirtualScrollService.prototype.calculateItems = /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    function (d, dropdownEl, bufferAmount) {
        /** @type {?} */
        var scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        /** @type {?} */
        var scrollTop = Math.max(0, dropdownEl.scrollTop);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        /** @type {?} */
        var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    VirtualScrollService.prototype.calculateDimensions = /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    function (itemsLength, index, panelEl, contentEl) {
        /** @type {?} */
        var panelRect = panelEl.getBoundingClientRect();
        /** @type {?} */
        var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        /** @type {?} */
        var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    };
    VirtualScrollService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ VirtualScrollService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
    return VirtualScrollService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = function () { };
        this._disposeDocumentResizeListener = function () { };
        this._dropdown = _elementRef.nativeElement;
    }
    Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._select = this._dropdown.parentElement;
        this._handleScroll();
        if (this._document) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'mousedown', { capture: true }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
                .subscribe(function ($event) { return _this._handleOutsideClick($event); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._whenContentReady().then(function () {
            if (_this._destroy$.closed) {
                return;
            }
            if (_this.appendTo) {
                _this._appendDropdown();
                _this._handleDocumentResize();
            }
            _this.updateDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._zone.runOutsideAngular(function () {
                _this._window.requestAnimationFrame(function () {
                    _this._updateItems().then(resolve);
                });
            });
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollInto = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        /** @type {?} */
        var scrollEl = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            /** @type {?} */
            var contentEl = this.contentElementRef.nativeElement;
            /** @type {?} */
            var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollIntoTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._window.setTimeout(function () {
            _this._currentPosition = _this._calculateCurrentPosition(_this._dropdown);
            if (_this._currentPosition === 'top') {
                _this._renderer.addClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.addClass(_this._select, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._select, BOTTOM_CSS_CLASS);
            }
            else {
                _this._renderer.addClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.addClass(_this._select, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._select, TOP_CSS_CLASS);
            }
            if (_this.appendTo) {
                _this._updateAppendedDropdownPosition();
            }
            _this._dropdown.style.opacity = '1';
        }, 0);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._select.contains($event.target)) {
            return;
        }
        if (this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this.outsideClick.emit();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
            _this.refresh();
            _this._fireScrollToEnd();
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleItemsChange = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(function () {
            if (_this.appendTo && _this._currentPosition === 'top') {
                _this._updateAppendedDropdownPosition();
            }
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(function () {
                _this.update.emit(_this.items.slice());
                _this._scrollToMarked();
            });
            return Promise.resolve();
        }
        /** @type {?} */
        var loop = function (resolve) {
            /** @type {?} */
            var d = _this._calculateDimensions();
            /** @type {?} */
            var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
            (/** @type {?} */ (_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
            (/** @type {?} */ (_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
            if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                _this._zone.run(function () {
                    _this.update.emit(_this.items.slice(res.start, res.end));
                    _this.scroll.emit({ start: res.start, end: res.end });
                });
                _this._previousStart = res.start;
                _this._previousEnd = res.end;
                if (_this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (_this._startupLoop === true) {
                _this._startupLoop = false;
                _this._scrollToMarked();
                resolve();
            }
        };
        return new Promise(function (resolve) { return loop(resolve); });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @return {?}
     */
    function () {
        if (this._scrollToEndFired) {
            return;
        }
        /** @type {?} */
        var scroll = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateDimensions = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDocumentResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
            _this._updateAppendedDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._scrollToMarked = /**
     * @return {?}
     */
    function () {
        if (this._isScrolledToMarked || !this.markedItem) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this.markedItem);
    };
    /**
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        parent.appendChild(this._dropdown);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo) || document.body;
        this._dropdown.style.display = 'none';
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var boundingRect = parent.getBoundingClientRect();
        this._dropdown.style.display = '';
        /** @type {?} */
        var offsetTop = selectRect.top - boundingRect.top;
        /** @type {?} */
        var offsetLeft = selectRect.left - boundingRect.left;
        /** @type {?} */
        var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
        this._dropdown.style.top = offsetTop + topDelta + 'px';
        this._dropdown.style.bottom = 'auto';
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = selectRect.width + 'px';
        this._dropdown.style.minWidth = selectRect.width + 'px';
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._whenContentReady = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        /** @type {?} */
        var ready = function (resolve) {
            /** @type {?} */
            var ngOption = _this._dropdown.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            _this._zone.runOutsideAngular(function () {
                setTimeout(function () { return ready(resolve); }, 5);
            });
        };
        return new Promise(function (resolve) { return ready(resolve); });
    };
    NgDropdownPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    selector: 'ng-dropdown-panel',
                    template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: VirtualScrollService },
        { type: WindowService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    return NgDropdownPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgOptionComponent.prototype._isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    NgOptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-option',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NgOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgSelectConfig = /** @class */ (function () {
    function NgSelectConfig() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
    }
    NgSelectConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgSelectConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
    return NgSelectConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(classes, tabIndex, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this = this;
        this.classes = classes;
        this.tabIndex = tabIndex;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.excludeGroupsFromDefaultSelection = false;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.autoCorrect = 'off';
        this.autoCapitalize = 'off';
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabled = false;
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.clearItem = function (item) {
            /** @type {?} */
            var option = _this.selectedItems.find(function (x) { return x.value === item; });
            _this.unselect(option);
        };
        this.trackByOption = function (_, item) {
            if (_this.trackByFn) {
                return _this.trackByFn(item.value);
            }
            return null;
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    Object.defineProperty(NgSelectComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () { return this._items; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemsAreUsed = true;
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: /**
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
        get: /**
         * @return {?}
         */
        function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearSearchOnAdd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: /**
         * @return {?}
         */
        function () { return !!this.filterValue && this.searchable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsList.selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.map(function (x) { return x.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "currentPanelPosition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dropdownPanel) {
                return this.dropdownPanel.currentPosition;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._handleKeyPresses();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
        if (changes["isOpen"]) {
            this._manualOpen = isDefined(changes["isOpen"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this._itemsAreUsed) {
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    $event.preventDefault();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleArrowClick = /**
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleClearClick = /**
     * @return {?}
     */
    function () {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.clearModel = /**
     * @return {?}
     */
    function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focus();
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.toggleItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
            this._updateNgModel();
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.filterInput.nativeElement.focus();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.selectTag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        /** @type {?} */
        var tag;
        if (isFunction(this.addTag)) {
            tag = (/** @type {?} */ (this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
        }
        /** @type {?} */
        var handleTag = function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); };
        if (isPromise(tag)) {
            tag.then(function (item) { return _this.select(handleTag(item)); }).catch(function () { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showClear = /**
     * @return {?}
     */
    function () {
        return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
    };
    Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.filterValue) {
                return false;
            }
            /** @type {?} */
            var term = this.filterValue.toLowerCase();
            return this.addTag &&
                (!this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === term; }) &&
                    (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) { return x.label.toLowerCase() === term; }))) &&
                !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showNoItemsFound = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
            !this.showAddTag;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showTypeToSearch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.loading;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterValue = term;
        if (this._isTypeahead) {
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map(function (x) { return x.value; }) });
        this.open();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.focused) {
            return;
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        this.focused = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.onItemHover = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        if (!(/** @type {?} */ (this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.updateDropdownPosition = /**
     * @return {?}
     */
    function () {
        if (this.dropdownPanel) {
            this.dropdownPanel.updateDropdownPosition();
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgSelectComponent.prototype._setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
            this.itemsList.filter(this.filterValue);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._setItemsFromNgOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var handleNgOptions = function (options) {
            _this.items = options.map(function (option) { return ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); });
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        };
        /** @type {?} */
        var handleOptionChange = function () {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.ngOptions.changes, _this._destroy$);
            rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(changedOrDestroyed))
                .subscribe(function (option) {
                /** @type {?} */
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                _this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe(function (options) {
            _this.bindLabel = _this._defaultLabel;
            handleNgOptions(options);
            handleOptionChange();
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype._isValidWriteValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        var validateBinding = function (item) {
            if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(function (item) { return validateBinding(item); });
        }
        else {
            return validateBinding(value);
        }
    };
    /**
     * @param {?} ngModel
     * @return {?}
     */
    NgSelectComponent.prototype._handleWriteValue = /**
     * @param {?} ngModel
     * @return {?}
     */
    function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        var select = function (val) {
            var _a;
            /** @type {?} */
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                var isValObject = isObject(val);
                /** @type {?} */
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {},
                        _a[_this.bindLabel] = null,
                        _a[_this.bindValue] = val,
                        _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            (/** @type {?} */ (ngModel)).forEach(function (item) { return select(item); });
        }
        else {
            select(ngModel);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._handleKeyPresses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (letter) { return _this._pressedKeys.push(letter); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this._pressedKeys.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this._pressedKeys.join(''); }))
            .subscribe(function (term) {
            /** @type {?} */
            var item = _this.itemsList.findByLabel(term);
            if (item) {
                if (_this.isOpen) {
                    _this.itemsList.markItem(item);
                    _this._cd.markForCheck();
                }
                else {
                    _this.select(item);
                }
            }
            _this._pressedKeys = [];
        });
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._updateNgModel = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var model = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.bindValue) {
                    /** @type {?} */
                    var value = null;
                    if (item.children) {
                        /** @type {?} */
                        var groupKey = this.groupValue ? this.bindValue : /** @type {?} */ (this.groupBy);
                        value = item.value[groupKey || /** @type {?} */ (this.groupBy)];
                    }
                    else {
                        value = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(value);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var selected = this.selectedItems.map(function (x) { return x.value; });
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._clearSearch = /**
     * @return {?}
     */
    function () {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetFilteredItems();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToMarked = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToTag = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleTab = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen === false && !isDefined(this.addTag)) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleSpace = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    /**
     * @param {?} nextStep
     * @return {?}
     */
    NgSelectComponent.prototype._nextItemIsTag = /**
     * @param {?} nextStep
     * @return {?}
     */
    function (nextStep) {
        /** @type {?} */
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._handleBackspace = /**
     * @return {?}
     */
    function () {
        if (this.filterValue || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: /**
         * @return {?}
         */
        function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    NgSelectComponent.prototype._mergeGlobalConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    };
    NgSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   [attr.autocomplete]=\"labelForId ? 'off' : dropdownId\"\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [attr.autocorrect]=\"autoCorrect\"\n                   [attr.autocapitalize]=\"autoCapitalize\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"filterValue ? filterValue : ''\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defautlLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defautlLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [filterValue]=\"filterValue\"\n    [items]=\"itemsList.filteredItems\"\n    [markedItem]=\"itemsList.markedItem\"\n    (update)=\"viewPortItems = $event\"\n    (scroll)=\"scroll.emit($event)\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    (outsideClick)=\"close()\"\n    [class.ng-select-multiple]=\"multiple\"\n    [ngClass]=\"appendTo ? classes : null\"\n    [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgSelectComponent; }),
                            multi: true
                        }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        'class': 'ng-select',
                        '[class.ng-select-single]': '!multiple',
                    },
                    styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                }] }
    ];
    /** @nocollapse */
    NgSelectComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['class',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['autofocus',] }] },
        { type: NgSelectConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ConsoleService }
    ]; };
    NgSelectComponent.propDecorators = {
        bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeGroupsFromDefaultSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCorrect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCapitalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-typeahead',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-multiple',] }],
        addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-taggable',] }],
        searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-searchable',] }],
        clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-clearable',] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-opened',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
        focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
        changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] }],
        openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['open',] }],
        closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['close',] }],
        searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['search',] }],
        clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['clear',] }],
        addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['add',] }],
        removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['remove',] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollToEnd',] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgDropdownPanelComponent; }),] }],
        ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-disabled',] }],
        filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-filtered',] }],
        handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return NgSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionHighlightDirective = /** @class */ (function () {
    function NgOptionHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype._highlightLabel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        /** @type {?} */
        var indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    };
    Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
        get: /**
         * @return {?}
         */
        function () {
            return isDefined(this.term) && isDefined(this.label);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} html
     * @return {?}
     */
    NgOptionHighlightDirective.prototype._setInnerHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    };
    NgOptionHighlightDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngOptionHighlight]'
                },] }
    ];
    /** @nocollapse */
    NgOptionHighlightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    NgOptionHighlightDirective.propDecorators = {
        term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngOptionHighlight',] }]
    };
    return NgOptionHighlightDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
var DefaultSelectionModel = /** @class */ (function () {
    function DefaultSelectionModel() {
        this._selected = [];
    }
    Object.defineProperty(DefaultSelectionModel.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    DefaultSelectionModel.prototype.select = /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    function (item, multiple, groupAsModel) {
        item.selected = true;
        if (groupAsModel || !item.children) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                var childrenCount = item.parent.children.length;
                /** @type {?} */
                var selectedCount = item.parent.children.filter(function (x) { return x.selected; }).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (!groupAsModel) {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._selected, item.children);
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    DefaultSelectionModel.prototype.unselect = /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    function (item, multiple) {
        var _a;
        this._selected = this._selected.filter(function (x) { return x !== item; });
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                var children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                (_a = this._selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(children.filter(function (x) { return x !== item; })));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    };
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    DefaultSelectionModel.prototype.clear = /**
     * @param {?} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(function (x) { return x.disabled; }) : [];
    };
    /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    DefaultSelectionModel.prototype._setChildrenSelectedState = /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    function (children, selected) {
        children.forEach(function (x) { return x.selected = selected; });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter(function (x) { return x.parent !== parent; });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeParent = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter(function (x) { return x !== parent; });
    };
    return DefaultSelectionModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ɵ0 = DefaultSelectionModelFactory;
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    NgSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgDropdownPanelComponent,
                        NgOptionComponent,
                        NgSelectComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        NgSelectComponent,
                        NgOptionComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective
                    ],
                    providers: [
                        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                    ]
                },] }
    ];
    return NgSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctdGVtcGxhdGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbnNvbGUuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3ZhbHVlLXV0aWxzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VhcmNoLWhlbHBlci50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2lkLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaXRlbXMtbGlzdC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC50eXBlcy50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3dpbmRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmlydHVhbC1zY3JvbGwuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3NlbGVjdGlvbi1tb2RlbC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctb3B0aW9uLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbGFiZWwtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1tdWx0aS1sYWJlbC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWZvb3Rlci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1ub3Rmb3VuZC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5ndGV4dC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXRhZy10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5nc3Bpbm5lci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgaXNEZWZpbmVkKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiY29uc3QgZGlhY3JpdGljcyA9IHtcbiAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAnXFx1RkYyMSc6ICdBJyxcbiAgICAnXFx1MDBDMCc6ICdBJyxcbiAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAnXFx1MDBDMic6ICdBJyxcbiAgICAnXFx1MUVBNic6ICdBJyxcbiAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAnXFx1MUVBQSc6ICdBJyxcbiAgICAnXFx1MUVBOCc6ICdBJyxcbiAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAnXFx1MDEwMCc6ICdBJyxcbiAgICAnXFx1MDEwMic6ICdBJyxcbiAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAnXFx1MUVBRSc6ICdBJyxcbiAgICAnXFx1MUVCNCc6ICdBJyxcbiAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAnXFx1MDIyNic6ICdBJyxcbiAgICAnXFx1MDFFMCc6ICdBJyxcbiAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAnXFx1MDFERSc6ICdBJyxcbiAgICAnXFx1MUVBMic6ICdBJyxcbiAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAnXFx1MDFGQSc6ICdBJyxcbiAgICAnXFx1MDFDRCc6ICdBJyxcbiAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAnXFx1MDIwMic6ICdBJyxcbiAgICAnXFx1MUVBMCc6ICdBJyxcbiAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAnXFx1MUVCNic6ICdBJyxcbiAgICAnXFx1MUUwMCc6ICdBJyxcbiAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAnXFx1MDIzQSc6ICdBJyxcbiAgICAnXFx1MkM2Ric6ICdBJyxcbiAgICAnXFx1QTczMic6ICdBQScsXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxuICAgICdcXHUwMUZDJzogJ0FFJyxcbiAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxuICAgICdcXHVBNzM2JzogJ0FVJyxcbiAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxuICAgICdcXHVBNzNDJzogJ0FZJyxcbiAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAnXFx1RkYyMic6ICdCJyxcbiAgICAnXFx1MUUwMic6ICdCJyxcbiAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAnXFx1MUUwNic6ICdCJyxcbiAgICAnXFx1MDI0Myc6ICdCJyxcbiAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAnXFx1MDE4MSc6ICdCJyxcbiAgICAnXFx1MjRCOCc6ICdDJyxcbiAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAnXFx1MDEwNic6ICdDJyxcbiAgICAnXFx1MDEwOCc6ICdDJyxcbiAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAnXFx1MDEwQyc6ICdDJyxcbiAgICAnXFx1MDBDNyc6ICdDJyxcbiAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAnXFx1MDE4Nyc6ICdDJyxcbiAgICAnXFx1MDIzQic6ICdDJyxcbiAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAnXFx1MjRCOSc6ICdEJyxcbiAgICAnXFx1RkYyNCc6ICdEJyxcbiAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAnXFx1MDEwRSc6ICdEJyxcbiAgICAnXFx1MUUwQyc6ICdEJyxcbiAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAnXFx1MUUxMic6ICdEJyxcbiAgICAnXFx1MUUwRSc6ICdEJyxcbiAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAnXFx1MDE4Qic6ICdEJyxcbiAgICAnXFx1MDE4QSc6ICdEJyxcbiAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAnXFx1QTc3OSc6ICdEJyxcbiAgICAnXFx1MDFGMSc6ICdEWicsXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICdcXHUwMUYyJzogJ0R6JyxcbiAgICAnXFx1MDFDNSc6ICdEeicsXG4gICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgJ1xcdUZGMjUnOiAnRScsXG4gICAgJ1xcdTAwQzgnOiAnRScsXG4gICAgJ1xcdTAwQzknOiAnRScsXG4gICAgJ1xcdTAwQ0EnOiAnRScsXG4gICAgJ1xcdTFFQzAnOiAnRScsXG4gICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgJ1xcdTFFQzQnOiAnRScsXG4gICAgJ1xcdTFFQzInOiAnRScsXG4gICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgJ1xcdTAxMTInOiAnRScsXG4gICAgJ1xcdTFFMTQnOiAnRScsXG4gICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgJ1xcdTAxMTQnOiAnRScsXG4gICAgJ1xcdTAxMTYnOiAnRScsXG4gICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgJ1xcdTFFQkEnOiAnRScsXG4gICAgJ1xcdTAxMUEnOiAnRScsXG4gICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgJ1xcdTAyMDYnOiAnRScsXG4gICAgJ1xcdTFFQjgnOiAnRScsXG4gICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgJ1xcdTAyMjgnOiAnRScsXG4gICAgJ1xcdTFFMUMnOiAnRScsXG4gICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgJ1xcdTFFMTgnOiAnRScsXG4gICAgJ1xcdTFFMUEnOiAnRScsXG4gICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgJ1xcdTAxOEUnOiAnRScsXG4gICAgJ1xcdTI0QkInOiAnRicsXG4gICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgJ1xcdTFFMUUnOiAnRicsXG4gICAgJ1xcdTAxOTEnOiAnRicsXG4gICAgJ1xcdUE3N0InOiAnRicsXG4gICAgJ1xcdTI0QkMnOiAnRycsXG4gICAgJ1xcdUZGMjcnOiAnRycsXG4gICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgJ1xcdTAxMUMnOiAnRycsXG4gICAgJ1xcdTFFMjAnOiAnRycsXG4gICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgJ1xcdTAxMjAnOiAnRycsXG4gICAgJ1xcdTAxRTYnOiAnRycsXG4gICAgJ1xcdTAxMjInOiAnRycsXG4gICAgJ1xcdTAxRTQnOiAnRycsXG4gICAgJ1xcdTAxOTMnOiAnRycsXG4gICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgJ1xcdUE3N0QnOiAnRycsXG4gICAgJ1xcdUE3N0UnOiAnRycsXG4gICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgJ1xcdUZGMjgnOiAnSCcsXG4gICAgJ1xcdTAxMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgJ1xcdTFFMjYnOiAnSCcsXG4gICAgJ1xcdTAyMUUnOiAnSCcsXG4gICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjgnOiAnSCcsXG4gICAgJ1xcdTFFMkEnOiAnSCcsXG4gICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgJ1xcdTJDNjcnOiAnSCcsXG4gICAgJ1xcdTJDNzUnOiAnSCcsXG4gICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgJ1xcdTI0QkUnOiAnSScsXG4gICAgJ1xcdUZGMjknOiAnSScsXG4gICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgJ1xcdTAwQ0QnOiAnSScsXG4gICAgJ1xcdTAwQ0UnOiAnSScsXG4gICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgJ1xcdTAxMkEnOiAnSScsXG4gICAgJ1xcdTAxMkMnOiAnSScsXG4gICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgJ1xcdTAwQ0YnOiAnSScsXG4gICAgJ1xcdTFFMkUnOiAnSScsXG4gICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgJ1xcdTAxQ0YnOiAnSScsXG4gICAgJ1xcdTAyMDgnOiAnSScsXG4gICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgJ1xcdTFFQ0EnOiAnSScsXG4gICAgJ1xcdTAxMkUnOiAnSScsXG4gICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgJ1xcdTAxOTcnOiAnSScsXG4gICAgJ1xcdTI0QkYnOiAnSicsXG4gICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgJ1xcdTAxMzQnOiAnSicsXG4gICAgJ1xcdTAyNDgnOiAnSicsXG4gICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgJ1xcdUZGMkInOiAnSycsXG4gICAgJ1xcdTFFMzAnOiAnSycsXG4gICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgJ1xcdTFFMzInOiAnSycsXG4gICAgJ1xcdTAxMzYnOiAnSycsXG4gICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgJ1xcdTAxOTgnOiAnSycsXG4gICAgJ1xcdTJDNjknOiAnSycsXG4gICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgJ1xcdUE3NDInOiAnSycsXG4gICAgJ1xcdUE3NDQnOiAnSycsXG4gICAgJ1xcdUE3QTInOiAnSycsXG4gICAgJ1xcdTI0QzEnOiAnTCcsXG4gICAgJ1xcdUZGMkMnOiAnTCcsXG4gICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgJ1xcdTAxMzknOiAnTCcsXG4gICAgJ1xcdTAxM0QnOiAnTCcsXG4gICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgJ1xcdTFFMzgnOiAnTCcsXG4gICAgJ1xcdTAxM0InOiAnTCcsXG4gICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgJ1xcdTFFM0EnOiAnTCcsXG4gICAgJ1xcdTAxNDEnOiAnTCcsXG4gICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgJ1xcdTJDNjInOiAnTCcsXG4gICAgJ1xcdTJDNjAnOiAnTCcsXG4gICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgJ1xcdUE3NDYnOiAnTCcsXG4gICAgJ1xcdUE3ODAnOiAnTCcsXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICdcXHUwMUM4JzogJ0xqJyxcbiAgICAnXFx1MjRDMic6ICdNJyxcbiAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAnXFx1MUUzRSc6ICdNJyxcbiAgICAnXFx1MUU0MCc6ICdNJyxcbiAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAnXFx1MkM2RSc6ICdNJyxcbiAgICAnXFx1MDE5Qyc6ICdNJyxcbiAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAnXFx1RkYyRSc6ICdOJyxcbiAgICAnXFx1MDFGOCc6ICdOJyxcbiAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAnXFx1MDBEMSc6ICdOJyxcbiAgICAnXFx1MUU0NCc6ICdOJyxcbiAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAnXFx1MUU0Nic6ICdOJyxcbiAgICAnXFx1MDE0NSc6ICdOJyxcbiAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAnXFx1MUU0OCc6ICdOJyxcbiAgICAnXFx1MDIyMCc6ICdOJyxcbiAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAnXFx1QTc5MCc6ICdOJyxcbiAgICAnXFx1QTdBNCc6ICdOJyxcbiAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxuICAgICdcXHUyNEM0JzogJ08nLFxuICAgICdcXHVGRjJGJzogJ08nLFxuICAgICdcXHUwMEQyJzogJ08nLFxuICAgICdcXHUwMEQzJzogJ08nLFxuICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICdcXHUxRUQyJzogJ08nLFxuICAgICdcXHUxRUQwJzogJ08nLFxuICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICdcXHUxRUQ0JzogJ08nLFxuICAgICdcXHUwMEQ1JzogJ08nLFxuICAgICdcXHUxRTRDJzogJ08nLFxuICAgICdcXHUwMjJDJzogJ08nLFxuICAgICdcXHUxRTRFJzogJ08nLFxuICAgICdcXHUwMTRDJzogJ08nLFxuICAgICdcXHUxRTUwJzogJ08nLFxuICAgICdcXHUxRTUyJzogJ08nLFxuICAgICdcXHUwMTRFJzogJ08nLFxuICAgICdcXHUwMjJFJzogJ08nLFxuICAgICdcXHUwMjMwJzogJ08nLFxuICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICdcXHUwMjJBJzogJ08nLFxuICAgICdcXHUxRUNFJzogJ08nLFxuICAgICdcXHUwMTUwJzogJ08nLFxuICAgICdcXHUwMUQxJzogJ08nLFxuICAgICdcXHUwMjBDJzogJ08nLFxuICAgICdcXHUwMjBFJzogJ08nLFxuICAgICdcXHUwMUEwJzogJ08nLFxuICAgICdcXHUxRURDJzogJ08nLFxuICAgICdcXHUxRURBJzogJ08nLFxuICAgICdcXHUxRUUwJzogJ08nLFxuICAgICdcXHUxRURFJzogJ08nLFxuICAgICdcXHUxRUUyJzogJ08nLFxuICAgICdcXHUxRUNDJzogJ08nLFxuICAgICdcXHUxRUQ4JzogJ08nLFxuICAgICdcXHUwMUVBJzogJ08nLFxuICAgICdcXHUwMUVDJzogJ08nLFxuICAgICdcXHUwMEQ4JzogJ08nLFxuICAgICdcXHUwMUZFJzogJ08nLFxuICAgICdcXHUwMTg2JzogJ08nLFxuICAgICdcXHUwMTlGJzogJ08nLFxuICAgICdcXHVBNzRBJzogJ08nLFxuICAgICdcXHVBNzRDJzogJ08nLFxuICAgICdcXHUwMUEyJzogJ09JJyxcbiAgICAnXFx1QTc0RSc6ICdPTycsXG4gICAgJ1xcdTAyMjInOiAnT1UnLFxuICAgICdcXHUyNEM1JzogJ1AnLFxuICAgICdcXHVGRjMwJzogJ1AnLFxuICAgICdcXHUxRTU0JzogJ1AnLFxuICAgICdcXHUxRTU2JzogJ1AnLFxuICAgICdcXHUwMUE0JzogJ1AnLFxuICAgICdcXHUyQzYzJzogJ1AnLFxuICAgICdcXHVBNzUwJzogJ1AnLFxuICAgICdcXHVBNzUyJzogJ1AnLFxuICAgICdcXHVBNzU0JzogJ1AnLFxuICAgICdcXHUyNEM2JzogJ1EnLFxuICAgICdcXHVGRjMxJzogJ1EnLFxuICAgICdcXHVBNzU2JzogJ1EnLFxuICAgICdcXHVBNzU4JzogJ1EnLFxuICAgICdcXHUwMjRBJzogJ1EnLFxuICAgICdcXHUyNEM3JzogJ1InLFxuICAgICdcXHVGRjMyJzogJ1InLFxuICAgICdcXHUwMTU0JzogJ1InLFxuICAgICdcXHUxRTU4JzogJ1InLFxuICAgICdcXHUwMTU4JzogJ1InLFxuICAgICdcXHUwMjEwJzogJ1InLFxuICAgICdcXHUwMjEyJzogJ1InLFxuICAgICdcXHUxRTVBJzogJ1InLFxuICAgICdcXHUxRTVDJzogJ1InLFxuICAgICdcXHUwMTU2JzogJ1InLFxuICAgICdcXHUxRTVFJzogJ1InLFxuICAgICdcXHUwMjRDJzogJ1InLFxuICAgICdcXHUyQzY0JzogJ1InLFxuICAgICdcXHVBNzVBJzogJ1InLFxuICAgICdcXHVBN0E2JzogJ1InLFxuICAgICdcXHVBNzgyJzogJ1InLFxuICAgICdcXHUyNEM4JzogJ1MnLFxuICAgICdcXHVGRjMzJzogJ1MnLFxuICAgICdcXHUxRTlFJzogJ1MnLFxuICAgICdcXHUwMTVBJzogJ1MnLFxuICAgICdcXHUxRTY0JzogJ1MnLFxuICAgICdcXHUwMTVDJzogJ1MnLFxuICAgICdcXHUxRTYwJzogJ1MnLFxuICAgICdcXHUwMTYwJzogJ1MnLFxuICAgICdcXHUxRTY2JzogJ1MnLFxuICAgICdcXHUxRTYyJzogJ1MnLFxuICAgICdcXHUxRTY4JzogJ1MnLFxuICAgICdcXHUwMjE4JzogJ1MnLFxuICAgICdcXHUwMTVFJzogJ1MnLFxuICAgICdcXHUyQzdFJzogJ1MnLFxuICAgICdcXHVBN0E4JzogJ1MnLFxuICAgICdcXHVBNzg0JzogJ1MnLFxuICAgICdcXHUyNEM5JzogJ1QnLFxuICAgICdcXHVGRjM0JzogJ1QnLFxuICAgICdcXHUxRTZBJzogJ1QnLFxuICAgICdcXHUwMTY0JzogJ1QnLFxuICAgICdcXHUxRTZDJzogJ1QnLFxuICAgICdcXHUwMjFBJzogJ1QnLFxuICAgICdcXHUwMTYyJzogJ1QnLFxuICAgICdcXHUxRTcwJzogJ1QnLFxuICAgICdcXHUxRTZFJzogJ1QnLFxuICAgICdcXHUwMTY2JzogJ1QnLFxuICAgICdcXHUwMUFDJzogJ1QnLFxuICAgICdcXHUwMUFFJzogJ1QnLFxuICAgICdcXHUwMjNFJzogJ1QnLFxuICAgICdcXHVBNzg2JzogJ1QnLFxuICAgICdcXHVBNzI4JzogJ1RaJyxcbiAgICAnXFx1MjRDQSc6ICdVJyxcbiAgICAnXFx1RkYzNSc6ICdVJyxcbiAgICAnXFx1MDBEOSc6ICdVJyxcbiAgICAnXFx1MDBEQSc6ICdVJyxcbiAgICAnXFx1MDBEQic6ICdVJyxcbiAgICAnXFx1MDE2OCc6ICdVJyxcbiAgICAnXFx1MUU3OCc6ICdVJyxcbiAgICAnXFx1MDE2QSc6ICdVJyxcbiAgICAnXFx1MUU3QSc6ICdVJyxcbiAgICAnXFx1MDE2Qyc6ICdVJyxcbiAgICAnXFx1MDBEQyc6ICdVJyxcbiAgICAnXFx1MDFEQic6ICdVJyxcbiAgICAnXFx1MDFENyc6ICdVJyxcbiAgICAnXFx1MDFENSc6ICdVJyxcbiAgICAnXFx1MDFEOSc6ICdVJyxcbiAgICAnXFx1MUVFNic6ICdVJyxcbiAgICAnXFx1MDE2RSc6ICdVJyxcbiAgICAnXFx1MDE3MCc6ICdVJyxcbiAgICAnXFx1MDFEMyc6ICdVJyxcbiAgICAnXFx1MDIxNCc6ICdVJyxcbiAgICAnXFx1MDIxNic6ICdVJyxcbiAgICAnXFx1MDFBRic6ICdVJyxcbiAgICAnXFx1MUVFQSc6ICdVJyxcbiAgICAnXFx1MUVFOCc6ICdVJyxcbiAgICAnXFx1MUVFRSc6ICdVJyxcbiAgICAnXFx1MUVFQyc6ICdVJyxcbiAgICAnXFx1MUVGMCc6ICdVJyxcbiAgICAnXFx1MUVFNCc6ICdVJyxcbiAgICAnXFx1MUU3Mic6ICdVJyxcbiAgICAnXFx1MDE3Mic6ICdVJyxcbiAgICAnXFx1MUU3Nic6ICdVJyxcbiAgICAnXFx1MUU3NCc6ICdVJyxcbiAgICAnXFx1MDI0NCc6ICdVJyxcbiAgICAnXFx1MjRDQic6ICdWJyxcbiAgICAnXFx1RkYzNic6ICdWJyxcbiAgICAnXFx1MUU3Qyc6ICdWJyxcbiAgICAnXFx1MUU3RSc6ICdWJyxcbiAgICAnXFx1MDFCMic6ICdWJyxcbiAgICAnXFx1QTc1RSc6ICdWJyxcbiAgICAnXFx1MDI0NSc6ICdWJyxcbiAgICAnXFx1QTc2MCc6ICdWWScsXG4gICAgJ1xcdTI0Q0MnOiAnVycsXG4gICAgJ1xcdUZGMzcnOiAnVycsXG4gICAgJ1xcdTFFODAnOiAnVycsXG4gICAgJ1xcdTFFODInOiAnVycsXG4gICAgJ1xcdTAxNzQnOiAnVycsXG4gICAgJ1xcdTFFODYnOiAnVycsXG4gICAgJ1xcdTFFODQnOiAnVycsXG4gICAgJ1xcdTFFODgnOiAnVycsXG4gICAgJ1xcdTJDNzInOiAnVycsXG4gICAgJ1xcdTI0Q0QnOiAnWCcsXG4gICAgJ1xcdUZGMzgnOiAnWCcsXG4gICAgJ1xcdTFFOEEnOiAnWCcsXG4gICAgJ1xcdTFFOEMnOiAnWCcsXG4gICAgJ1xcdTI0Q0UnOiAnWScsXG4gICAgJ1xcdUZGMzknOiAnWScsXG4gICAgJ1xcdTFFRjInOiAnWScsXG4gICAgJ1xcdTAwREQnOiAnWScsXG4gICAgJ1xcdTAxNzYnOiAnWScsXG4gICAgJ1xcdTFFRjgnOiAnWScsXG4gICAgJ1xcdTAyMzInOiAnWScsXG4gICAgJ1xcdTFFOEUnOiAnWScsXG4gICAgJ1xcdTAxNzgnOiAnWScsXG4gICAgJ1xcdTFFRjYnOiAnWScsXG4gICAgJ1xcdTFFRjQnOiAnWScsXG4gICAgJ1xcdTAxQjMnOiAnWScsXG4gICAgJ1xcdTAyNEUnOiAnWScsXG4gICAgJ1xcdTFFRkUnOiAnWScsXG4gICAgJ1xcdTI0Q0YnOiAnWicsXG4gICAgJ1xcdUZGM0EnOiAnWicsXG4gICAgJ1xcdTAxNzknOiAnWicsXG4gICAgJ1xcdTFFOTAnOiAnWicsXG4gICAgJ1xcdTAxN0InOiAnWicsXG4gICAgJ1xcdTAxN0QnOiAnWicsXG4gICAgJ1xcdTFFOTInOiAnWicsXG4gICAgJ1xcdTFFOTQnOiAnWicsXG4gICAgJ1xcdTAxQjUnOiAnWicsXG4gICAgJ1xcdTAyMjQnOiAnWicsXG4gICAgJ1xcdTJDN0YnOiAnWicsXG4gICAgJ1xcdTJDNkInOiAnWicsXG4gICAgJ1xcdUE3NjInOiAnWicsXG4gICAgJ1xcdTI0RDAnOiAnYScsXG4gICAgJ1xcdUZGNDEnOiAnYScsXG4gICAgJ1xcdTFFOUEnOiAnYScsXG4gICAgJ1xcdTAwRTAnOiAnYScsXG4gICAgJ1xcdTAwRTEnOiAnYScsXG4gICAgJ1xcdTAwRTInOiAnYScsXG4gICAgJ1xcdTFFQTcnOiAnYScsXG4gICAgJ1xcdTFFQTUnOiAnYScsXG4gICAgJ1xcdTFFQUInOiAnYScsXG4gICAgJ1xcdTFFQTknOiAnYScsXG4gICAgJ1xcdTAwRTMnOiAnYScsXG4gICAgJ1xcdTAxMDEnOiAnYScsXG4gICAgJ1xcdTAxMDMnOiAnYScsXG4gICAgJ1xcdTFFQjEnOiAnYScsXG4gICAgJ1xcdTFFQUYnOiAnYScsXG4gICAgJ1xcdTFFQjUnOiAnYScsXG4gICAgJ1xcdTFFQjMnOiAnYScsXG4gICAgJ1xcdTAyMjcnOiAnYScsXG4gICAgJ1xcdTAxRTEnOiAnYScsXG4gICAgJ1xcdTAwRTQnOiAnYScsXG4gICAgJ1xcdTAxREYnOiAnYScsXG4gICAgJ1xcdTFFQTMnOiAnYScsXG4gICAgJ1xcdTAwRTUnOiAnYScsXG4gICAgJ1xcdTAxRkInOiAnYScsXG4gICAgJ1xcdTAxQ0UnOiAnYScsXG4gICAgJ1xcdTAyMDEnOiAnYScsXG4gICAgJ1xcdTAyMDMnOiAnYScsXG4gICAgJ1xcdTFFQTEnOiAnYScsXG4gICAgJ1xcdTFFQUQnOiAnYScsXG4gICAgJ1xcdTFFQjcnOiAnYScsXG4gICAgJ1xcdTFFMDEnOiAnYScsXG4gICAgJ1xcdTAxMDUnOiAnYScsXG4gICAgJ1xcdTJDNjUnOiAnYScsXG4gICAgJ1xcdTAyNTAnOiAnYScsXG4gICAgJ1xcdUE3MzMnOiAnYWEnLFxuICAgICdcXHUwMEU2JzogJ2FlJyxcbiAgICAnXFx1MDFGRCc6ICdhZScsXG4gICAgJ1xcdTAxRTMnOiAnYWUnLFxuICAgICdcXHVBNzM1JzogJ2FvJyxcbiAgICAnXFx1QTczNyc6ICdhdScsXG4gICAgJ1xcdUE3MzknOiAnYXYnLFxuICAgICdcXHVBNzNCJzogJ2F2JyxcbiAgICAnXFx1QTczRCc6ICdheScsXG4gICAgJ1xcdTI0RDEnOiAnYicsXG4gICAgJ1xcdUZGNDInOiAnYicsXG4gICAgJ1xcdTFFMDMnOiAnYicsXG4gICAgJ1xcdTFFMDUnOiAnYicsXG4gICAgJ1xcdTFFMDcnOiAnYicsXG4gICAgJ1xcdTAxODAnOiAnYicsXG4gICAgJ1xcdTAxODMnOiAnYicsXG4gICAgJ1xcdTAyNTMnOiAnYicsXG4gICAgJ1xcdTI0RDInOiAnYycsXG4gICAgJ1xcdUZGNDMnOiAnYycsXG4gICAgJ1xcdTAxMDcnOiAnYycsXG4gICAgJ1xcdTAxMDknOiAnYycsXG4gICAgJ1xcdTAxMEInOiAnYycsXG4gICAgJ1xcdTAxMEQnOiAnYycsXG4gICAgJ1xcdTAwRTcnOiAnYycsXG4gICAgJ1xcdTFFMDknOiAnYycsXG4gICAgJ1xcdTAxODgnOiAnYycsXG4gICAgJ1xcdTAyM0MnOiAnYycsXG4gICAgJ1xcdUE3M0YnOiAnYycsXG4gICAgJ1xcdTIxODQnOiAnYycsXG4gICAgJ1xcdTI0RDMnOiAnZCcsXG4gICAgJ1xcdUZGNDQnOiAnZCcsXG4gICAgJ1xcdTFFMEInOiAnZCcsXG4gICAgJ1xcdTAxMEYnOiAnZCcsXG4gICAgJ1xcdTFFMEQnOiAnZCcsXG4gICAgJ1xcdTFFMTEnOiAnZCcsXG4gICAgJ1xcdTFFMTMnOiAnZCcsXG4gICAgJ1xcdTFFMEYnOiAnZCcsXG4gICAgJ1xcdTAxMTEnOiAnZCcsXG4gICAgJ1xcdTAxOEMnOiAnZCcsXG4gICAgJ1xcdTAyNTYnOiAnZCcsXG4gICAgJ1xcdTAyNTcnOiAnZCcsXG4gICAgJ1xcdUE3N0EnOiAnZCcsXG4gICAgJ1xcdTAxRjMnOiAnZHonLFxuICAgICdcXHUwMUM2JzogJ2R6JyxcbiAgICAnXFx1MjRENCc6ICdlJyxcbiAgICAnXFx1RkY0NSc6ICdlJyxcbiAgICAnXFx1MDBFOCc6ICdlJyxcbiAgICAnXFx1MDBFOSc6ICdlJyxcbiAgICAnXFx1MDBFQSc6ICdlJyxcbiAgICAnXFx1MUVDMSc6ICdlJyxcbiAgICAnXFx1MUVCRic6ICdlJyxcbiAgICAnXFx1MUVDNSc6ICdlJyxcbiAgICAnXFx1MUVDMyc6ICdlJyxcbiAgICAnXFx1MUVCRCc6ICdlJyxcbiAgICAnXFx1MDExMyc6ICdlJyxcbiAgICAnXFx1MUUxNSc6ICdlJyxcbiAgICAnXFx1MUUxNyc6ICdlJyxcbiAgICAnXFx1MDExNSc6ICdlJyxcbiAgICAnXFx1MDExNyc6ICdlJyxcbiAgICAnXFx1MDBFQic6ICdlJyxcbiAgICAnXFx1MUVCQic6ICdlJyxcbiAgICAnXFx1MDExQic6ICdlJyxcbiAgICAnXFx1MDIwNSc6ICdlJyxcbiAgICAnXFx1MDIwNyc6ICdlJyxcbiAgICAnXFx1MUVCOSc6ICdlJyxcbiAgICAnXFx1MUVDNyc6ICdlJyxcbiAgICAnXFx1MDIyOSc6ICdlJyxcbiAgICAnXFx1MUUxRCc6ICdlJyxcbiAgICAnXFx1MDExOSc6ICdlJyxcbiAgICAnXFx1MUUxOSc6ICdlJyxcbiAgICAnXFx1MUUxQic6ICdlJyxcbiAgICAnXFx1MDI0Nyc6ICdlJyxcbiAgICAnXFx1MDI1Qic6ICdlJyxcbiAgICAnXFx1MDFERCc6ICdlJyxcbiAgICAnXFx1MjRENSc6ICdmJyxcbiAgICAnXFx1RkY0Nic6ICdmJyxcbiAgICAnXFx1MUUxRic6ICdmJyxcbiAgICAnXFx1MDE5Mic6ICdmJyxcbiAgICAnXFx1QTc3Qyc6ICdmJyxcbiAgICAnXFx1MjRENic6ICdnJyxcbiAgICAnXFx1RkY0Nyc6ICdnJyxcbiAgICAnXFx1MDFGNSc6ICdnJyxcbiAgICAnXFx1MDExRCc6ICdnJyxcbiAgICAnXFx1MUUyMSc6ICdnJyxcbiAgICAnXFx1MDExRic6ICdnJyxcbiAgICAnXFx1MDEyMSc6ICdnJyxcbiAgICAnXFx1MDFFNyc6ICdnJyxcbiAgICAnXFx1MDEyMyc6ICdnJyxcbiAgICAnXFx1MDFFNSc6ICdnJyxcbiAgICAnXFx1MDI2MCc6ICdnJyxcbiAgICAnXFx1QTdBMSc6ICdnJyxcbiAgICAnXFx1MUQ3OSc6ICdnJyxcbiAgICAnXFx1QTc3Ric6ICdnJyxcbiAgICAnXFx1MjRENyc6ICdoJyxcbiAgICAnXFx1RkY0OCc6ICdoJyxcbiAgICAnXFx1MDEyNSc6ICdoJyxcbiAgICAnXFx1MUUyMyc6ICdoJyxcbiAgICAnXFx1MUUyNyc6ICdoJyxcbiAgICAnXFx1MDIxRic6ICdoJyxcbiAgICAnXFx1MUUyNSc6ICdoJyxcbiAgICAnXFx1MUUyOSc6ICdoJyxcbiAgICAnXFx1MUUyQic6ICdoJyxcbiAgICAnXFx1MUU5Nic6ICdoJyxcbiAgICAnXFx1MDEyNyc6ICdoJyxcbiAgICAnXFx1MkM2OCc6ICdoJyxcbiAgICAnXFx1MkM3Nic6ICdoJyxcbiAgICAnXFx1MDI2NSc6ICdoJyxcbiAgICAnXFx1MDE5NSc6ICdodicsXG4gICAgJ1xcdTI0RDgnOiAnaScsXG4gICAgJ1xcdUZGNDknOiAnaScsXG4gICAgJ1xcdTAwRUMnOiAnaScsXG4gICAgJ1xcdTAwRUQnOiAnaScsXG4gICAgJ1xcdTAwRUUnOiAnaScsXG4gICAgJ1xcdTAxMjknOiAnaScsXG4gICAgJ1xcdTAxMkInOiAnaScsXG4gICAgJ1xcdTAxMkQnOiAnaScsXG4gICAgJ1xcdTAwRUYnOiAnaScsXG4gICAgJ1xcdTFFMkYnOiAnaScsXG4gICAgJ1xcdTFFQzknOiAnaScsXG4gICAgJ1xcdTAxRDAnOiAnaScsXG4gICAgJ1xcdTAyMDknOiAnaScsXG4gICAgJ1xcdTAyMEInOiAnaScsXG4gICAgJ1xcdTFFQ0InOiAnaScsXG4gICAgJ1xcdTAxMkYnOiAnaScsXG4gICAgJ1xcdTFFMkQnOiAnaScsXG4gICAgJ1xcdTAyNjgnOiAnaScsXG4gICAgJ1xcdTAxMzEnOiAnaScsXG4gICAgJ1xcdTI0RDknOiAnaicsXG4gICAgJ1xcdUZGNEEnOiAnaicsXG4gICAgJ1xcdTAxMzUnOiAnaicsXG4gICAgJ1xcdTAxRjAnOiAnaicsXG4gICAgJ1xcdTAyNDknOiAnaicsXG4gICAgJ1xcdTI0REEnOiAnaycsXG4gICAgJ1xcdUZGNEInOiAnaycsXG4gICAgJ1xcdTFFMzEnOiAnaycsXG4gICAgJ1xcdTAxRTknOiAnaycsXG4gICAgJ1xcdTFFMzMnOiAnaycsXG4gICAgJ1xcdTAxMzcnOiAnaycsXG4gICAgJ1xcdTFFMzUnOiAnaycsXG4gICAgJ1xcdTAxOTknOiAnaycsXG4gICAgJ1xcdTJDNkEnOiAnaycsXG4gICAgJ1xcdUE3NDEnOiAnaycsXG4gICAgJ1xcdUE3NDMnOiAnaycsXG4gICAgJ1xcdUE3NDUnOiAnaycsXG4gICAgJ1xcdUE3QTMnOiAnaycsXG4gICAgJ1xcdTI0REInOiAnbCcsXG4gICAgJ1xcdUZGNEMnOiAnbCcsXG4gICAgJ1xcdTAxNDAnOiAnbCcsXG4gICAgJ1xcdTAxM0EnOiAnbCcsXG4gICAgJ1xcdTAxM0UnOiAnbCcsXG4gICAgJ1xcdTFFMzcnOiAnbCcsXG4gICAgJ1xcdTFFMzknOiAnbCcsXG4gICAgJ1xcdTAxM0MnOiAnbCcsXG4gICAgJ1xcdTFFM0QnOiAnbCcsXG4gICAgJ1xcdTFFM0InOiAnbCcsXG4gICAgJ1xcdTAxN0YnOiAnbCcsXG4gICAgJ1xcdTAxNDInOiAnbCcsXG4gICAgJ1xcdTAxOUEnOiAnbCcsXG4gICAgJ1xcdTAyNkInOiAnbCcsXG4gICAgJ1xcdTJDNjEnOiAnbCcsXG4gICAgJ1xcdUE3NDknOiAnbCcsXG4gICAgJ1xcdUE3ODEnOiAnbCcsXG4gICAgJ1xcdUE3NDcnOiAnbCcsXG4gICAgJ1xcdTAxQzknOiAnbGonLFxuICAgICdcXHUyNERDJzogJ20nLFxuICAgICdcXHVGRjREJzogJ20nLFxuICAgICdcXHUxRTNGJzogJ20nLFxuICAgICdcXHUxRTQxJzogJ20nLFxuICAgICdcXHUxRTQzJzogJ20nLFxuICAgICdcXHUwMjcxJzogJ20nLFxuICAgICdcXHUwMjZGJzogJ20nLFxuICAgICdcXHUyNEREJzogJ24nLFxuICAgICdcXHVGRjRFJzogJ24nLFxuICAgICdcXHUwMUY5JzogJ24nLFxuICAgICdcXHUwMTQ0JzogJ24nLFxuICAgICdcXHUwMEYxJzogJ24nLFxuICAgICdcXHUxRTQ1JzogJ24nLFxuICAgICdcXHUwMTQ4JzogJ24nLFxuICAgICdcXHUxRTQ3JzogJ24nLFxuICAgICdcXHUwMTQ2JzogJ24nLFxuICAgICdcXHUxRTRCJzogJ24nLFxuICAgICdcXHUxRTQ5JzogJ24nLFxuICAgICdcXHUwMTlFJzogJ24nLFxuICAgICdcXHUwMjcyJzogJ24nLFxuICAgICdcXHUwMTQ5JzogJ24nLFxuICAgICdcXHVBNzkxJzogJ24nLFxuICAgICdcXHVBN0E1JzogJ24nLFxuICAgICdcXHUwMUNDJzogJ25qJyxcbiAgICAnXFx1MjRERSc6ICdvJyxcbiAgICAnXFx1RkY0Ric6ICdvJyxcbiAgICAnXFx1MDBGMic6ICdvJyxcbiAgICAnXFx1MDBGMyc6ICdvJyxcbiAgICAnXFx1MDBGNCc6ICdvJyxcbiAgICAnXFx1MUVEMyc6ICdvJyxcbiAgICAnXFx1MUVEMSc6ICdvJyxcbiAgICAnXFx1MUVENyc6ICdvJyxcbiAgICAnXFx1MUVENSc6ICdvJyxcbiAgICAnXFx1MDBGNSc6ICdvJyxcbiAgICAnXFx1MUU0RCc6ICdvJyxcbiAgICAnXFx1MDIyRCc6ICdvJyxcbiAgICAnXFx1MUU0Ric6ICdvJyxcbiAgICAnXFx1MDE0RCc6ICdvJyxcbiAgICAnXFx1MUU1MSc6ICdvJyxcbiAgICAnXFx1MUU1Myc6ICdvJyxcbiAgICAnXFx1MDE0Ric6ICdvJyxcbiAgICAnXFx1MDIyRic6ICdvJyxcbiAgICAnXFx1MDIzMSc6ICdvJyxcbiAgICAnXFx1MDBGNic6ICdvJyxcbiAgICAnXFx1MDIyQic6ICdvJyxcbiAgICAnXFx1MUVDRic6ICdvJyxcbiAgICAnXFx1MDE1MSc6ICdvJyxcbiAgICAnXFx1MDFEMic6ICdvJyxcbiAgICAnXFx1MDIwRCc6ICdvJyxcbiAgICAnXFx1MDIwRic6ICdvJyxcbiAgICAnXFx1MDFBMSc6ICdvJyxcbiAgICAnXFx1MUVERCc6ICdvJyxcbiAgICAnXFx1MUVEQic6ICdvJyxcbiAgICAnXFx1MUVFMSc6ICdvJyxcbiAgICAnXFx1MUVERic6ICdvJyxcbiAgICAnXFx1MUVFMyc6ICdvJyxcbiAgICAnXFx1MUVDRCc6ICdvJyxcbiAgICAnXFx1MUVEOSc6ICdvJyxcbiAgICAnXFx1MDFFQic6ICdvJyxcbiAgICAnXFx1MDFFRCc6ICdvJyxcbiAgICAnXFx1MDBGOCc6ICdvJyxcbiAgICAnXFx1MDFGRic6ICdvJyxcbiAgICAnXFx1MDI1NCc6ICdvJyxcbiAgICAnXFx1QTc0Qic6ICdvJyxcbiAgICAnXFx1QTc0RCc6ICdvJyxcbiAgICAnXFx1MDI3NSc6ICdvJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBTcGVjaWFsQ2hhcnModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IChhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gZGlhY3JpdGljc1thXSB8fCBhO1xuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgICAvLyBGaXJzdCBjaGFyYWN0ZXIgaXMgYW4gJ2EnLCBpdCdzIGdvb2QgcHJhY3RpY2UgdG8gdGFnIGlkIHRvIGJlZ2luIHdpdGggYSBsZXR0ZXJcbiAgICByZXR1cm4gJ2F4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGNvbnN0IHZhbCA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcblxudHlwZSBPcHRpb25Hcm91cHMgPSBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+O1xuXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcbiAgICBwcml2YXRlIF9ncm91cHM6IE9wdGlvbkdyb3VwcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9uZ1NlbGVjdDogTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIHByaXZhdGUgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgX2l0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgaXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maWx0ZXJlZEl0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgZmlsdGVyZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya2VkSW5kZXggPSAtMTtcblxuICAgIGdldCBtYXJrZWRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VkSW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbWFya2VkSXRlbSgpOiBOZ09wdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zW3RoaXMuX21hcmtlZEluZGV4XTtcbiAgICB9XG5cbiAgICBnZXQgbm9JdGVtc1RvU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbWF4SXRlbXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuX25nU2VsZWN0Lm1heFNlbGVjdGVkSXRlbXMgPD0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbGFzdFNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMubWFwSXRlbShpdGVtLCBpbmRleCkpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzID0gdGhpcy5fZ3JvdXBCeSh0aGlzLl9pdGVtcywgdGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2ZsYXR0ZW4odGhpcy5fZ3JvdXBzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwcy5zZXQodW5kZWZpbmVkLCB0aGlzLl9pdGVtcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2l0ZW1zXTtcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgfHwgdGhpcy5tYXhJdGVtc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSk7XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgaXNEZWZpbmVkKGl0ZW0uaW5kZXgpICYmIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93U2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSXRlbSh2YWx1ZTogYW55KTogTmdPcHRpb24ge1xuICAgICAgICBsZXQgZmluZEJ5OiAoaXRlbTogTmdPcHRpb24pID0+IGJvb2xlYW47XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aCkge1xuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiB0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gIWl0ZW0uY2hpbGRyZW4gJiYgdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0udmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkgPT09IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlIHx8XG4gICAgICAgICAgICAgICAgIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5sYWJlbCAmJiBpdGVtLmxhYmVsID09PSB0aGlzLnJlc29sdmVOZXN0ZWQodmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZChpdGVtID0+IGZpbmRCeShpdGVtKSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5tYXBJdGVtKGl0ZW0sIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZChrZWVwRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcihrZWVwRGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGtlZXBEaXNhYmxlZCAmJiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGlzYWJsZWQ7XG4gICAgICAgICAgICBpdGVtLm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCeUxhYmVsKHRlcm06IHN0cmluZykge1xuICAgICAgICB0ZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGl0ZW0ubGFiZWwpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwuc3Vic3RyKDAsIHRlcm0ubGVuZ3RoKSA9PT0gdGVybTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgICAgIHRlcm0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IHRlcm0gOiBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGVybSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiB8fCB0aGlzLl9kZWZhdWx0U2VhcmNoRm47XG4gICAgICAgIGNvbnN0IGhpZGVTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZDtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuX2dyb3Vwcy5rZXlzKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9ncm91cHMuZ2V0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVNlbGVjdGVkICYmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCB8fCBpdGVtLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKHRlcm0sIHNlYXJjaEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0XSA9IG1hdGNoZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9pdGVtcy5maW5kKHggPT4geCA9PT0gbGFzdC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaCguLi5tYXRjaGVkSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRGaWx0ZXJlZEl0ZW1zKCkge1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcih4ID0+ICF4LnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFya0l0ZW0oKSB7XG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgbWFya05leHRJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKCsxKTtcbiAgICB9XG5cbiAgICBtYXJrUHJldmlvdXNJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKC0xKTtcbiAgICB9XG5cbiAgICBtYXJrSXRlbShpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICBtYXJrU2VsZWN0ZWRPckRlZmF1bHQobWFya0RlZmF1bHQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0U2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgPyAtMSA6IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRJdGVtICYmIGluZGV4T2ZMYXN0U2VsZWN0ZWQgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBpbmRleE9mTGFzdFNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmV4Y2x1ZGVHcm91cHNGcm9tRGVmYXVsdFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQgJiYgIXguY2hpbGRyZW4pIDogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQpIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlTmVzdGVkKG9wdGlvbjogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogTmdPcHRpb24ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGlzRGVmaW5lZChpdGVtLiRuZ09wdGlvbkxhYmVsKSA/IGl0ZW0uJG5nT3B0aW9uTGFiZWwgOiB0aGlzLnJlc29sdmVOZXN0ZWQoaXRlbSwgdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25WYWx1ZSkgPyBpdGVtLiRuZ09wdGlvblZhbHVlIDogaXRlbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGxhYmVsOiBpc0RlZmluZWQobGFiZWwpID8gbGFiZWwudG9TdHJpbmcoKSA6ICcnLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICBodG1sSWQ6IG5ld0lkKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbWFwU2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlID8gdGhpcy5yZXNvbHZlTmVzdGVkKHNlbGVjdGVkLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIDogc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXNEZWZpbmVkKHZhbHVlKSA/IHRoaXMuZmluZEl0ZW0odmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnVuc2VsZWN0KHNlbGVjdGVkLCBtdWx0aXBsZSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSB8fCBzZWxlY3RlZCwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih4KSA9PT0gLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2hvd1NlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4aXN0cyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmluZCh4ID0+IHggPT09IHBhcmVudCk7XG4gICAgICAgICAgICBpZiAoIXBhcmVudEV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2ZpbHRlcmVkSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuaW5kZXggLSBiLmluZGV4KSldO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmV2ZXJ5KHggPT4geC5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0U2VhcmNoRm4oc2VhcmNoOiBzdHJpbmcsIG9wdDogTmdPcHRpb24pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMob3B0LmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbGFiZWwuaW5kZXhPZihzZWFyY2gpID4gLTFcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXROZXh0SXRlbUluZGV4KHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHN0ZXBzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA9PT0gdGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA/IDAgOiAodGhpcy5fbWFya2VkSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX21hcmtlZEluZGV4IDw9IDApID8gKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgOiAodGhpcy5fbWFya2VkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGVwVG9JdGVtKHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZXZlcnkoeCA9PiB4LmRpc2FibGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9nZXROZXh0SXRlbUluZGV4KHN0ZXBzKTtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcFRvSXRlbShzdGVwcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9ncm91cEJ5KGl0ZW1zOiBOZ09wdGlvbltdLCBwcm9wOiBzdHJpbmcgfCBGdW5jdGlvbik6IE9wdGlvbkdyb3VwcyB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtcyBhcmUgYWxyZWFkeSBncm91cGVkIGJ5IGdpdmVuIGtleS5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNbMF0udmFsdWVbPHN0cmluZz5wcm9wXSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gKGl0ZW0udmFsdWVbPHN0cmluZz5wcm9wXSB8fCBbXSkubWFwKCh4LCBpbmRleCkgPT4gdGhpcy5tYXBJdGVtKHgsIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChpdGVtLCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGbktleSA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgIGNvbnN0IGtleUZuID0gKGl0ZW06IE5nT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQga2V5ID0gaXNGbktleSA/ICg8RnVuY3Rpb24+cHJvcCkoaXRlbS52YWx1ZSkgOiBpdGVtLnZhbHVlWzxzdHJpbmc+cHJvcF07XG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGtleSkgPyBrZXkgOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR3JvdXAgaXRlbXMgYnkga2V5LlxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlGbihpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChrZXksIFtpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mbGF0dGVuKGdyb3VwczogT3B0aW9uR3JvdXBzKSB7XG4gICAgICAgIGNvbnN0IGlzR3JvdXBCeUZuID0gaXNGdW5jdGlvbih0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3Qgd2l0aG91dEdyb3VwID0gZ3JvdXBzLmdldCh1bmRlZmluZWQpIHx8IFtdO1xuICAgICAgICBpdGVtcy5wdXNoKC4uLndpdGhvdXRHcm91cCk7XG4gICAgICAgIGxldCBpID0gd2l0aG91dEdyb3VwLmxlbmd0aDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbShncm91cHMua2V5cygpKSkge1xuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNPYmplY3RLZXkgPSBpc09iamVjdChrZXkpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBOZ09wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXNPYmplY3RLZXkgPyAnJyA6IDxzdHJpbmc+a2V5LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpKyssXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXAsXG4gICAgICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gaXNHcm91cEJ5Rm4gPyB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwgOiA8c3RyaW5nPnRoaXMuX25nU2VsZWN0Lmdyb3VwQnk7XG4gICAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fbmdTZWxlY3QuZ3JvdXBWYWx1ZSB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxOZ09wdGlvbj5rZXkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBbZ3JvdXBLZXldOiBrZXkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHMuZ2V0KGtleSkubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHgucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHguY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgeC5pbmRleCA9IGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBwYXJlbnQudmFsdWUgPSBncm91cFZhbHVlKGtleSwgY2hpbGRyZW4ubWFwKHggPT4geC52YWx1ZSkpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgaXRlbXMucHVzaCguLi5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgTmdPcHRpb24ge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XG4gICAgaW5kZXg/OiBudW1iZXI7XG4gICAgaHRtbElkPzogc3RyaW5nO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgbWFya2VkPzogYm9vbGVhbjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB2YWx1ZT86IHN0cmluZyB8IE9iamVjdDtcbiAgICBwYXJlbnQ/OiBOZ09wdGlvbjtcbiAgICBjaGlsZHJlbj86IE5nT3B0aW9uW107XG59XG5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIFRhYiA9IDksXG4gICAgRW50ZXIgPSAxMyxcbiAgICBFc2MgPSAyNyxcbiAgICBTcGFjZSA9IDMyLFxuICAgIEFycm93VXAgPSAzOCxcbiAgICBBcnJvd0Rvd24gPSA0MCxcbiAgICBCYWNrc3BhY2UgPSA4XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGhhbmRsZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtc0RpbWVuc2lvbnMge1xuICAgIGl0ZW1zTGVuZ3RoOiBudW1iZXI7XG4gICAgdmlld1dpZHRoOiBudW1iZXI7XG4gICAgdmlld0hlaWdodDogbnVtYmVyO1xuICAgIGNoaWxkV2lkdGg6IG51bWJlcjtcbiAgICBjaGlsZEhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1zUGVyQ29sOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbFNlcnZpY2Uge1xuXG4gICAgY2FsY3VsYXRlSXRlbXMoZDogSXRlbXNEaW1lbnNpb25zLCBkcm9wZG93bkVsOiBIVE1MRWxlbWVudCwgYnVmZmVyQW1vdW50OiBudW1iZXIpOiBJdGVtc1JhbmdlUmVzdWx0IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5jaGlsZEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XG4gICAgICAgIGlmIChkcm9wZG93bkVsLnNjcm9sbFRvcCA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBkcm9wZG93bkVsLnNjcm9sbFRvcCk7XG4gICAgICAgIGNvbnN0IGluZGV4QnlTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJDb2wgKyAxKSk7XG5cbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sIC0gMSk7XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApKTtcblxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuY2hpbGRIZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihzdGFydCwgYnVmZmVyQW1vdW50KSk7XG4gICAgICAgIHRvcFBhZGRpbmcgPSAhaXNOYU4odG9wUGFkZGluZykgPyB0b3BQYWRkaW5nIDogMDtcbiAgICAgICAgc3RhcnQgPSAhaXNOYU4oc3RhcnQpID8gc3RhcnQgOiAtMTtcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcbiAgICAgICAgc3RhcnQgLT0gYnVmZmVyQW1vdW50O1xuICAgICAgICBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcbiAgICAgICAgZW5kICs9IGJ1ZmZlckFtb3VudDtcbiAgICAgICAgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgZW5kKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wUGFkZGluZzogdG9wUGFkZGluZyxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbXNMZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlciwgcGFuZWxFbDogSFRNTEVsZW1lbnQsIGNvbnRlbnRFbDogSFRNTEVsZW1lbnQpOiBJdGVtc0RpbWVuc2lvbnMge1xuICAgICAgICBjb25zdCBwYW5lbFJlY3QgPSBwYW5lbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBpdGVtUmVjdCA9IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0gPyBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXRlbXNQZXJDb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsUmVjdC5oZWlnaHQgLyBpdGVtUmVjdC5oZWlnaHQpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXNMZW5ndGg6IGl0ZW1zTGVuZ3RoLFxuICAgICAgICAgICAgdmlld1dpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgY2hpbGRXaWR0aDogaXRlbVJlY3Qud2lkdGgsXG4gICAgICAgICAgICBjaGlsZEhlaWdodDogaXRlbVJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgaXRlbXNQZXJDb2w6IGl0ZW1zUGVyQ29sLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE5nWm9uZSxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uSW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBEcm9wZG93blBvc2l0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVE9QX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtdG9wJztcbmNvbnN0IEJPVFRPTV9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LWJvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi1wYW5lbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNzY3JvbGwgY2xhc3M9XCJuZy1kcm9wZG93bi1wYW5lbC1pdGVtcyBzY3JvbGwtaG9zdFwiPlxuICAgICAgICAgICAgPGRpdiAjcGFkZGluZyBbY2xhc3MudG90YWwtcGFkZGluZ109XCJ2aXJ0dWFsU2Nyb2xsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtjbGFzcy5zY3JvbGxhYmxlLWNvbnRlbnRdPVwidmlydHVhbFNjcm9sbCAmJiBpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5nLWRyb3Bkb3duLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHNlYXJjaFRlcm06IGZpbHRlclZhbHVlIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBOZ09wdGlvbltdID0gW107XG4gICAgQElucHV0KCkgbWFya2VkSXRlbTogTmdPcHRpb247XG4gICAgQElucHV0KCkgcG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICAgIEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNjcm9sbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncGFkZGluZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwYWRkaW5nRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kcm9wZG93bjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2VsZWN0OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1N0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNFbmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbjtcbiAgICBwcml2YXRlIF9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7IH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF92aXJ0dWFsU2Nyb2xsU2VydmljZTogVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3dpbmRvdzogV2luZG93U2VydmljZSxcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24gPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50UG9zaXRpb24oKTogRHJvcGRvd25Qb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb247XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBoYW5kbGVNb3VzZWRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSB0aGlzLl9kcm9wZG93bi5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLl9oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgeyBjYXB0dXJlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoJGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soJGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUl0ZW1zQ2hhbmdlKGNoYW5nZXMuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9kcm9wZG93bi5wYXJlbnROb2RlLCB0aGlzLl9kcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuX3doZW5Db250ZW50UmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cm95JC5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRG9jdW1lbnRSZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2Nyb2xsSW50byhpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnModGhpcy52aXJ0dWFsU2Nyb2xsID8gMCA6IGluZGV4KTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gTWF0aC5mbG9vcihkLnZpZXdIZWlnaHQgLyBkLmNoaWxkSGVpZ2h0KSAtIDE7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IChpbmRleCAqIGQuY2hpbGRIZWlnaHQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBBcnJheS5mcm9tKGNvbnRlbnRFbC5jaGlsZHJlbikuc2xpY2UoMCwgaW5kZXgpLnJlZHVjZSgoYywgbikgPT4gYyArIG4uY2xpZW50SGVpZ2h0LCAwKTtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IGNoaWxkcmVuSGVpZ2h0IC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxJbnRvVGFnKCkge1xuICAgICAgICBjb25zdCBlbDogRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBkLmNoaWxkSGVpZ2h0ICogKGQuaXRlbXNMZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl93aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24odGhpcy5fZHJvcGRvd24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBCT1RUT01fQ1NTX0NMQVNTKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9kcm9wZG93bi5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9ICRldmVudC5wYXRoIHx8ICgkZXZlbnQuY29tcG9zZWRQYXRoICYmICRldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICYmICRldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiBwYXRoICYmIHBhdGhbMF0gJiYgdGhpcy5fc2VsZWN0LmNvbnRhaW5zKHBhdGhbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm91dHNpZGVDbGljay5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVTY3JvbGxUb0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVJdGVtc0NoYW5nZShpdGVtczogeyBwcmV2aW91c1ZhbHVlOiBOZ09wdGlvbltdLCBjdXJyZW50VmFsdWU6IE5nT3B0aW9uW10gfSkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzRW5kID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5wcmV2aW91c1ZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChpdGVtcy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBOZ1pvbmUuYXNzZXJ0Tm90SW5Bbmd1bGFyWm9uZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZUl0ZW1zKGQsIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1ZmZlckFtb3VudCB8fCAwKTtcblxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLmhlaWdodCA9IGAke3Jlcy5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyByZXMudG9wUGFkZGluZyArICdweCknO1xuXG4gICAgICAgICAgICBpZiAocmVzLnN0YXJ0ICE9PSB0aGlzLl9wcmV2aW91c1N0YXJ0IHx8IHJlcy5lbmQgIT09IHRoaXMuX3ByZXZpb3VzRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UocmVzLnN0YXJ0LCByZXMuZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoeyBzdGFydDogcmVzLnN0YXJ0LCBlbmQ6IHJlcy5lbmQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGFydCA9IHJlcy5zdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHJlcy5lbmQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9vcChyZXNvbHZlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydHVwTG9vcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0dXBMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbG9vcChyZXNvbHZlKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maXJlU2Nyb2xsVG9FbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0VuZEZpcmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Nyb2xsOiBIVE1MRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nOiBIVE1MRWxlbWVudCA9IHRoaXMudmlydHVhbFNjcm9sbCA/XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOlxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmIChzY3JvbGwuc2Nyb2xsVG9wICsgdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0ID49IHBhZGRpbmcuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvRW5kLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGltZW5zaW9ucyhpbmRleCA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZURpbWVuc2lvbnMoXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZURvY3VtZW50UmVzaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCB8fCAhdGhpcy5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvKHRoaXMubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdFJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPSBkcm9wZG93bkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGhlaWdodCArIGRyb3Bkb3duSGVpZ2h0ID4gc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwcGVuZFRvIHNlbGVjdG9yICR7dGhpcy5hcHBlbmRUb30gZGlkIG5vdCBmb3VuZCBhbnkgcGFyZW50IGVsZW1lbnRgKVxuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcm9wZG93bik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCAtIGJvdW5kaW5nUmVjdC50b3A7XG4gICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBzZWxlY3RSZWN0LmxlZnQgLSBib3VuZGluZ1JlY3QubGVmdDtcbiAgICAgICAgY29uc3QgdG9wRGVsdGEgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICdib3R0b20nID8gc2VsZWN0UmVjdC5oZWlnaHQgOiAtdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS50b3AgPSBvZmZzZXRUb3AgKyB0b3BEZWx0YSArICdweCc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubGVmdCA9IG9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS53aWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5taW5XaWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3doZW5Db250ZW50UmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWR5ID0gKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5nT3B0aW9uID0gdGhpcy5fZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLm5nLW9wdGlvbicpO1xuICAgICAgICAgICAgaWYgKG5nT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZHkocmVzb2x2ZSksIDUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVhZHkocmVzb2x2ZSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1vcHRpb24nLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0aGlzLl9pc0Rpc2FibGVkKHZhbHVlKSB9XG5cbiAgICByZWFkb25seSBzdGF0ZUNoYW5nZSQgPSBuZXcgU3ViamVjdDx7IHZhbHVlOiBhbnksIGRpc2FibGVkOiBib29sZWFuIH0+KCk7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UkLm5leHQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0Q29uZmlnIHtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIG5vdEZvdW5kVGV4dCA9ICdObyBpdGVtcyBmb3VuZCc7XG4gICAgdHlwZVRvU2VhcmNoVGV4dCA9ICdUeXBlIHRvIHNlYXJjaCc7XG4gICAgYWRkVGFnVGV4dCA9ICdBZGQgaXRlbSc7XG4gICAgbG9hZGluZ1RleHQgPSAnTG9hZGluZy4uLic7XG4gICAgY2xlYXJBbGxUZXh0ID0gJ0NsZWFyIGFsbCc7XG4gICAgZGlzYWJsZVZpcnR1YWxTY3JvbGwgPSB0cnVlO1xuICAgIG9wZW5PbkVudGVyID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkNoYW5nZXMsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBmb3J3YXJkUmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbmplY3QsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEluamVjdGlvblRva2VuLFxuICAgIEF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3RhcnRXaXRoLCB0YXAsIGRlYm91bmNlVGltZSwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc1Byb21pc2UsIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5pbXBvcnQgeyBJdGVtc0xpc3QgfSBmcm9tICcuL2l0ZW1zLWxpc3QnO1xuaW1wb3J0IHsgTmdPcHRpb24sIEtleUNvZGUgfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHsgTmdTZWxlY3RDb25maWcgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZID0gbmV3IEluamVjdGlvblRva2VuPFNlbGVjdGlvbk1vZGVsRmFjdG9yeT4oJ25nLXNlbGVjdC1zZWxlY3Rpb24tbW9kZWwnKTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duUG9zaXRpb24gPSAnYm90dG9tJyB8ICd0b3AnIHwgJ2F1dG8nO1xuZXhwb3J0IHR5cGUgQXV0b0NvcnJlY3QgPSAnb2ZmJyB8ICdvbic7XG5leHBvcnQgdHlwZSBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnIHwgJ29uJztcbmV4cG9ydCB0eXBlIEFkZFRhZ0ZuID0gKCh0ZXJtOiBzdHJpbmcpID0+IGFueSB8IFByb21pc2U8YW55Pik7XG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgR3JvdXBWYWx1ZUZuID0gKGtleTogc3RyaW5nIHwgb2JqZWN0LCBjaGlsZHJlbjogYW55W10pID0+IHN0cmluZyB8IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXG4gICAgICAgICdjbGFzcyc6ICduZy1zZWxlY3QnLFxuICAgICAgICAnW2NsYXNzLm5nLXNlbGVjdC1zaW5nbGVdJzogJyFtdWx0aXBsZScsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXJrRmlyc3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm90Rm91bmRUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFkZFRhZ1RleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsZWFyQWxsVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgaGlkZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2VsZWN0T25UYWIgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBvcGVuT25FbnRlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBtYXhTZWxlY3RlZEl0ZW1zOiBudW1iZXI7XG4gICAgQElucHV0KCkgZ3JvdXBCeTogc3RyaW5nIHwgRnVuY3Rpb247XG4gICAgQElucHV0KCkgZ3JvdXBWYWx1ZTogR3JvdXBWYWx1ZUZuO1xuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudCA9IDQ7XG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXAgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXBBc01vZGVsID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hGbiA9IG51bGw7XG4gICAgQElucHV0KCkgdHJhY2tCeUZuID0gbnVsbDtcbiAgICBASW5wdXQoKSBleGNsdWRlR3JvdXBzRnJvbURlZmF1bHRTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGxhYmVsRm9ySWQgPSBudWxsO1xuICAgIEBJbnB1dCgpIGF1dG9Db3JyZWN0OiBBdXRvQ29ycmVjdCA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIGF1dG9DYXBpdGFsaXplOiBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXR5cGVhaGVhZCcpIHR5cGVhaGVhZDogU3ViamVjdDxzdHJpbmc+O1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW11bHRpcGxlJykgbXVsdGlwbGUgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10YWdnYWJsZScpIGFkZFRhZzogYm9vbGVhbiB8IEFkZFRhZ0ZuID0gZmFsc2U7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtc2VhcmNoYWJsZScpIHNlYXJjaGFibGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWNsZWFyYWJsZScpIGNsZWFyYWJsZSA9IHRydWU7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtb3BlbmVkJykgaXNPcGVuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBpdGVtcygpIHsgcmV0dXJuIHRoaXMuX2l0ZW1zIH07XG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtc0FyZVVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb21wYXJlV2l0aCgpIHsgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoOyB9XG4gICAgc2V0IGNvbXBhcmVXaXRoKGZuOiBDb21wYXJlV2l0aEZuKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdgY29tcGFyZVdpdGhgIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNsZWFyU2VhcmNoT25BZGQoKSB7IHJldHVybiBpc0RlZmluZWQodGhpcy5fY2xlYXJTZWFyY2hPbkFkZCkgPyB0aGlzLl9jbGVhclNlYXJjaE9uQWRkIDogdGhpcy5jbG9zZU9uU2VsZWN0OyB9O1xuICAgIHNldCBjbGVhclNlYXJjaE9uQWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoT25BZGQgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gb3V0cHV0IGV2ZW50c1xuICAgIEBPdXRwdXQoJ2JsdXInKSBibHVyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnZm9jdXMnKSBmb2N1c0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29wZW4nKSBvcGVuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnY2xvc2UnKSBjbG9zZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ3NlYXJjaCcpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7dGVybTogc3RyaW5nLCBpdGVtczogYW55W119PigpO1xuICAgIEBPdXRwdXQoJ2NsZWFyJykgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdhZGQnKSBhZGRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdyZW1vdmUnKSByZW1vdmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdzY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgICBAT3V0cHV0KCdzY3JvbGxUb0VuZCcpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gY3VzdG9tIHRlbXBsYXRlc1xuICAgIEBDb250ZW50Q2hpbGQoTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBtdWx0aUxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBub3RGb3VuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0eXBlVG9TZWFyY2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nVGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0YWdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCkpIGRyb3Bkb3duUGFuZWw6IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkcmVuKE5nT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG5nT3B0aW9uczogUXVlcnlMaXN0PE5nT3B0aW9uQ29tcG9uZW50PjtcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWZpbHRlcmVkJykgZ2V0IGZpbHRlcmVkKCkgeyByZXR1cm4gISF0aGlzLmZpbHRlclZhbHVlICYmIHRoaXMuc2VhcmNoYWJsZSB9O1xuXG4gICAgaXRlbXNMaXN0OiBJdGVtc0xpc3Q7XG4gICAgdmlld1BvcnRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIGRyb3Bkb3duSWQgPSBuZXdJZCgpO1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9pdGVtcyA9IFtdO1xuICAgIHByaXZhdGUgX2l0ZW1zQXJlVXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9kZWZhdWx0TGFiZWwgPSAnbGFiZWwnO1xuICAgIHByaXZhdGUgX3ByaW1pdGl2ZTtcbiAgICBwcml2YXRlIF9tYW51YWxPcGVuOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3ByZXNzZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuO1xuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoT25BZGQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2V5UHJlc3MkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICAgIGNsZWFySXRlbSA9IChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBpdGVtKTtcbiAgICAgICAgdGhpcy51bnNlbGVjdChvcHRpb24pO1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEF0dHJpYnV0ZSgnY2xhc3MnKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nLFxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHB1YmxpYyB0YWJJbmRleDogc3RyaW5nLFxuICAgICAgICBAQXR0cmlidXRlKCdhdXRvZm9jdXMnKSBwcml2YXRlIGF1dG9Gb2N1czogYW55LFxuICAgICAgICBjb25maWc6IE5nU2VsZWN0Q29uZmlnLFxuICAgICAgICBASW5qZWN0KFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZKSBuZXdTZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWxGYWN0b3J5LFxuICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9jb25zb2xlOiBDb25zb2xlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLl9tZXJnZUdsb2JhbENvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdCA9IG5ldyBJdGVtc0xpc3QodGhpcywgbmV3U2VsZWN0aW9uTW9kZWwoKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zTGlzdC5zZWxlY3RlZEl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFBhbmVsUG9zaXRpb24oKTogRHJvcGRvd25Qb3NpdGlvbiB7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duUGFuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duUGFuZWwuY3VycmVudFBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUtleVByZXNzZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbnVhbE9wZW4gPSBpc0RlZmluZWQoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pdGVtc0FyZVVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zRnJvbU5nT3B0aW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmaW5lZCh0aGlzLmF1dG9Gb2N1cykpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlS2V5RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKEtleUNvZGVbJGV2ZW50LndoaWNoXSkge1xuICAgICAgICAgICAgc3dpdGNoICgkZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dEb3duOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkFycm93VXA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFycm93VXAoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVTcGFjZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVudGVyKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5UYWI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRhYigkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1jbGVhci13cmFwcGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJDbGljaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWFycm93LXdyYXBwZXInKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctdmFsdWUtaWNvbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJyb3dDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsZWFyQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJNb2RlbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsZWFyYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlV3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc09wZW4gfHwgdGhpcy5pdGVtc0xpc3QubWF4SXRlbXNTZWxlY3RlZCB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmFkZFRhZyAmJiB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XG4gICAgICAgIHRoaXMub3BlbkV2ZW50LmVtaXQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCgpO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0b2dnbGVJdGVtKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbSB8fCBpdGVtLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25BZGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhclNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQuZW1pdChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QgfHwgdGhpcy5pdGVtc0xpc3Qubm9JdGVtc1RvU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zTGlzdC51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQuZW1pdChpdGVtKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUYWcoKSB7XG4gICAgICAgIGxldCB0YWc7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMuYWRkVGFnKSkge1xuICAgICAgICAgICAgdGFnID0gKDxBZGRUYWdGbj50aGlzLmFkZFRhZykodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWcgPSB0aGlzLl9wcmltaXRpdmUgPyB0aGlzLmZpbHRlclZhbHVlIDogeyBbdGhpcy5iaW5kTGFiZWxdOiB0aGlzLmZpbHRlclZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVUYWcgPSAoaXRlbSkgPT4gdGhpcy5faXNUeXBlYWhlYWQgfHwgIXRoaXMuaXNPcGVuID8gdGhpcy5pdGVtc0xpc3QubWFwSXRlbShpdGVtLCBudWxsKSA6IHRoaXMuaXRlbXNMaXN0LmFkZEl0ZW0oaXRlbSk7XG4gICAgICAgIGlmIChpc1Byb21pc2UodGFnKSkge1xuICAgICAgICAgICAgdGFnLnRoZW4oaXRlbSA9PiB0aGlzLnNlbGVjdChoYW5kbGVUYWcoaXRlbSkpKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoaGFuZGxlVGFnKHRhZykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcmFibGUgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5maWx0ZXJWYWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgdHJhY2tCeU9wdGlvbiA9IChfOiBudW1iZXIsIGl0ZW06IE5nT3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrQnlGbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeUZuKGl0ZW0udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGdldCBzaG93QWRkVGFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLmZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJlxuICAgICAgICAgICAgKCF0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pICYmXG4gICAgICAgICAgICAgICAgKCF0aGlzLmhpZGVTZWxlY3RlZCAmJiB0aGlzLmlzT3BlbiB8fCAhdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pKSkgJiZcbiAgICAgICAgICAgICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgc2hvd05vSXRlbXNGb3VuZCgpIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgcmV0dXJuICgoZW1wdHkgJiYgIXRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAoZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgdGhpcy5maWx0ZXJWYWx1ZSAmJiAhdGhpcy5sb2FkaW5nKSkgJiZcbiAgICAgICAgICAgICF0aGlzLnNob3dBZGRUYWc7XG4gICAgfVxuXG4gICAgc2hvd1R5cGVUb1NlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIGVtcHR5ICYmIHRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmZpbHRlclZhbHVlICYmICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gdGVybTtcblxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm5leHQodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrU2VsZWN0ZWRPckRlZmF1bHQodGhpcy5tYXJrRmlyc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KHsgdGVybSwgaXRlbXM6IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubWFwKHggPT4geC52YWx1ZSkgfSk7XG5cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEZvY3VzKCRldmVudCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmctc2VsZWN0LWZvY3VzZWQnKTtcbiAgICAgICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbklucHV0Qmx1cigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XG4gICAgICAgIHRoaXMuYmx1ckV2ZW50LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25JdGVtSG92ZXIoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgICAgICBpZiAoISg8YW55PnRoaXMuX2NkKS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC51cGRhdGVEcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gICAgICAgIHRoaXMuYmluZExhYmVsID0gdGhpcy5iaW5kTGFiZWwgfHwgdGhpcy5fZGVmYXVsdExhYmVsO1xuICAgICAgICB0aGlzLl9wcmltaXRpdmUgPSBpc0RlZmluZWQoZmlyc3RJdGVtKSA/ICFpc09iamVjdChmaXJzdEl0ZW0pIDogdGhpcy5fcHJpbWl0aXZlIHx8IHRoaXMuYmluZExhYmVsID09PSB0aGlzLl9kZWZhdWx0TGFiZWw7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnNldEl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBpc0RlZmluZWQodGhpcy5maWx0ZXJWYWx1ZSkgJiYgIXRoaXMuX2lzVHlwZWFoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkIHx8IHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrU2VsZWN0ZWRPckRlZmF1bHQodGhpcy5tYXJrRmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXNGcm9tTmdPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBoYW5kbGVOZ09wdGlvbnMgPSAob3B0aW9uczogUXVlcnlMaXN0PE5nT3B0aW9uQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG9wdGlvbnMubWFwKG9wdGlvbiA9PiAoe1xuICAgICAgICAgICAgICAgICRuZ09wdGlvblZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgJG5nT3B0aW9uTGFiZWw6IG9wdGlvbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWRcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXBTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVPcHRpb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkT3JEZXN0cm95ZWQgPSBtZXJnZSh0aGlzLm5nT3B0aW9ucy5jaGFuZ2VzLCB0aGlzLl9kZXN0cm95JCk7XG4gICAgICAgICAgICBtZXJnZSguLi50aGlzLm5nT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zdGF0ZUNoYW5nZSQpKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbChjaGFuZ2VkT3JEZXN0cm95ZWQpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRJdGVtKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubmdPcHRpb25zLmNoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLm5nT3B0aW9ucyksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZExhYmVsID0gdGhpcy5fZGVmYXVsdExhYmVsO1xuICAgICAgICAgICAgICAgIGhhbmRsZU5nT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVPcHRpb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzVmFsaWRXcml0ZVZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpIHx8ICh0aGlzLm11bHRpcGxlICYmIHZhbHVlID09PSAnJykgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0ZUJpbmRpbmcgPSAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh0aGlzLmNvbXBhcmVXaXRoKSAmJiBpc09iamVjdChpdGVtKSAmJiB0aGlzLmJpbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnNvbGUud2FybihgQmluZGluZyBvYmplY3QoJHtKU09OLnN0cmluZ2lmeShpdGVtKX0pIHdpdGggYmluZFZhbHVlIGlzIG5vdCBhbGxvd2VkLmApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKCdNdWx0aXBsZSBzZWxlY3QgbmdNb2RlbCBzaG91bGQgYmUgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gdmFsaWRhdGVCaW5kaW5nKGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUJpbmRpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlV3JpdGVWYWx1ZShuZ01vZGVsOiBhbnkgfCBhbnlbXSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzVmFsaWRXcml0ZVZhbHVlKG5nTW9kZWwpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9ICh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbSh2YWwpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsT2JqZWN0ID0gaXNPYmplY3QodmFsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ByaW1pdGl2ZSA9ICFpc1ZhbE9iamVjdCAmJiAhdGhpcy5iaW5kVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKChpc1ZhbE9iamVjdCB8fCBpc1ByaW1pdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0odmFsLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYmluZExhYmVsXTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmJpbmRWYWx1ZV06IHZhbFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QodGhpcy5pdGVtc0xpc3QubWFwSXRlbShpdGVtLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAoPGFueVtdPm5nTW9kZWwpLmZvckVhY2goaXRlbSA9PiBzZWxlY3QoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0KG5nTW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlS2V5UHJlc3NlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fa2V5UHJlc3MkXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpLFxuICAgICAgICAgICAgICAgIHRhcChsZXR0ZXIgPT4gdGhpcy5fcHJlc3NlZEtleXMucHVzaChsZXR0ZXIpKSxcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fcHJlc3NlZEtleXMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgbWFwKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmpvaW4oJycpKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRCeUxhYmVsKHRlcm0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRLZXlzID0gW107XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVOZ01vZGVsKCkge1xuICAgICAgICBjb25zdCBtb2RlbCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gdGhpcy5ncm91cFZhbHVlID8gdGhpcy5iaW5kVmFsdWUgOiA8c3RyaW5nPnRoaXMuZ3JvdXBCeTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlW2dyb3VwS2V5IHx8IDxzdHJpbmc+dGhpcy5ncm91cEJ5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaXRlbXNMaXN0LnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKGlzRGVmaW5lZChtb2RlbFswXSkgPyBtb2RlbFswXSA6IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbEludG8odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9UYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvVGFnKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlVGFiKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gPT09IGZhbHNlICYmICFpc0RlZmluZWQodGhpcy5hZGRUYWcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25UYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVFbnRlcigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Blbk9uRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlU3BhY2UoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUFycm93RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX25leHRJdGVtSXNUYWcoKzEpKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC51bm1hcmtJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb1RhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya05leHRJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVBcnJvd1VwKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbmV4dEl0ZW1Jc1RhZygtMSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvVGFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrUHJldmlvdXNJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xuICAgICAgICB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX25leHRJdGVtSXNUYWcobmV4dFN0ZXA6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLml0ZW1zTGlzdC5tYXJrZWRJbmRleCArIG5leHRTdGVwO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRUYWcgJiYgdGhpcy5maWx0ZXJWYWx1ZVxuICAgICAgICAgICAgJiYgdGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbVxuICAgICAgICAgICAgJiYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID09PSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVCYWNrc3BhY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlIHx8ICF0aGlzLmNsZWFyYWJsZSB8fCAhdGhpcy5jbGVhck9uQmFja3NwYWNlIHx8ICF0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5sYXN0U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2lzVHlwZWFoZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlYWhlYWQgJiYgdGhpcy50eXBlYWhlYWQub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWVyZ2VHbG9iYWxDb25maWcoY29uZmlnOiBOZ1NlbGVjdENvbmZpZykge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCBjb25maWcucGxhY2Vob2xkZXI7XG4gICAgICAgIHRoaXMubm90Rm91bmRUZXh0ID0gdGhpcy5ub3RGb3VuZFRleHQgfHwgY29uZmlnLm5vdEZvdW5kVGV4dDtcbiAgICAgICAgdGhpcy50eXBlVG9TZWFyY2hUZXh0ID0gdGhpcy50eXBlVG9TZWFyY2hUZXh0IHx8IGNvbmZpZy50eXBlVG9TZWFyY2hUZXh0O1xuICAgICAgICB0aGlzLmFkZFRhZ1RleHQgPSB0aGlzLmFkZFRhZ1RleHQgfHwgY29uZmlnLmFkZFRhZ1RleHQ7XG4gICAgICAgIHRoaXMubG9hZGluZ1RleHQgPSB0aGlzLmxvYWRpbmdUZXh0IHx8IGNvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICAgICAgdGhpcy5jbGVhckFsbFRleHQgPSB0aGlzLmNsZWFyQWxsVGV4dCB8fCBjb25maWcuY2xlYXJBbGxUZXh0O1xuICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwgPSBpc0RlZmluZWQodGhpcy52aXJ0dWFsU2Nyb2xsKVxuICAgICAgICAgICAgPyB0aGlzLnZpcnR1YWxTY3JvbGxcbiAgICAgICAgICAgIDogaXNEZWZpbmVkKGNvbmZpZy5kaXNhYmxlVmlydHVhbFNjcm9sbCkgPyAhY29uZmlnLmRpc2FibGVWaXJ0dWFsU2Nyb2xsIDogZmFsc2U7XG4gICAgICAgIHRoaXMub3Blbk9uRW50ZXIgPSBpc0RlZmluZWQodGhpcy5vcGVuT25FbnRlcikgPyB0aGlzLm9wZW5PbkVudGVyIDogY29uZmlnLm9wZW5PbkVudGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHNlYXJjaEhlbHBlciBmcm9tICcuL3NlYXJjaC1oZWxwZXInO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0RlZmluZWQgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmdPcHRpb25IaWdobGlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoJ25nT3B0aW9uSGlnaGxpZ2h0JykgdGVybTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRMYWJlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0TGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgICAgaWYgKCF0aGlzLnRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleE9mVGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhsYWJlbClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5kZXhPZihzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGhpcy50ZXJtKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKGluZGV4T2ZUZXJtID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChcbiAgICAgICAgICAgICAgICBsYWJlbC5zdWJzdHJpbmcoMCwgaW5kZXhPZlRlcm0pXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRlZFwiPiR7bGFiZWwuc3Vic3RyKGluZGV4T2ZUZXJtLCB0aGlzLnRlcm0ubGVuZ3RoKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgbGFiZWwuc3Vic3RyaW5nKGluZGV4T2ZUZXJtICsgdGhpcy50ZXJtLmxlbmd0aCwgbGFiZWwubGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2NhbkhpZ2hsaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZCh0aGlzLnRlcm0pICYmIGlzRGVmaW5lZCh0aGlzLmxhYmVsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJbm5lckh0bWwoaHRtbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgaHRtbCk7XG4gICAgfVxufSAgIFxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFNlbGVjdGlvbk1vZGVsRmFjdG9yeSA9ICgpID0+IFNlbGVjdGlvbk1vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSgpIHtcbiAgICByZXR1cm4gbmV3IERlZmF1bHRTZWxlY3Rpb25Nb2RlbCgpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbk1vZGVsIHtcbiAgICB2YWx1ZTogTmdPcHRpb25bXTtcbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuLCBzZWxlY3RhYmxlR3JvdXBBc01vZGVsOiBib29sZWFuKTtcbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4pO1xuICAgIGNsZWFyKGtlZXBEaXNhYmxlZDogYm9vbGVhbik7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwgaW1wbGVtZW50cyBTZWxlY3Rpb25Nb2RlbCB7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IE5nT3B0aW9uW10gPSBbXTtcblxuICAgIGdldCB2YWx1ZSgpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cblxuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4sIGdyb3VwQXNNb2RlbDogYm9vbGVhbikge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdyb3VwQXNNb2RlbCB8fCAhaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBpdGVtLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuLmZpbHRlcih4ID0+IHguc2VsZWN0ZWQpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudC5zZWxlY3RlZCA9IGNoaWxkcmVuQ291bnQgPT09IHNlbGVjdGVkQ291bnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoaXRlbS5jaGlsZHJlbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKCFncm91cEFzTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBbLi4udGhpcy5fc2VsZWN0ZWQsIC4uLml0ZW0uY2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHggIT09IGl0ZW0pO1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVQYXJlbnQoaXRlbS5wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0ucGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKC4uLmNoaWxkcmVuLmZpbHRlcih4ID0+IHggIT09IGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGl0ZW0uY2hpbGRyZW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKGtlZXBEaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGtlZXBEaXNhYmxlZCA/IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHguZGlzYWJsZWQpIDogW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGNoaWxkcmVuOiBOZ09wdGlvbltdLCBzZWxlY3RlZDogYm9vbGVhbikge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKHggPT4geC5zZWxlY3RlZCA9IHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW1vdmVDaGlsZHJlbihwYXJlbnQ6IE5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geC5wYXJlbnQgIT09IHBhcmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlUGFyZW50KHBhcmVudDogTmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4ICE9PSBwYXJlbnQpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1NlbGVjdENvbXBvbmVudCwgU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkgfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZLCB1c2VWYWx1ZTogRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBSUksbUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7Z0JBRnRCLFdBQVc7O29DQUEvQjs7O0lBU0kscUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7Ozs7Z0JBUHhCLFdBQVc7O3NDQUEvQjs7O0lBY0ksa0NBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7Z0JBWnJCLFdBQVc7O21DQUEvQjs7O0lBbUJJLHVDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOztnQkFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7O2dCQWpCM0IsV0FBVzs7d0NBQS9COzs7SUF3QkksbUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7Z0JBdEJ0QixXQUFXOztvQ0FBL0I7OztJQTZCSSxtQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7OztnQkEzQnRCLFdBQVc7O29DQUEvQjs7O0lBa0NJLHFDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOztnQkFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7O2dCQWhDeEIsV0FBVzs7c0NBQS9COzs7SUF1Q0kseUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7Ozs7Z0JBckM1QixXQUFXOzswQ0FBL0I7OztJQTRDSSx3Q0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztnQkExQzNCLFdBQVc7O3lDQUEvQjs7O0lBaURJLGdDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOztnQkFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7OztnQkEvQ25CLFdBQVc7O2lDQUEvQjs7O0lBc0RJLDJDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOztnQkFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFOzs7O2dCQXBEOUIsV0FBVzs7NENBQS9COzs7Ozs7O0FDQUE7Ozs7Ozs7SUFJSSw2QkFBSTs7OztJQUFKLFVBQUssT0FBZTtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ3hCOztnQkFKSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7eUJBRmxDOzs7Ozs7Ozs7OztBQ0FBLG1CQUEwQixLQUFVO0lBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0NBQ2hEOzs7OztBQUVELGtCQUF5QixLQUFVO0lBQy9CLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4RDs7Ozs7QUFFRCxtQkFBMEIsS0FBVTtJQUNoQyxPQUFPLEtBQUssWUFBWSxPQUFPLENBQUM7Q0FDbkM7Ozs7O0FBRUQsb0JBQTJCLEtBQVU7SUFDakMsT0FBTyxLQUFLLFlBQVksUUFBUSxDQUFDO0NBQ3BDOzs7Ozs7O0FDZEQsSUFBTSxVQUFVLEdBQUc7SUFDZixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQzs7Ozs7QUFFRiwyQkFBa0MsSUFBWTs7SUFDMUMsSUFBTSxLQUFLLEdBQUcsVUFBQyxDQUFTO1FBQ3BCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3QixDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ25EOzs7Ozs7Ozs7QUMvMEJEOztJQUVJLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDOztRQUU3QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0NBQ047Ozs7OztBQ0VELElBQUE7SUFHSSxtQkFDWSxXQUNBO1FBREEsY0FBUyxHQUFULFNBQVM7UUFDVCxvQkFBZSxHQUFmLGVBQWU7c0JBR0UsRUFBRTs4QkFNTSxFQUFFOzRCQU1oQixDQUFDLENBQUM7S0FkeEI7SUFJRCxzQkFBSSw0QkFBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7T0FBQTtJQUlELHNCQUFJLG9DQUFhOzs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzlCOzs7T0FBQTtJQUlELHNCQUFJLGtDQUFXOzs7O1FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDNUI7OztPQUFBO0lBRUQsc0JBQUksb0NBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFVOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pEOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztTQUMxRjs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBZ0I7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7U0FDbEc7OztPQUFBO0lBRUQsc0JBQUksdUNBQWdCOzs7O1FBQXBCOztZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDaEIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7OztPQUFBOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxLQUFZO1FBQXJCLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDM0M7UUFDRCxJQUFJLENBQUMsY0FBYyxZQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCwwQkFBTTs7OztJQUFOLFVBQU8sSUFBYztRQUNqQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hDLE9BQU87U0FDVjs7UUFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0tBQ0o7Ozs7O0lBRUQsNEJBQVE7Ozs7SUFBUixVQUFTLElBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7S0FDSjs7Ozs7SUFFRCw0QkFBUTs7OztJQUFSLFVBQVMsS0FBVTtRQUFuQixpQkFXQzs7UUFWRyxJQUFJLE1BQU0sQ0FBOEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUM1QixNQUFNLEdBQUcsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFBLENBQUE7U0FDakU7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLEdBQUEsQ0FBQTtTQUN4RzthQUFNO1lBQ0gsTUFBTSxHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO2dCQUNqQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUEsQ0FBQTtTQUN6RztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQUVELDJCQUFPOzs7O0lBQVAsVUFBUSxJQUFTOztRQUNiLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBRUQsaUNBQWE7Ozs7SUFBYixVQUFjLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9CO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtLQUNKOzs7OztJQUVELCtCQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksR0FBR0EsaUJBQThCLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTs7WUFDL0IsSUFBTSxLQUFLLEdBQUdBLGlCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzdFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoRCxDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCwwQkFBTTs7OztJQUFOLFVBQU8sSUFBWTs7UUFDZixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksR0FBR0EsaUJBQThCLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7UUFDakcsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDOztRQUMvRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztnQ0FFdEMsR0FBRzs7O1lBQ1YsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDOztnQkFDeEIsS0FBbUIsSUFBQSxLQUFBQyxTQUFBLE9BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBckMsSUFBTSxJQUFJLFdBQUE7b0JBQ1gsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ3hFLFNBQVM7cUJBQ1o7O29CQUNELElBQU0sVUFBVSxHQUFHLE9BQUssU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDL0QsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFO3dCQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzQjtpQkFDSjs7Ozs7Ozs7O1lBQ0QsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsNENBQU8sY0FBSSxDQUEyQjtnQkFDdEMsSUFBSSxNQUFJLENBQUMsTUFBTSxFQUFFOztvQkFDYixJQUFNLElBQUksR0FBRyxPQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssTUFBSSxDQUFDLE1BQU0sR0FBQSxDQUFDLENBQUM7b0JBQ3RELE9BQUssY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsQ0FBQSxLQUFBLE9BQUssY0FBYyxFQUFDLElBQUksb0JBQUksWUFBWSxHQUFFO2FBQzdDOzs7O1lBbEJMLEtBQWtCLElBQUEsS0FBQUEsU0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxnQkFBQTtnQkFBNUMsSUFBTSxHQUFHLFdBQUE7d0JBQUgsR0FBRzthQW1CYjs7Ozs7Ozs7O0tBQ0o7Ozs7SUFFRCxzQ0FBa0I7OztJQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbkQsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNyQztLQUNKOzs7O0lBRUQsOEJBQVU7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7OztJQUVELGdDQUFZOzs7SUFBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELG9DQUFnQjs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxJQUFjO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekQ7Ozs7O0lBRUQseUNBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDVjs7UUFDRCxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xILElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUM7U0FDM0M7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4RztpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekY7U0FDSjtLQUNKOzs7Ozs7SUFFRCxpQ0FBYTs7Ozs7SUFBYixVQUFjLE1BQVcsRUFBRSxHQUFXO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTs7WUFDSCxJQUFJLElBQUksR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUNwQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNmLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKOzs7Ozs7SUFFRCwyQkFBTzs7Ozs7SUFBUCxVQUFRLElBQVMsRUFBRSxLQUFhOztRQUM1QixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDeEgsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMxRSxPQUFPO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQy9DLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDbEIsQ0FBQztLQUNMOzs7O0lBRUQsb0NBQWdCOzs7SUFBaEI7UUFBQSxpQkFZQzs7O1FBWEcsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7O1lBQ3pDLEtBQXVCLElBQUEsS0FBQUEsU0FBQSxJQUFJLENBQUMsYUFBYSxDQUFBLGdCQUFBLDRCQUFFO2dCQUF0QyxJQUFNLFFBQVEsV0FBQTs7Z0JBQ2YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3ZILElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDbEc7Ozs7Ozs7OztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUM5RjtLQUNKOzs7OztJQUVPLGlDQUFhOzs7O2NBQUMsSUFBYzs7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUNiLElBQU0sUUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQzNCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFFBQU0sR0FBQSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQzthQUNwQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztnQkFDdEIsS0FBb0IsSUFBQSxLQUFBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTlCLElBQU0sS0FBSyxXQUFBO29CQUNaLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkM7Ozs7Ozs7OztTQUNKO1FBQ0QsSUFBSSxDQUFDLGNBQWMsWUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUcvRSxpQ0FBYTs7OztjQUFDLElBQWM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEdBQUEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFDYixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFBLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQzthQUM1RTtTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksR0FBQSxDQUFDLENBQUM7U0FDM0U7Ozs7Ozs7SUFHRyxvQ0FBZ0I7Ozs7O2NBQUMsTUFBYyxFQUFFLEdBQWE7O1FBQ2xELElBQU0sS0FBSyxHQUFHRCxpQkFBOEIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1RSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Ozs7OztJQUc3QixxQ0FBaUI7Ozs7Y0FBQyxLQUFhO1FBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3pGLCtCQUFXOzs7O2NBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUEsQ0FBQyxFQUFFO1lBQ2hGLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjs7Ozs7OztJQUdHLDRCQUFROzs7OztjQUFDLEtBQWlCLEVBQUUsSUFBdUI7Ozs7UUFDdkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7UUFDeEQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLE1BQU0sQ0FBQztTQUNqQjs7UUFHRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssbUJBQVMsSUFBSSxFQUFDLENBQUMsRUFBRTs7Z0JBQzdDLEtBQW1CLElBQUEsVUFBQUMsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQXJCLElBQU0sSUFBSSxrQkFBQTs7b0JBQ1gsSUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxtQkFBUyxJQUFJLEVBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQztvQkFDNUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzlCOzs7Ozs7Ozs7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjs7UUFFRCxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDbkQsSUFBTSxLQUFLLEdBQUcsVUFBQyxJQUFjOztZQUN6QixJQUFJLEdBQUcsR0FBRyxPQUFPLEdBQUcsbUJBQVcsSUFBSSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxtQkFBUyxJQUFJLEVBQUMsQ0FBQztZQUM1RSxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQzNDLENBQUM7OztZQUdGLEtBQW1CLElBQUEsVUFBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQXJCLElBQU0sSUFBSSxrQkFBQTs7Z0JBQ1gsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFDdEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjthQUNKOzs7Ozs7Ozs7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7O0lBR1YsNEJBQVE7Ozs7Y0FBQyxNQUFvQjs7O1FBQ2pDLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUN2RCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7O1FBQ2pCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pELEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxXQUFTLFlBQVksR0FBRTs7UUFDNUIsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQ0FDakIsR0FBRztZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7O2FBRXBCOztZQUNELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDbEMsSUFBTSxRQUFNLEdBQWE7Z0JBQ3JCLEtBQUssRUFBRSxXQUFXLEdBQUcsRUFBRSxxQkFBVyxHQUFHLENBQUE7Z0JBQ3JDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixNQUFNLEVBQUUsSUFBSTtnQkFDWixLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUNWLFFBQVEsRUFBRSxDQUFDLE9BQUssU0FBUyxDQUFDLGVBQWU7Z0JBQ3pDLE1BQU0sRUFBRSxLQUFLLEVBQUU7YUFDbEIsQ0FBQzs7WUFDRixJQUFNLFFBQVEsR0FBRyxXQUFXLEdBQUcsT0FBSyxTQUFTLENBQUMsU0FBUyxxQkFBVyxPQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUEsQ0FBQzs7WUFDekYsSUFBTSxVQUFVLEdBQUcsT0FBSyxTQUFTLENBQUMsVUFBVSxLQUFLOztnQkFDN0MsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsT0FBTyxtQkFBVyxHQUFHLEdBQUUsS0FBSyxDQUFDO2lCQUNoQztnQkFDRCxnQkFBUyxHQUFDLFFBQVEsSUFBRyxHQUFHLEtBQUc7YUFDOUIsQ0FBQyxDQUFDOztZQUNILElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFNLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUN2QixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxDQUFDO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsUUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDM0IsUUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLElBQUksT0FBVixLQUFLLFdBQVMsUUFBUSxHQUFFOzs7O1lBN0I1QixLQUFrQixJQUFBLEtBQUFBLFNBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxnQkFBQTtnQkFBdEMsSUFBTSxHQUFHLFdBQUE7d0JBQUgsR0FBRzthQThCYjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7O29CQS9YckI7SUFpWUMsQ0FBQTs7Ozs7Ozs7SUNuWEcsTUFBTztJQUNQLFNBQVU7SUFDVixPQUFRO0lBQ1IsU0FBVTtJQUNWLFdBQVk7SUFDWixhQUFjO0lBQ2QsWUFBYTs7Z0JBTmIsR0FBRztnQkFDSCxLQUFLO2dCQUNMLEdBQUc7Z0JBQ0gsS0FBSztnQkFDTCxPQUFPO2dCQUNQLFNBQVM7Z0JBQ1QsU0FBUzs7Ozs7O0FDcEJiOzs7Ozs7O0lBSUksNkNBQXFCOzs7O0lBQXJCLFVBQXNCLEVBQUU7UUFDcEIsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0M7Ozs7OztJQUVELGtDQUFVOzs7OztJQUFWLFVBQVcsT0FBaUMsRUFBRSxPQUFlO1FBQ3pELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUM7O2dCQVJKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozt3QkFGbEM7Ozs7Ozs7QUNBQTs7Ozs7Ozs7O0lBcUJJLDZDQUFjOzs7Ozs7SUFBZCxVQUFlLENBQWtCLEVBQUUsVUFBdUIsRUFBRSxZQUFvQjs7UUFDNUUsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ25ELElBQUksVUFBVSxDQUFDLFNBQVMsR0FBRyxZQUFZLEVBQUU7WUFDckMsVUFBVSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDdkM7O1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNwRCxJQUFNLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQzs7UUFDbEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRXJGLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQzs7UUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztRQUU3RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixLQUFLLElBQUksWUFBWSxDQUFDO1FBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixHQUFHLElBQUksWUFBWSxDQUFDO1FBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkMsT0FBTztZQUNILFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFlBQVksRUFBRSxZQUFZO1lBQzFCLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLEdBQUc7U0FDWCxDQUFBO0tBQ0o7Ozs7Ozs7O0lBRUQsa0RBQW1COzs7Ozs7O0lBQW5CLFVBQW9CLFdBQW1CLEVBQUUsS0FBYSxFQUFFLE9BQW9CLEVBQUUsU0FBc0I7O1FBQ2hHLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUNsRCxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMscUJBQXFCLEVBQUUsR0FBRztZQUM3RixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3hCLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQzs7UUFDRixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFaEYsT0FBTztZQUNILFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSztZQUMxQixVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDNUIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQzFCLFdBQVcsRUFBRSxRQUFRLENBQUMsTUFBTTtZQUM1QixXQUFXLEVBQUUsV0FBVztTQUMzQixDQUFDO0tBQ0w7O2dCQW5ESixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7K0JBbEJsQzs7Ozs7OztBQ0FBO0FBOEJBLElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQzs7QUFDdEMsSUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQzs7SUFzRHhDLGtDQUNZLFdBQ0EsT0FDQSx1QkFDQSxTQUNSLFdBQXVCLEVBQ2UsU0FBYztRQUw1QyxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO1FBQ0wsMEJBQXFCLEdBQXJCLHFCQUFxQjtRQUNyQixZQUFPLEdBQVAsT0FBTztRQUV1QixjQUFTLEdBQVQsU0FBUyxDQUFLO3FCQXJDM0IsRUFBRTt3QkFFTyxNQUFNOzRCQUVwQixDQUFDOzZCQUNBLEtBQUs7MkJBR0MsSUFBSTtzQkFFaEIsSUFBSSxZQUFZLEVBQVM7c0JBQ3pCLElBQUksWUFBWSxFQUFrQzsyQkFDN0MsSUFBSSxZQUFZLEVBQVE7NEJBQ3ZCLElBQUksWUFBWSxFQUFRO3lCQU1wQixJQUFJLE9BQU8sRUFBUTs0QkFLekIsSUFBSTttQ0FDRyxLQUFLO2lDQUNQLEtBQUs7c0NBRUEsZUFBUzs4Q0FDRCxlQUFTO1FBVTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUM5QztJQUVELHNCQUFJLHFEQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDaEM7OztPQUFBOzs7OztJQUdELGtEQUFlOzs7O0lBRGYsVUFDZ0IsTUFBa0I7O1FBQzlCLElBQU0sTUFBTSxxQkFBRyxNQUFNLENBQUMsTUFBcUIsRUFBQztRQUM1QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzVCLE9BQU87U0FDVjtRQUNELE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEtBQUssQ0FDRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQzVEO2lCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMvQixTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0o7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksT0FBTyxXQUFRO1lBQ2YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxVQUFPLENBQUM7U0FDMUM7S0FDSjs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RTtLQUNKOzs7O0lBRUQscURBQWtCOzs7SUFBbEI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMxQixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUNoQztZQUNELEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQUEsaUJBUUM7UUFQRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO29CQUMvQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7U0FDTixDQUFDLENBQUE7S0FDTDs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsSUFBYztRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWOztRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTztTQUNWOztRQUVELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQzs7UUFDcEUsSUFBTSxRQUFRLEdBQVksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzs7UUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDNUY7YUFBTTs7WUFDSCxJQUFNLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQzs7WUFDcEUsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5RyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkY7S0FDSjs7OztJQUVELGdEQUFhOzs7SUFBYjs7UUFDSSxJQUFNLEVBQUUsR0FBWSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztRQUN4RCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7OztJQUVELHlEQUFzQjs7O0lBQXRCO1FBQUEsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssRUFBRTtnQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUE7YUFDN0Q7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMxRCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7YUFDMUM7WUFFRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDVDs7Ozs7SUFFTyxzREFBbUI7Ozs7Y0FBQyxNQUFXO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDVjs7UUFFRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDM0UsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEcsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFHckIsZ0RBQWE7Ozs7O1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRTtZQUMvRixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQixDQUFDLENBQUM7Ozs7OztJQUdDLHFEQUFrQjs7OztjQUFDLEtBQThEOztRQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVM7YUFDdkQsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2FBQzFDO1NBQ0osQ0FBQyxDQUFDOzs7OztJQUdDLCtDQUFZOzs7OztRQUNoQixNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQixDQUFDLENBQUM7WUFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1Qjs7UUFFRCxJQUFNLElBQUksR0FBRyxVQUFDLE9BQU87O1lBQ2pCLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztZQUN0QyxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFdEgsbUJBQWMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRSxLQUFLLENBQUMsTUFBTSxHQUFNLEdBQUcsQ0FBQyxZQUFZLE9BQUksQ0FBQztZQUMzRixtQkFBYyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBRTdHLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFJLENBQUMsY0FBYyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3hELENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFFNUIsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUNoQjthQUVKO2lCQUFNLElBQUksS0FBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSixDQUFDO1FBQ0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBQSxDQUFDLENBQUE7Ozs7O0lBRzFDLG1EQUFnQjs7OztRQUNwQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixPQUFPO1NBQ1Y7O1FBQ0QsSUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7O1FBQ2hFLElBQU0sT0FBTyxHQUFnQixJQUFJLENBQUMsYUFBYTtZQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBRXpDLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUNqQzs7Ozs7O0lBR0csdURBQW9COzs7O2NBQUMsS0FBUztRQUFULHNCQUFBLEVBQUEsU0FBUztRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2pCLEtBQUssRUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUN2QyxDQUFBOzs7OztJQUdHLHdEQUFxQjs7Ozs7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7WUFDNUUsS0FBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7U0FDMUMsQ0FBQyxDQUFDOzs7OztJQUdDLGtEQUFlOzs7O1FBQ25CLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7SUFHN0IsNERBQXlCOzs7O2NBQUMsVUFBdUI7UUFDckQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7O1FBQ0QsSUFBTSxVQUFVLEdBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUNwRSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7UUFDaEYsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztRQUN0RCxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOztRQUNqQyxJQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7WUFDekYsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDO1NBQ25COzs7OztJQUdHLGtEQUFlOzs7OztRQUNuQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBcUIsSUFBSSxDQUFDLFFBQVEsc0NBQW1DLENBQUMsQ0FBQTtTQUN6RjtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztJQUcvQixrRUFBK0I7Ozs7O1FBQ25DLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7UUFDdEMsSUFBTSxVQUFVLEdBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUNwRSxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztRQUNsQyxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7O1FBQ3BELElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQzs7UUFDdkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDdkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7Ozs7SUFHcEQsb0RBQWlCOzs7OztRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1Qjs7UUFDRCxJQUFNLEtBQUssR0FBRyxVQUFDLE9BQU87O1lBQ2xCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVELElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3pCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQyxDQUFBOzs7Z0JBbFd0RCxTQUFTLFNBQUM7b0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsbXdCQWFUO2lCQUNKOzs7O2dCQWhERyxTQUFTO2dCQU9ULE1BQU07Z0JBZ0JELG9CQUFvQjtnQkFEcEIsYUFBYTtnQkFyQmxCLFVBQVU7Z0RBdUZMLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O3dCQXJDL0IsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNOzhCQUNOLE1BQU07K0JBQ04sTUFBTTtvQ0FFTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTttQ0FDekMsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0NBQ3hDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2tDQTZCekMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7bUNBcEd6Qzs7Ozs7OztBQ0FBO0lBeUJJLDJCQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzRCQUhqQixJQUFJLE9BQU8sRUFBcUM7eUJBQ3BELEtBQUs7S0FFcUI7SUFQOUMsc0JBQ0ksdUNBQVE7Ozs7UUFEWixjQUNpQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFDekMsVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBLEVBQUU7OztPQUQ1Qjs7Ozs7SUFRekMsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksT0FBTyxjQUFXO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMzQixDQUFDLENBQUM7U0FDTjtLQUNKOzs7OztJQUVPLHVDQUFXOzs7O2NBQUMsS0FBSztRQUNyQixPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDOzs7Z0JBM0J0RCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7OztnQkFYRyxVQUFVOzs7d0JBY1QsS0FBSzsyQkFDTCxLQUFLOzs0QkFsQlY7Ozs7Ozs7QUNBQTs7NEJBS21CLGdCQUFnQjtnQ0FDWixnQkFBZ0I7MEJBQ3RCLFVBQVU7MkJBQ1QsWUFBWTs0QkFDWCxXQUFXO29DQUNILElBQUk7MkJBQ2IsSUFBSTs7O2dCQVRyQixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7eUJBRmxDOzs7Ozs7OztBQ3FEQSxJQUFhLHVCQUF1QixHQUFHLElBQUksY0FBYyxDQUF3QiwyQkFBMkIsQ0FBQyxDQUFDOztJQWtKMUcsMkJBQytCLE9BQWUsRUFDWixRQUFnQixFQUNkLFNBQWMsRUFDOUMsTUFBc0IsRUFDVyxpQkFBd0MsRUFDekUsV0FBdUIsRUFDZixLQUNBO1FBUlosaUJBYUM7UUFaOEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBSXRDLFFBQUcsR0FBSCxHQUFHO1FBQ0gsYUFBUSxHQUFSLFFBQVE7eUJBN0hDLElBQUk7Z0NBT3FCLE1BQU07dUJBRWpDLEtBQUs7NkJBQ0MsSUFBSTs0QkFDTCxLQUFLOzJCQUNOLEtBQUs7NEJBS0osQ0FBQzsrQkFFRSxLQUFLO3NDQUNFLElBQUk7d0JBQ2xCLElBQUk7eUJBQ0gsSUFBSTtpREFDb0IsS0FBSztnQ0FDdEIsSUFBSTswQkFFVixJQUFJOzJCQUNVLEtBQUs7OEJBQ0MsS0FBSzt3QkFFYyxLQUFLO3NCQUNhLEtBQUs7MEJBQ25CLElBQUk7eUJBQ04sSUFBSTtzQkFDVixLQUFLOzt5QkF5QmxDLElBQUksWUFBWSxFQUFFOzBCQUNoQixJQUFJLFlBQVksRUFBRTsyQkFDaEIsSUFBSSxZQUFZLEVBQUU7eUJBQ3RCLElBQUksWUFBWSxFQUFFOzBCQUNoQixJQUFJLFlBQVksRUFBRTsyQkFDaEIsSUFBSSxZQUFZLEVBQWdDOzBCQUNsRCxJQUFJLFlBQVksRUFBRTt3QkFDdEIsSUFBSSxZQUFZLEVBQUU7MkJBQ1osSUFBSSxZQUFZLEVBQUU7c0JBQ3ZCLElBQUksWUFBWSxFQUFrQzsyQkFDeEMsSUFBSSxZQUFZLEVBQUU7d0JBbUJILEtBQUs7NkJBSTdCLEVBQUU7MkJBQ1IsSUFBSTswQkFDYixLQUFLLEVBQUU7c0JBSUgsRUFBRTs2QkFFSyxPQUFPOzRCQUdFLEVBQUU7eUJBSU4sSUFBSSxPQUFPLEVBQVE7MEJBQ2xCLElBQUksT0FBTyxFQUFVO3lCQUMvQixVQUFDLENBQU0sS0FBUTswQkFDZCxlQUFTO3lCQUVsQixVQUFDLElBQVM7O1lBQ2xCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUEsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7NkJBdVJlLFVBQUMsQ0FBUyxFQUFFLElBQWM7WUFDdEMsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQWpSRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUM1QztJQTlGRCxzQkFDSSxvQ0FBSzs7OztRQURULGNBQ2MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBLEVBQUU7Ozs7O1FBQ2xDLFVBQVUsS0FBWTtZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2Qjs7O09BSmlDO0lBTWxDLHNCQUNJLDBDQUFXOzs7O1FBRGYsY0FDb0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7O1FBQy9DLFVBQWdCLEVBQWlCO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUMxQjs7O09BTjhDO0lBUS9DLHNCQUNJLCtDQUFnQjs7OztRQURwQixjQUN5QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzs7OztRQUNsSCxVQUFxQixLQUFLO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDbEM7OztPQUhpSDtJQW9DbEgsc0JBQTZDLHVDQUFROzs7O1FBQXJELGNBQTBELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQSxFQUFFOzs7T0FBQTtJQTJDeEcsc0JBQUksNENBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3ZDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFjOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUEsQ0FBQyxDQUFDO1NBQy9DOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4Qzs7O09BQUE7SUFFRCxzQkFBSSxtREFBb0I7Ozs7UUFBeEI7WUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDN0M7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNwQjs7O09BQUE7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLGNBQVc7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksT0FBTyxXQUFRO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLFVBQU8sWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxPQUFPLFlBQVM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxXQUFRLFlBQVksQ0FBQyxDQUFDO1NBQzdEO0tBQ0o7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7S0FDSjs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM3Qjs7Ozs7SUFHRCx5Q0FBYTs7OztJQURiLFVBQ2MsTUFBcUI7UUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsTUFBTSxDQUFDLEtBQUs7Z0JBQ2hCLEtBQUssT0FBTyxDQUFDLFNBQVM7b0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsTUFBTTtnQkFDVixLQUFLLE9BQU8sQ0FBQyxPQUFPO29CQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixNQUFNO2dCQUNWLEtBQUssT0FBTyxDQUFDLEtBQUs7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUIsTUFBTTtnQkFDVixLQUFLLE9BQU8sQ0FBQyxLQUFLO29CQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1YsS0FBSyxPQUFPLENBQUMsR0FBRztvQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixNQUFNO2dCQUNWLEtBQUssT0FBTyxDQUFDLEdBQUc7b0JBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTtnQkFDVixLQUFLLE9BQU8sQ0FBQyxTQUFTO29CQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTthQUNiO1NBQ0o7YUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0o7Ozs7O0lBRUQsMkNBQWU7Ozs7SUFBZixVQUFnQixNQUFrQjs7UUFDOUIsSUFBTSxNQUFNLHFCQUFHLE1BQU0sQ0FBQyxNQUFxQixFQUFDO1FBQzVDLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7S0FDSjs7OztJQUVELDRDQUFnQjs7O0lBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtLQUNKOzs7O0lBRUQsNENBQWdCOzs7SUFBaEI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFrQjtRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzNCOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsa0NBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0tBQ0o7Ozs7SUFFRCxnQ0FBSTs7O0lBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckYsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQ3RFLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsaUNBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUMzQjs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsSUFBYztRQUNyQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO0tBQ0o7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLElBQWM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtZQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0tBQ0o7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMxQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsSUFBYztRQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQUEsaUJBY0M7OztRQWJHLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxtQkFBVyxJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsYUFBSyxHQUFDLElBQUksQ0FBQyxTQUFTLElBQUcsSUFBSSxDQUFDLFdBQVcsS0FBRSxDQUFDO1NBQ3JGOztRQUVELElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUM7UUFDbEksSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFTLENBQUMsQ0FBQztTQUNuRTthQUFNLElBQUksR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQjtLQUNKOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUNsRjtJQVVELHNCQUFJLHlDQUFVOzs7O1FBQWQ7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsT0FBTyxLQUFLLENBQUM7YUFDaEI7O1lBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQyxNQUFNO2lCQUNiLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLEdBQUEsQ0FBQztxQkFDbkUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7OztPQUFBOzs7O0lBRUQsNENBQWdCOzs7SUFBaEI7O1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDaEQsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsNENBQWdCOzs7SUFBaEI7O1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDM0U7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsd0NBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUN2Qjs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksSUFBYztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxtQkFBTSxJQUFJLENBQUMsR0FBRyxHQUFFLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzVCO0tBQ0o7Ozs7SUFFRCxrREFBc0I7OztJQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0M7S0FDSjs7Ozs7SUFFTyxxQ0FBUzs7OztjQUFDLEtBQVk7O1FBQzFCLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6SCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hEOzs7OztJQUdHLGtEQUFzQjs7Ozs7O1FBQzFCLElBQU0sZUFBZSxHQUFHLFVBQUMsT0FBcUM7WUFDMUQsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLFFBQUM7Z0JBQ2hDLGNBQWMsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDNUIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQ3pELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTthQUM1QixJQUFDLENBQUMsQ0FBQztZQUNKLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCLENBQUM7O1FBRUYsSUFBTSxrQkFBa0IsR0FBRzs7WUFDdkIsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssd0JBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsWUFBWSxHQUFBLENBQUMsR0FDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNuQyxTQUFTLENBQUMsVUFBQSxNQUFNOztnQkFDYixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMzQixDQUFDLENBQUM7U0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO2FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUQsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNkLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUNwQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsa0JBQWtCLEVBQUUsQ0FBQztTQUN4QixDQUFDLENBQUM7Ozs7OztJQUdILDhDQUFrQjs7OztjQUFDLEtBQVU7O1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwRyxPQUFPLEtBQUssQ0FBQztTQUNoQjs7UUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLElBQVM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQ0FBa0MsQ0FBQyxDQUFDO2dCQUM3RixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7Ozs7SUFHRyw2Q0FBaUI7Ozs7Y0FBQyxPQUFvQjs7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxPQUFNO1NBQ1Q7O1FBRUQsSUFBTSxNQUFNLEdBQUcsVUFBQyxHQUFROzs7WUFDcEIsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU07O2dCQUNILElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2xDLElBQU0sV0FBVyxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztnQkFDcEQsS0FBSyxXQUFXLElBQUksV0FBVyxHQUFHO29CQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDNUQ7cUJBQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUN2QixJQUFJO3dCQUNBLEdBQUMsS0FBSSxDQUFDLFNBQVMsSUFBRyxJQUFJO3dCQUN0QixHQUFDLEtBQUksQ0FBQyxTQUFTLElBQUcsR0FBRzsyQkFDeEIsQ0FBQztvQkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7YUFDSjtTQUNKLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixtQkFBUSxPQUFPLEdBQUUsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25COzs7OztJQUdHLDZDQUFpQjs7Ozs7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVO2FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsRUFDN0MsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxVQUFBLElBQUk7O1lBQ1gsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjthQUNKO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDMUIsQ0FBQyxDQUFDOzs7OztJQUdILDBDQUFjOzs7Ozs7UUFDbEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDOztZQUNqQixLQUFtQixJQUFBLEtBQUFBLFNBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztvQkFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O3dCQUNmLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMscUJBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDO3dCQUN6RSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLHNCQUFZLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDO3FCQUN4RDt5QkFBTTt3QkFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ3BFO29CQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjthQUNKOzs7Ozs7Ozs7O1FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDOzs7OztJQUdwQix3Q0FBWTs7OztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBR2hDLDJDQUFlOzs7O1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztJQUdyRCx3Q0FBWTs7OztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7O0lBRy9CLHNDQUFVOzs7O2NBQUMsTUFBcUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEQsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzNCO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjs7Ozs7O0lBR0csd0NBQVk7Ozs7Y0FBQyxNQUFxQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTztTQUNWO1FBRUQsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7Ozs7SUFHcEIsd0NBQVk7Ozs7Y0FBQyxNQUFxQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OztJQUdwQiw0Q0FBZ0I7Ozs7Y0FBQyxNQUFxQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OztJQUdwQiwwQ0FBYzs7OztjQUFDLE1BQXFCO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7UUFDRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OztJQUdwQiwwQ0FBYzs7OztjQUFDLFFBQWdCOztRQUNuQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXO2VBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtnQkFDeEIsU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7O0lBR3ZFLDRDQUFnQjs7OztRQUNwQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqRixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCOzswQkFHTywyQ0FBWTs7Ozs7WUFDcEIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztJQUd6RCw4Q0FBa0I7Ozs7Y0FBQyxNQUFzQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2NBQzVDLElBQUksQ0FBQyxhQUFhO2NBQ2xCLFNBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDcEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7O2dCQW54QjlGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsc21OQUF5QztvQkFFekMsU0FBUyxFQUFFLENBQUM7NEJBQ1IsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEdBQUEsQ0FBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ2QsQ0FBQztvQkFDRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDRixNQUFNLEVBQUUsU0FBUzt3QkFDakIsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLDBCQUEwQixFQUFFLFdBQVc7cUJBQzFDOztpQkFDSjs7Ozs2Q0EySFEsU0FBUyxTQUFDLE9BQU87NkNBQ2pCLFNBQVMsU0FBQyxVQUFVO2dEQUNwQixTQUFTLFNBQUMsV0FBVztnQkF2SnJCLGNBQWM7Z0RBeUpkLE1BQU0sU0FBQyx1QkFBdUI7Z0JBNUxuQyxVQUFVO2dCQVZWLGlCQUFpQjtnQkFxQ1osY0FBYzs7OzRCQXFDbEIsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7bUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzt5Q0FDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztvREFDTCxLQUFLO21DQUNMLEtBQUs7NkJBRUwsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSyxZQUFJLFdBQVcsU0FBQywyQkFBMkI7MkJBQ2hELEtBQUssWUFBSSxXQUFXLFNBQUMsMEJBQTBCO3lCQUMvQyxLQUFLLFlBQUksV0FBVyxTQUFDLDBCQUEwQjs2QkFDL0MsS0FBSyxZQUFJLFdBQVcsU0FBQyw0QkFBNEI7NEJBQ2pELEtBQUssWUFBSSxXQUFXLFNBQUMsMkJBQTJCO3lCQUNoRCxLQUFLLFlBQUksV0FBVyxTQUFDLHdCQUF3Qjt3QkFFN0MsS0FBSzs4QkFPTCxLQUFLO21DQVNMLEtBQUs7NEJBT0wsTUFBTSxTQUFDLE1BQU07NkJBQ2IsTUFBTSxTQUFDLE9BQU87OEJBQ2QsTUFBTSxTQUFDLFFBQVE7NEJBQ2YsTUFBTSxTQUFDLE1BQU07NkJBQ2IsTUFBTSxTQUFDLE9BQU87OEJBQ2QsTUFBTSxTQUFDLFFBQVE7NkJBQ2YsTUFBTSxTQUFDLE9BQU87MkJBQ2QsTUFBTSxTQUFDLEtBQUs7OEJBQ1osTUFBTSxTQUFDLFFBQVE7eUJBQ2YsTUFBTSxTQUFDLFFBQVE7OEJBQ2YsTUFBTSxTQUFDLGFBQWE7aUNBR3BCLFlBQVksU0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUNBQzdELFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBQy9ELFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7cUNBQzVELFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBQ2pFLFlBQVksU0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBQzdELFlBQVksU0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUNBQzdELFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7dUNBQy9ELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7c0NBQ25FLFlBQVksU0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OEJBQ2xFLFlBQVksU0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7eUNBQzFELFlBQVksU0FBQyxpQ0FBaUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBRXJFLFNBQVMsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixHQUFBLENBQUM7NEJBQ3BELGVBQWUsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7OEJBQ3hELFNBQVMsU0FBQyxhQUFhOzJCQUV2QixXQUFXLFNBQUMsMEJBQTBCOzJCQUN0QyxXQUFXLFNBQUMsMEJBQTBCO2dDQTZGdEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7NEJBeFF2Qzs7Ozs7OztBQ0FBO0lBcUJJLG9DQUNZLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDaEQ7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0tBQ0o7Ozs7SUFFRCxvREFBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7S0FDSjs7OztJQUVPLG9EQUFlOzs7OztRQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7O1FBRUQsSUFBTSxXQUFXLEdBQUdELGlCQUE4QixDQUFDLEtBQUssQ0FBQzthQUNwRCxXQUFXLEVBQUU7YUFDYixPQUFPLENBQUNBLGlCQUE4QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ2QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDO21CQUM3QixpQ0FBNkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBUyxDQUFBO2tCQUNqRixLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3Qjs7MEJBR08scURBQWE7Ozs7O1lBQ3JCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFHakQsa0RBQWE7Ozs7Y0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O2dCQXREbkYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2xDOzs7O2dCQVRHLFVBQVU7Z0JBR1YsU0FBUzs7O3VCQVNSLEtBQUssU0FBQyxtQkFBbUI7O3FDQWhCOUI7Ozs7Ozs7Ozs7QUNJQTtJQUNJLE9BQU8sSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0NBQ3RDO0lBU0Q7O3lCQUNvQyxFQUFFOztJQUVsQyxzQkFBSSx3Q0FBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCOzs7T0FBQTs7Ozs7OztJQUVELHNDQUFNOzs7Ozs7SUFBTixVQUFPLElBQWMsRUFBRSxRQUFpQixFQUFFLFlBQXFCO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztnQkFDYixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O2dCQUNsRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsS0FBSyxhQUFhLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDZixJQUFJLENBQUMsU0FBUyxZQUFPLElBQUksQ0FBQyxTQUFTLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDthQUNKO1NBQ0o7S0FDSjs7Ozs7O0lBRUQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxJQUFjLEVBQUUsUUFBaUI7O1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLENBQUEsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksb0JBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEdBQUEsQ0FBQyxHQUFFO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtTQUNKO0tBQ0o7Ozs7O0lBRUQscUNBQUs7Ozs7SUFBTCxVQUFNLFlBQXFCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsR0FBQSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQy9FOzs7Ozs7SUFFTyx5REFBeUI7Ozs7O2NBQUMsUUFBb0IsRUFBRSxRQUFpQjtRQUNyRSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUEsQ0FBQyxDQUFDOzs7Ozs7SUFHekMsK0NBQWU7Ozs7Y0FBQyxNQUFnQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUEsQ0FBQyxDQUFDOzs7Ozs7SUFHN0QsNkNBQWE7Ozs7Y0FBQyxNQUFnQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLE1BQU0sR0FBQSxDQUFDLENBQUE7O2dDQXhFakU7SUEwRUM7Ozs7OztBQzFFRCxTQTJEc0QsNEJBQTRCOzs7OztnQkF0Q2pGLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysd0JBQXdCO3dCQUN4QixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6QiwyQkFBMkI7d0JBQzNCLCtCQUErQjt3QkFDL0IsOEJBQThCO3dCQUM5QixzQkFBc0I7d0JBQ3RCLGlDQUFpQztxQkFDcEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsK0JBQStCO3dCQUMvQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjt3QkFDdEIsaUNBQWlDO3FCQUNwQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUE4QixFQUFFO3FCQUMvRTtpQkFDSjs7eUJBN0REOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/help/patient-info/patient-info.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/patient-info/patient-info.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .header{\r\n        background-color: #063d78;\r\n        color: white;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .header h5{\r\n        margin-top: 5px;\r\n        /*margin-left: 10px;*/\r\n        /*margin-right: 10px;*/\r\n    }\r\n\r\n    P  {\r\n        color: grey;\r\n        font-size: 1.1rem;\r\n        margin-top: 5px;\r\n\r\n    }\r\n    .col-1{\r\n        text-align: right;\r\n    }\r\n    .gray{\r\n        background-color:#a6a1a1 ;\r\n    }\r\n    .red{\r\n        background-color: red !important\r\n    }\r\n    .orange{\r\n        background-color: orange !important;\r\n    }\r\n    .yellow{\r\n        background-color: yellow !important;\r\n        color: black !important;\r\n    }\r\n    .green{\r\n        background-color: #0ABC76 !important;\r\n    }\r\n    .Active{\r\n        background-color: #44b5b7;!important;\r\n        color: white!important;\r\n    }\r\n    .hoverDelete:hover{\r\n        background-color:#e18932 ;\r\n    }\r\n    table ,table th,table td{\r\n        border-color: black!important;\r\n    }\r\ninput[value]{\r\n    background-color: yellow;\r\n    font-size: 200px;\r\n}\r\n.btnB{\r\n    border: 1px solid black;\r\n}\r\n.btnB:hover{\r\n    background-color:#0a9e67;\r\n}\r\n\r\n\r\n\r\n</style>\r\n\r\n<div class=\"container-fluid\" style=\"font-family: iransans\" *ngIf=\"info\">\r\n\r\n    <div class=\"row\" >\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n                <h5 >گروه اطلاعات پرونده پذیرش </h5>\r\n                <!--<h5>Patient Information</h5>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\"  >\r\n        <!--ردیف اول -->\r\n        <div class=\"col-12   d-flex my-1\"  >\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"> نام:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" >\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['firstName']}}\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"> نام خانوادگی:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['lastName']}}\">\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">جنسیت :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n            <p>\r\n                      {{info[0]['genderName']}}\r\n            </p>\r\n            </div>\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"  >  کد پذیرش:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1  \" style=\"text-align: right\">\r\n                <p>\r\n                    12345\r\n                </p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <!--پیابان ردیف اول -->\r\n        <!--ردیف دوم -->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" >  کد پذیرش :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1  \" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['encounterID']}}\r\n\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">    شماره پرونده\r\n                :\r\n                </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n\r\n                    <p>\r\n\r\n                        {{info[0]['recordNumber']}}\r\n\r\n                    </p>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\"style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" >\r\n                    تاریخ مراجعه  :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['encounterDate']}}\r\n\r\n                </p>\r\n            </div>\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">ساعت مراجعه:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['encounterTime']}}\r\n                </p>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <!--پایان ردیف دوم-->\r\n        <!-- ردیف سوم-->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left;\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">\r\n\r\n                    کد ملی\r\n                :\r\n                </label>\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['nationalCode']}}\r\n\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">ملیت:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <p style=\"text-align: right\">\r\n                    {{info[0]['countryName']}}\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">\r\n                    تاریخ تولد  :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n\r\n                    {{info[0]['birthDate']}}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">\r\n                     تلفن  :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['telNo1']}}\r\n\r\n                </p>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left;\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">پزشک معالج:  </label>\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['pracName']}}                </p>\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\"style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">بیمه پایه:</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n{{info[0]['insurerName1']}}\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">\r\nبیمه تکمیلی :\r\n                </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['insurerName2']}}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-1 my-1\" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">\r\n                    بخش:\r\n                </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                <p>\r\n                    {{info[0]['locationName']}}\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex my-1\">\r\n            <div class=\"col-1 my-1 \" style=\"text-align: left\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"> آدرس:</label>\r\n            </div>\r\n            <div class=\"col-8 mt-1\" style=\"text-align: right\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" >\r\n                    {{info[0]['address']}}\r\n\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n         \r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n                <h5 >گروه اطلاعات پرونده مددکاری اجتماعی\r\n                </h5>\r\n                <!--<h5>Patient Information</h5>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\">\r\n        <!--ردیف اول -->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n            <div class=\"col-1 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"> نام پدر: </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['fatherName']}}\">\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">نام خانوادگی پدر :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['fatherName']}}\">\r\n            </div>\r\n        </div>\r\n        <!--پیابان ردیف اول -->\r\n        <!--ردیف دوم -->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n            <div class=\"col-1 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\"> نام مادر: </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['motherFirstName']}}\">\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">نام خانوادگی مادر :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <input readonly type=\"text\" class=\"form-control\" value=\"{{info[0]['motherFirstName']}}\">\r\n            </div>\r\n        </div>\r\n        <!--پایان ردیف دوم-->\r\n        <!-- ردیف سوم-->\r\n        <div class=\"col-12 d-flex my-1\">\r\n            <div class=\"col-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">وضعیت تاهل:</label>\r\n            </div>\r\n            <div class=\"col-3 d-flex\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n                <div class=\"\"  *ngFor=\"let i of MaritalStatus\" style=\"padding: 0\">\r\n                    <button (click)= \"getMaritalStatus(i.code,i.value)\" class=\"btn btn-outline-primary \">{{i.value}}</button>\r\n                </div>\r\n                <!--<div class=\"col-2\" style=\"padding: 0\">-->\r\n                    <!--<button class=\"btn btn-outline-primary form-control\">متاهل</button>-->\r\n                <!--</div><div class=\"col-2\" style=\"padding: 0\">-->\r\n                    <!--<button class=\"btn btn-outline-primary form-control\">طلاق </button>-->\r\n                <!--</div><div class=\"col-3\" style=\"padding: 0\">-->\r\n                    <!--<button class=\"btn btn-outline-primary form-control\">فوت همسر</button>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div style=\"padding-left: 25px\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" >سطح تحصیلات:</label>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n                <select name=\"\" id=\"\" class=\"form-control\" (change)=\"getEducation($event)\" >\r\n                    <option value=\"\"></option>\r\n                    <option value=\"{{i.code}}\" *ngFor=\"let i of education\">{{i.value}}</option>\r\n\r\n                </select>\r\n            </div>\r\n            <div class=\"col-1 my-1\" style=\"text-align: right;direction: rtl;\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" >شغل:</label>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n                <select name=\"\" id=\"\" class=\"form-control\" (change)=\"getJobs($event)\" >\r\n                    <option value=\"\"></option>\r\n                    <option value=\"{{i.code}}\" (click)=\"getJobs()\" *ngFor=\"let i of Jobs\">{{i.value}} </option>\r\n\r\n                </select>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <!--پایان ردیف 3-->\r\n        <!--ردیف 4 -->\r\n        <div class=\"col-12 d-flex my-1\">\r\n            <div class=\"col-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">تعداد فرزندان:</label>\r\n            </div>\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n                <select name=\"\" id=\"\" class=\"form-control\" (change)=\"getChildren($event)\">\r\n                    <option value=\"\"></option>\r\n                    <option value=\"0\">ندارد </option>\r\n                    <option value=\"1\"> 1 </option>\r\n                    <option value=\"2\"> 2</option>\r\n                    <option value=\"3\"> 3</option>\r\n                    <option value=\"4\"> 4</option>\r\n                    <option value=\"5\"> 5</option>\r\n                    <option value=\"6\"> 6</option>\r\n                    <option value=\"7\"> 7</option>\r\n                    <option value=\"8\"> 8</option>\r\n                    <option value=\"9\">9</option>\r\n                    <option value=\"10\"> 10</option>\r\n                    <option value=\"11\"> 11</option>\r\n                    <option value=\"12\"> 12</option>\r\n                    <option value=\"13\"> 13</option>\r\n                    <option value=\"14\"> 14</option>\r\n                    <option value=\"15\"> 15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" style=\"margin-left: 40px\" >همراه بیمار:</label>\r\n            </div>\r\n\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n            <button class=\"btn btn-outline-primary\" (click)=\"patinetHasRelatieve()\">دارد</button>\r\n            <button class=\"btn btn-outline-primary\"(click)=\"patinetDosentHasRelatieve()\">ندارد </button>\r\n            </div>\r\n        </div>\r\n        <!--پایان ردیف 4-->\r\n        <!--ردیف5-->\r\n        <div class=\"col-12 d-flex my-1 justify-content-between\" *ngIf=\"hasRelative\">\r\n            <div class=\" my-1\" style=\"text-align: right;direction: rtl;margin-left: 30px\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\" >نام و نام خانوادگی همراه:</label>\r\n            </div>\r\n\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"relativeName\" >\r\n            </div>\r\n            <div class=\"col-2\" style=\"text-align: right; padding: 0\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">نسبت همراه با بیمار</label>\r\n            </div>\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\"></option>\r\n                    <option value=\"\">پدر</option>\r\n                    <option value=\"\">مادر </option>\r\n                    <option value=\"\">پدربزرگ </option>\r\n                    <option value=\"\">مادربزرگ </option>\r\n                    <option value=\"\">مادربزرگ </option>\r\n                    <option value=\"\">خواهر </option>\r\n                    <option value=\"\">برادر </option>\r\n                    <option value=\"\">همسر </option>\r\n                    <option value=\"\">فرزند </option>\r\n                    <option value=\"\">فامیل </option>\r\n                    <option value=\"\">دوست </option>\r\n                    <option value=\"\">آشنا </option>\r\n                    <option value=\"\">همسایه </option>\r\n                    <option value=\"\">همکار </option>\r\n                    <option value=\"\">سایر </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"\" style=\"text-align: right;\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">شماره تلفن همراه بیمار:</label>\r\n            </div>\r\n            <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"relatedTel\">\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <!--پایان ردیف 5-->\r\n        <!--ردیف  نحوه مراجعه-->\r\n        <div class=\"col-12 d-flex my-1\">\r\n            <div class=\"\" style=\"text-align: right\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">نحوه مراجعه به مددکار اجتماعی</label>\r\n            </div>\r\n            <div class=\"col-10 mr-2 d-flex\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n\r\n                    <button class=\"btn btn-outline-primary  \" (click)=\"getINteranceType(i.code,i.value)\"  *ngFor=\"let i of InteranceType\" >{{i.value}}</button>\r\n\r\n                    <!--<button  class=\"btn btn-outline-primary form-control\">راند</button>-->\r\n\r\n\r\n                    <!--<button  class=\"btn btn-outline-primary form-control\">تریاژ</button>-->\r\n\r\n\r\n                    <!--<button  class=\"btn btn-outline-primary col-2 form-control\">ارجاع از کادر درمان </button>-->\r\n\r\n\r\n                <!--<button class=\"btn btn-outline-primary col-3 form-control\">ارجاع از سازمان های دولتی </button>-->\r\n\r\n\r\n                <!--<button class=\"btn btn-outline-primary col-3 form-control\">ارجاع از سازمان های غیر دولتی  </button>-->\r\n\r\n\r\n                <!--<button class=\"btn btn-outline-primary form-control\">سایر</button>-->\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <!--پایان نحوه مراجعه-->\r\n            <!--گروه هدف-->\r\n\r\n            <!--<div class=\"col-12 d-flex\" >-->\r\n\r\n                <!--<div class=\"col-1\">-->\r\n                    <!--<label for=\"\" class=\"mt-1 text-bold-700\">گروه هدف :</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"col-5 d-flex\">-->\r\n                    <!--<div class=\"col-10\" >-->\r\n                        <!--<input type=\"text\" class=\"form-control\" style=\"border-left: 1px solid gray\" (click)=\"focuseInput()\" value=\"{{targetItemInputValue}}\" >-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"showGruopMain \" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" >-->\r\n                                <!--<li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getTargetItem(i.id,i.value)\" *ngFor=\"let i of targetGroupMAin\">{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"col-1\">-->\r\n                        <!--<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-chevron-bar-down\" viewBox=\"0 0 16 16\">-->\r\n                            <!--<path fill-rule=\"evenodd\" d=\"M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z\"/>-->\r\n                        <!--</svg>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"col-1\">-->\r\n                    <!--<label for=\"\" class=\"mt-1 text-bold-700\">گروه هدف :</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"col-5 d-flex\">-->\r\n                    <!--<div class=\"col-10\"  >-->\r\n                        <!--<input type=\"text\" class=\"form-control\" style=\"border-left: 1px solid gray\" value=\"{{TargetInputValue}}\" >-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='1'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of childAbuse\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='2'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Violence\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='3'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of sycotik\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='4'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of parentProblem\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='5'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of DisorderFamily\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='6'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Criticalconditions\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='7'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent)\" style=\"cursor: pointer\" *ngFor=\"let i of Insurancedocuments\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='8'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent)\" style=\"cursor: pointer\" *ngFor=\"let i of other\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"col-12\" *ngIf=\"id==='9'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                            <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse\" >-->\r\n                                <!--<li class=\"list-group-item\">انتخاب کنید</li>-->\r\n                                <!--<li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Acutedisease\" >{{i.value}}</li>-->\r\n                            <!--</ul>-->\r\n                        <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"col-1\">-->\r\n                        <!--<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-chevron-bar-down\" viewBox=\"0 0 16 16\">-->\r\n                            <!--<path fill-rule=\"evenodd\" d=\"M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z\"/>-->\r\n                        <!--</svg>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--لیست گروه هدف ها-->\r\n\r\n\r\n            <!--پایان گروه هدف -->\r\n        <!-- گره های هدف آرایه -->\r\n    <div class=\"col-12 mt-5\" style=\"padding: 0\" *ngFor=\"let u of TargetArray;let myIndex=index\">\r\n                <div style=\"padding: 0\" class=\"col-12 d-flex\" >\r\n\r\n        <div class=\"col-1\">\r\n            <label for=\"\" class=\"mt-1 text-bold-700\">گروه هدف :</label>\r\n        </div>\r\n        <div class=\"col-5 d-flex\">\r\n            <div class=\"col-10\" >\r\n                <input type=\"text\" class=\"form-control\" style=\"border-left: 1px solid gray\" (click)=\"focuseInput()\" value=\"{{targetItemInputValue}}\" >\r\n                <div class=\"col-12\" *ngIf=\"showGruopMain \" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul  *ngIf=\"Targetnumberofarray  == myIndex +1 \" class=\"list-group\" style=\"direction: rtl;text-align: right\" >\r\n                        <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getTargetItem(i.id,i.value)\" *ngFor=\"let i of targetGroupMAin\">{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n            <!--<div class=\"col-1\">-->\r\n                <!--<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-chevron-bar-down\" viewBox=\"0 0 16 16\">-->\r\n                    <!--<path fill-rule=\"evenodd\" d=\"M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z\"/>-->\r\n                <!--</svg>-->\r\n            <!--</div>-->\r\n        </div>\r\n        <div class=\"col-1\">\r\n            <label for=\"\" class=\"mt-1 text-bold-700\">گروه هدف :</label>\r\n        </div>\r\n        <div class=\"col-5 d-flex\">\r\n            <div class=\"col-10\"  >\r\n                <input type=\"text\" class=\"form-control\" style=\"border-left: 1px solid gray\" value=\"{{TargetInputValue}}\" >\r\n                <div class=\"col-12\" *ngIf=\"id==='1'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul  class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1 \" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of childAbuse\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='2'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Violence\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='3'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && numberofTragetArray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of sycotik\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='4'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of parentProblem\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='5'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of DisorderFamily\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='6'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Criticalconditions\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='7'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent)\" style=\"cursor: pointer\" *ngFor=\"let i of Insurancedocuments\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='8'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent)\" style=\"cursor: pointer\" *ngFor=\"let i of other\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"id==='9'\" style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul  class=\"list-group\" style=\"direction: rtl;text-align: right\" *ngIf=\"showChildAbouse && Targetnumberofarray == myIndex +1\" >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\" (click)=\"getChildAbouseDate(i.code,i.persent,i.value)\" style=\"cursor: pointer\" *ngFor=\"let i of Acutedisease\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n            <!--<div class=\"col-1\">-->\r\n                <!--<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-chevron-bar-down\" viewBox=\"0 0 16 16\">-->\r\n                    <!--<path fill-rule=\"evenodd\" d=\"M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z\"/>-->\r\n                <!--</svg>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n        <div class=\"col-12 my-1 d-flex\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-2 d-flex\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">کد گروه: {{code}}</label>\r\n                <p></p>\r\n            </div>\r\n            <div class=\"col-2 d-flex\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">  درصد: {{persent}}</label>\r\n                <p></p>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n<div class=\"col-12 my-3\" style=\"direction: rtl;text-align: right\"  >\r\n    <button class=\"btn  btn-lg\" (click)=\"addToTarget()\" style=\"border: 1px solid;background-color: #0A52E1;color: white\" >اضافه کردن گروه هدف\r\n\r\n        <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-plus-lg mx-2\" viewBox=\"0 0 16 16\">\r\n            <path d=\"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z\"/>\r\n        </svg>\r\n    </button>\r\n</div>\r\n\r\n\r\n        <!--پایان آرایه گره های هدف -->\r\n\r\n\r\n        <!--<div class=\"col-12\">-->\r\n            <!--<button (click)=\"addParvandeMadadkari()\">کلیک</button>-->\r\n        <!--</div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n                <h5 >گروه اطلاعات تریاژ مددکاری اجتماعی\r\n                </h5>\r\n                <!--<h5>Patient Information</h5>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\">\r\n        <!--ردیف اول -->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n\r\n            <div class=\"col-1 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">  تاریخ: </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <p class=\"text-bold-700\">{{today}}</p>\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">ساعت   :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <p class=\"text-bold-700\">{{finalTime}}</p>\r\n            </div>\r\n        </div>\r\n        <!--پیابان ردیف اول -->\r\n\r\n        <!-- ردیف 2م-->\r\n        <div class=\"col-12 my-2 d-flex\">\r\n            <div class=\"col-6\" style=\"text-align: right\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">شدت بیماری بر اساس ESI:</p>\r\n                <div class=\"col-12\">\r\n                    <input type=\"text\" class=\"form-control dangerInput\" [(ngModel)]=\"ESIInput\"  (click)=\"ESIList()\" >\r\n                    <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowESI\">\r\n                        <div class=\"col-12\" style=\"padding: 0\" >\r\n                            <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" >\r\n                                    <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getESI(i.value,i.score)\" *ngFor=\"let i of ESI\">{{i.value}}</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\"style=\"text-align: right\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\"  style=\"color: black\">پوشش بیمه ای:</p>\r\n                <div class=\"col-12\">\r\n                    <input type=\"text\" class=\"form-control dangerInput\" [(ngModel)]=\"InsurancecoverageInput\"  (click)=\"InsurancecoverageList()\" >\r\n                    <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowInsurancecoverage\">\r\n                        <div class=\"col-12\" style=\"padding: 0\" >\r\n                            <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" >\r\n                                    <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getInsurancecoverage(i.value,i.score)\" *ngFor=\"let i of Insurancecoverage\">{{i.value}}</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--پایان ردیف 2-->\r\n        <!--ردیف3-->\r\n        <div class=\"col-12 d-flex my-2\">\r\n            <div class=\"col-6\" style=\"text-align: right\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">گروه های پرخطر:</p>\r\n                <div class=\"col-12\">\r\n                    <div class=\"col-12\">\r\n                        <ng-select [items]=\"dangerGroups\"\r\n                                   style=\"font-family: iransans\"\r\n                                   bindLabel=\"value\"\r\n                                   bindValue=\"code\"\r\n                                   [multiple]=\"true\"\r\n                                   placeholder=\"گروه های پرخطر \"\r\n                                   [hideSelected]=\"true\"\r\n                                   [(ngModel)]=\"selectedCityIds\">\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\"style=\"text-align: right\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\"  style=\"color: black\">حضور همراه موثر:</p>\r\n                <div class=\"col-12\">\r\n                    <input type=\"text\" class=\"form-control dangerInput\" [(ngModel)]=\"EffectiveCompanionInput\"  (click)=\"EffectiveCompanionList()\" >\r\n                    <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowEffectiveCompanion\">\r\n                        <div class=\"col-12\" style=\"padding: 0\" >\r\n                            <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                <ul class=\"list-group\" style=\"direction: rtl;text-align: right\" >\r\n                                    <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getEffectiveCompanion(i.value,i.score)\" *ngFor=\"let i of EffectiveCompanion\">{{i.value}}</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--پایان 3-->\r\n        <!--ردیف 4-->\r\n        <div class=\"col-12 my-2 \" style=\"text-align: right\">\r\n            <div class=\"col-6\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">شرح مختصر:</p>\r\n\r\n            </div>\r\n            <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"5\" [(ngModel)]=\"shortExplain\"></textarea>\r\n        </div>\r\n        <!--پایان 4-->\r\n        <!--ردیف5-->\r\n        <div class=\"col-12 my-1 d-flex\" style=\"text-align: right\">\r\n            <label for=\"\" class=\"mt-1 text-bold-700 mt-2\"> تعیین الویت: </label>\r\n            <div class=\"col-1\" style=\"font-size: 1.2rem;background-color:#0A52E1;color: white;text-align: center ;border-radius: 10px\" [ngClass]=\"{'red':color == 1,'orange':color==2,'yellow':color==3,'green':color==4}\" >\r\n            <p class=\"mt-2\" style=\"color: white\" [ngClass]=\"{'yellow':color==3}\" >{{Level}}</p>\r\n            </div>\r\n\r\n            <div class=\"col-2 mr-1\" style=\"font-size: 1.2rem;background-color:#0A52E1;text-align: center ;border-radius: 10px\">\r\n                <p class=\"mt-2\" style=\"color: white\">مجموع امتیاز:  {{finalScore}} </p>\r\n            </div>\r\n        </div>\r\n        <!--پایان ردیف 5-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n\r\n                <h5 >گروه اطلاعات راند مددکاری اجتماعی</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\">\r\n        <!--ردیف اول -->\r\n        <div class=\"col-12  d-flex my-1\" >\r\n            <div class=\"col-1 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">  تاریخ: </label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <p class=\"text-bold-700\">{{today}}</p>\r\n            </div>\r\n\r\n            <div class=\"col-2 my-1\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">ساعت   :</label>\r\n            </div>\r\n            <div class=\"col-2 my-1\">\r\n                <p class=\"text-bold-700\">{{finalTime}}</p>\r\n            </div>\r\n        </div>\r\n        <!--ردیف مخفی شده-->\r\n        <div class=\"col-12 \" *ngIf=\"ShowRand===true\">\r\n            <div class=\"col-12 border\"  style=\"direction: rtl;text-align: right\">\r\n                <p>هیچ راندی ثبت نشده است.</p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12  border\"  *ngFor=\"let container of containers;let y = index\"   >\r\n                <div  [ngClass]=\"{'gray':container.active}\"      >\r\n                    <div class=\"col-12 d-flex my-1\"  >\r\n\r\n                        <div class=\"col-1 my-1\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">  شبکه حمایتی  :</label>\r\n                        </div>\r\n                        <div  class=\"col-2 my-1  \" style=\"text-align: right\">\r\n                            <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                <span   *ngIf=\"x.id==y\">{{x.hemayati}}</span>\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"col-1 my-1\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">     شرایط روانی:\r\n                                :\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-2 my-1\">\r\n                            <div class=\"\" style=\"text-align: right\">\r\n                                <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                    <span *ngIf=\"x.id==y\">{{x.ravani}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-2 my-1 \" style=\"text-align: right\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">\r\n                                وضعیت اقتصادی   :</label>\r\n                        </div>\r\n                        <div class=\"col-2 my-1\" style=\"text-align: right;\">\r\n                            <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                <span *ngIf=\"x.id==y\">{{x.Eghtesadi}}</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12  d-flex my-1\" >\r\n\r\n                        <div class=\"col-1 my-1\" style=\"direction: rtl;text-align: right;padding: 0\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">گروه های پرخطر:</label>\r\n                        </div>\r\n                        <div class=\"col-2 d-flex my-1  \" style=\"text-align: right;direction: rtl;padding: 0\">\r\n                            <!--<p class=\"text-bold-700\" >-->\r\n                                <!--{{array}}-->\r\n                            <!--</p>-->\r\n                            <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                <span *ngIf=\"x.id==y\">{{x.valueDanger}}</span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"col-1  my-1\" style=\"direction: rtl;text-align: right\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">     مسایل قانونی\r\n                                :\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-2 my-1\">\r\n                            <div class=\"\" style=\"text-align: right\">\r\n                                <!--<p class=\"text-bold-700\">-->\r\n                                    <!--{{LegalValue}}-->\r\n                                <!--</p>-->\r\n                                <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                    <span *ngIf=\"x.id==y\">{{x.ghanoon}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-2 my-1\" style=\"direction: rtl;text-align: right\">\r\n                            <label for=\"\" class=\"mt-1 text-bold-700\">\r\n                                اختلال در عملکرد اجتماعی    :</label>\r\n                        </div>\r\n                        <div class=\"col-2 my-1\" style=\"text-align: right\">\r\n                            <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                <span *ngIf=\"x.id==y\">{{x.ekhtelal}}</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 d-flex\">\r\n                        <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n                            <p style=\"color: black;\" class=\"text-bold-700\">\r\n                                شرح مختصر :\r\n                            </p>\r\n\r\n                        </div>\r\n                        <div class=\"col-10\" style=\"text-align: right;direction: rtl\">\r\n                            <p class=\"text-bold-700\" *ngFor=\"let x of dataRand\">\r\n                                <span *ngIf=\"x.id==y\">{{x.summery}}</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 my-1 d-flex\"  >\r\n                        <div class=\"col-2\" style=\"direction: rtl;text-align: right\">\r\n                            <p style=\"color: black;\" class=\"text-bold-700\">\r\n                                تاریخ ثبت /ویرایش\r\n                            </p>\r\n\r\n                        </div>\r\n                        <div class=\"col-10\" style=\"text-align: right;direction: rtl\">\r\n                            <p class=\"text-bold-700\">\r\n                                {{today}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <hr>\r\n            <div class=\"col-12\" *ngFor=\"let i of dataRand;let in=index\">\r\n                <button class=\"btn btn-danger ml-1\" *ngIf=\"i.id==y\" style=\"color: white!important;font-family: iransans;font-size: 1.4rem\" (click)=\"grayClass(container)\">ابطال</button>\r\n                <button class=\"btn btn-primary\" style=\"color: white!important;font-family: iransans;font-size: 1.4rem\" (click)=\"edit(in,content2)\" *ngIf=\"i.id==y\">ویرایش</button>\r\n            </div>\r\n        </div>\r\n        <!-- پایان ردیف مخفی شده-->\r\n        <!--Add button-->\r\n        <div class=\"col-12\">\r\n            <button style=\"background-color: #0A52E1;border-radius: 50%;\" (click)=\"openRandModal(content)\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" style=\"color: white\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\r\n                <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\r\n            </svg></button>\r\n        </div>\r\n        <!--شرح نهای ارزیابی -->\r\n        <div class=\"col-12 my-2 \" style=\"text-align: right\">\r\n            <div class=\"col-6\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">شرح نهایی ارزیابی :</p>\r\n            </div>\r\n            <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"5\" [(ngModel)]=\"FinalExplain\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n\r\n                <h5 >گروه اطلاعات مداخله</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\">\r\n\r\n\r\n\r\n        <!--شرح مداخله-->\r\n        <div class=\"col-12 my-2 \" style=\"text-align: right\">\r\n            <div class=\"col-6\">\r\n                <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">شرح  مداخله :</p>\r\n            </div>\r\n            <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"5\"></textarea>\r\n        </div>\r\n        <!--ایجاد مداخله-->\r\n        <div class=\"col-12  border\" *ngFor=\"let container of InterventionContainer;let myIndex=index;\" >\r\n            <div class=\"col-12 d-flex\">\r\n                <div class=\"col-4 my-1\" style=\"text-align: right\">\r\n                    <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">تاریخ مداخله:</p>\r\n                    <dp-date-picker\r\n                            dir=\"rtl\"\r\n                            mode=\"day\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"تاریخ\"\r\n                            theme=\"dp-material\"\r\n                            [(ngModel)]=\"MOdakheleDate\">\r\n                    </dp-date-picker>\r\n                </div>\r\n                <div class=\"col-7 my-1\" style=\"text-align: right\">\r\n                    <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">عنوان  مداخله :</p>\r\n                    <div class=\"col-12\">\r\n                        <!--<input type=\"text\" class=\"form-control dangerInput\" value=\"{{dangerInput}}\" (click)=\"showdangerList()\" >-->\r\n                        <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" >\r\n                            <div class=\"col-10\" (click)=\"ShowInterventionList(myIndex)\">\r\n                                <div >\r\n\r\n                                        <span   class=\"px-1 \" *ngFor=\"let i of InterventionArray;let y =index\" >\r\n                                            <span *ngIf=\"i.id==myIndex\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                                               {{i.value}}\r\n                                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeInterventionItem(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                                      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                                      </svg>\r\n                                            </span>\r\n\r\n\r\n\r\n                                      </span>\r\n\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeInterventionAll()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-12 d-flex\" style=\"padding:0\"*ngIf=\"ShowIntervention\">\r\n                            <div class=\"col-12\" style=\"padding: 0\">\r\n                                <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                    <ul *ngIf=\"numberofarray == myIndex +1\" class=\"list-group\" style=\"direction: rtl;text-align: right\" >\r\n                                        <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getIntervention(i.value,i.code,myIndex)\" *ngFor=\"let i of Intervention;let index=index\">{{i.value}}</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1  position-relative\" >\r\n                    <button class=\"d-flex align-content-center position-absolute\"   style=\"background-color: red;border-radius: 50%;top: 50%\" (click)=\"removeIntervention(myIndex)\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\"style=\"color: white\" height=\"30\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\r\n                            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\r\n                            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\r\n                        </svg>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 my-2 \" style=\"text-align: right\">\r\n                <div class=\"col-6\">\r\n                    <p for=\"\" class=\"mt-1 text-bold-700\" style=\"color: black\">شرح  مداخله :</p>\r\n                </div>\r\n                <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"3\"></textarea>\r\n            </div>\r\n\r\n\r\n\r\n        </div >\r\n        <!--Add button-->\r\n        <div class=\"col-12\">\r\n            <button style=\"background-color: #0A52E1;border-radius: 50%;\" (click)=\"addIntervention()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" style=\"color: white\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\r\n                <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\r\n            </svg></button>\r\n        </div>\r\n        <!--نتیجه نهایی مداخله-->\r\n        <div class=\"col-12 my-1 d-flex\">\r\n            <div class=\"col-1 mt-1\" style=\"text-align: right;padding: 0\">\r\n                <label for=\"\" class=\"mt-1 text-bold-700\">  نتیجه نهایی مداخله</label>\r\n\r\n            </div>\r\n            <div class=\"col-4 mt-1\">\r\n                <input type=\"text\" value=\"{{FinalInterventionSelect}}\" (click)=\"showFinalInterventionList()\" class=\"form-control\" style=\"border-left: 1px solid gray\" >\r\n                <div class=\"col-12\" *ngIf=\"showFinalIntervention\"  style=\"max-height: 300px;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\"  >\r\n                        <li class=\"list-group-item\">انتخاب کنید</li>\r\n                        <li class=\"list-group-item\"  style=\"cursor: pointer\" (click)=\"getFinalIntervention(i.id,i.value)\"  *ngFor=\"let i of FinalIntervention\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!--اقدامات ------------------------------------------------------------------------------------------------------------------------------>\r\n            <div class=\"col-5\">\r\n                <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" *ngIf=\"FinalInterventionID==='1'\" >\r\n                <span class=\"mt-1 text-bold-700\" *ngIf=\"eghdamatShow\" >{{eghdamat}}</span>\r\n                <div class=\"col-10\" (click)=\"ShowFinalInterventionFirstList()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of FinalInterventionFirstArray;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i.value}}\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeFinalInterventionFirst(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeFinalInterventionFirstAll()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                </div>\r\n            </div>\r\n                <div class=\"col-12\" *ngIf=\"ShowFinalInterventionFirst\"   style=\"max-height: 300px;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\"  >\r\n                        <li class=\"list-group-item\"  style=\"cursor: pointer\" (click)=\"getFinalInterventionFirst(i.value)\"   *ngFor=\"let i of FinalInterventionFirst\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!--دوم--------------------------------------------------------------------------------------------------------------------------------------------------->\r\n\r\n                <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" *ngIf=\"FinalInterventionID==='2'\" >\r\n                    <span class=\"mt-1 text-bold-700\" *ngIf=\"eghdamatShow\" >{{eghdamat}}</span>\r\n                    <div class=\"col-10\" (click)=\"ShowFinalInterventionSecondList()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of FinalInterventionSecondArray;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i.value}}\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeFinalInterventionsecond(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeFinalInterventionSecondAll()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"ShowFinalInterventionSecond\"   style=\"max-height: 300px;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\"  >\r\n                        <li class=\"list-group-item\"  style=\"cursor: pointer\" (click)=\"getFinalInterventionsecond(i.value)\"   *ngFor=\"let i of FinalInterventionSecond\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <!--سو---------------------------------------------------------------------------------------------------------------------------------------------------------م-->\r\n                <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" *ngIf=\"FinalInterventionID==='3'\" >\r\n                    <span class=\"mt-1 text-bold-700\" *ngIf=\"eghdamatShow\" >{{eghdamat}}</span>\r\n                    <div class=\"col-10\" (click)=\"ShowFinalInterventionThirdList()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of FinalInterventionThirdArray;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i.value}}\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeFinalInterventionThird(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeFinalInterventionThirdAll()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"ShowFinalInterventionThird\"   style=\"max-height: 300px;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right\"  >\r\n                        <li class=\"list-group-item\"  style=\"cursor: pointer\" (click)=\"getFinalInterventionThird(i.value)\"   *ngFor=\"let i of FinalInterventionThird\" >{{i.value}}</li>\r\n                    </ul>\r\n                </div>\r\n                <!------------------------------------------------------------------------------------------پایان نتیجه نهایی---------------------------------------------------------------------->\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-2\" style=\"padding: 0\">\r\n            <div class=\"header\">\r\n\r\n                <h5 >گروه اطلاعات ترخیص</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border\">\r\n    <div class=\"col-12 my-1 d-flex\">\r\n        <div class=\"col-4\" style=\"text-align: right\">\r\n            <p class=\"text-bold-700\" style=\"color: black\">آیا بیمار حمایت اقتصادی نیاز دارد </p>\r\n        </div>\r\n        <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n            <button class=\"btn btn-outline-primary\" (click)=\"hasSuppoort()\">دارد </button>\r\n            <button class=\"btn btn-outline-primary\" (click)=\"hasNotSuppoort()\">ندارد  </button>\r\n        </div>\r\n    </div>\r\n        <div class=\"col-12 my-1 d-flex\" *ngIf=\"hasSuppoortOK===true\">\r\n            <div class=\"col-4\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">درصد اولیه حمایت اقتصادی بر اساس گروه های هدف</p>\r\n            </div>\r\n            <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                <p class=\"text-bold-700\">{{persent}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 my-1 d-flex\" *ngIf=\"hasSuppoortOK===true\">\r\n            <div class=\"col-4\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">اعمال نظر مددکار اجتماعی (30±)</p>\r\n            </div>\r\n            <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                <input type=\"number\" placeholder=\"درصد\"class=\"form-control\" max=\"30\" min=\"-30\"  [(ngModel)]=\"HelpPersent\" (ngModelChange)=\"Computing()\" >\r\n                </div>\r\n        </div>\r\n        <div>\r\n\r\n        </div>\r\n        <div class=\"col-12 my-1 d-flex\" *ngIf=\"HelpPersent>0 ||HelpPersent<0\">\r\n            <div class=\"col-4\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">شرح اعمال نظر مددکار   </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 my-1\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"expalinIDea\"  *ngIf=\"HelpPersent>0 ||HelpPersent<0 \" name=\"\" id=\"\" cols=\"30\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 my-1 d-flex\" *ngIf=\"hasSuppoortOK===true\">\r\n            <div class=\"col-4\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">درصد نهایی حمایت اقتصادی</p>\r\n            </div>\r\n            <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                <p class=\"text-bold-700\">{{FinallParsent}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 my-1 d-flex\" *ngIf=\"hasSuppoortOK===true\" >\r\n            <div class=\"col-4\" style=\"text-align: right\" >\r\n                <p class=\"text-bold-700\" style=\"color: black\">منبع تامین حمایت اقتصادی</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 my-1 border\" *ngIf=\"hasSuppoortOK===true\" >\r\n            <div class=\"col-12  my-1 d-flex\">\r\n                <div class=\"col-3\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">آورده وزارت بهداشت (ردیف نیازمندان)</p>\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" placeholder=\"درصد\"class=\"form-control\" max=\"100\" min=\"0\" [(ngModel)]=\"behdashPersent\" (input)=\"getbehdashPersent()\" >\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" placeholder=\"مبلغ\"class=\"form-control\" [(ngModel)]=\"behdashtMoney\"  >\r\n                </div>\r\n                <div class=\"col-1\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">ریال</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12  my-1 d-flex\">\r\n                <div class=\"col-3\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">آورده نهادهای حمایتی دولتی</p>\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" [(ngModel)]=\"dolatiPersent\" (input)=\"getdolatiPersent()\"  placeholder=\"درصد\"class=\"form-control\" max=\"100\" min=\"0\">\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" [(ngModel)]=\"dolatiMoney\" placeholder=\"مبلغ\"class=\"form-control\" >\r\n                </div>\r\n                <div class=\"col-1\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">ریال</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12  my-1 d-flex\">\r\n                <div class=\"col-3\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">آورده نهادهای حمایتی غیردولتی</p>\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" [(ngModel)]=\"notDolatiPersent\" (input)=\"getnotDolatiPersent()\" placeholder=\"درصد\"class=\"form-control\" max=\"100\" min=\"0\">\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\"  [(ngModel)]=\"notDolatiMoney\" placeholder=\"مبلغ\"class=\"form-control\">\r\n                </div>\r\n                <div class=\"col-1\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">ریال</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12  my-1 d-flex\">\r\n                <div class=\"col-3\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">آورده موسسه خیریه بیمارستانی</p>\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\" (input)=\"getKheyrieMOney()\" [(ngModel)]=\"kheyriePersent\" placeholder=\"درصد\"class=\"form-control\" max=\"100\" min=\"0\">\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input type=\"number\"  [(ngModel)]=\"kheyrieMoney\" placeholder=\"مبلغ\"class=\"form-control\">\r\n                </div>\r\n                <div class=\"col-1\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">ریال</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12  my-1 d-flex\">\r\n                <div class=\"col-3\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\" >آورده خیرین</p>\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input [(ngModel)]=\"nikPersent\"  (input)=\"getnikPresent($event)\" type=\"number\" placeholder=\"درصد\"class=\"form-control\" max=\"100\" min=\"0\">\r\n                </div>\r\n                <div class=\"col-2\" style=\"text-align: right;direction: rtl\">\r\n                    <input [(ngModel)]=\"nikMoney\"  type=\"number\" placeholder=\"مبلغ\"class=\"form-control\">\r\n                </div>\r\n                <div class=\"col-1\" style=\"text-align: right\">\r\n                    <p class=\"text-bold-700\" style=\"color: black\">ریال</p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            </div>\r\n        <div class=\"col-12 mt-2 d-flex\">\r\n            <div class=\"col-4\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">توصیه های پس از ترخیص</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 mt-1 mb-2\">\r\n            <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"3\" [(ngModel)]=\"suggestionAfter\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 my-1 d-flex\">\r\n            <div class=\"col-3\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">نیاز به پیگیری پس از ترخیص دارد؟</p>\r\n            </div>\r\n            <div class=\"col-3\" style=\"text-align: right\">\r\n                <button class=\"btn btn-outline-primary\" (click)=\"isHasFaloowUp()\">دارد </button>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"HasnotFallowUp()\">ندارد </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 my-1\" *ngIf=\"hasFallowUp\">\r\n            <div class=\"col-3\" style=\"text-align: right\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">برنامه پیگیری</p>\r\n            </div>\r\n            <div class=\"col-12\" style=\"text-align: right\">\r\n                <textarea name=\"\" class=\"form-control\" id=\"\" cols=\"30\" rows=\"3\" [(ngModel)]=\"FallowProgram\"></textarea>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        </div>\r\n    <div class=\"row border\">\r\n        <div class=\"col-12 my-1\">\r\n            <button class=\"btn btn-lg btn-success\" style=\"color: white!important;\">\r\n                ذخیره فرم\r\n\r\n            </button>\r\n            <button class=\"btn btn-lg btn-outline-danger\">\r\nتایید نهای و بستن فرم\r\n\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-lg \" style=\"background-color: #0a52e1;color: white\" printSectionId=\"print-section\" [printStyle]= \"{div: {'direction' : 'rtl'}}\" [useExistingCss]=\"true\" ngxPrint  >پرینت </button>\r\n        </div>\r\n        <div class=\"container\">\r\n            <ng-select [items]=\"dangerGroups\"\r\n                       style=\"font-family: iransans\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"code\"\r\n                       [multiple]=\"true\"\r\n                       placeholder=\"Select cities\"\r\n                       [hideSelected]=\"true\"\r\n                       [(ngModel)]=\"selectedCityIds\">\r\n            </ng-select>\r\n            {{selectedCityIds}}\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n<div class=\"container mt-1\" *ngIf=\"info\" id=\"print-section\" style=\"font-size: 16px;display: none\">\r\n    <div class=\"col-12\">\r\n        <h4 class=\"text-center\">وزارت بهداشت، درمان و آموزش پزشكي\r\n        </h4>\r\n        <h5 class=\"text-center mt-1\">\r\n            Ministry of Health & Medical Education\r\n        </h5>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <div  class=\"d-flex justify-content-between col-6\">\r\n            <h5>\r\n                دانشگاه علوم پزشکی :\r\n            </h5>\r\n            <h5>\r\n                :University of Medical Science\r\n            </h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <div  class=\"d-flex justify-content-between col-6\">\r\n            <h5>\r\n                مرکز پزشكي آموزشی درمانی  :\r\n            </h5>\r\n            <h5>\r\n                :Medical Center\r\n            </h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 d-flex mt-1\" style=\"padding: 0;\">\r\n        <div class=\"col-3 border d-flex justify-content-between \">\r\n            <p class=\"text-bold-700\">شماره پرونده:</p>\r\n            <p></p>\r\n            <p class=\"text-bold-700\">:Record No</p>\r\n        </div>\r\n        <div class=\"col-7\">\r\n            <h5 style=\"text-align: right;\">\r\n                CASE MANAGEMENT SHEET & SOCIAL WORK ASSESSMENT\r\n            </h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12  \" style=\"padding: 0;border: 1px solid;\">\r\n        <div class=\"col-12 d-flex \" style=\"padding: 0;font-size: 16px\">\r\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\r\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <p class=\"text-bold-700\">نام خانوادگی :</p>\r\n                        <p class=\"text-bold-700\"> :Family Name</p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <p style=\"font-size: 16px\" class=\"text-center text-bold-700\">{{info[0]['lastName']}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\" d-flex justify-content-around\">\r\n                        <p class=\"text-bold-700\">نام  :</p>\r\n                        <p class=\"text-bold-700\"> : Name</p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"text-bold-700 text-center \" style=\"font-size: 16px\">{{info[0]['firstName']}}</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\r\n                <div class=\"col-4 \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <p class=\"text-bold-700\">جنس  :</p>\r\n\r\n                        <p class=\"text-bold-700\"> :Sex </p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\"> {{info[0]['genderName']}}</p>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-8\" style=\"padding: 0;\">\r\n                    <div class=\"col-12 d-flex justify-content-around\" style=\"flex-wrap: nowrap;padding: 0;\">\r\n                        <p class=\"text-bold-700\">تاریخ مراجعه  :</p>\r\n                        <p>{{info[0]['encounterDate']}}</p>\r\n                        <p class=\"text-bold-700\"> : Date of Admission</p>\r\n                    </div>\r\n                    <div class=\"col-12 d-flex justify-content-around\" style=\"padding: 0;\">\r\n                        <p class=\"text-bold-700\">ساعت مراجعه  :</p>\r\n                        <p>{{info[0]['encounterTime']}}</p>\r\n                        <p class=\"text-bold-700\"> : Time of Admission</p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 d-flex\" style=\"padding: 0;border-top: 1px solid; \">\r\n            <div class=\"col-6 d-flex justify-content-around\" style=\"padding: 0;border-left: 1px solid;\">\r\n                <p class=\"text-bold-700\">آدرس: </p>\r\n                <p class=\"text-bold-700\">{{info[0]['address']}}</p>\r\n                <p class=\"text-bold-700\">:Address</p>\r\n            </div>\r\n            <div class=\"col-6 d-flex \" style=\"padding: 0;border-left: 1px solid;\">\r\n                <div class=\"col-6 d-flex justify-content-between\" style=\"border-left:1px solid ;\">\r\n                    <p class=\"text-bold-700\">کدپذیرش: </p>\r\n                    <p class=\"text-bold-700\"> {{info[0]['encounterID']}} </p>\r\n                    <p class=\"text-bold-700\"> :ADM Code</p>\r\n                </div>\r\n                <div class=\"col-6 d-flex justify-content-between\">\r\n                    <p class=\"text-bold-700\">تلفن: </p>\r\n                    <p class=\"text-bold-700\"> {{info[0]['telNo1']}} </p>\r\n                    <p class=\"text-bold-700\"> :Tel</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\r\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\r\n\r\n                <div class=\"col-6  \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <p class=\"text-bold-700\">کدملی/کدآزمایش   :</p>\r\n                        <p class=\"text-bold-700\"> National/segment Code: </p>\r\n                    </div>\r\n                    <div>\r\n                        <p style=\"font-size: 16px;text-align: center\" class=\"text-bold-700\">{{info[0]['nationalCode']}}</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <p class=\"text-bold-700\">تاریخ تولد   :</p><br>\r\n\r\n                        <p class=\"text-bold-700\"> : Date of Birth</p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"text-bold-700\" style=\"text-align: center;font-size: 16px\">{{info[0]['birthDate']}} </p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\r\n                <div class=\"col-6  \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <p class=\"text-bold-700\">نام و نام خانوادگی پدر   :</p>\r\n                        <p class=\"text-bold-700\"> Father's Name &\r\n                            : Family name\r\n                        </p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"text-bold-700\" style=\"text-align: center;font-size: 16px\">{{info[0]['fatherName']}} </p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-6 \" style=\"padding: 0;\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <p class=\"text-bold-700\">نام و نام خانوادگی مادر   :</p>\r\n                        <p class=\"text-bold-700\"> Mather's Name &\r\n                            :  Family name:\r\n                        </p>\r\n\r\n                    </div>\r\n                    <div>\r\n                        <p  class=\"text-bold-700\" style=\"font-size: 16px;text-align: center\" >{{info[0]['motherFirstName']}}  </p>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\r\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\r\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex  justify-content-around\">\r\n                        <p class=\"text-bold-700\">وضعیت تاهل  :</p>\r\n                        <p class=\"text-bold-700\">Marital Status: </p>\r\n                    </div>\r\n                    <div >\r\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\">{{maritalValue}} </p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <p class=\"text-bold-700\"> ملیت    :</p>\r\n                        <p class=\"text-bold-700\"> : Nationality  </p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\" >{{info[0]['countryName']}} </p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\r\n                <div class=\"col-6\" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <div>\r\n                            <p class=\"text-bold-700\"> همراه بیمار      :</p>\r\n                        </div>\r\n                        <div class=\"mr-1\">\r\n                            <label for=\"\">دارد</label>\r\n                            <mat-checkbox class=\"mt-1 mr-1\" [checked]=\"hasRelative===true\"></mat-checkbox>\r\n                            <!--<input class=\"mt-1 mr-1\" type=\"checkbox\" name=\"\" id=\"\" [checked]=\"hasRelative===true\" style=\"width: 15px;height: 15px\">-->\r\n                            <label class=\"mr-1\" for=\"\">ندارد</label>\r\n                            <mat-checkbox class=\"mt-1 mr-1\" [checked]=\"hasRelative===false\" ></mat-checkbox>\r\n\r\n\r\n                            <!--<input class=\"mt-1\" type=\"checkbox\" [checked]=\"hasRelative===false\" style=\"width: 15px;height:15px\" name=\"\" id=\"\">-->\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <div>\r\n                            <p  class=\"text-bold-700 \" style=\"padding: 0\">  Patient Companion      :</p>\r\n                        </div>\r\n                        <div class=\"mr-1\">\r\n                            <label for=\"\" style=\"margin-left: 20px;\">Yes</label>\r\n                            <label class=\"mr-1\" for=\"\">No</label>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <p class=\"text-bold-700\">تلفن </p>\r\n                        <p class=\"text-bold-700\">{{relatedTel}}</p>\r\n                        <p class=\"text-bold-700\">Tel</p>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-6 d-flex justify-content-between\" style=\"padding: 0;\">\r\n                    <p class=\"text-bold-700\">نام و نام خانوادگی همراه   :</p>\r\n                    <p class=\"mt-5 text-bold-700 \">{{relativeName}}   </p>\r\n                    <p class=\"text-bold-700\"> Patient Companion\r\n                        Name & Family\r\n                        Name:\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\r\n            <div class=\"col-6 d-flex justify-content-around \" style=\"padding: 0;\">\r\n                <div class=\"col-6 d-flex \" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <p class=\"text-bold-700\" style=\"text-align: right;\">سطح تحصیلات :</p>\r\n                    <p class=\"text-bold-700\" *ngFor=\"let i of education\"><span *ngIf=\"i.code===educationCode\">{{i.value}}</span>  </p>\r\n                    <p class=\"text-bold-700\"> :Education Level </p>\r\n                </div>\r\n                <div class=\"col-6 d-flex justify-content-around\" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <p class=\"text-bold-700\"> تعداد فرزندان    :</p><br>\r\n\r\n                    <p class=\"text-bold-700\" style=\"font-family: iransans\">{{children}}</p>\r\n                    <p class=\"text-bold-700\"> :   No of Children</p>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\r\n                <div class=\"col-6 d-flex justify-content-around\" style=\"border-left: 1px solid black;padding: 0;\">\r\n                    <p class=\"text-bold-700\"> شغل      :</p>\r\n                    <p class=\"text-bold-700\" *ngFor=\"let i of Jobs\"><span *ngIf=\"JObsCode===i.code\">{{i.value}}</span> </p>\r\n                    <p class=\"text-bold-700\">:Job\r\n\r\n                    </p>\r\n                    <p class=\"text-bold-700\">بخش     :</p>\r\n                    <p>{{info[0]['locationName']}}  </p>\r\n                    <p class=\"text-bold-700\"> :Ward\r\n\r\n                    </p>\r\n\r\n                </div>\r\n                <div class=\"col-6 d-flex justify-content-between\" style=\"padding: 0;\">\r\n                    <p class=\"text-bold-700\"> پزشک معالج:</p>\r\n                    <p>{{info[0]['pracName']}} </p>\r\n                    <p class=\"text-bold-700\">\r\n                        :Attending Physician\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12\" style=\"padding: 0;border-top: 2px solid ;\">\r\n            <div class=\"col-12 d-flex justify-content-between\" style=\"padding: 0;\">\r\n                <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\r\n                    بیمه پایه:\r\n                </p>\r\n                <p class=\"text-bold-700\"> {{info[0]['insurerName1']}}</p>\r\n\r\n                <p class=\"text-bold-700\" style=\"margin-left: 10px\">\r\n                    :Basic Insurance\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between mt-2\" style=\"padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\r\n                بیمه تکمیلی:\r\n            </p>\r\n            <P class=\"text-bold-700\">\r\n                {{info[0]['insurerName2']}}\r\n            </P>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">\r\n                Compllemantary Insurance\r\n            </p>\r\n        </div>\r\n        <div class=\"col-12\" style=\"padding: 0;border-top: 2px solid ;\">\r\n            <div class=\"col-12 d-flex justify-content-between\" style=\"padding: 0;\">\r\n                <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\r\n                    نحوه ورود/ارجاع به واحد مدد کاری اجتماعی :\r\n                </p>\r\n                <p class=\"text-bold-700\" style=\"margin-left: 10px\">\r\n                    :Arrival/Referal Type\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 p-2 mt-2 \" style=\"padding: 0; text-align: right;\">\r\n            <label class=\"text-bold-700\" for=\"\">خود ارجاع  </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.1'\"></mat-checkbox>\r\n            <!--<input type=\"checkbox\" name=\"\" id=\"\" [checked]=\"interanceCode=='1.9.1.1'\">-->\r\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > راند   </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.2'\"></mat-checkbox>\r\n\r\n            <!--<input type=\"checkbox\" name=\"\" id=\"\"[checked]=\"interanceCode=='1.9.1.2'\">-->\r\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\"  >تریاژ    </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.3'\"></mat-checkbox>\r\n\r\n            <label class=\"text-bold-700\" class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" >  ارجاع از کادر درمان  </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.4'\"></mat-checkbox>\r\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > ارجاع از سازمان های دولتی  </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.5'\"></mat-checkbox>\r\n\r\n            <label  class=\"text-bold-700\"for=\"\"  style=\"margin-right: 20px;\"> ارجاع از سازمان های غیر دولتی  </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.6'\"></mat-checkbox>\r\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\"  >سایر    </label>\r\n            <mat-checkbox style=\"margin-right: 10px;margin-top: 10px\" [checked]=\"interanceCode=='1.9.1.7'\"></mat-checkbox>\r\n        </div>\r\n        <div class=\"col-12 p-1 d-flex justify-content-between mt-1\" style=\"padding: 0; border-top: 3px solid;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\r\n                گروه هدف :\r\n            </p>\r\n            <P class=\"text-bold-700\">\r\n\r\n            </P>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">\r\n                Target Gruop\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 mt-1\" style=\"padding: 0;border: 1px solid black;\">\r\n        <div class=\"col-12\">\r\n            <p class=\"text-center text-bold-700\">\r\n                تریاژ\r\n            </p>\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-bordered\" style=\"padding: 0;border: 1px solid black\">\r\n                <thead style=\"padding: 0;\">\r\n                <tr>\r\n                    <th scope=\"col\">ساعت و تاریخ\r\n                        <br>(date & time)</th>\r\n                    <th scope=\"col\"> گروه های پرخطر <br>\r\n                        High Risk Gruop </th>\r\n                    <th scope=\"col\">شدت بیماری بر اساس ESi <br>\r\n                        Illness severity based on ESI\r\n                    </th>\r\n                    <th scope=\"col\">پوشش بیمه ای <br>\r\n                        Insurance Coverage\r\n                    </th>\r\n                    <th scope=\"col\">حضور همراه موثر <br>\r\n                        Effective Participant\r\n\r\n                    </th>\r\n                    <th scope=\"col\" > مجموع امتیاز <br>\r\n                    </th>\r\n\r\n                    <th scope=\"col\" > اولویت  <br>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody style=\"padding: 0;\">\r\n                <tr>\r\n                    <th scope=\"row\">{{today}}{{finalTime}}</th>\r\n                    <td > <span *ngFor=\"let i of dangerInput\">{{i.value}}</span></td>\r\n                    <td>{{ESIInput}}</td>\r\n                    <td>{{InsurancecoverageInput}}</td>\r\n                    <td>{{EffectiveCompanionInput}}</td>\r\n                    <td>{{finalScore}}</td>\r\n                    <td>{{Level}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-12 p-3 d-flex justify-content-between mt-1\" style=\"padding: 0; border-top: 3px solid;\">\r\n            <p class=\"text-bold-700\"style=\"margin-right: 10px\" >\r\n                شرح مختصر  :\r\n            </p>\r\n            <P class=\"text-bold-700\">\r\n                {{shortExplain}}\r\n            </P>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">\r\n                Brief Description\r\n            </p>\r\n        </div>\r\n        <div class=\"col-12\" style=\"border-top: 1px solid black;\" >\r\n            <p class=\"text-center text-bold-700\">\r\n                راند\r\n            </p>\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-bordered\" style=\"padding: 0;margin-top: 20px\">\r\n                <thead style=\"padding: 0;font-size: 13px;text-align: center;\">\r\n                <tr>\r\n                    <th style=\"padding: 0;\">ساعت و تاریخ\r\n                        <br>(date & time)</th>\r\n                    <th >  شبکه های حمایتی <br>\r\n                        Social Support\r\n                        <br>\r\n                        High Risk Gruop </th>\r\n                    <th style=\"padding: 0;\">شرایط روانی<br>\r\n\r\n                        <br>\r\n                        Psychological <br> Conditions\r\n                    </th>\r\n                    <th style=\"padding: 0;\" > وضعیت اقتصادی  <br>\r\n                        Financial/insurance\r\n                    </th>\r\n                    <th style=\"padding: 0;\" >اختلال در عملکرد اجتماعی <br>\r\n                        به علت بیماری و بستری\r\n                        <br>\r\n                        Social dysfunction due to\r\n                        illness and gospitalization\r\n                    </th>\r\n                    <th style=\"padding: 0;\" > گروه های پرخطر   <br>\r\n                        High risk group\r\n                    </th>\r\n\r\n                    <th style=\"padding: 0;\" > مسایل قانونی   <br>\r\n                        Legal issues\r\n                    </th>\r\n                    <th style=\"padding: 0;\" > شرح مختصر     <br>\r\n                        Brief Description\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody style=\"padding: 0;\">\r\n                <tr *ngFor=\"let i of dataRand\">\r\n                    <td>{{today}}{{finalTime}}</td>\r\n                    <td>{{i.hemayati}} </td>\r\n                    <td>{{i.ravani}}</td>\r\n                    <td>{{i.Eghtesadi}}</td>\r\n                    <td>{{i.ekhtelal}}</td>\r\n                    <td>{{i.valueDanger}}</td>\r\n                    <td>{{i.ghanoon}}</td>\r\n                    <td>{{i.summery}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between p-2 \">\r\n            <p class=\"text-bold-700\">شرح نهایی ارزیابی </p>\r\n            <p class=\"text-bold-700\">{{FinalExplain}}</p>\r\n            <p class=\"text-bold-700\">:Final Assessment Summery</p>\r\n\r\n        </div>\r\n        <div class=\"col-12 p-2 d-flex justify-content-between \" style=\"border-top: 1px solid ;\">\r\n            <p class=\"text-bold-700\">  اهداف مداخله: </p>\r\n            <p class=\"text-bold-700\"></p>\r\n            <p class=\"text-bold-700\">:  Porpuse of Intervention</p>\r\n        </div>\r\n        <div class=\"col-12 \" style=\"border-top: 1px solid ;\" >\r\n            <table class=\"table table-bordered\" style=\"padding: 0;margin-top: 20px\">\r\n                <thead style=\"padding: 0;font-size: 13px;text-align: center;\">\r\n                <tr>\r\n                    <th>  تاریخ مداخله\r\n                        (Date of Intervention)\r\n                    </th>\r\n                    <th >  عنوان مداخله\r\n                        High Risk Gruop </th>\r\n\r\n\r\n                    <th >شرح مداخله\r\n                        (Description of the intervention)\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody style=\"padding: 0;text-align: center;\">\r\n                <tr>\r\n                    <td>{{MOdakheleDate}}</td>\r\n                    <td>dasd</td>\r\n                    <td></td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between p-1 \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">   آیا بیمار حمایت اقتصادی نیاز دارد؟\r\n                <label style=\"margin-right: 30px;\" for=\"\">بله</label>\r\n                <mat-checkbox style=\"margin-right: 5px;margin-top: 5px\"  [checked]=\"hasSuppoortOK===true\"></mat-checkbox>\r\n\r\n                <!--<input type=\"checkbox\" name=\"\" [checked]=\"hasSuppoortOK===true\" id=\"\">-->\r\n                <label  style=\"margin-right: 10px;\" for=\"\">خیر</label>\r\n                <mat-checkbox style=\"margin-right: 5px;margin-top: 5px\"  [checked]=\"hasSuppoortOK===false\"></mat-checkbox>\r\n\r\n                <!--<input type=\"checkbox\" name=\"\" id=\"\">-->\r\n\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">:  Financial of the intervention of Intervention</p>\r\n        </div>\r\n        <div class=\"col-12 p-1 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                درصد/مبلغ اولیه حمایت اقتصادی بر اساس گروه های هدف :{{persent}}\r\n            </p>\r\n\r\n        </div>\r\n        <div class=\"col-12 p-1  \" style=\"border-top: 1px solid ;padding: 0; text-align: right;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                اعمال نظر ممدکار اجتماعی        </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                {{expalinIDea}}\r\n            </p>\r\n\r\n        </div>\r\n        <div class=\"col-12 p-1 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                درصد نهایی حمایت اقتصادی:{{FinallParsent}}\r\n            </p>\r\n\r\n        </div>\r\n        <div class=\"col-12  p-1\" style=\"border-top: 1px solid ;padding: 0; text-align: right;\" >\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                منبع تامین حمایت اقتصادی:\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                1-9 آورده وزارت بهداشت(ردیف نیازمندان): درصد<span class=\"text-bold-700\">{{behdashPersent}}%</span>/مبلغ <span class=\"text-bold-700 mx-1\">{{behdashtMoney}}</span> ریال\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                2-9 آورده  نهادهای حمایتی دولتی : درصد<span class=\"text-bold-700\">{{dolatiPersent}}%</span>/مبلغ <span class=\"text-bold-700 mx-1\">{{dolatiMoney}}</span>ریال\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                3-9 آورده  نهادهای حمایتی غیر دولتی : درصد<span class=\"text-bold-700\">{{notDolatiPersent}}%</span>/مبلغ <span class=\"text-bold-700 mx-1\">{{notDolatiMoney}}</span>ریال\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                4-9 آورده  موسسه خیریه بیمارستانی   : درصد<span class=\"text-bold-700\">{{kheyriePersent}}%</span>/مبلغ <span class=\"text-bold-700 mx-1\">{{kheyrieMoney}}</span>ریال\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                5-9 آورده    خیرین : درصد<span class=\"text-bold-700\">{{nikPersent}}%</span>/مبلغ <span class=\"text-bold-700 mx-1\">{{nikMoney}}</span>ریال\r\n            </p>\r\n        </div>\r\n        <div class=\"col-12 p-1 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                نتیجه نهایی مداخله\r\n            </p>\r\n            <p class=\"text-bold-700\">{{FinalInterventionSelect}}</p>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\"> :Final Result of Intervention</p>\r\n\r\n        </div>\r\n        <div class=\"col-12 p-1 \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <div class=\" d-flex justify-content-between\">\r\n                <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                    توصیه های پس از ترخیص:\r\n                </p>\r\n                <p class=\"text-bold-700\"></p>\r\n                <p class=\"text-bold-700\" style=\"margin-left: 10px\"> :  Recommendation on Dishange</p>\r\n            </div>\r\n            <div style=\"text-align: right;\">\r\n                <p class=\"text-bold-700\">{{suggestionAfter}}</p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-12 p-1 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">     نیاز به پیگیری پس از ترخیص دارد؟\r\n                <label style=\"\r\n                margin-right: 30px;\" for=\"\" >دارد </label>\r\n                <mat-checkbox style=\"margin-right: 5px;margin-top: 5px\"  [checked]=\"hasFallowUp===true\"></mat-checkbox>\r\n                <!--<input type=\"checkbox\" [checked]=\"hasFallowUp===true\" name=\"\" id=\"\">-->\r\n                <label  style=\"margin-right: 10px;\" for=\"\">ندارد </label>\r\n                <mat-checkbox style=\"margin-right: 5px;margin-top: 5px\"  [checked]=\"hasFallowUp===false\"></mat-checkbox>\r\n\r\n                <!--<input type=\"checkbox\" name=\"\" id=\"\" [checked]=\"hasFallowUp===false\">-->\r\n\r\n            </p>\r\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">      :Need to Follow Up </p>\r\n        </div>\r\n        <div class=\"col-12 p-1 \" style=\"border-top: 1px solid ;padding: 0;\">\r\n            <div class=\" d-flex justify-content-between\">\r\n                <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                    برنامه پیگیری     :\r\n                </p>\r\n                <p class=\"text-bold-700\" style=\"margin-left: 10px\">  :  Aftercare Fallow-up </p>\r\n            </div>\r\n            <div style=\"text-align: right;\">\r\n                <p style=\"margin-right: 10px\">{{FallowProgram}}</p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-12 p-4 d-flex justify-content-between\" style=\"border-top: 1px solid ; padding: 0;\">\r\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\r\n                نام و نام خانوادگی و مهر امضا ممدکار اجتماعی :\r\n            </p>\r\n            <p>\r\n\r\n            </p>\r\n            <p style=\"margin-left: 10px\" class=\"text-bold-700\">\r\n                :Social Worker's Name/Signature/Stamp\r\n            </p>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\" style=\"direction: rtl !important;font-family: iransans!important;\">\r\n            <div class=\"modal-header \" style=\"direction: rtl; background-color: #63a4ff;\r\n            background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);\" >\r\n                <h4 class=\"modal-title white\" > راند مددکاری اجتماعی </h4>\r\n\r\n            </div>\r\n            <div class=\"modal-body\" id=\"kbModal-body\">\r\n                <div class=\"col-12 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\">گروه های پرخطر:</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\">شبکه حمایتی\r\n                        :</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n                    <div class=\"col-6\" style=\"font-family: iransans\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" >\r\n                                <div class=\"col-10\" (click)=\"showdangerList2()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of dangerInput2;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i}}\r\n\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeDanger2(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeDangerAll2()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                                </div>\r\n\r\n\r\n\r\n                            </div>\r\n\r\n                            <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"showDanger2\">\r\n                                <div class=\"col-12\" style=\"padding: 0\" >\r\n                                    <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                        <ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >\r\n                                            <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getDangerItem2(i.value)\" *ngFor=\"let i of dangerGroups\">{{i.value}}</li>\r\n                                        </ul>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-6\" style=\"font-family: iransans\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" >\r\n                            <div class=\"col-10\" (click)=\"supportNetworkList()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of supportNetworkInput;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i}}\r\n\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeDanger2(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                            </div>\r\n                            <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeDangerAll2()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowSupportNetwork\">\r\n                            <div class=\"col-12\" style=\"padding: 0\" >\r\n                                <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                    <ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >\r\n                                        <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getSupportNetwork(i.value,i.code)\" *ngFor=\"let i of supportNetwork\">{{i.value}}</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                            <!--<input type=\"text\" class=\"form-control dangerInput\" [(ngModel)]=\"supportNetworkInput\"  value=\"{{supportNetworkInput}}\"  (click)=\"supportNetworkList()\" >-->\r\n                            <!--<div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowSupportNetwork\">-->\r\n                                <!--<div class=\"col-12\" style=\"padding: 0\" >-->\r\n                                    <!--<div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                                        <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >-->\r\n                                            <!--<li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getSupportNetwork(i.value,i.code)\" *ngFor=\"let i of supportNetwork\">{{i.value}}</li>-->\r\n                                        <!--</ul>-->\r\n                                    <!--</div>-->\r\n\r\n                                <!--</div>-->\r\n\r\n                            <!--</div>-->\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 mt-3 mb-2 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\"> شرایط روانی  :</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\">وضعیت اقتصادی\r\n                            :</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n                    <div class=\"col-6 ml-1 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                        <button class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsTrue()\" [ngClass]=\"{'Active':PsychologicalconditionsID==1}\"   >نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsFalse()\" [ngClass]=\"{'Active':PsychologicalconditionsID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsNone()\" [ngClass]=\"{'Active':PsychologicalconditionsID==3}\">ارزیابی نشده</button>\r\n                    </div>\r\n                    <div class=\"col-6 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                        <button class=\"btn btnB col-4  form-control\" (click)=\"getEconomicSituationTrue()\" [ngClass]=\"{'Active':EconomicSituationID==1}\">نیاز به مداخله</button>\r\n                        <button  class=\"btn btnB  col-4  form-control\" (click)=\"getEconomicSituationFalse()\" [ngClass]=\"{'Active':EconomicSituationID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                        <button  class=\"btn btnB col-4  form-control\" (click)=\"getEconomicSituationNone()\" [ngClass]=\"{'Active':EconomicSituationID==3}\">ارزیابی نشده</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 mt-3 mb-2 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\">اختلال در عملکرد اجتماعی :</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <p class=\"text-bold-700\" style=\"color: black\">\r\n                            مسائل قانونی\r\n                            :</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n                    <div class=\"col-6 ml-1 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                        <button class=\"btn col-4 btnB  form-control\" (click)=\"getDisorderTrue()\" [ngClass]=\"{'Active':DisorderID==1}\">نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4 btnB form-control\" (click)=\"getDisorderFalse()\" [ngClass]=\"{'Active':DisorderID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4  btnB form-control\" (click)=\"getDisorderNone()\" [ngClass]=\"{'Active':DisorderID==3}\">ارزیابی نشده</button>\r\n                    </div>\r\n                    <div class=\"col-6 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                        <button class=\"btn col-4 btnB form-control\" [(ngModel)]=\"LegalID\" (click)=\"getLegalTrue()\" [ngClass]=\"{'Active':LegalID==1}\">نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4 btnB form-control\" (click)=\"getLegalFalse()\" [ngClass]=\"{'Active':LegalID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                        <button  class=\"btn col-4 btnB form-control\" (click)=\"getLegalNone()\" [ngClass]=\"{'Active':LegalID==3}\">ارزیابی نشده</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n                    <div class=\"col-2\">\r\n                        <p class=\"text-bold-700\"  style=\"font-family: iransans;color: black\">\r\n                            شرح مختصر\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <textarea name=\"\" id=\"\" cols=\"30\" class=\"form-control\" [(ngModel)]=\"SummeryText\"  rows=\"5\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"modal-footer\" style=\"font-family: iransans\">\r\n\r\n                <button class=\"btn btn-outline-primary\" (click)=\"add()\" >ذخیره</button>\r\n                <button class=\"btn btn-outline-danger\" (click)=\"c('Close click')\" >لغو</button>\r\n            </div>\r\n\r\n\r\n    </ng-template>\r\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\" style=\"direction: rtl !important;font-family: iransans!important;\">\r\n    <div class=\"modal-header \" style=\"direction: rtl; background-color: #63a4ff;\r\n            background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);\" >\r\n        <h4 class=\"modal-title white\" > راند مددکاری اجتماعی </h4>\r\n\r\n    </div>\r\n    <div class=\"modal-body\" id=\"kbModal-body\">\r\n        <div class=\"col-12 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">گروه های پرخطر:</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">شبکه حمایتی\r\n                    :</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n            <div class=\"col-6\" style=\"font-family: iransans\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" >\r\n                        <div class=\"col-10\" (click)=\"showdangerList2()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of dangerInput2;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i}}\r\n\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeDanger2(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeDangerAll2()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"showDanger2\">\r\n                        <div class=\"col-12\" style=\"padding: 0\" >\r\n                            <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                <ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >\r\n                                    <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getDangerItem2(i.value)\" *ngFor=\"let i of dangerGroups\">{{i.value}}</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-6\" style=\"font-family: iransans\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"col-12 d-flex justify-content-between position-relative  border p-1\" contenteditable=\"true\" >\r\n                        <div class=\"col-10\" (click)=\"supportNetworkList()\">\r\n                            <span class=\"px-1 \" *ngFor=\"let i of supportNetworkInput;let y =index\" style=\"background-color: #e6e6e6;margin-right: 5px;margin-top: 2px;margin-top: 3px;margin-bottom: 3px\">\r\n                            {{i}}\r\n\r\n                                <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" (click)=\"removeDanger2(y)\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\">\r\n                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                    </svg>\r\n                        </span>\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                            <span style=\"position: static;float:left;\">\r\n                            <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" (click)=\"removeDangerAll2()\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x hoverDelete\" viewBox=\"0 0 16 16\" style=\"cursor: pointer\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowSupportNetwork\">\r\n                        <div class=\"col-12\" style=\"padding: 0\" >\r\n                            <div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >\r\n                                <ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >\r\n                                    <li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getSupportNetwork(i.value,i.code)\" *ngFor=\"let i of supportNetwork\">{{i.value}}</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<input type=\"text\" class=\"form-control dangerInput\" [(ngModel)]=\"supportNetworkInput\"  value=\"{{supportNetworkInput}}\"  (click)=\"supportNetworkList()\" >-->\r\n                <!--<div class=\"col-12 d-flex\" style=\"padding: 0\" *ngIf=\"ShowSupportNetwork\">-->\r\n                <!--<div class=\"col-12\" style=\"padding: 0\" >-->\r\n                <!--<div class=\"col-12\"  style=\"max-height: 300px;overflow-y: scroll;position: absolute;z-index: 10;direction: rtl;text-align: right;padding: 0\"   >-->\r\n                <!--<ul class=\"list-group\" style=\"direction: rtl;text-align: right;padding: 0\" >-->\r\n                <!--<li class=\"list-group-item\" style=\"cursor: pointer\" (click)=\"getSupportNetwork(i.value,i.code)\" *ngFor=\"let i of supportNetwork\">{{i.value}}</li>-->\r\n                <!--</ul>-->\r\n                <!--</div>-->\r\n\r\n                <!--</div>-->\r\n\r\n                <!--</div>-->\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 mt-3 mb-2 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\"> شرایط روانی  :</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">وضعیت اقتصادی\r\n                    :</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n            <div class=\"col-6 ml-1 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                <button class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsTrue()\" [ngClass]=\"{'Active':PsychologicalconditionsID==1}\"   >نیاز به مداخله</button>\r\n                <button  class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsFalse()\" [ngClass]=\"{'Active':PsychologicalconditionsID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                <button  class=\"btn col-4 btnB form-control\" (click)=\"getPsychologicalconditionsNone()\" [ngClass]=\"{'Active':PsychologicalconditionsID==3}\">ارزیابی نشده</button>\r\n            </div>\r\n            <div class=\"col-6 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                <button class=\"btn btnB col-4  form-control\" (click)=\"getEconomicSituationTrue()\" [ngClass]=\"{'Active':EconomicSituationID==1}\">نیاز به مداخله</button>\r\n                <button  class=\"btn btnB  col-4  form-control\" (click)=\"getEconomicSituationFalse()\" [ngClass]=\"{'Active':EconomicSituationID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                <button  class=\"btn btnB col-4  form-control\" (click)=\"getEconomicSituationNone()\" [ngClass]=\"{'Active':EconomicSituationID==3}\">ارزیابی نشده</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 mt-3 mb-2 d-flex\" style=\"text-align: right;direction: rtl;font-family: iransans!important;\">\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">اختلال در عملکرد اجتماعی :</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"text-bold-700\" style=\"color: black\">\r\n                    مسائل قانونی\r\n                    :</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n            <div class=\"col-6 ml-1 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                <button class=\"btn col-4 btnB  form-control\" (click)=\"getDisorderTrue()\" [ngClass]=\"{'Active':DisorderID==1}\">نیاز به مداخله</button>\r\n                <button  class=\"btn col-4 btnB form-control\" (click)=\"getDisorderFalse()\" [ngClass]=\"{'Active':DisorderID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                <button  class=\"btn col-4  btnB form-control\" (click)=\"getDisorderNone()\" [ngClass]=\"{'Active':DisorderID==3}\">ارزیابی نشده</button>\r\n            </div>\r\n            <div class=\"col-6 d-flex flex-w\" style=\"direction: rtl;padding: 0\">\r\n                <button class=\"btn col-4 btnB form-control\" [(ngModel)]=\"LegalID\" (click)=\"getLegalTrue()\" [ngClass]=\"{'Active':LegalID==1}\">نیاز به مداخله</button>\r\n                <button  class=\"btn col-4 btnB form-control\" (click)=\"getLegalFalse()\" [ngClass]=\"{'Active':LegalID==2}\" style=\"padding: 0\">عدم نیاز به مداخله</button>\r\n                <button  class=\"btn col-4 btnB form-control\" (click)=\"getLegalNone()\" [ngClass]=\"{'Active':LegalID==3}\">ارزیابی نشده</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 d-flex\" style=\"direction: rtl\">\r\n            <div class=\"col-2\">\r\n                <p class=\"text-bold-700\"  style=\"font-family: iransans;color: black\">\r\n                    شرح مختصر\r\n                </p>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                <textarea name=\"\" id=\"\" cols=\"30\" class=\"form-control\" [(ngModel)]=\"SummeryText\"  rows=\"5\"></textarea>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\" style=\"font-family: iransans\">\r\n\r\n        <button class=\"btn btn-outline-danger\" (click)=\"c('Close click')\" >لغو</button>\r\n    </div>\r\n\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/help/patient-list/patient-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/patient-list/patient-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n   thead{\n       background-color: #63a4ff;\n       background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);\n   }\n\n\n</style>\n<form action=\"\" [formGroup]=\"filterForm\" (ngSubmit)=\"onSubmit()\" >\n    <div class=\"container-fluid\" style=\"font-family: iransans\">\n\n        <div class=\"row\">\n            <div class=\"col-12 mt-2\">\n                <!--Table-->\n                <table class=\"table table-hover table-bordered text-center\">\n                    <thead>\n                    <tr>\n                        <th scope=\"col\">ردیف</th>\n                        <th scope=\"col\">نام</th>\n                        <th scope=\"col\">نام خانوادگی </th>\n                        <th scope=\"col\">جنسیت </th>\n                        <th scope=\"col\">کد ملی  </th>\n                        <th scope=\"col\">سن</th>\n                        <th scope=\"col\">کد بیمار</th>\n                        <th scope=\"col\">مکان درخواست </th>\n                        <th scope=\"col\">تاریخ درخواست </th>\n                        <th scope=\"col\">تاریخ پذیرش </th>\n                        <th scope=\"col\">وضعیت</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let i of patientList;let y=index\" (click)=\"getId(i.caseWorkerID)\" >\n                        <td scope=\"row\">{{y}}</td>\n                        <td>{{i.firstName}}</td>\n                        <td>{{i.lastName}} </td>\n                        <td>{{i.genderName}}</td>\n                        <td>{{i.nationalCode}}</td>\n                        <td>{{i.age}}</td>\n                        <td>{{i.encounterID}}</td>\n                        <td>{{i.locationName}}</td>\n                        <td>{{i.requestDate}}</td>\n                        <td>{{i.startDate}}</td>\n                        <td>\n                        <span *ngFor=\"let x of StatueList\">\n                <span *ngIf=\"x.Key==i.statusIS\">{{x.Value}}</span>\n            </span>\n                        </td>\n                    </tr>\n\n                    </tbody>\n                </table>\n                <!--table-->\n            </div>\n        </div>\n        <button type=\"button\" (click)=\"GetDetails(content) \">جتسجو</button>\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\"  style=\"font-family: iransans, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif\" >\n\n            <div class=\"modal-header \" style=\"background-color: #63a4ff;\nbackground-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);direction: rtl\" >\n                <h4 class=\"modal-title white\" >جستجو</h4>\n            </div>\n            <div class=\"modal-body\" id=\"kbModal-body\">\n                <div class=\"col-12 justify-content-between my-2 d-flex\" style=\"font-family: iransans;direction: rtl;text-align: right;margin-right: 30px\" >\n                    <div class=\"col-5 \">\n                        <label for=\"\" class=\"text-bold-700\">کد ملی</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"nationalCode\">\n                    </div>\n                    <div class=\"col-5 \">\n                        <label for=\"\" class=\"text-bold-700\">کد بیمار</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"patinetID\">\n                    </div>\n                </div>\n\n                <div class=\"col-12 justify-content-between  d-flex\" style=\"font-family: iransans;direction: rtl;text-align: right\" >\n                    <div class=\"col-6 \">\n                        <label for=\"\" class=\"text-bold-700\">از تاریخ پذیرش  </label>\n                        <dp-date-picker\n                                dir=\"rtl\"\n                                mode=\"day\"\n                                class=\"form-control\"\n                                placeholder=\"تاریخ\"\n                                formControlName=\"startDate\"\n                                theme=\"dp-material\">\n                        </dp-date-picker>\n                    </div>\n                    <div class=\"col-6 \">\n                        <label for=\"\" class=\"text-bold-700\">تا تاریخ پذیرش</label>\n                        <dp-date-picker\n                                dir=\"rtl\"\n                                mode=\"day\"\n                                class=\"form-control\"\n                                placeholder=\"تاریخ\"\n                                formControlName=\"startDate\"\n                                theme=\"dp-material\">\n                        </dp-date-picker>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"c('Close click')\">بستن</button>\n                <button type=\"button\" class=\"btn btn-info btn-raised\"  (click)=\"onSubmit()\">جستجو</button>\n            </div>\n\n\n        </ng-template>\n\n        <!--Row-->\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/help/print/print.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/print/print.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-1\" id=\"print-section\" style=\"font-size: 16px\">\n    <div class=\"col-12\">\n        <h4 class=\"text-center\">وزارت بهداشت، درمان و آموزش پزشكي\n        </h4>\n        <h5 class=\"text-center mt-1\">\n            Ministry of Health & Medical Education\n        </h5>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n        <div  class=\"d-flex justify-content-between col-6\">\n            <h5>\n                        دانشگاه علوم پزشکی :\n            </h5>\n            <h5>\n                :University of Medical Science\n            </h5>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n        <div  class=\"d-flex justify-content-between col-6\">\n            <h5>\n                         مرکز پزشكي آموزشی درمانی  :\n            </h5>\n            <h5>\n                :Medical Center\n            </h5>\n        </div>\n    </div>\n    <div class=\"col-12 d-flex mt-1\" style=\"padding: 0;\">\n        <div class=\"col-3 border d-flex justify-content-between \">\n            <p class=\"text-bold-700\">شماره پرونده:</p>\n            <p></p>\n            <p class=\"text-bold-700\">:Record No</p>\n        </div>\n        <div class=\"col-7\">\n            <h5 style=\"text-align: right;\">\n                CASE MANAGEMENT SHEET & SOCIAL WORK ASSESSMENT \n            </h5>\n        </div>\n    </div>\n    <div class=\"col-12  \" style=\"padding: 0;border: 1px solid;\">\n        <div class=\"col-12 d-flex \" style=\"padding: 0;font-size: 16px\">\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-around\">\n                        <p class=\"text-bold-700\">نام خانوادگی :</p>\n                        <p class=\"text-bold-700\"> :Family Name</p>\n                    </div>\n\n                    <div>\n                        <p style=\"font-size: 16px\" class=\"text-center text-bold-700\">منوچهری</p>\n                    </div>\n                </div>\n                <div class=\"col-6\" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\" d-flex justify-content-around\">\n                        <p class=\"text-bold-700\">نام  :</p>\n                        <p class=\"text-bold-700\"> : Name</p>\n                    </div>\n                    <div>\n                        <p class=\"text-bold-700 text-center \" style=\"font-size: 16px\">سعید</p>\n\n                    </div>\n\n                </div>\n\n                \n            </div>\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\n                <div class=\"col-4 \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-around\">\n                        <p class=\"text-bold-700\">جنس  :</p>\n\n                        <p class=\"text-bold-700\"> :Sex </p>\n                    </div>\n                    <div>\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\">مذکر</p>\n                    </div>\n\n                </div>\n                <div class=\"col-8\" style=\"padding: 0;\">\n                    <div class=\"col-12 d-flex justify-content-around\" style=\"flex-wrap: nowrap;padding: 0;\">\n                        <p class=\"text-bold-700\">تاریخ مراجعه  :</p>\n                        <p>1400-02-15</p>\n                        <p class=\"text-bold-700\"> : Date of Admission</p>\n                    </div>\n                    <div class=\"col-12 d-flex justify-content-around\" style=\"padding: 0;\">\n                        <p class=\"text-bold-700\">ساعت مراجعه  :</p>\n                        <p>10:20:20</p>\n                        <p class=\"text-bold-700\"> : Time of Admission</p>\n                    </div>\n                  \n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12 d-flex\" style=\"padding: 0;border-top: 1px solid; \">\n            <div class=\"col-6 d-flex justify-content-around\" style=\"padding: 0;border-left: 1px solid;\">\n                <p class=\"text-bold-700\">آدرس: </p>\n                <p class=\"text-bold-700\">تهران آباذر سیتسیتد</p>\n                <p class=\"text-bold-700\">:Address</p>\n            </div>\n            <div class=\"col-6 d-flex \" style=\"padding: 0;border-left: 1px solid;\">\n               <div class=\"col-6 d-flex justify-content-between\" style=\"border-left:1px solid ;\">\n                <p class=\"text-bold-700\">کدپذیرش: </p>\n                <p class=\"text-bold-700\"> 123456789 </p>\n                <p class=\"text-bold-700\"> :ADM Code</p>\n               </div>\n               <div class=\"col-6 d-flex justify-content-between\">\n                <p class=\"text-bold-700\">تلفن: </p>\n                <p class=\"text-bold-700\"> 09365726583 </p>\n                <p class=\"text-bold-700\"> :Tel</p>\n               </div>\n            </div>\n        </div>\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\n\n                <div class=\"col-6  \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-between\">\n                        <p class=\"text-bold-700\">کدملی/کدآزمایش   :</p>\n                        <p class=\"text-bold-700\"> National/segment Code: </p>\n                    </div>\n                    <div>\n                        <p style=\"font-size: 16px;text-align: center\" class=\"text-bold-700\">4120526844</p>\n\n                    </div>\n\n                </div>\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-around\">\n                        <p class=\"text-bold-700\">تاریخ تولد   :</p><br>\n\n                        <p class=\"text-bold-700\"> : Date of Birth</p>\n                    </div>\n                    <div>\n                        <p class=\"text-bold-700\" style=\"text-align: center;font-size: 16px\">1374-09-12 </p>\n\n                    </div>\n\n                </div>\n                \n            </div>\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\n                <div class=\"col-6  \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-between\">\n                        <p class=\"text-bold-700\">نام و نام خانوادگی پدر   :</p>\n                        <p class=\"text-bold-700\"> Father's Name &\n                           : Family name\n                        </p>\n                    </div>\n                    <div>\n                        <p class=\"text-bold-700\" style=\"text-align: center;font-size: 16px\">بهزاد </p>\n\n                    </div>\n\n                </div>\n                <div class=\"col-6 \" style=\"padding: 0;\">\n                    <div class=\"d-flex justify-content-between\">\n                        <p class=\"text-bold-700\">نام و نام خانوادگی مادر   :</p>\n                        <p class=\"text-bold-700\"> Mather's Name &\n                          :  Family name:\n                        </p>\n\n                    </div>\n                    <div>\n                        <p  class=\"text-bold-700\" style=\"font-size: 16px;text-align: center\" >مژگان  </p>\n\n                    </div>\n\n\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\n            <div class=\"col-6 d-flex justify-content-between \" style=\"padding: 0;\">\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex  justify-content-around\">\n                        <p class=\"text-bold-700\">وضعیت تاهل  :</p>\n                        <p class=\"text-bold-700\">Marital Status: </p>\n                    </div>\n                    <div >\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\">مجرد </p>\n\n                    </div>\n\n                </div>\n                <div class=\"col-6 \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-around\">\n                        <p class=\"text-bold-700\"> ملیت    :</p>\n                        <p class=\"text-bold-700\"> : Nationality  </p>\n                    </div>\n                    <div>\n                        <p class=\"text-bold-700 text-center\" style=\"font-size: 16px\" >ایرانی</p>\n\n                    </div>\n\n                </div>\n                \n            </div>\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\n                <div class=\"col-6\" style=\"border-left: 1px solid black;padding: 0;\">\n                    <div class=\"d-flex justify-content-around\">\n                        <div>\n                            <p class=\"text-bold-700\"> همراه بیمار      :</p>\n                        </div>\n                        <div class=\"mr-1\">\n                            <label for=\"\">دارد</label>\n                            <input type=\"checkbox\" name=\"\" id=\"\">\n                            <label class=\"mr-1\" for=\"\">ندارد</label>\n                            <input type=\"checkbox\" name=\"\" id=\"\">\n                        </div>\n                        \n                    </div>\n                    <div class=\"d-flex justify-content-between\">\n                        <div>\n                            <p class=\"text-bold-700\">  Patient Companion      :</p>\n                        </div>\n                        <div class=\"mr-1\">\n                            <label for=\"\" style=\"margin-left: 20px;\">Yes</label>\n                            <label class=\"mr-1\" for=\"\">No</label>\n                        </div>\n                    </div>\n                 \n                   \n                    <div class=\"d-flex justify-content-between\">\n                        <p class=\"text-bold-700\">تلفن </p>\n                        <p class=\"text-bold-700\">09365726583</p>\n                        <p class=\"text-bold-700\">Tel</p>\n\n                    </div>\n             \n                    \n                </div>\n                <div class=\"col-6 d-flex justify-content-between\" style=\"padding: 0;\">\n                    <p class=\"text-bold-700\">نام و نام خانوادگی همراه   :</p>\n                    <p class=\"mt-5 text-bold-700 \">سعید منوچهری  </p>\n                    <p class=\"text-bold-700\"> Patient Companion\n                        Name & Family\n                        Name:\n                         </p> \n\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12 d-flex \" style=\"padding: 0;border-top:1px solid ;\">\n            <div class=\"col-6 d-flex justify-content-around \" style=\"padding: 0;\">\n                <div class=\"col-6 d-flex \" style=\"border-left: 1px solid black;padding: 0;\">\n                    <p class=\"text-bold-700\" style=\"text-align: right;\">سطح تحصیلات :</p>\n                    <p>کارشناسی ارشد </p>\n                    <p class=\"text-bold-700\"> :Education Level </p>\n                </div>\n                <div class=\"col-6 d-flex justify-content-around\" style=\"border-left: 1px solid black;padding: 0;\">\n                    <p class=\"text-bold-700\"> تعداد فرزندان    :</p><br>\n\n                    <p>10</p>\n                    <p class=\"text-bold-700\"> :   No of Children</p>\n                </div>\n                \n            </div>\n            <div class=\"col-6 d-flex\"  style=\"padding: 0;\">\n                <div class=\"col-6 d-flex justify-content-around\" style=\"border-left: 1px solid black;padding: 0;\">\n                    <p class=\"text-bold-700\"> شغل      :</p>\n                    <p>کارمند </p>\n                    <p class=\"text-bold-700\">:Job\n                        \n                         </p>\n                         <p class=\"text-bold-700\">بخش     :</p>\n                         <p>CCU  </p>\n                         <p class=\"text-bold-700\"> :Ward\n                            \n                              </p> \n     \n                </div>\n                <div class=\"col-6 d-flex justify-content-between\" style=\"padding: 0;\">\n                    <p class=\"text-bold-700\"> پزشک معالج:</p>\n                    <p>علی چگینی </p>\n                    <p class=\"text-bold-700\">\n                        :Attending Physician\n                        \n                         </p>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12\" style=\"padding: 0;border-top: 2px solid ;\">\n        <div class=\"col-12 d-flex justify-content-between\" style=\"padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\nبیمه پایه:\n        </p>\n        <p class=\"text-bold-700\" style=\"margin-left: 10px\">\n:Basic Insurance\n        </p>\n    </div>\n        \n        </div>\n        <div class=\"col-12 \" style=\"padding: 0; text-align: right;\">\n            <label class=\"text-bold-700\" for=\"\">تامین اجتماعی </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > خدمات درمانی  </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\"  >سلامت ایرانیان   </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n            <label class=\"text-bold-700\" class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > نیرو های مسلح </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n            <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > سایر </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n            <label  class=\"text-bold-700\"for=\"\"  style=\"margin-right: 20px;\">فاقد بیمه  </label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n    \n        </div>\n        <div class=\"col-12 d-flex justify-content-between mt-2\" style=\"padding: 0;\">\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\n    بیمه تکمیلی:\n            </p>\n            <P class=\"text-bold-700\">\n                بیمه تکملیی\n            </P>\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">\n                        Compllemantary Insurance\n            </p>\n        </div>\n        <div class=\"col-12\" style=\"padding: 0;border-top: 2px solid ;\">\n            <div class=\"col-12 d-flex justify-content-between\" style=\"padding: 0;\">\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\n     نحوه ورود/ارجاع به واحد مدد کاری اجتماعی :\n            </p>\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">\n    :Arrival/Referal Type \n            </p>\n        </div>\n            \n            </div>\n            <div class=\"col-12 \" style=\"padding: 0; text-align: right;\">\n                <label class=\"text-bold-700\" for=\"\">خود ارجاع  </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > راند   </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\"  >تریاژ    </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label class=\"text-bold-700\" class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" >  ارجاع از کادر درمان  </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\" > ارجاع از سازمان های دولتی  </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label  class=\"text-bold-700\"for=\"\"  style=\"margin-right: 20px;\"> ارجاع از سازمان های غیر دولتی  </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n                <label class=\"text-bold-700\" for=\"\" style=\"margin-right: 20px;\"  >سایر    </label>\n                <input type=\"checkbox\" name=\"\" id=\"\">\n        \n            </div>\n            <div class=\"col-12 d-flex justify-content-between mt-1\" style=\"padding: 0; border-top: 3px solid;\">\n                <p class=\"text-bold-700\" style=\"margin-right: 10px\" >\n        گروه هدف :\n                </p>\n                <P class=\"text-bold-700\">\n                    بیمه تکملیی\n                </P>\n                <p class=\"text-bold-700\" style=\"margin-left: 10px\">\n                             Target Gruop\n                </p>\n            </div>\n    </div>\n    <div class=\"col-12 mt-1\" style=\"padding: 0;border: 1px solid black;\">\n    <div class=\"col-12\">\n        <p class=\"text-center text-bold-700\">\n            تریاژ\n        </p>\n    </div>\n    <div class=\"col-12\">\n        <table class=\"table table-bordered\" style=\"padding: 0;border: 1px solid black\">\n            <thead style=\"padding: 0;\">\n              <tr>\n                <th scope=\"col\">ساعت و تاریخ\n                    <br>(date & time)</th>\n                <th scope=\"col\"> گروه های پرخطر <br>\n                    High Risk Gruop </th>\n                <th scope=\"col\">شدت بیماری بر اساس ESi <br>\n                    Illness severity based on ESI    \n                </th>\n                <th scope=\"col\">پوشش بیمه ای <br>\n                    Insurance Coverage\n                </th>\n                <th scope=\"col\">حضور همراه موثر <br>\n                Effective Participant\n                \n                </th>\n                <th scope=\"col\" > مجموع امتیاز <br>\n                </th>\n           \n            <th scope=\"col\" > اولویت  <br>\n            </th>\n              </tr>\n            </thead>\n            <tbody style=\"padding: 0;\">\n              <tr>\n                <th scope=\"row\">1</th>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between mt-1\" style=\"padding: 0; border-top: 3px solid;\">\n        <p class=\"text-bold-700\"style=\"margin-right: 10px\" >\n شرح مختصر  :\n        </p>\n        <P class=\"text-bold-700\">\n            بیمه تکملیی\n        </P>\n        <p class=\"text-bold-700\" style=\"margin-left: 10px\">\n                      Brief Description\n        </p>\n    </div>\n    <div class=\"col-12\" style=\"border-top: 1px solid black;\" >\n        <p class=\"text-center text-bold-700\">\n            راند\n        </p>\n    </div>\n    <div class=\"col-12\">\n        <table class=\"table table-bordered\" style=\"padding: 0;\">\n            <thead style=\"padding: 0;font-size: 13px;text-align: center;\">\n              <tr>\n                <th style=\"padding: 0;\">ساعت و تاریخ\n                    <br>(date & time)</th>\n                <th >  شبکه های حمایتی <br>\n                    Social Support\n                    <br>\n                    High Risk Gruop </th>\n                <th style=\"padding: 0;\">شرایط روانی<br>\n                    \n                    <br>\n                    Psychological <br> Conditions\n                </th>\n                <th style=\"padding: 0;\" > وضعیت اقتصادی  <br>\n                    Financial/insurance \n                </th>\n                <th style=\"padding: 0;\" >اختلال در عملکرد اجتماعی <br>\n                    به علت بیماری و بستری\n                    <br>\nSocial dysfunction due to \nillness and gospitalization                \n                </th>\n                <th style=\"padding: 0;\" > گروه های پرخطر   <br>\n                    High risk group\n                </th>\n           \n            <th style=\"padding: 0;\" > مسایل قانونی   <br>\n                Legal issues\n            </th>\n            <th style=\"padding: 0;\" > شرح مختصر     <br>\n                Brief Description \n            </th>\n              </tr>\n            </thead>\n            <tbody style=\"padding: 0;\">\n              <tr>\n                <td>1</td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between \">\n        <p class=\"text-bold-700\">شرح نهایی ارزیابی </p>\n        <p class=\"text-bold-700\"></p>\n        <p class=\"text-bold-700\">:Final Assessment Summery</p>\n\n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;\">\n        <p class=\"text-bold-700\">  اهداف مداخله: </p>\n        <p class=\"text-bold-700\"></p>\n        <p class=\"text-bold-700\">:  Porpuse of Intervention</p>\n    </div>\n    <div class=\"col-12\" style=\"border-top: 1px solid ;\">\n        <table class=\"table table-bordered\" style=\"padding: 0;\">\n            <thead style=\"padding: 0;font-size: 13px;text-align: center;\">\n              <tr>\n                <th  >  تاریخ مداخله \n                                (Date of Intervention)\n                </th>\n                <th >  عنوان مداخله   \n                    High Risk Gruop </th>\n                    \n               \n                <th >شرح مداخله\n                    (Description of the intervention)\n                </th>\n              </tr>\n            </thead>\n            <tbody style=\"padding: 0;text-align: center;\">\n              <tr>\n                <td>1400-02-25</td>\n                <td>dasd</td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n    \n    \n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">   آیا بیمار حمایت اقتصادی نیاز دارد؟\n            <label style=\"margin-right: 30px;\" for=\"\">بله</label>\n        <input type=\"checkbox\" name=\"\" id=\"\">    \n        <label  style=\"margin-right: 10px;\" for=\"\">خیر</label>\n        <input type=\"checkbox\" name=\"\" id=\"\">    \n\n        </p>\n        <p class=\"text-bold-700\" style=\"margin-left: 10px\">:  Financial of the intervention of Intervention</p>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\n              درصد/مبلغ اولیه حمایت اقتصادی بر اساس گروه های هدف :...\n        </p>\n   \n    </div>\n    <div class=\"col-12   \" style=\"border-top: 1px solid ;padding: 0; text-align: right;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\nاعمال نظر ممدکار اجتماعی        </p>\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\nشرح...\n        </p>\n   \n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\nدرصد نهایی حمایت اقتصادی:...\n        </p>\n   \n    </div>\n    <div class=\"col-12 \" style=\"border-top: 1px solid ;padding: 0; text-align: right;\" >\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\nمنبع تامین حمایت اقتصادی:   \n</p>\n<p class=\"text-bold-700\" style=\"margin-right: 10px\">\n    1-9 آورده وزارت بهداشت(ردیف نیازمندان): درصد<span>...</span>/مبلغ <span>...</span>\n</p>\n<p class=\"text-bold-700\" style=\"margin-right: 10px\">\n    2-9 آورده  نهادهای حمایتی دولتی : درصد<span>...</span>/مبلغ <span>...</span>\n</p>\n<p class=\"text-bold-700\" style=\"margin-right: 10px\">\n    3-9 آورده  نهادهای حمایتی غیر دولتی : درصد<span>...</span>/مبلغ <span>...</span>\n</p>\n<p class=\"text-bold-700\" style=\"margin-right: 10px\">\n    4-9 آورده  موسسه خیریه بیمارستانی   : درصد<span>...</span>/مبلغ <span>...</span>\n</p>\n<p class=\"text-bold-700\" style=\"margin-right: 10px\">\n    5-9 آورده    خیرین : درصد<span>...</span>/مبلغ <span>...</span>\n</p>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">\n            نتیجه نهایی مداخله\n        </p>\n        <p class=\"text-bold-700\"></p>\n        <p class=\"text-bold-700\" style=\"margin-left: 10px\"> :Final Result of Intervention</p>\n   \n    </div>\n    <div class=\"col-12 \" style=\"border-top: 1px solid ;padding: 0;\">\n        <div class=\" d-flex justify-content-between\">\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\n                 توصیه های پس از ترخیص: \n            </p>\n            <p class=\"text-bold-700\"></p>\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\"> :  Recommendation on Dishange</p>\n        </div>\n        <div style=\"text-align: right;\">\n                    <p>\n توصیه پس از ترخیص تست اول                     </p>\n        </div>\n   \n   \n    </div>\n    <div class=\"col-12 d-flex justify-content-between \" style=\"border-top: 1px solid ;padding: 0;\">\n        <p class=\"text-bold-700\" style=\"margin-right: 10px\">     نیاز به پیگیری پس از ترخیص دارد؟\n            <label style=\"margin-right: 30px;\" for=\"\">دارد </label>\n        <input type=\"checkbox\" name=\"\" id=\"\">    \n        <label  style=\"margin-right: 10px;\" for=\"\">ندارد </label>\n        <input type=\"checkbox\" name=\"\" id=\"\">    \n\n        </p>\n        <p class=\"text-bold-700\" style=\"margin-left: 10px\">      :Need to Follow Up </p>\n    </div>\n    <div class=\"col-12 \" style=\"border-top: 1px solid ;padding: 0;\">\n        <div class=\" d-flex justify-content-between\">\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\">\n                 برنامه پیگیری     : \n            </p>\n            <p class=\"text-bold-700\" style=\"margin-right: 10px\"></p>\n            <p class=\"text-bold-700\" style=\"margin-left: 10px\">  :  Aftercare Fallow-up </p>\n        </div>\n        <div style=\"text-align: right;\">\n                    <p style=\"margin-right: 10px\">\n توصیه پس از ترخیص تست اول                     </p>\n        </div>\n   \n   \n    </div>\n    <div class=\"col-12 d-flex justify-content-between\" style=\"border-top: 1px solid ; padding: 0;\">\n    <p class=\"text-bold-700\" style=\"margin-right: 10px\">\n        نام و نام خانوادگی و مهر امضا ممدکار اجتماعی :\n    </p>\n    <p>\n\n    </p>\n    <p style=\"margin-left: 10px\" class=\"text-bold-700\">\n        :Social Worker's Name/Signature/Stamp\n    </p>\n    \n    </div>\n    </div>\n  \n\n\n  \n</div>\n<button type=\"button\" printSectionId=\"print-section\" [printStyle]= \"{div: {'direction' : 'rtl'}}\" [useExistingCss]=\"true\" ngxPrint  >پرینت </button>"

/***/ }),

/***/ "./src/app/help/help-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HelpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpRoutingModule", function() { return HelpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _help_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../help/patient-list/patient-list.component */ "./src/app/help/patient-list/patient-list.component.ts");
/* harmony import */ var _help_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../help/patient-info/patient-info.component */ "./src/app/help/patient-info/patient-info.component.ts");
/* harmony import */ var _help_print_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../help/print/print.component */ "./src/app/help/print/print.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: 'Patient-List',
                component: _help_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_3__["PatientListComponent"],
                data: {
                    title: 'Patient List'
                }
            },
            {
                path: 'Patient-Info/:id',
                component: _help_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_4__["PatientInfoComponent"],
                data: {
                    title: 'Patient Info'
                }
            },
            {
                path: 'print',
                component: _help_print_print_component__WEBPACK_IMPORTED_MODULE_5__["PrintComponent"],
                data: {
                    title: 'print'
                }
            }
        ]
    }
];
var HelpRoutingModule = /** @class */ (function () {
    function HelpRoutingModule() {
    }
    HelpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HelpRoutingModule);
    return HelpRoutingModule;
}());



/***/ }),

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-routing.module */ "./src/app/help/help-routing.module.ts");
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-list/patient-list.component */ "./src/app/help/patient-list/patient-list.component.ts");
/* harmony import */ var _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-info/patient-info.component */ "./src/app/help/patient-info/patient-info.component.ts");
/* harmony import */ var ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-jalali-date-picker */ "./node_modules/ng2-jalali-date-picker/ng2-jalali-date-picker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./print/print.component */ "./src/app/help/print/print.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__["PatientListComponent"], _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_6__["PatientInfoComponent"], _print_print_component__WEBPACK_IMPORTED_MODULE_9__["PrintComponent"]],
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _help_routing_module__WEBPACK_IMPORTED_MODULE_4__["HelpRoutingModule"],
                ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_7__["DpDatePickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
            ]
        })
    ], HelpModule);
    return HelpModule;
}());



/***/ }),

/***/ "./src/app/help/interFace/DangerGroup.ts":
/*!***********************************************!*\
  !*** ./src/app/help/interFace/DangerGroup.ts ***!
  \***********************************************/
/*! exports provided: DangerGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerGroup", function() { return DangerGroup; });
var DangerGroup = /** @class */ (function () {
    function DangerGroup() {
    }
    return DangerGroup;
}());



/***/ }),

/***/ "./src/app/help/interFace/modakheleInterface.ts":
/*!******************************************************!*\
  !*** ./src/app/help/interFace/modakheleInterface.ts ***!
  \******************************************************/
/*! exports provided: modakhele */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modakhele", function() { return modakhele; });
var modakhele = /** @class */ (function () {
    function modakhele() {
    }
    return modakhele;
}());



/***/ }),

/***/ "./src/app/help/interFace/targetArray.ts":
/*!***********************************************!*\
  !*** ./src/app/help/interFace/targetArray.ts ***!
  \***********************************************/
/*! exports provided: targetArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetArray", function() { return targetArray; });
var targetArray = /** @class */ (function () {
    function targetArray() {
    }
    return targetArray;
}());



/***/ }),

/***/ "./src/app/help/patient-info/patient-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/help/patient-info/patient-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvcGF0aWVudC1pbmZvL3BhdGllbnQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/help/patient-info/patient-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/help/patient-info/patient-info.component.ts ***!
  \*************************************************************/
/*! exports provided: PatientInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoComponent", function() { return PatientInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Case-worker/Case-woeker-patientList/case-worker-list.service */ "./src/app/services/Case-worker/Case-woeker-patientList/case-worker-list.service.ts");
/* harmony import */ var _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../help/interFace/DangerGroup */ "./src/app/help/interFace/DangerGroup.ts");
/* harmony import */ var _interFace_modakheleInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../interFace/modakheleInterface */ "./src/app/help/interFace/modakheleInterface.ts");
/* harmony import */ var _interFace_targetArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../interFace/targetArray */ "./src/app/help/interFace/targetArray.ts");







var PatientInfoComponent = /** @class */ (function () {
    function PatientInfoComponent(modalService, _service) {
        this.modalService = modalService;
        this._service = _service;
        this.persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        this.arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        this.today = new Date().toLocaleDateString('fa-IR');
        this.shortExplain = "";
        this.children = "";
        this.suggestionAfter = "";
        this.nikMoney = "";
        this.kheyrieMoney = "";
        this.notDolatiMoney = '';
        this.behdashtMoney = "";
        this.dolatiMoney = '';
        this.relativeName = "";
        this.interanceCode = "";
        this.Targetnumberofarray = 0;
        this.showDanger = false;
        this.Level = "الویت چهارم";
        this.finalScore = 5;
        this.hasRelative = false;
        this.ShowRand = true;
        this.containers = [];
        this.expalinIDea = "";
        this.hasIntervention = false;
        this.InterventionContainer = [];
        this.parvandeMadadkariContainer = [];
        this.hasFallowUp = false;
        this.hasSuppoortOK = true;
        this.graay = false;
        this.CaseworkerId = "";
        this.FinalExplain = "";
        this.MOdakheleDate = "";
        this.id = "";
        this.persent = '0';
        this.code = '';
        this.FinalInterventionSecondValue = "";
        this.FinalInterventionThirdValue = "";
        this.netwokSuport = "";
        this.dangerInput = new Array();
        this.InterventionArray = new Array();
        this.FinalInterventionFirstArray = new Array();
        this.FinalInterventionSecondArray = new Array();
        this.FinalInterventionThirdArray = new Array();
        this.TargetArray = [];
        this.eghdamat = "اقدامات";
        this.showGruopMain = false;
        this.eghdamatShow = true;
        this.showChildAbouse = true;
        this.dangerValue = "";
        this.Interventioncode = "";
        this.dangerValue2 = "";
        this.dangerInput2 = [];
        this.array = [];
        this.showDanger2 = false;
        this.supportNetworkCode = "";
        this.EffectiveCompanionInput = "";
        this.InsurancecoverageInput = "";
        this.FinalInterventionFirstValue = "";
        this.supportNetworkInput = [];
        this.ESIInput = "";
        this.ShowInsurancecoverage = false;
        this.ShowEffectiveCompanion = false;
        this.ShowIntervention = false;
        this.ShowESI = false;
        this.ShowSupportNetwork = false;
        this.TargetInputValue = "";
        this.SummeryText = "";
        this.FallowProgram = "";
        this.PsychologicalconditionsValue = "";
        this.DisorderValue = "";
        this.array1 = [];
        this.EconomicSituationValue = "";
        this.LegalValue = "";
        this.InterventionValue = "";
        this.FinalInterventionSelect = '';
        this.FinalInterventionID = "";
        this.showFinalIntervention = false;
        this.ShowFinalInterventionFirst = false;
        this.ShowFinalInterventionSecond = false;
        this.ShowFinalInterventionThird = false;
        this.targetItemInputValue = "";
        this.time = new Date();
        this.numberofarray = 0;
        this.numberofarrayY = 0;
        this.arraaaay = new Array();
        this.numberofTragetArray = 0;
        this.Active = false;
        this.InteranceValue = '';
        this.relatedTel = '';
        this.educationCode = "";
        this.maritalValue = "";
        this.maritalCode = "";
        this.relatedPerson = [
            { code: '1', value: 'پدر' },
            { code: '1', value: 'مادر' },
            { code: '1', value: 'پدر بزرگ' },
            { code: '1', value: 'مادر بزرگ' },
            { code: '1', value: 'خواهر' },
            { code: '1', value: 'برادر' },
            { code: '1', value: 'همسر' },
            { code: '1', value: 'فرزند' },
            { code: '1', value: 'فامیل' },
            { code: '1', value: 'دوست' },
            { code: '1', value: 'آشنا' },
            { code: '1', value: 'همسایه' },
            { code: '1', value: 'همکار' },
            { code: '1', value: 'سایر' },
        ];
        this.targetGroupMAin = [
            { id: "1", value: "کودک آزاری", score: "5" },
            { id: "2", value: "سوءرفتار یا خشونت", score: "5" },
            { id: "3", value: "اختالالت سایکوتیک", score: "5" },
            { id: "4", value: "مشکل سرپرستی خانواده", score: "5" },
            { id: "5", value: "نابسامانی خانواده", score: "5" },
            { id: "6", value: "شرایط بحرانی", score: "5" },
            { id: "7", value: "مدارک هویتی و بیمه", score: "5" },
            { id: "8", value: "سایر گروه های پرخطر", score: "5" },
            { id: "9", value: "بیماری های حاد و مزمن", score: "5" },
        ];
        this.childAbuse = [
            { code: 'Z25028', value: 'خشونت فیزیکی علیه کودکان (تنبیه بدنی)', persent: "20" },
            { code: 'Z25027', value: 'خشونت جنسی (تجاوز به کودکان)', persent: "20" },
            { code: 'Z19008', value: 'کودک رها شده (خیابانی)', persent: "20" },
            { code: 'Z22005', value: 'کودک کار', persent: "20" },
            { code: 'Z16001', value: 'خشونت عاطفی روانی', persent: "5" },
            { code: 'Z16001', value: 'غفلت از کودک', persent: "5" },
        ];
        this.Violence = [
            { code: 'Z13007', value: 'خشونت علیه زنان (فیزیکی)', persent: "20" },
            { code: 'Z13008', value: 'خشونت علیه زنان (جنسی)', persent: "20" },
            { code: 'Z13002', value: 'خشونت علیه زنان (روانی، از بین بردن استقلال مالی، محرومیت و محدودیت)', persent: "5" },
            { code: 'Z25040', value: 'خشونت فیزیکی علیه شریک زندگی', persent: "20" },
            { code: 'Z25042', value: 'خشونت جنسی علیه شریک زندگی', persent: "20" },
            { code: 'Z25020', value: 'خشونت علیه سالمندان و معلولین', persent: "دستورالعمل وزارتی دارد." },
        ];
        this.sycotik = [
            { code: 'P72012', value: 'اختلالات هذیانی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P73004', value: 'دوقطبی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P74004', value: 'اختلالات اضطرابی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P76004', value: 'افسردگی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P79004', value: 'سایر اختلالات روان', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P19024', value: 'سوء مصرف مواد', persent: "20" },
        ];
        this.parentProblem = [
            { code: 'Z15004', value: 'متارکه', persent: "20" },
            { code: 'Z15012', value: 'فوت همسر', persent: "20" },
            { code: 'Z15001', value: 'طلاق', persent: "20" },
            { code: 'Z13001', value: 'همسر الکلی', persent: "20" },
            { code: 'Z13002', value: 'همسر پرخاشگر', persent: "20" },
            { code: 'Z13003', value: 'همسر قمار باز', persent: "20" },
            { code: 'Z13004', value: 'همسر روابط فرازناشویی', persent: "20" },
            { code: 'Z13006', value: 'همسر معتاد', persent: "20" },
        ];
        this.DisorderFamily = [
            { code: 'Z03011', value: 'خانواده دارای عضو معلول، بیماری خاص، صعب العلاج و سایر بیماری های مزمن', persent: "20" },
            { code: 'A58010', value: 'خانواده های تحت پوشش سازمان های حمایتی (کمیته امداد و سازمان بهزیستی)', persent: "20" },
            { code: 'Z03006', value: 'بی خانمان (کارتن خواب)', persent: "20" },
            { code: 'Z01003', value: 'مشکل مالی', persent: "20" },
            { code: 'Z04002', value: 'مشکل فرهنگی اجتماعی', persent: "20" },
            { code: 'Z05003', value: 'مشکل شغل', persent: "20" },
            { code: 'Z06004', value: 'مشکل بیکاری', persent: "20" },
            { code: 'Z07004', value: 'مشکل تحصیلی', persent: "20" },
            { code: 'Z08002', value: 'مشکل رفاه', persent: "20" },
        ];
        this.Criticalconditions = [
            { code: 'A80007', value: 'حوادث غیرمترقبه (سقوط، زورگیری و ...)', persent: "20" },
            { code: 'P77006', value: 'افکار خودکشی', persent: "5" },
            { code: 'P77004', value: 'اقدام به خودکشی', persent: "20" },
            { code: 'Z09001', value: 'نزاع و درگیری (ضرب و جرح)', persent: "20" },
            { code: 'Z23004', value: 'ناپدید شدن و مرگ والدین', persent: "20" },
            { code: 'Z15012', value: 'ناپدید شدن و مرگ همسر', persent: "20" },
            { code: 'Z19006', value: 'ناپدید شدن و مرگ کودک', persent: "20" },
            { code: 'A80006', value: 'تصادفات رانندگی', persent: "دستورالعمل وزارتی دارد" },
            { code: 'P02021', value: 'حوادث و بلایای طبیعی', persent: "70" },
        ];
        this.Insurancedocuments = [
            { code: 'A80007', value: 'ایرانی فاقد مدارک هویتی و بیمه', persent: "20" },
            { code: 'P77006', value: 'ایرانی فاقد والدین یا قیم قانونی', persent: "20" },
            { code: 'P77004', value: 'اتباع فاقد کدآمایش', persent: "20" },
            { code: 'Z09001', value: 'مجهول الهویه', persent: "70" },
            { code: 'Z23004', value: 'نوزادان متولد از ازدواج های غیرثبتی', persent: "70" },
        ];
        this.other = [
            { code: 'A23011', value: 'زنان ویژه', persent: "20" },
            { code: 'W84004', value: 'بارداری پر خطر', persent: "70" },
            { code: 'W84012', value: 'بارداری نیازمند مراقبت ویژه', persent: "20" },
            { code: 'B90004', value: 'بیمار HIV مثبت', persent: "20" },
            { code: 'D72002', value: 'بیمار دارای هپاتیت', persent: "20" },
            { code: 'Z09001', value: 'متهمین، محکومین یا مجرمین بیمار', persent: "20" },
        ];
        this.Acutedisease = [
            { code: 'B78005', value: 'تالاسمی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'B83010', value: 'هموفیلی', persent: "دستورالعمل وزارتی دارد." },
            { code: 'P99005', value: 'اتیسم', persent: "دستورالعمل وزارتی دارد." },
            { code: 'T99074', value: 'متابولیک', persent: "دستورالعمل وزارتی دارد." },
            { code: 'U59008', value: 'بیماری خاص (دیالیز)', persent: "دستورالعمل وزارتی دارد." },
            { code: 'U28001', value: 'پیوند', persent: "دستورالعمل وزارتی دارد." },
            { code: 'A79001', value: 'سرطان', persent: "دستورالعمل وزارتی دارد." },
            { code: 'A28008', value: 'معلولیت جسمی', persent: "20" },
            { code: 'W15001', value: 'ناباروری', persent: "دستورالعمل وزارتی دارد" },
            { code: 'L19015', value: 'SMA', persent: "دستورالعمل وزارتی دارد." },
            { code: 'T99053', value: 'CF', persent: "دستورالعمل وزارتی دارد." },
            { code: 'K82001', value: 'PPH', persent: "دستورالعمل وزارتی دارد." },
            { code: 'S83001', value: 'EB', persent: "دستورالعمل وزارتی دارد." },
        ];
        this.dangerGroups = [
            { code: 'B78005', value: 'کودک آزاری', score: 15 },
            { code: 'B83010', value: 'سوءرفتار یا خشونت', score: 15 },
            { code: 'P99005', value: 'سوء مصرف مواد', score: 15 },
            { code: 'T99074', value: 'نزاع و درگیری (ضرب و جرح)', score: 15 },
            { code: 'U59008', value: 'اقدام به خودکشی', score: 15 },
            { code: 'U28001', value: 'مادران باردار پرخطر', score: 15 },
            { code: 'A79001', value: 'ختلالات سایکوتیک', score: 15 },
            { code: 'A28008', value: 'بی خانمانی', score: 15 },
            { code: 'W15001', value: 'مجهول الهویه', score: 15 },
            { code: 'L19015', value: 'بیماری خاص', score: 15 },
            { code: 'T99053', value: 'صعب العلاج', score: 15 },
        ];
        this.EffectiveCompanion = [
            { code: '35.9.2', value: 'فاقد همراه مؤثر است ', score: 5 },
            { code: 'B83010', value: 'اطلاعات دارد، می تواند رضایت قانونی بدهد اما مشارکت خوبی ندارد', score: 4 },
            { code: 'P99005', value: 'اطلاعات کافی دارد، مشارکت دارد اما مجاز به ارائه رضایت قانونی نیست', score: 3 },
            { code: 'T99074', value: 'اطلاعات ندارد، مشارکت می کند و می تواند رضایت قانونی بدهد', score: 2 },
            { code: 'U59008', value: ' همراه مؤثر حضور دارد', score: 1 },
        ];
        this.Insurancecoverage = [
            { code: '35.9.2', value: 'بیمار تبعه غیرایرانی و فاقد بیمه است:', score: 5 },
            { code: 'B83010', value: 'بیمار فرد ایرانی و فاقد مدارک هویتی است', score: 4 },
            { code: 'P99005', value: 'بیمار تبعه غیرایرانی و دارای بیمه است', score: 3 },
            { code: 'T99074', value: 'یمار فرد ایرانی و دارای مدارک هویتی فاقد بیمه است:', score: 2 },
            { code: 'U59008', value: 'بیمار فرد ایرانی دارای بیمه است', score: 1 },
        ];
        this.ESI = [
            { code: '35.9.2', value: 'فاقد پاسخدهی (سطح یک)', score: 5 },
            { code: 'B83010', value: 'وضعیت پرخطر (سطح دو)', score: 4 },
            { code: 'P99005', value: ' تعداد تسهیالت مورد نیاز، 2 یا بیشتر (سطح سه)', score: 3 },
            { code: 'T99074', value: 'تعداد تسهیالت مورد نیاز، 1( سطح چهار)', score: 2 },
            { code: 'U59008', value: 'عدم نیاز به تسهیالت (سطح پنج)', score: 1 },
        ];
        this.supportNetwork = [
            { code: '1.9.2.1', value: 'کمیته امداد', },
            { code: '1.9.2.2', value: 'بهزیستی' },
            { code: '1.9.2.3', value: 'هلال احمر' },
            { code: '1.9.2.4', value: 'بنیاد شهید و امور ایثارگران' },
            { code: '1.9.2.5', value: 'سازمان اوقاف' },
            { code: '1.9.2.6', value: 'کمیساریای عالی امور پناهندگان' },
            { code: '1.9.2.7', value: 'موسسات خیریه' },
            { code: '1.9.2.8', value: 'سازمان مردم نهاد (NGO)' },
            { code: '1.9.2.9', value: 'خانواده' },
            { code: '1.9.2.10', value: 'دوستان' },
            { code: '1.9.2.11', value: 'خویشاوندان' },
            { code: '1.9.2.12', value: 'آشنایان' },
            { code: '1.9.2.13', value: 'عدم عضویت' },
        ];
        this.Intervention = [
            { code: '1.9.3.1', value: 'ارزیابی روانی اجتماعی', },
            { code: '1.9.3.2', value: 'مشاوره فردی' },
            { code: '1.9.3.3', value: 'مشاوره گروهی' },
            { code: '1.9.3.4', value: 'مشاوره خانوادگی' },
            { code: '1.9.3.5', value: 'آموزش فردی' },
            { code: '1.9.3.6', value: 'آموزش گروهی' },
            { code: '1.9.3.9', value: 'آموزش خانوادگی' },
            { code: '1.9.3.8', value: 'حمایت یابی درون سازمانی (اقتصادی)' },
            { code: '1.9.3.9', value: 'حمایت یابی درون سازمانی (روانی- اجتماعی)' },
            { code: '1.9.3.10', value: 'حمایت یابی برون سازمانی (اقتصادی)' },
            { code: '1.9.3.11', value: 'حمایت یابی برون سازمانی (روانی- اجتماعی)' },
            { code: '1.9.3.12', value: 'ارجاع درون سازمانی' },
            { code: '1.9.3.13', value: 'ارجاع برون سازمانی (به کمیته امداد)' },
            { code: '1.9.3.14', value: 'ارجاع برون سازمانی (به اورژانس اجتماعی بهزیستی)' },
            { code: '1.9.3.15', value: 'ارجاع برون سازمانی (مراکز کاهش آسیب بهزیستی)' },
            { code: '1.9.3.16', value: 'ارجاع برون سازمانی (مراکز مراقبتی بهزیستی)' },
            { code: '1.9.3.17', value: 'ارجاع برون سازمانی (مراکز توانبخشی بهزیستی)' },
            { code: '1.9.3.18', value: 'ارجاع برون سازمانی (مراکز نگهداری بهزیستی)' },
            { code: '1.9.3.19', value: 'ارجاع برون سازمانی (هلال احمر)' },
            { code: '1.9.3.20', value: 'ارجاع برون سازمانی (بنیاد شهید و امور ایثارگران)' },
            { code: '1.9.3.21', value: 'ارجاع برون سازمانی (مراجع قضایی- دادسرا)' },
            { code: '1.9.3.22', value: 'ارجاع برون سازمانی (مراجع قضایی- نیروی انتظامی 110)' },
            { code: '1.9.3.23', value: 'ارجاع برون سازمانی (شهرداری)' },
            { code: '1.9.3.24', value: 'ارجاع برون سازمانی (سازمان اوقاف)' },
            { code: '1.9.3.25', value: 'ارجاع برون سازمانی (کمیساریای امور پناهندگان)' },
            { code: '1.9.3.26', value: 'ارجاع برون سازمانی (ریاست جمهوری)' },
            { code: '1.9.3.27', value: 'ارجاع برون سازمانی (سازمان زندان ها)' },
            { code: '1.9.3.28', value: 'ارجاع برون سازمانی (شبکه بهداشت)' },
            { code: '1.9.3.29', value: 'ارجاع برون سازمانی (پزشکی قانونی)' },
            { code: '1.9.3.30', value: 'ارجاع برون سازمانی (ثبت احوال)' },
            { code: '1.9.3.31', value: 'ارجاع برون سازمانی (سایر دانشگاه های علوم پزشکی)' },
            { code: '1.9.3.32', value: 'ارجاع برون سازمانی (وزارت بهداشت)' },
            { code: '1.9.3.33', value: 'ارجاع برون سازمانی (سازمان فنی حرفه ای)' },
            { code: '1.9.3.34', value: 'ارجاع برون سازمانی (مراکز بیمه)' },
            { code: '1.9.3.35', value: 'ارجاع برون سازمانی (موسسات خیریه)' },
            { code: '1.9.3.36', value: 'ارجاع برون سازمانی (سازمان مردم نهاد )' },
            { code: '1.9.3.37', value: 'مداخله در بحران' },
            { code: '1.9.3.38', value: 'پیگیری پس از ترخیص' },
            { code: '1.9.3.39', value: 'بازدید منزل' },
            { code: '1.9.3.40', value: 'مراجعه مددکار اجتماعی به سازمان های حمایتی یا قانونی' },
            { code: '1.9.3.41', value: 'سایر مداخلات' },
        ];
        this.FinalIntervention = [
            { value: 'دستیابی موفق به اهداف مداخله و ترخیص ایمن بیمار', id: '1' },
            { value: 'دستیابی نسبی به اهداف مداخله و ترخیص بیمار', id: '2' },
            { value: 'عدم دستیابی به اهداف مداخله و عدم ترخیص بیمار', id: '3' },
        ];
        this.FinalInterventionFirst = [
            { value: 'همکاری و همراهی بیمار در پیشبرد مداخالت', id: '1' },
            { value: 'همکاری همراهان موثر و خانواده بیمار در پیشبرد مداخالت', id: '2' },
            { value: 'استفاده موثر از منابع موجود', id: '3' },
            { value: 'همکاری موثر سازمانهای برونبخشی', id: '4' },
        ];
        this.FinalInterventionSecond = [
            { value: 'نداشتن همراهان موثر', id: '1' },
            { value: 'عدم همکاری موثر بیمار', id: '2' },
            { value: 'ضعف همکاری سازمانهای برونبخشی', id: '3' },
            { value: 'نتیجه مداخالت منوط به اقدامات سایر سازمانهای برونبخشی', id: '4' },
            { value: 'کمبود منابع و امکانات موجود', id: '5' },
        ];
        this.FinalInterventionThird = [
            { value: 'امتناع بیمار از پیشبرد مداخالت', id: '1' },
            { value: 'امتناع خانواده یا همراهان بیمار از پیشبرد مداخالت', id: '2' },
            { value: ' عدم موفقیت در جذب منابع', id: '3' },
            { value: 'نتیجه مداخالت منوط به اقدامات سایر سازمانهای برونبخشی', id: '4' },
            { value: 'ترخیص بیمار مشروط به اقدامات سایر سازمانهای متولی', id: '5' },
        ];
        this.Jobs = [
            { code: '24043', value: 'کارمند' },
            { code: '24032', value: 'کارگر' },
            { code: '99994', value: 'آزاد' },
            { code: '99996', value: 'بازنشسته' },
            { code: '99995', value: 'از کار افتاده' },
            { code: '99993', value: 'خانه دار' },
            { code: '99992', value: 'محصل' },
            { code: '99991', value: 'بیکار' },
            { code: '24039', value: 'سایر مشاغل' },
        ];
        this.InteranceType = [
            { code: '1.9.1.1', value: 'خود ارجاع' },
            { code: '1.9.1.2', value: 'راند' },
            { code: '1.9.1.3', value: 'تریاژ' },
            { code: '1.9.1.4', value: 'ارجاع از کادر درمان' },
            { code: '1.9.1.5', value: 'ارجاع از سازمان های دولتی' },
            { code: '1.9.1.6', value: 'ارجاع از سازمان های غیردولتی' },
            { code: '1.9.1.7', value: 'سایر' }
        ];
        this.education = [
            { code: '1', value: 'بی سواد' },
            { code: '2', value: 'ابتدايی' },
            { code: '3', value: 'راهنمايی' },
            { code: '4', value: 'متوسطه' },
            { code: '6', value: 'دیپلم' },
            { code: '100', value: 'دانشجوي کاردانی' },
            { code: '101', value: 'کاردانی' },
            { code: '110', value: 'دانشجوي کارشناسی' },
            { code: '111', value: ' کارشناسی' },
            { code: '140', value: 'دانشجوي کارشناسی ارشد' },
            { code: '141', value: 'کارشناسی ارشد' },
            { code: '150', value: ' دانشجوي دکتراي حرفه اي' },
            { code: '151', value: 'دکتراي حرفه اي' },
            { code: '170', value: 'دانشجوي تخصص' },
            { code: '171', value: 'تخصص' },
            { code: '200', value: 'دانشجوي فوق تخصص' },
            { code: '201', value: 'فوق تخصص' },
            { code: '210', value: 'دانشجوي فلوشیپ' },
            { code: '211', value: 'فلوشیپ' },
            { code: '190', value: 'دانشجوي دکتري تخصصی' },
            { code: '191', value: ' دکتراي تخصصی' },
        ];
        this.MaritalStatus = [
            { code: '1', value: 'طلاق گرفته' },
            { code: '2', value: 'متاهل' },
            { code: '3', value: 'مجرد' },
            { code: '4', value: 'همسر فوت شده' },
        ];
        this.data = [];
        this.dataRand = [];
    }
    PatientInfoComponent.prototype.getnikPresent = function (event) {
        console.log(typeof this.nikPersent);
        if (this.nikPersent > 100) {
            this.nikPersent = 100;
        }
    };
    PatientInfoComponent.prototype.getbehdashPersent = function () {
        if (this.behdashPersent > 100) {
            this.behdashPersent = 100;
        }
    };
    PatientInfoComponent.prototype.getKheyrieMOney = function () {
        if (this.kheyriePersent > 100) {
            this.kheyriePersent = 100;
        }
    };
    PatientInfoComponent.prototype.getnotDolatiPersent = function () {
        if (this.notDolatiPersent > 100) {
            this.notDolatiPersent = 100;
        }
    };
    PatientInfoComponent.prototype.getdolatiPersent = function () {
        if (this.dolatiPersent > 100) {
            this.dolatiPersent = 100;
        }
    };
    PatientInfoComponent.prototype.getMaritalStatus = function (code, value) {
        this.maritalCode = code;
        this.maritalValue = value;
    };
    PatientInfoComponent.prototype.getChildren = function (event) {
        this.children = event.target.value;
    };
    PatientInfoComponent.prototype.getEducation = function (event) {
        this.educationCode = event.target.value;
    };
    PatientInfoComponent.prototype.getINteranceType = function (code, value) {
        this.InteranceValue = value;
        this.interanceCode = code;
    };
    PatientInfoComponent.prototype.getJobs = function (event) {
        this.JObsCode = event.target.value;
        console.log(this.JObsCode);
    };
    PatientInfoComponent.prototype.Computing = function () {
        this.FinallParsent = this.HelpPersent + Number(this.persent);
        console.log(this.FinallParsent);
        if (this.FinallParsent < 0) {
            this.FinallParsent = 0;
        }
    };
    PatientInfoComponent.prototype.InsurancecoverageList = function () {
        this.ShowInsurancecoverage = true;
    };
    PatientInfoComponent.prototype.getFinalIntervention = function (id, value) {
        this.FinalInterventionSelect = value;
        this.FinalInterventionID = id;
        console.log(this.FinalInterventionID);
        this.showFinalIntervention = false;
    };
    PatientInfoComponent.prototype.supportNetworkList = function () {
        this.ShowSupportNetwork = true;
    };
    PatientInfoComponent.prototype.showFinalInterventionList = function () {
        this.showFinalIntervention = true;
    };
    PatientInfoComponent.prototype.focuseInput = function () {
        this.showGruopMain = true;
        // this.numberofTragetArray=this.numberofTragetArray+1
    };
    PatientInfoComponent.prototype.EffectiveCompanionList = function () {
        this.ShowEffectiveCompanion = true;
    };
    PatientInfoComponent.prototype.ShowFinalInterventionFirstList = function () {
        this.eghdamatShow = false;
        this.ShowFinalInterventionFirst = true;
    };
    PatientInfoComponent.prototype.ShowFinalInterventionSecondList = function () {
        this.eghdamatShow = false;
        this.ShowFinalInterventionSecond = true;
    };
    PatientInfoComponent.prototype.ShowFinalInterventionThirdList = function () {
        this.eghdamatShow = false;
        this.ShowFinalInterventionThird = true;
    };
    PatientInfoComponent.prototype.ESIList = function () {
        this.ShowESI = true;
    };
    PatientInfoComponent.prototype.getPsychologicalconditionsTrue = function () {
        this.PsychologicalconditionsValue = "نیاز به مداخله";
        this.PsychologicalconditionsID = 1;
    };
    PatientInfoComponent.prototype.getPsychologicalconditionsFalse = function () {
        this.PsychologicalconditionsValue = "عدم نیاز به مداخله";
        this.PsychologicalconditionsID = 2;
    };
    PatientInfoComponent.prototype.getPsychologicalconditionsNone = function () {
        this.PsychologicalconditionsValue = "ارزیابی نشده";
        this.PsychologicalconditionsID = 3;
    };
    PatientInfoComponent.prototype.getEconomicSituationTrue = function () {
        this.EconomicSituationValue = "نیاز به مداخله";
        this.EconomicSituationID = 1;
    };
    PatientInfoComponent.prototype.getEconomicSituationFalse = function () {
        this.EconomicSituationValue = "عدم نیاز به مداخله";
        this.EconomicSituationID = 2;
    };
    PatientInfoComponent.prototype.getEconomicSituationNone = function () {
        this.EconomicSituationValue = "ارزیابی نشده";
        this.EconomicSituationID = 3;
    };
    PatientInfoComponent.prototype.getDisorderTrue = function () {
        this.DisorderValue = "نیاز به مداخله";
        this.DisorderID = 1;
    };
    PatientInfoComponent.prototype.getDisorderFalse = function () {
        this.DisorderValue = "عدم نیاز به مداخله";
        this.DisorderID = 2;
    };
    PatientInfoComponent.prototype.getDisorderNone = function () {
        this.DisorderValue = "ارزیابی نشده";
        this.DisorderID = 3;
    };
    PatientInfoComponent.prototype.getLegalTrue = function () {
        this.LegalValue = "نیاز به مداخله";
        this.LegalID = 1;
    };
    PatientInfoComponent.prototype.getLegalFalse = function () {
        this.LegalValue = "عدم نیاز به مداخله";
        this.LegalID = 2;
    };
    PatientInfoComponent.prototype.getLegalNone = function () {
        this.LegalValue = "ارزیابی نشده";
        this.LegalID = 3;
    };
    PatientInfoComponent.prototype.getEffectiveCompanion = function (value, score) {
        this.ShowEffectiveCompanion = false;
        this.EffectiveCompanionScore = score;
        this.finalScore = this.finalScore + this.EffectiveCompanionScore;
        this.EffectiveCompanionInput = value;
        if (this.finalScore > 14) {
            this.Level = "الویت اول ";
            this.color = 1;
            console.log(this.color);
        }
        if (this.finalScore > 9 && this.finalScore < 15) {
            this.Level = "الویت سوم";
            this.color = 2;
        }
        if (this.finalScore > 6 && this.finalScore < 10) {
            this.Level = "الویت سوم ";
            this.color = 3;
        }
        if (this.finalScore > 2 && this.finalScore < 7) {
            this.Level = "الویت چهارم";
            this.color = 4;
        }
    };
    PatientInfoComponent.prototype.getESI = function (value, score) {
        this.ShowESI = false;
        this.ESIScore = score;
        this.ESIInput = value;
        this.finalScore = this.finalScore + this.ESIScore;
        if (this.finalScore > 14) {
            this.Level = "الویت اول ";
            this.color = 1;
            console.log(this.color);
        }
        if (this.finalScore > 9 && this.finalScore < 15) {
            this.Level = "الویت سوم";
            this.color = 2;
        }
        if (this.finalScore > 6 && this.finalScore < 10) {
            this.Level = "الویت سوم ";
            this.color = 3;
        }
        if (this.finalScore > 2 && this.finalScore < 7) {
            this.Level = "الویت چهارم";
            this.color = 4;
        }
    };
    PatientInfoComponent.prototype.getSupportNetwork = function (value, code) {
        this.netwokSuport = value;
        // this.supportNetworkInput.push(this.netwokSuport);
        this.supportNetworkCode = code;
        this.ShowSupportNetwork = false;
        //
        var customOBj2 = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customOBj2.value = this.netwokSuport;
        this.supportNetworkInput.push(this.netwokSuport);
    };
    PatientInfoComponent.prototype.getInsurancecoverage = function (value, score) {
        this.ShowInsurancecoverage = false;
        this.InsurancecoverageScore = score;
        this.InsurancecoverageInput = value;
        this.finalScore = this.finalScore + this.InsurancecoverageScore;
        if (this.finalScore > 14) {
            this.Level = "الویت اول ";
            this.color = 1;
            console.log(this.color);
        }
        if (this.finalScore > 9 && this.finalScore < 15) {
            this.Level = "الویت سوم";
            this.color = 2;
        }
        if (this.finalScore > 6 && this.finalScore < 10) {
            this.Level = "الویت سوم ";
            this.color = 3;
        }
        if (this.finalScore > 2 && this.finalScore < 7) {
            this.Level = "الویت چهارم";
            this.color = 4;
        }
    };
    PatientInfoComponent.prototype.removeDanger = function (index) {
        console.log(index);
        this.dangerInput.splice(index, 1);
        this.dangerScore = 0;
        this.finalScore = this.finalScore - 15;
        console.log(this.finalScore);
        this.showDanger = false;
        console.log(this.showDanger);
    };
    PatientInfoComponent.prototype.removeDanger2 = function (index) {
        this.dangerInput2.splice(index, 1);
    };
    PatientInfoComponent.prototype.removeFinalInterventionsecond = function (index) {
        this.FinalInterventionSecondArray.splice(index, 1);
    };
    PatientInfoComponent.prototype.removeFinalInterventionThird = function (index) {
        this.FinalInterventionThirdArray.splice(index, 1);
    };
    PatientInfoComponent.prototype.removeInterventionItem = function (index) {
        this.InterventionArray.splice(index, 1);
    };
    PatientInfoComponent.prototype.removeInterventionAll = function () {
        this.InterventionArray = [];
        this.ShowIntervention = false;
    };
    PatientInfoComponent.prototype.removeFinalInterventionSecondAll = function () {
        this.FinalInterventionSecondArray = [];
        this.ShowFinalInterventionSecond = false;
    };
    PatientInfoComponent.prototype.removeFinalInterventionThirdAll = function () {
        this.FinalInterventionThirdArray = [];
        this.ShowFinalInterventionThird = false;
    };
    PatientInfoComponent.prototype.removeDangerAll = function () {
        this.dangerInput = [];
        this.showDanger = false;
        this.finalScore = this.finalScore - (this.dangerLenght * 15);
    };
    PatientInfoComponent.prototype.removeDangerAll2 = function () {
        this.dangerInput2 = [];
        this.showDanger2 = false;
    };
    PatientInfoComponent.prototype.removeFinalInterventionFirst = function (index) {
        this.FinalInterventionFirstArray.splice(index, 1);
    };
    PatientInfoComponent.prototype.removeFinalInterventionFirstAll = function () {
        this.FinalInterventionFirstArray = [];
        this.ShowFinalInterventionFirst = false;
        this.eghdamatShow = true;
    };
    PatientInfoComponent.prototype.getDangerItem = function (value, score) {
        this.dangerScore = score;
        this.finalScore = 20;
        this.dangerValue = value;
        var customObj2 = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customObj2.value = this.dangerValue;
        this.dangerInput.push(customObj2);
        console.log(this.dangerInput.length);
        this.dangerLenght = this.dangerInput.length;
        this.showDanger = false;
        if (this.finalScore > 14) {
            this.Level = "الویت اول ";
            this.color = 1;
            console.log(this.color);
        }
        if (this.finalScore > 9 && this.finalScore < 15) {
            this.Level = "الویت سوم";
            this.color = 2;
        }
        if (this.finalScore > 6 && this.finalScore < 10) {
            this.Level = "الویت سوم ";
            this.color = 3;
        }
        if (this.finalScore > 2 && this.finalScore < 7) {
            this.Level = "الویت چهارم";
            this.color = 4;
        }
    };
    PatientInfoComponent.prototype.getFinalInterventionFirst = function (value) {
        this.FinalInterventionFirstValue = value;
        var customObj2 = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customObj2.value = this.FinalInterventionFirstValue;
        this.FinalInterventionFirstArray.push(customObj2);
        console.log(this.FinalInterventionFirstArray);
        this.ShowFinalInterventionFirst = false;
    };
    PatientInfoComponent.prototype.getFinalInterventionThird = function (value) {
        this.FinalInterventionThirdValue = value;
        var customObj4 = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customObj4.value = this.FinalInterventionThirdValue;
        this.FinalInterventionThirdArray.push(customObj4);
        console.log(this.FinalInterventionFirstArray);
        this.ShowFinalInterventionThird = false;
    };
    PatientInfoComponent.prototype.getFinalInterventionsecond = function (value) {
        this.FinalInterventionSecondValue = value;
        var customObj3 = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customObj3.value = this.FinalInterventionSecondValue;
        this.FinalInterventionSecondArray.push(customObj3);
        this.ShowFinalInterventionSecond = false;
    };
    PatientInfoComponent.prototype.getDangerItem2 = function (value) {
        this.dangerValue2 = value;
        console.log(this.dangerValue2);
        var customOBj = new _help_interFace_DangerGroup__WEBPACK_IMPORTED_MODULE_4__["DangerGroup"]();
        customOBj.value = this.dangerValue2;
        this.dangerInput2.push(this.dangerValue2);
        console.log(this.dangerInput2);
        this.showDanger2 = false;
    };
    PatientInfoComponent.prototype.getTargetItem = function (id, value) {
        this.id = id;
        this.targetItemInputValue = value;
        this.showGruopMain = false;
        this.showChildAbouse = true;
        var obj = new _interFace_targetArray__WEBPACK_IMPORTED_MODULE_6__["targetArray"]();
        obj.targetvalue = this.targetItemInputValue;
        obj.targetCOde = this.id;
        this.array1.push(obj);
        console.log(this.array1);
    };
    PatientInfoComponent.prototype.getIntervention = function (value, code, id) {
        this.Interventioncode = code;
        this.InterventionValue = value;
        var customObj3 = new _interFace_modakheleInterface__WEBPACK_IMPORTED_MODULE_5__["modakhele"]();
        customObj3.value = this.InterventionValue;
        customObj3.id = id;
        this.InterventionArray.push(customObj3);
        this.data.push(this.InterventionArray);
        console.log(this.data);
        console.log(this.InterventionArray);
        this.ShowIntervention = false;
    };
    PatientInfoComponent.prototype.showdangerList = function () {
        this.showDanger = true;
    };
    PatientInfoComponent.prototype.ShowInterventionList = function (i) {
        this.ShowIntervention = true;
    };
    PatientInfoComponent.prototype.showdangerList2 = function () {
        this.showDanger2 = true;
    };
    PatientInfoComponent.prototype.patinetHasRelatieve = function () {
        this.hasRelative = true;
    };
    PatientInfoComponent.prototype.patinetDosentHasRelatieve = function () {
        this.hasRelative = false;
    };
    PatientInfoComponent.prototype.openRandModal = function (content) {
        this.dangerInput2 = [];
        this.numberofarrayY = this.numberofarrayY + 1;
        console.log(this.numberofarrayY);
        console.log(this.dangerInput2);
        this.PsychologicalconditionsValue = '';
        this.PsychologicalconditionsID = null;
        this.EconomicSituationID = null;
        this.EconomicSituationValue = '';
        this.DisorderValue = '';
        this.LegalValue = '';
        this.DisorderID = null;
        this.LegalID = null;
        this.SummeryText = '';
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
        }, function (reason) {
        });
    };
    PatientInfoComponent.prototype.edit = function (index, content) {
        var arrau = this.dataRand.filter(function (x) { return x.id === index; });
        for (var _i = 0, arrau_1 = arrau; _i < arrau_1.length; _i++) {
            var i = arrau_1[_i];
            console.log(i);
            this.dangerInput2 = i.valueDanger;
        }
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
        }, function (reason) {
        });
    };
    PatientInfoComponent.prototype.add = function () {
        this.dataRand.push({ 'valueDanger': this.dangerInput2, 'hemayati': this.supportNetworkInput, 'id': this.numberofarrayY - 1, 'summery': this.SummeryText,
            'ghanoon': this.LegalValue, 'ekhtelal': this.DisorderValue, 'Eghtesadi': this.EconomicSituationValue, 'ravani': this.PsychologicalconditionsValue,
            'active': this.Active
        });
        console.log(this.dataRand);
        this.arraaaay.push(this.dataRand);
        // console.log(this.arraaaay)
        // console.log(this.dangerInput2)
        this.array.push(this.dangerInput2);
        this.dangerInput2 = [];
        this.supportNetworkInput = [];
        // console.log(this.array);
        // this.dangerInput2=[]
        // console.log(this.arraaaay);
        this.containers.push({ 'div': this.containers.length, 'active': this.Active });
        // console.log(this.containers)
        console.log(this.containers);
        this.modalService.dismissAll();
        this.ShowRand = false;
    };
    PatientInfoComponent.prototype.addToTarget = function () {
        this.TargetArray.push(this.TargetArray.length);
        this.Targetnumberofarray = this.Targetnumberofarray + 1;
    };
    PatientInfoComponent.prototype.addIntervention = function () {
        this.InterventionContainer.push(this.InterventionContainer.length);
        console.log(this.InterventionContainer.length);
        this.numberofarray = this.numberofarray + 1;
    };
    PatientInfoComponent.prototype.removeIntervention = function (index) {
        this.InterventionContainer.splice(index, 1);
        if (this.numberofarray > 0) {
            this.numberofarray = this.numberofarray - 1;
        }
    };
    PatientInfoComponent.prototype.isHasFaloowUp = function () {
        this.hasFallowUp = true;
    };
    PatientInfoComponent.prototype.HasnotFallowUp = function () {
        this.hasFallowUp = false;
    };
    PatientInfoComponent.prototype.hasSuppoort = function () {
        this.hasSuppoortOK = true;
    };
    PatientInfoComponent.prototype.hasNotSuppoort = function () {
        this.hasSuppoortOK = false;
    };
    PatientInfoComponent.prototype.grayClass = function (i) {
        console.log(i);
        i.active = true;
        console.log(i.active);
        // this.dataRand.forEach(item=>{
        //     console.log(item.id)
        //     if (item.id==index){
        //         this.colorID=item.id;
        //         console.log('ColorId',this.colorID)
        //
        //
        //     }
        //
        // })
    };
    PatientInfoComponent.prototype.isSelected = function () {
    };
    PatientInfoComponent.prototype.getChildAbouseDate = function (code, persent, value) {
        this.code = code;
        this.persent = persent;
        this.TargetInputValue = value;
        console.log(this.TargetInputValue);
        this.showChildAbouse = false;
        var obj = new _interFace_targetArray__WEBPACK_IMPORTED_MODULE_6__["targetArray"]();
        obj.childValue = this.TargetInputValue;
        obj.childCode = this.code;
        this.array1.unshift(obj);
        console.log(this.array1);
    };
    PatientInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finalTime = (this.time.getHours() + 1) + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
        this.CaseworkerId = localStorage.getItem('caseWorkerId');
        this._service.getPatientByID(this.CaseworkerId).subscribe(function (res) {
            _this.info = res;
            console.log(res);
        });
    };
    PatientInfoComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__["CaseWorkerListService"] }
    ]; };
    PatientInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-info',
            template: __webpack_require__(/*! raw-loader!./patient-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/help/patient-info/patient-info.component.html"),
            styles: [__webpack_require__(/*! ./patient-info.component.scss */ "./src/app/help/patient-info/patient-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__["CaseWorkerListService"]])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());



/***/ }),

/***/ "./src/app/help/patient-list/patient-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/help/patient-list/patient-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvcGF0aWVudC1saXN0L3BhdGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/help/patient-list/patient-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/help/patient-list/patient-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PatientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListComponent", function() { return PatientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/Case-worker/Case-woeker-patientList/case-worker-list.service */ "./src/app/services/Case-worker/Case-woeker-patientList/case-worker-list.service.ts");
/* harmony import */ var _services_Case_worker_Enum_enum_servies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/Case-worker/Enum/enum-servies.service */ "./src/app/services/Case-worker/Enum/enum-servies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var PatientListComponent = /** @class */ (function () {
    function PatientListComponent(modalService, _service, _Enum, router) {
        this.modalService = modalService;
        this._service = _service;
        this._Enum = _Enum;
        this.router = router;
        this.nationalCode = "";
        this.patientID = "";
        this.startDate = "";
    }
    PatientListComponent.prototype.GetDetails = function (content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
        }, function (reason) {
        });
    };
    PatientListComponent.prototype.getId = function (id) {
        this.caseWorkerId = id;
        localStorage.setItem('caseWorkerId', id);
        this.router.navigate(['/Help/Patient-Info', this.caseWorkerId]);
    };
    PatientListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.filterForm.value);
        this.nationalCode = this.filterForm.value.nationalCode;
        this.patientID = this.filterForm.value.patinetID;
        this.startDate = this.filterForm.value.startDate;
        this._service.postPatient(this.nationalCode, this.patientID, this.startDate).subscribe(function (res) {
            _this.patientList = res;
        });
    };
    PatientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.postPatient(this.nationalCode, this.patientID, this.startDate).subscribe(function (res) {
            _this.patientList = res;
        });
        this._Enum.GetCaseWorkerStatusList().subscribe(function (res) {
            return _this.StatueList = res;
        });
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            'nationalCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            'patinetID': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    };
    PatientListComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__["CaseWorkerListService"] },
        { type: _services_Case_worker_Enum_enum_servies_service__WEBPACK_IMPORTED_MODULE_4__["EnumServiesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PatientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-list',
            template: __webpack_require__(/*! raw-loader!./patient-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/help/patient-list/patient-list.component.html"),
            styles: [__webpack_require__(/*! ./patient-list.component.scss */ "./src/app/help/patient-list/patient-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_Case_worker_Case_woeker_patientList_case_worker_list_service__WEBPACK_IMPORTED_MODULE_3__["CaseWorkerListService"],
            _services_Case_worker_Enum_enum_servies_service__WEBPACK_IMPORTED_MODULE_4__["EnumServiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PatientListComponent);
    return PatientListComponent;
}());



/***/ }),

/***/ "./src/app/help/print/print.component.scss":
/*!*************************************************!*\
  !*** ./src/app/help/print/print.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvcHJpbnQvcHJpbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/help/print/print.component.ts":
/*!***********************************************!*\
  !*** ./src/app/help/print/print.component.ts ***!
  \***********************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintComponent = /** @class */ (function () {
    function PrintComponent() {
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! raw-loader!./print.component.html */ "./node_modules/raw-loader/index.js!./src/app/help/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print.component.scss */ "./src/app/help/print/print.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/services/Case-worker/Case-woeker-patientList/case-worker-list.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/services/Case-worker/Case-woeker-patientList/case-worker-list.service.ts ***!
  \******************************************************************************************/
/*! exports provided: CaseWorkerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseWorkerListService", function() { return CaseWorkerListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CaseWorkerListService = /** @class */ (function () {
    function CaseWorkerListService(http) {
        this.http = http;
        this.getCaseWorkerListURl = "http://rw80:900/api/CaseWorker/Get_CaseWorkerList";
    }
    CaseWorkerListService.prototype.postPatient = function (nationalcode, patinetID, startDate) {
        var data = {
            "caseWorkerID": "",
            "nationalcode": nationalcode,
            "patientID": patinetID,
            "fromDate": "",
            "toDate": "",
            "statusIS": "",
            "fromStartDate": startDate,
            "toStartDate": ""
        };
        var body = JSON.stringify(data);
        console.log(body);
        var headers = { 'Content-Type': 'application/json' };
        var headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        };
        var requestOptions = {
            headers: new Headers(headerDict),
        };
        return this.http.post(this.getCaseWorkerListURl, body, {
            headers: headerDict
        });
    };
    CaseWorkerListService.prototype.getPatientByID = function (caseWorkerID) {
        var data = {
            "caseWorkerID": caseWorkerID,
            "nationalcode": "",
            "patientID": "",
            "fromDate": "",
            "toDate": "",
            "statusIS": "",
            "fromStartDate": "",
            "toStartDate": ""
        };
        var body = JSON.stringify(data);
        console.log(body);
        var headers = { 'Content-Type': 'application/json' };
        var headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        };
        var requestOptions = {
            headers: new Headers(headerDict),
        };
        return this.http.post(this.getCaseWorkerListURl, body, {
            headers: headerDict
        });
    };
    CaseWorkerListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CaseWorkerListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CaseWorkerListService);
    return CaseWorkerListService;
}());



/***/ }),

/***/ "./src/app/services/Case-worker/Enum/enum-servies.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/Case-worker/Enum/enum-servies.service.ts ***!
  \*******************************************************************/
/*! exports provided: EnumServiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumServiesService", function() { return EnumServiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EnumServiesService = /** @class */ (function () {
    function EnumServiesService(http) {
        this.http = http;
        this.getGenderListUrl = "http://rw80:900/api/Triage/Get_GenderList";
        this.GetCaseWorkerStatusListUrl = "http://rw80:900/api/CaseWorker/Get_CaseWorkerStatusList\n";
    }
    EnumServiesService.prototype.getGenderList = function () {
        var headerDict = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        var requestOptions = {
            headers: new Headers(headerDict),
        };
        return this.http.get(this.getGenderListUrl, {
            headers: headerDict
        });
    };
    EnumServiesService.prototype.GetCaseWorkerStatusList = function () {
        var headerDict = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        var requestOptions = {
            headers: new Headers(headerDict),
        };
        return this.http.get(this.GetCaseWorkerStatusListUrl, {
            headers: headerDict
        });
    };
    EnumServiesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EnumServiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnumServiesService);
    return EnumServiesService;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map