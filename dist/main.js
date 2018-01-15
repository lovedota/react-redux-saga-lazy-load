webpackJsonp([2],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    { label: 'Home', to: '/', path: 'home', activeOnlyWhenExact: true },
    { label: 'About', to: '/about', path: 'about', activeOnlyWhenExact: true },
    { label: 'Contact', to: '/contact', path: 'contact', activeOnlyWhenExact: true }
]);


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_sass__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_scss__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_history_createBrowserHistory__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_async_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__root_root_store__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_layout_navigation__ = __webpack_require__(262);












var Container = (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react__["Fragment"], null,
    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__layout_layout_navigation__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"], { store: __WEBPACK_IMPORTED_MODULE_10__root_root_store__["b" /* default */] },
        __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */].map(function (route, index) { return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router__["Route"], { exact: true, path: route.to, component: Object(__WEBPACK_IMPORTED_MODULE_8__common_async_component__["a" /* withAsync */])(route.path), key: index })); })))));
var App = function () {
    return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_7_history_createBrowserHistory___default()() },
        __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", null, Container)));
};
Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](App, null), document.getElementById('container'));


/***/ }),

/***/ 257:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withAsync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_root_store__ = __webpack_require__(34);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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


function withAsync(modulePath) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            _this.state = {
                loadedComponent: null
            };
            return _this;
        }
        class_1.prototype.load = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var load;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, __webpack_require__(261)("./" + modulePath + "/index")];
                        case 1:
                            load = _a.sent();
                            load(function (route) {
                                Object(__WEBPACK_IMPORTED_MODULE_1__root_root_store__["a" /* applyReducers */])(route.reducer);
                                Object(__WEBPACK_IMPORTED_MODULE_1__root_root_store__["d" /* runSagas */])(route.saga);
                                _this.setState({
                                    loadedComponent: route.page
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        class_1.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.load(); }, 500); // feel it good
        };
        class_1.prototype.render = function () {
            var LoadedComponent = this.state.loadedComponent;
            if (!LoadedComponent) {
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader-wrapper" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader" })));
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](LoadedComponent, null);
        };
        return class_1;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
}


/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
function rootReducer(state) {
    if (state === void 0) { state = {}; }
    return state;
}


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(21);
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

function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./contact/index": [
		266,
		1
	],
	"./home/index": [
		267,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 261;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_layout_navigation_scss__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_layout_navigation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_layout_navigation_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(193);




/* harmony default export */ __webpack_exports__["a"] = (function () {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "layout-navigation navbar navbar-default navbar-fixed-top" },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */].map(function (route, index) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"], { to: route.to, key: index, activeClassName: "active" }, route.label)); }))));
});;


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sagaMiddleware */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return runSagas; });
/* unused harmony export createReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dispatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_root_reducer__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_root_saga__ = __webpack_require__(260);
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





var sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["default"])();
var runSagas = function (pageSaga) {
    var sagas = [__WEBPACK_IMPORTED_MODULE_4__root_root_saga__["a" /* default */]];
    if (pageSaga) {
        sagas.push(pageSaga);
    }
    sagaMiddleware.run(function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sagas.map(function (saga) { return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["fork"])(saga); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var createReducers = function (pageReducer) {
    var reducers = {
        root: __WEBPACK_IMPORTED_MODULE_3__root_root_reducer__["a" /* default */]
    };
    if (pageReducer) {
        reducers['page'] = pageReducer;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(reducers);
};
var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(createReducers(), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(sagaMiddleware));
var applyReducers = function (pageReducer) {
    store.replaceReducer(createReducers(pageReducer));
};
runSagas(__WEBPACK_IMPORTED_MODULE_4__root_root_saga__["a" /* default */]);
var dispatch = store.dispatch;
/* harmony default export */ __webpack_exports__["b"] = (store);


/***/ })

},[256]);
//# sourceMappingURL=main.js.map