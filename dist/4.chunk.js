webpackJsonp([4],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_reducer__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_saga__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "saga", function() { return __WEBPACK_IMPORTED_MODULE_1__contact_saga__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_page__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return __WEBPACK_IMPORTED_MODULE_2__contact_page__["a"]; });





/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initState = {
    isLoading: false,
    items: [],
    displayItems: []
};
/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (state === void 0) { state = initState; }
    var newState = __assign({}, state);
    switch (action.type) {
        case "contact/init":
            newState.isLoading = true;
            return newState;
        case "contact/init/success":
            newState.isLoading = false;
            newState.items = action.items;
            newState.displayItems = action.items.slice(0, 10);
            return newState;
        case "contact/init/error":
            return {
                isLoading: false,
                items: []
            };
        case "contact/update":
            newState.items = state.items.map(function (item) {
                if (item.id !== action.item.id) {
                    return item;
                }
                return __assign({}, item, action.item);
            });
            newState.displayItems = newState.items.slice(0, 10);
            return newState;
        case "contact/update-worker/success":
            return {
                isLoading: false,
                items: action.items,
                displayItems: action.items.slice(0, 10)
            };
        default:
            return state;
    }
});;


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = aboutSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_services__ = __webpack_require__(284);
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function fetchItems() {
    var items, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_1__contact_services__["a" /* default */].getItems)];
            case 1:
                items = _a.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({ type: "contact/init/success", items: items })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({ type: "contact/init/error", error: error_1 })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function aboutSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeEvery"])("contact/init", fetchItems)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils__ = __webpack_require__(285);

/* harmony default export */ __webpack_exports__["a"] = ({
    getItems: function () {
        return new Promise(function (resolve) {
            var items = [];
            for (var i = 0; i < 1000000; i++) {
                // each child must have a consistent height
                items.push({
                    id: i,
                    firstName: "First Name " + i,
                    lastName: "Last Name " + i,
                    dateOfBirth: Date.now()
                });
            }
            setTimeout(function () {
                resolve(items);
            }, 1000);
        });
    },
    generateReport: function () {
        var size = 10000;
        var array = Array.from(Array(size).keys()).map(function (num) {
            return {
                id: num,
                name: Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["b" /* randomString */])(),
                dateOfBirth: Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["a" /* randomDate */])(new Date(2012, 0, 1), new Date())
            };
        });
        var str = "";
        array.forEach(function (item) {
            var line = "";
            Object.keys(item).forEach(function (prop) {
                if (line) {
                    line += ",";
                }
                line += item[prop];
            });
            str += line + "\r\n";
        });
        return str;
    }
});


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = randomString;
/* unused harmony export getRandomColor */
/* harmony export (immutable) */ __webpack_exports__["a"] = randomDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

function randomString() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
;
function randomDate(start, end) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactPage.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "page-header" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Contact Page"))));
    };
    return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_a) {
    var page = _a.page;
    return ({
        isLoading: page.isLoading,
        items: page.displayItems
    });
})(ContactPage));


/***/ })

});
//# sourceMappingURL=4.chunk.js.map