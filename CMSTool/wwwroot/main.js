(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/Metric.ts":
/*!**********************************!*\
  !*** ./src/app/Models/Metric.ts ***!
  \**********************************/
/*! exports provided: Metric, Adjustment, Meta, Data, Ancestry, ScrapedMetric, ScrapedData, ChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metric", function() { return Metric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adjustment", function() { return Adjustment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ancestry", function() { return Ancestry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapedMetric", function() { return ScrapedMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapedData", function() { return ScrapedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartData", function() { return ChartData; });
var Metric = /** @class */ (function () {
    function Metric() {
    }
    return Metric;
}());

var Adjustment = /** @class */ (function () {
    function Adjustment() {
    }
    return Adjustment;
}());

var Meta = /** @class */ (function () {
    function Meta(fields) {
        if (fields)
            Object.assign(this, fields);
    }
    return Meta;
}());

var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());

var Ancestry = /** @class */ (function () {
    function Ancestry() {
    }
    return Ancestry;
}());

var ScrapedMetric = /** @class */ (function () {
    function ScrapedMetric() {
    }
    return ScrapedMetric;
}());

var ScrapedData = /** @class */ (function () {
    function ScrapedData() {
    }
    return ScrapedData;
}());

var ChartData = /** @class */ (function () {
    function ChartData() {
    }
    return ChartData;
}());



/***/ }),

/***/ "./src/app/Models/Mission.ts":
/*!***********************************!*\
  !*** ./src/app/Models/Mission.ts ***!
  \***********************************/
/*! exports provided: Mission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mission", function() { return Mission; });
var Mission = /** @class */ (function () {
    function Mission() {
    }
    return Mission;
}());



/***/ }),

/***/ "./src/app/Models/ReportingUnit.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/ReportingUnit.ts ***!
  \*****************************************/
/*! exports provided: ReportingUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingUnit", function() { return ReportingUnit; });
var ReportingUnit = /** @class */ (function () {
    function ReportingUnit() {
    }
    return ReportingUnit;
}());



/***/ }),

/***/ "./src/app/Models/Topic.ts":
/*!*********************************!*\
  !*** ./src/app/Models/Topic.ts ***!
  \*********************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic() {
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/Modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/Modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-chart-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-chart-module.js");
/* harmony import */ var _components_Login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Login/login.component */ "./src/app/components/Login/login.component.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _Modules_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/material.module */ "./src/app/Modules/material.module.ts");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/serviceMaster */ "./src/app/services/serviceMaster.ts");
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/login-guard.service */ "./src/app/services/login-guard.service.ts");
/* harmony import */ var _components_Staging_staging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Staging/staging.component */ "./src/app/components/Staging/staging.component.ts");
/* harmony import */ var _components_Profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Profile/profile.component */ "./src/app/components/Profile/profile.component.ts");
/* harmony import */ var _components_MissionTable_missionTable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/MissionTable/missionTable.component */ "./src/app/components/MissionTable/missionTable.component.ts");
/* harmony import */ var _components_ReportingUnitTable_reportingUnitTable_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ReportingUnitTable/reportingUnitTable.component */ "./src/app/components/ReportingUnitTable/reportingUnitTable.component.ts");
/* harmony import */ var _components_TopicTable_topicTable_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/TopicTable/topicTable.component */ "./src/app/components/TopicTable/topicTable.component.ts");
/* harmony import */ var _components_MetricTable_metricTable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/MetricTable/metricTable.component */ "./src/app/components/MetricTable/metricTable.component.ts");
/* harmony import */ var _components_MetricTable_edit_metric_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/MetricTable/edit-metric-dialog.component */ "./src/app/components/MetricTable/edit-metric-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_Login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_Staging_staging_component__WEBPACK_IMPORTED_MODULE_12__["StagingComponent"],
                _components_Profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_MissionTable_missionTable_component__WEBPACK_IMPORTED_MODULE_14__["MissionTableComponent"],
                _components_ReportingUnitTable_reportingUnitTable_component__WEBPACK_IMPORTED_MODULE_15__["ReportingUnitTableComponent"],
                _components_TopicTable_topicTable_component__WEBPACK_IMPORTED_MODULE_16__["TopicTableComponent"],
                _components_MetricTable_metricTable_component__WEBPACK_IMPORTED_MODULE_17__["MetricTableComponent"],
                _components_MetricTable_edit_metric_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EditMetricDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _Modules_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                igniteui_angular_charts_ES5_igx_category_chart_module__WEBPACK_IMPORTED_MODULE_6__["IgxCategoryChartModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'login', component: _components_Login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                    { path: "staging", component: _components_Staging_staging_component__WEBPACK_IMPORTED_MODULE_12__["StagingComponent"], canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]], data: { title: "Staging" } },
                    { path: "profile", component: _components_Profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]], data: { title: "Profile" } }
                ])
            ],
            providers: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                _services_serviceMaster__WEBPACK_IMPORTED_MODULE_10__["ServiceMaster"],
                _services_login_guard_service__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_DATA"],
                    useValue: {} // Add any data you wish to test if it is passed/used correctly
                }
            ],
            entryComponents: [
                _components_MetricTable_edit_metric_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EditMetricDialogComponent"]
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Login/Login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/Login/Login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:center\" class=\"modal-dialog modal-lg\">\n  <mat-card style=\"max-width: 700px;\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title><h2>Login</h2></mat-card-title>\n    </mat-card-header>\n    <mat-card-content style=\"display: flex; flex-direction: column; width:100%\">\n      <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n        <mat-label>Username</mat-label>\n        <input matInput name=\"user\" [(ngModel)]=\"user\">\n        <span matPrefix><mat-icon>person</mat-icon></span>\n      </mat-form-field>\n      <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n        <mat-label>Password</mat-label>\n        <input matInput [type]=\"hide ? 'password' : 'text'\" name=\"pass\" [(ngModel)]=\"pass\">\n        <span matPrefix><mat-icon>lock</mat-icon></span>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/Login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, svc, router) {
        this.svc = svc;
        this.router = router;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.wrongLogin = false;
        this.user = "";
        this.pass = "";
        this.hide = true;
    }
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var log;
            return __generator(this, function (_a) {
                this.svc.loginService.login(this.user, this.pass).then(function (loggedIn) {
                    log = loggedIn;
                    _this.wrongLogin = !log;
                    if (log) {
                        _this.svc.getAuthCode();
                        _this.router.navigate(['/staging']);
                    }
                    else {
                        console.log("it did not worked");
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./Login.component.html */ "./src/app/components/Login/Login.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_serviceMaster__WEBPACK_IMPORTED_MODULE_2__["ServiceMaster"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/MetricTable/edit-metric-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/MetricTable/edit-metric-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit {{metric.name}}</h1>\n<div mat-dialog-content style=\"width:100%; height:90%; overflow:visible \">\n  <mat-tab-group style=\"width:100%; height:87%; overflow:visible  \">\n    <mat-tab label=\"Main\" style=\"width:100%; height:100%;overflow:visible \">\n      <br />\n      <form style=\"width:100%; height:100%;overflow:visible \">\n        <div style=\"width:100%\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:65%\">\n            <mat-label>Name</mat-label>\n            <input matInput name=\"name\" [(ngModel)]=\"metric.name\" value=\"{{metric.name}}\">\n          </mat-form-field>\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"padding-left:15px;width:30%\">\n            <mat-label>ID</mat-label>\n            <input matInput name=\"id\" [(ngModel)]=\"metric.id\" value=\"{{metric.id}}\" readonly>\n          </mat-form-field>\n        </div>\n\n        <div style=\"width:100%\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:50%\">\n            <mat-label>X Axis</mat-label>\n            <mat-select matInput name=\"x-type\" [(ngModel)]=\"metric.x_type\" value=\"{{metric.x_type}}\">\n              <mat-option *ngFor=\"let s of axisLabels\" [value]=\"s\">\n                {{s}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"padding-left:15px; width:50%\">\n            <mat-label>Y Axis</mat-label>\n            <mat-select matInput name=\"y_type\" [(ngModel)]=\"metric.y_type\" value=\"{{metric.y_type}}\">\n              <mat-option *ngFor=\"let s of axisLabels\" [value]=\"s\">\n                {{s}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div style=\"width:100%\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:50%\">\n            <mat-label>Units</mat-label>\n            <input matInput name=\"units\" [(ngModel)]=\"metric.rounding_unit\" value=\"{{metric.rounding_unit}}\">\n          </mat-form-field>\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"padding-left:15px; width:50%\">\n            <mat-label>Sig Figs</mat-label>\n            <input matInput name=\"sig_figs\" [(ngModel)]=\"metric.sig_figs\" value=\"{{metric.sig_figs}}\">\n          </mat-form-field>\n        </div>\n        <div style=\"width:100%\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:50%\">\n            <mat-label>Edited By</mat-label>\n            <input matInput name=\"edited_by\" [(ngModel)]=\"metric.modified_by\" value=\"{{metric.modified_by}}\" readonly>\n          </mat-form-field>\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"padding-left:15px; width:50%\">\n            <mat-label>Sequence</mat-label>\n            <input matInput name=\"sequence\" [(ngModel)]=\"metric.sequence\" value=\"{{metric.sequence}}\">\n          </mat-form-field>\n        </div>\n        <div style=\"width:100%\" *ngIf=\"metric.LastUpdatedFromScraper\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:50%\">\n            <mat-label>Database Source</mat-label>\n            <input matInput name=\"database_scraped\" value=\"Scraped\" readonly>\n          </mat-form-field>\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"padding-left:15px; width:50%\">\n            <mat-label>Last Scraped</mat-label>\n            <input matInput name=\"lastUpdatedFromScraper\" [(ngModel)]=\"metric.LastUpdatedFromScraper\" value=\"{{metric.LastUpdatedFromScraper | date: 'fullDate'}}\">\n          </mat-form-field>\n        </div>\n        <div style=\"width:100%\" *ngIf=\"!metric.LastUpdatedFromScraper\">\n          <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\" width:50%\">\n            <mat-label>Databse Dource:</mat-label>\n            <input matInput name=\"database_sheet\" value=\"Spreadsheet\">\n          </mat-form-field>\n        </div>\n        <div style=\"width:100%\">\n          <mat-checkbox name=\"is_featured\" [(ngModel)]=\"metric.is_featured\" value=\"{{metric.is_featured}}\" style=\"width:50%; padding-left:15px\" color=\"primary\">Is Featured</mat-checkbox>\n          <mat-checkbox name=\"is_visible\" [(ngModel)]=\"metric.is_displayed\" value=\"{{metric.is_displayed}}\" style=\"width:50%; padding-left:15px\" color=\"primary\">Is Displayed</mat-checkbox>\n        </div>\n      </form>\n    </mat-tab>\n    <mat-tab label=\"Meta Data\">\n      <br />\n      <div *ngFor=\"let m of metric.meta\">\n        <mat-form-field [floatLabel]=\"metricForm.value.floatLabel\" style=\"width:100%; height:40%\">\n          <mat-label>{{m.type}}</mat-label>\n          <textarea matInput name=\"{{m.type}}\" rows=\"3\" [(ngModel)]=\"m.data\" value=\"{{m.data}}\"></textarea>\n        </mat-form-field>\n        <div>\n          <button mat-flat-button color=\"warn\" (click)=\"removeMeta(m)\">Remove {{m.type}}</button>\n        </div>\n      </div>\n      <div class=\"pull-left\" style=\"margin-top: 10px\">\n        <button mat-flat-button *ngIf=\"!hasDef\" color=\"primary\" (click)=\"addDef()\">Add Definition</button>\n        <button mat-flat-button *ngIf=\"!hasFootnotes\" color=\"primary\" (click)=\"addFoot()\" style=\"margin-left:15px\">Add Footnote</button>\n      </div>\n\n    </mat-tab>\n    <mat-tab label=\"Sources\"> Sources </mat-tab>\n    <mat-tab label=\"Adjustments\"> Adjustments </mat-tab>\n    <mat-tab label=\"Data Points\">\n      <div style=\"position:center; width: 100%; height: 100%; padding-left: 10px\">\n        <igx-category-chart  style=\"position:center; height:200px; width:400px\"\n                            [dataSource]=\"data\"\n                            thickness=\"1\"\n                            brushes=\"#4286f4, #e8b220, #11c111\"\n                            markerBrushes=\"#4286f4, #e8b220, #11c111\"\n                            chartTitle=\"{{metric.name}}\"\n                            [chartType]=\"SplineAread\"\n                            markerTypes=\"Circle\"\n                            [tooltipTemplate]=\"valueTooltip\">\n        </igx-category-chart>\n      </div>\n      <ng-template let-series=\"series\" let-item=\"item\" #valueTooltip>\n        <div>\n          <span [style.color]=\"series.actualBrush\">{{metric.name}}:  {{item.y}}<br /></span>\n          <span *ngIf=\"scraped\" [style.color]=\"series.actualBrush\">{{scraped.Name}}: {{item.y}}<br /></span>\n        </div>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n  <mat-dialog-actions style=\"overflow:visible\">\n    <div>\n      <button mat-flat-button color=\"primary\" (click)=\"save()\" >Save</button>\n    </div>\n    <div style=\"padding-left:15px;\">\n      <button mat-flat-button color=\"warn\" (click)=\"cancel()\" >Cancel</button>\n    </div>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/components/MetricTable/edit-metric-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/MetricTable/edit-metric-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: EditMetricDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMetricDialogComponent", function() { return EditMetricDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Models_Metric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/Metric */ "./src/app/Models/Metric.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditMetricDialogComponent = /** @class */ (function () {
    function EditMetricDialogComponent(fb, dialogRef, _data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this._data = _data;
        this.hasDef = false;
        this.hasFootnotes = false;
        this.metricForm = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.metric = _data.metric;
        this.scraped = _data.scraped;
        this.axisLabels = ["People", "Dollars", "Percent", "Items", "Months", "Years", "Hours",
            "PerCapita", "DefendantsPerCriminalCase", "States", "WorkersPerState", "Per100000People", "Days", "Weeks"];
        if (this.metric.meta) {
            for (var _i = 0, _a = this.metric.meta; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.type === "Definition") {
                    this.hasDef = true;
                }
                if (m.type === "Footnote") {
                    this.hasFootnotes = true;
                }
            }
        }
        this.data = [this.metric.data];
        if (this.scraped) {
            if (this.scraped.Data && this.scraped.Data.length != 0) {
                this.scraped.Name = this.scraped.Name + "-- scraped";
                this.data.push(this.scraped);
            }
        }
    }
    EditMetricDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    EditMetricDialogComponent.prototype.save = function () {
        this.dialogRef.close(this.metric);
    };
    EditMetricDialogComponent.prototype.removeMeta = function (m) {
        var _this = this;
        this.metric.meta.forEach(function (item, index) {
            if (item === m)
                _this.metric.meta.splice(index, 1);
        });
        if (m.type === 'Definition') {
            this.hasDef = false;
        }
        if (m.type === 'Footnote') {
            this.hasFootnotes = false;
        }
    };
    EditMetricDialogComponent.prototype.addDef = function () {
        var meta = { type: 'Definition', data: '' };
        if (this.metric.meta)
            this.metric.meta.push(meta);
        else {
            this.metric.meta = new Array();
            this.metric.meta.push(meta);
        }
        this.hasDef = true;
    };
    EditMetricDialogComponent.prototype.addFoot = function () {
        var meta = { type: 'Footnote', data: '' };
        if (this.metric.meta)
            this.metric.meta.push(meta);
        else {
            this.metric.meta = new Array();
            this.metric.meta.push(meta);
        }
        this.hasFootnotes = true;
    };
    EditMetricDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-metric-dialog',
            template: __webpack_require__(/*! ./edit-metric-dialog.component.html */ "./src/app/components/MetricTable/edit-metric-dialog.component.html"),
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _Models_Metric__WEBPACK_IMPORTED_MODULE_3__["ChartData"]])
    ], EditMetricDialogComponent);
    return EditMetricDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/MetricTable/metricTable.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/MetricTable/metricTable.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:35px\">\n  <caption style=\"padding-left:35px\"><b>Metrics</b></caption>\n  <table mat-table [dataSource]=\"svc.stagingMetrics\" class=\"mat-elevation-z8\" style=\"width:60%\">\n    <ng-container matColumnDef=\"child\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let metric\">\n        <button *ngIf=\"svc.stagingMetrics[0].id != -2\" matTooltip=\"{{metric.id}}\" type=\"button\" mat-icon-button color=\"primary\">\n          <mat-icon>people</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> name </th>\n      <td mat-cell *matCellDef=\"let metric\"> {{metric.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"last_modified\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> Last Modified </th>\n      <td mat-cell *matCellDef=\"let metric\"> {{metric.modified_on | date: 'MM/dd/yyyy'}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"last_published\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> Last Published </th>\n      <td mat-cell *matCellDef=\"let metric\"> {{ metric.LastPushedIntoProduction  | date: 'MM/dd/yyyy'}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let metric\">\n        <button *ngIf=\"svc.stagingMetrics[0].id != -2\" (click)=\"openEdit(metric)\" matTooltip=\"Edit {{metric.name}}\" type=\"button\" mat-icon-button style=\"color:#ffae42 \">\n          <mat-icon>edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"publish\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let metric\">\n        <button mat-raised-button *ngIf=\"svc.stagingMetrics[0].id != -2\" color=\"primary\" style=\" font-size:10pt; height:35px; margin-left:10px;\" [matMenuTriggerFor]=\"menu\"><mat-icon style=\" font-size:10pt; margin-top:10px\">keyboard_arrow_down</mat-icon> Publish</button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            Individual Metric<mat-icon>publish</mat-icon>\n          </button>\n          <button mat-menu-item>\n            Metric with Children<mat-icon>publish</mat-icon>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/MetricTable/metricTable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/MetricTable/metricTable.component.ts ***!
  \*****************************************************************/
/*! exports provided: MetricTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricTableComponent", function() { return MetricTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetricTableComponent = /** @class */ (function () {
    function MetricTableComponent(svc) {
        this.svc = svc;
        this.displayedColumns = ['child', 'name', 'last_modified', 'last_published', 'edit', 'publish'];
    }
    MetricTableComponent.prototype.openEdit = function (metric) {
        this.svc.getMetricEdit(metric);
    };
    MetricTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'metric-table',
            template: __webpack_require__(/*! ./metricTable.component.html */ "./src/app/components/MetricTable/metricTable.component.html"),
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"]])
    ], MetricTableComponent);
    return MetricTableComponent;
}());



/***/ }),

/***/ "./src/app/components/MissionTable/missionTable.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/MissionTable/missionTable.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:35px\">\n  <caption  style=\"padding-left:35px\"><b>Missions</b></caption>\n  <table mat-table [dataSource]=\"svc.stagingMissions\" class=\"mat-elevation-z8\" style=\"width:60%\">\n\n    <ng-container matColumnDef=\"name\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> name </th>\n      <td mat-cell *matCellDef=\"let misison\"> {{misison.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"child\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let mission\">\n        <button *ngIf=\"svc.stagingMissions.length > 1\" matTooltip=\"{{mission.id}}\" type=\"button\" (click)=\"selectMission(mission)\" mat-icon-button color=\"primary\">\n          <mat-icon>people</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/MissionTable/missionTable.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/MissionTable/missionTable.component.ts ***!
  \*******************************************************************/
/*! exports provided: MissionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionTableComponent", function() { return MissionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MissionTableComponent = /** @class */ (function () {
    function MissionTableComponent(svc) {
        this.svc = svc;
        this.displayedColumns = ['child', 'name'];
    }
    MissionTableComponent.prototype.selectMission = function (mission) {
        this.svc.stagingMissions = [mission];
        this.svc.getReportingUnits();
    };
    MissionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mission-table',
            template: __webpack_require__(/*! ./missionTable.component.html */ "./src/app/components/MissionTable/missionTable.component.html"),
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"]])
    ], MissionTableComponent);
    return MissionTableComponent;
}());



/***/ }),

/***/ "./src/app/components/Profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/Profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Hi, {{svc.loginService.profile.FirstName}}</h2>\n<mat-form-field [floatLabel]=\"options.value.floatLabel\">\n  <mat-label>First Name</mat-label>\n  <input matInput [(ngModel)]=\"svc.loginService.profile.FirstName\"  value=\"{{svc.loginService.profile.FirstName}}\">\n</mat-form-field>\n<mat-form-field [floatLabel]=\"options.value.floatLabel\">\n  <mat-label>Last Name</mat-label>\n  <input matInput [(ngModel)]=\"svc.loginService.profile.LastName\" value=\"{{svc.loginService.profile.LastName}}\">\n</mat-form-field>\n<br />\n<mat-form-field [floatLabel]=\"options.value.floatLabel\" style=\"width:20%\">\n  <mat-label>Email</mat-label>\n  <input matInput [(ngModel)]=\"svc.loginService.profile.Email\" value=\"{{svc.loginService.profile.Email}}\">\n</mat-form-field>\n<br />\n<mat-form-field [floatLabel]=\"options.value.floatLabel\" >\n  <mat-label>Password</mat-label>\n  <input matInput [(ngModel)]=\"svc.loginService.profile.Password\" value=\"{{svc.loginService.profile.Password}}\">\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/components/Profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(svc, fb) {
        this.svc = svc;
        this.options = fb.group({
            floatLabel: 'auto',
        });
    }
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/Profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/ReportingUnitTable/reportingUnitTable.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ReportingUnitTable/reportingUnitTable.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:35px\">\n  <caption style=\"padding-left:35px\"><b>Reporting Units</b></caption>\n  <table mat-table [dataSource]=\"svc.stagingReportingUnits\" class=\"mat-elevation-z8\" style=\"width:60%\">\n\n    <ng-container matColumnDef=\"name\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> name </th>\n      <td mat-cell *matCellDef=\"let reportingUnit\"> {{reportingUnit.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"child\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let reportingUnit\">\n        <button *ngIf=\"svc.stagingReportingUnits.length > 1\" matTooltip=\"{{reportingUnit.id}}\" type=\"button\" (click)=\"selectReportingUnit(reportingUnit)\" mat-icon-button color=\"primary\">\n          <mat-icon>people</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ReportingUnitTable/reportingUnitTable.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ReportingUnitTable/reportingUnitTable.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReportingUnitTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingUnitTableComponent", function() { return ReportingUnitTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingUnitTableComponent = /** @class */ (function () {
    function ReportingUnitTableComponent(svc) {
        this.svc = svc;
        this.displayedColumns = ['child', 'name'];
    }
    ReportingUnitTableComponent.prototype.selectReportingUnit = function (reportingUnit) {
        this.svc.stagingReportingUnits = [reportingUnit];
        this.svc.getTopics();
    };
    ReportingUnitTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reporting-unit-table',
            template: __webpack_require__(/*! ./reportingUnitTable.component.html */ "./src/app/components/ReportingUnitTable/reportingUnitTable.component.html"),
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"]])
    ], ReportingUnitTableComponent);
    return ReportingUnitTableComponent;
}());



/***/ }),

/***/ "./src/app/components/Staging/staging.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/Staging/staging.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header-row\" style=\"padding-left:20px\">\n  <h2>Staging</h2>\n</div>\n\n<div>\n  <mat-form-field [floatLabel]=\"search.value.floatLabel\" style=\"padding-left:35px\">\n    <mat-label>Search Metric</mat-label>\n    <input matInput name=\"search\" [(ngModel)]=\"SearchID\" value=\"{{SearchID}}\">\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" style=\" font-size:10pt; height:35px; margin-left:10px;\" (click)=\"getSearch()\"><mat-icon style=\" font-size:10pt; margin-top:10px\">search</mat-icon> Search</button>\n  <button mat-raised-button *ngIf=\"svc.stagingReportingUnits[0].id != -1 || svc.stagingTopics[0].id != -1 || svc.stagingMetrics[0].id != -1\" color=\"warn\" style=\" font-size:10pt; height:35px; width:25px; margin-left:15px;\" (click)=\"clear()\"><mat-icon style=\" font-size:10pt; margin-top:10px\">backspace</mat-icon> Clear</button>\n</div>\n<ul>\n  <li *ngIf=\"svc.missionBreadCrumb.id != -1\" style=\"display:inline\">\n    /<a (click)=\"goToMission()\" style=\"cursor:pointer\">{{svc.missionBreadCrumb.name}}</a>\n  </li>\n  <li *ngIf=\"svc.reportingUnitBreadCrumb.id != -1\" style=\"display:inline\">\n    /<a (click)=\"goToReportingUnit()\" style=\"cursor:pointer\">{{svc.reportingUnitBreadCrumb.name}}</a>\n  </li>\n\n</ul>\n<mission-table *ngIf=\"svc.stagingMissions[0].id != -1\"></mission-table>\n<reporting-unit-table *ngIf=\"svc.stagingReportingUnits[0].id != -1\"></reporting-unit-table>\n<topic-table *ngIf=\"svc.stagingTopics[0].id != -1\"></topic-table>\n<metric-table *ngIf=\"svc.stagingMetrics[0].id != -1\"></metric-table>\n\n"

/***/ }),

/***/ "./src/app/components/Staging/staging.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Staging/staging.component.ts ***!
  \*********************************************************/
/*! exports provided: StagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StagingComponent", function() { return StagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StagingComponent = /** @class */ (function () {
    function StagingComponent(fb, svc) {
        this.svc = svc;
        this.search = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.SearchID = "";
    }
    StagingComponent.prototype.clear = function () {
        this.svc.getMissions();
        this.SearchID = "";
    };
    StagingComponent.prototype.goToMission = function () {
        this.svc.stagingMissions = [this.svc.missionBreadCrumb];
        this.svc.stagingMissions[0].applicationType = 1;
        this.svc.getReportingUnits();
        this.SearchID = "";
    };
    StagingComponent.prototype.goToReportingUnit = function () {
        this.svc.stagingReportingUnits = [this.svc.reportingUnitBreadCrumb];
        this.svc.getTopics();
        this.SearchID = "";
    };
    StagingComponent.prototype.getSearch = function () {
        this.svc.searchStaging(this.SearchID);
    };
    StagingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'staging',
            template: __webpack_require__(/*! ./staging.component.html */ "./src/app/components/Staging/staging.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_serviceMaster__WEBPACK_IMPORTED_MODULE_2__["ServiceMaster"]])
    ], StagingComponent);
    return StagingComponent;
}());



/***/ }),

/***/ "./src/app/components/TopicTable/topicTable.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/TopicTable/topicTable.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:35px\">\n  <caption style=\"padding-left:35px\"><b>Topics</b></caption>\n  <table mat-table [dataSource]=\"svc.stagingTopics\" class=\"mat-elevation-z8\" style=\"width:60%\">\n\n    <ng-container matColumnDef=\"name\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef> name </th>\n      <td mat-cell *matCellDef=\"let topic\"> {{topic.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"child\" style=\"padding-left:35px\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let topic\">\n        <button *ngIf=\"svc.stagingTopics.length > 1\"  matTooltip=\"{{topic.id}}\" (click)=\"selectTopic(topic)\" type=\"button\"  mat-icon-button color=\"primary\">\n          <mat-icon>people</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/TopicTable/topicTable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/TopicTable/topicTable.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTableComponent", function() { return TopicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicTableComponent = /** @class */ (function () {
    function TopicTableComponent(svc) {
        this.svc = svc;
        this.displayedColumns = ['child', 'name'];
    }
    TopicTableComponent.prototype.selectTopic = function (topic) {
        this.svc.stagingTopics = [topic];
        this.svc.trendToMetrics();
    };
    TopicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'topic-table',
            template: __webpack_require__(/*! ./topicTable.component.html */ "./src/app/components/TopicTable/topicTable.component.html"),
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"]])
    ], TopicTableComponent);
    return TopicTableComponent;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" style=\"height:100%\">\n  <mat-toolbar style=\"width:100%\" color=\"warn\">\n    <mat-toolbar-row>\n      <h1 class=\"app-name\">{{title}}</h1>\n      <span style=\"flex: 1 1 auto;\"></span>\n      <button type=\"button\" *ngIf=\"svc.loginService.isLoggedIn\" mat-icon-button [matMenuTriggerFor]=\"menu\" color=\"primary\">\n        <mat-icon>person</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n            Log Out\n        </button>\n        <button mat-menu-item (click)=\"profile()\">\n          Your Profile\n        </button>\n      </mat-menu>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-sidenav-container class=\"example-container\" >\n    <mat-sidenav *ngIf=\"svc.loginService.isLoggedIn\" mode=\"side\" opened role=\"navigation\" color=\"primary\" style=\"height:100%\">\n      <mat-nav-list >\n        <a mat-list-item routerLink='/staging'>Staging</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content >\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/serviceMaster */ "./src/app/services/serviceMaster.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(svc, router) {
        this.svc = svc;
        this.router = router;
        this.title = 'USA Facts Data Tool';
    }
    AppComponent.prototype.profile = function () {
        this.router.navigate(['/profile']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
        }),
        __metadata("design:paramtypes", [_services_serviceMaster__WEBPACK_IMPORTED_MODULE_1__["ServiceMaster"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/services/LoginService.ts":
/*!******************************************!*\
  !*** ./src/app/services/LoginService.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    LoginService.prototype.login = function (Username, Password) {
        var _this = this;
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://usafacts-api-staging.azurewebsites.net/api/v2/authentication', JSON.stringify({ Username: Username, Password: Password }), { headers: header }).toPromise()
            .then(function (response) {
            _this.isLoggedIn = true;
            _this.profile = response;
            return Promise.resolve(_this.isLoggedIn);
        })
            .catch(function (error) {
            _this.isLoggedIn = false;
            return Promise.resolve(_this.isLoggedIn);
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/login-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login-guard.service.ts ***!
  \*************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _serviceMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceMaster */ "./src/app/services/serviceMaster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(svc, router) {
        this.svc = svc;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (this.svc.loginService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    LoginGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    LoginGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    LoginGuard.prototype.checkLogin = function (url) {
        if (this.svc.loginService.isLoggedIn) {
            return true;
        }
        //this.loginService.loginRedirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_serviceMaster__WEBPACK_IMPORTED_MODULE_2__["ServiceMaster"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/services/metricService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/metricService.ts ***!
  \*******************************************/
/*! exports provided: MetricService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricService", function() { return MetricService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetricService = /** @class */ (function () {
    function MetricService(http, key, url) {
        this.http = http;
        this.key = key;
        this.url = url;
    }
    MetricService.prototype.getStagingEdit = function (id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/metrics/' + id + '/verbose', { headers: header }).toPromise();
    };
    MetricService.prototype.getStagingMetricSearch = function (id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/metrics/verbose?ids=' + id, { headers: header }).toPromise();
    };
    MetricService.prototype.getScraped = function (m) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get('http://pwbmscrapeddata1.azurewebsites.net/api/values/Usafactsmetric' + m.id, { headers: header }).toPromise();
    };
    MetricService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, String])
    ], MetricService);
    return MetricService;
}());



/***/ }),

/***/ "./src/app/services/missionService.ts":
/*!********************************************!*\
  !*** ./src/app/services/missionService.ts ***!
  \********************************************/
/*! exports provided: MissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionService", function() { return MissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MissionService = /** @class */ (function () {
    function MissionService(http, key, url) {
        this.http = http;
        this.key = key;
        this.url = url;
    }
    MissionService.prototype.getStagingMissions = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/missions', { headers: header }).toPromise();
    };
    MissionService.prototype.getStagingPopulationMissions = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/population', { headers: header }).toPromise();
    };
    MissionService.prototype.getStagingMissionBreadcrumb = function (id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/missions/' + id, { headers: header }).toPromise();
    };
    MissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, String])
    ], MissionService);
    return MissionService;
}());



/***/ }),

/***/ "./src/app/services/reportingUnitService.ts":
/*!**************************************************!*\
  !*** ./src/app/services/reportingUnitService.ts ***!
  \**************************************************/
/*! exports provided: ReportingUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingUnitService", function() { return ReportingUnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingUnitService = /** @class */ (function () {
    function ReportingUnitService(http, key, url) {
        this.http = http;
        this.key = key;
        this.url = url;
    }
    ReportingUnitService.prototype.getStagingReportingUnitBreadcrumb = function (id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': this.key });
        return this.http.get(this.url + '/ReportingUnits/' + id, { headers: header }).toPromise();
    };
    ReportingUnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, String])
    ], ReportingUnitService);
    return ReportingUnitService;
}());



/***/ }),

/***/ "./src/app/services/serviceMaster.ts":
/*!*******************************************!*\
  !*** ./src/app/services/serviceMaster.ts ***!
  \*******************************************/
/*! exports provided: ServiceMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMaster", function() { return ServiceMaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _LoginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginService */ "./src/app/services/LoginService.ts");
/* harmony import */ var _missionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./missionService */ "./src/app/services/missionService.ts");
/* harmony import */ var _Models_Mission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/Mission */ "./src/app/Models/Mission.ts");
/* harmony import */ var _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/ReportingUnit */ "./src/app/Models/ReportingUnit.ts");
/* harmony import */ var _Models_Topic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/Topic */ "./src/app/Models/Topic.ts");
/* harmony import */ var _Models_Metric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Models/Metric */ "./src/app/Models/Metric.ts");
/* harmony import */ var _metricService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metricService */ "./src/app/services/metricService.ts");
/* harmony import */ var _reportingUnitService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reportingUnitService */ "./src/app/services/reportingUnitService.ts");
/* harmony import */ var _components_MetricTable_edit_metric_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MetricTable/edit-metric-dialog.component */ "./src/app/components/MetricTable/edit-metric-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ServiceMaster = /** @class */ (function () {
    function ServiceMaster(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.stagingUrl = 'http://usafacts-api-staging.azurewebsites.net/api/v2';
        this.loginService = new _LoginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"](http);
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.stagingReportingUnits = [r];
        this.reportingUnitBreadCrumb = r;
        var t = new _Models_Topic__WEBPACK_IMPORTED_MODULE_7__["Topic"]();
        t.id = -1;
        this.stagingTopics = [t];
        var miss = new _Models_Mission__WEBPACK_IMPORTED_MODULE_5__["Mission"]();
        miss.id = -1;
        this.stagingMissions = [miss];
        this.missionBreadCrumb = miss;
        var met = new _Models_Metric__WEBPACK_IMPORTED_MODULE_8__["Metric"];
        met.id = -1;
        this.stagingMetrics = [met];
    }
    ServiceMaster.prototype.getAuthCode = function () {
        this.authCode = 'Basic ' + this.loginService.profile.SessionId;
        this.missionService = new _missionService__WEBPACK_IMPORTED_MODULE_4__["MissionService"](this.http, this.authCode, this.stagingUrl);
        this.metricService = new _metricService__WEBPACK_IMPORTED_MODULE_9__["MetricService"](this.http, this.authCode, this.stagingUrl);
        this.reportingUnitService = new _reportingUnitService__WEBPACK_IMPORTED_MODULE_10__["ReportingUnitService"](this.http, this.authCode, this.stagingUrl);
        this.getMissions();
    };
    ServiceMaster.prototype.getMissions = function () {
        var _this = this;
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.stagingReportingUnits = [r];
        var t = new _Models_Topic__WEBPACK_IMPORTED_MODULE_7__["Topic"]();
        t.id = -1;
        this.stagingTopics = [t];
        var met = new _Models_Metric__WEBPACK_IMPORTED_MODULE_8__["Metric"];
        met.id = -1;
        this.stagingMetrics = [met];
        this.missionBreadCrumb.id = -1;
        this.reportingUnitBreadCrumb.id = -1;
        this.missionService.getStagingMissions().then(function (response) {
            response.forEach(function (r) {
                r.applicationType = 1;
            });
            _this.stagingMissions = response;
            _this.missionService.getStagingPopulationMissions().then(function (response) {
                response.forEach(function (r) {
                    r.applicationType = 4;
                });
                _this.stagingMissions = _this.stagingMissions.concat(response);
            });
        });
    };
    ServiceMaster.prototype.getReportingUnits = function () {
        var t = new _Models_Topic__WEBPACK_IMPORTED_MODULE_7__["Topic"]();
        t.id = -1;
        this.stagingTopics = [t];
        var m = new _Models_Mission__WEBPACK_IMPORTED_MODULE_5__["Mission"]();
        m.id = -1;
        var met = new _Models_Metric__WEBPACK_IMPORTED_MODULE_8__["Metric"];
        met.id = -1;
        this.stagingMetrics = [met];
        this.missionBreadCrumb = m;
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.reportingUnitBreadCrumb = r;
        if (this.stagingMissions.length == 1) {
            if (this.stagingMissions[0].applicationType == 1) {
                this.stagingReportingUnits = this.stagingMissions[0].reporting_units;
            }
            if (this.stagingMissions[0].applicationType == 4) {
                var m = this.stagingMissions[0];
                this.searchStaging(this.stagingMissions[0].metrics.toString());
                this.stagingMissions[0] = m;
            }
        }
        else {
            console.log("Error getting reporting units");
        }
    };
    ServiceMaster.prototype.getTopics = function () {
        var miss = new _Models_Mission__WEBPACK_IMPORTED_MODULE_5__["Mission"]();
        miss.id = -1;
        var met = new _Models_Metric__WEBPACK_IMPORTED_MODULE_8__["Metric"];
        met.id = -1;
        this.stagingMetrics = [met];
        if (this.missionBreadCrumb.id == -1) {
            this.missionBreadCrumb = this.stagingMissions[0];
        }
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.reportingUnitBreadCrumb = r;
        this.stagingMissions = [miss];
        this.stagingTopics = this.stagingReportingUnits[0].topics;
    };
    ServiceMaster.prototype.trendToMetrics = function () {
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.reportingUnitBreadCrumb = this.stagingReportingUnits[0];
        this.stagingReportingUnits = [r];
        this.stagingMetrics = this.stagingTopics[0].metrics;
    };
    ServiceMaster.prototype.getMetricEdit = function (metric) {
        var _this = this;
        this.metricService.getStagingEdit(metric.id.toString()).then(function (response) {
            _this.metricEdit = response;
            _this.metricService.getScraped(response).then(function (r) {
                _this.scrapedMetric = r;
            });
            _this.data = { metric: _this.metricEdit, scraped: _this.scrapedMetric };
            var dialogRef = _this.dialog.open(_components_MetricTable_edit_metric_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditMetricDialogComponent"], {
                panelClass: 'mat-dialog-lg',
                data: _this.data,
                width: '75%',
                height: '75%',
            });
        });
    };
    ServiceMaster.prototype.searchStaging = function (id) {
        var _this = this;
        var t = new _Models_Topic__WEBPACK_IMPORTED_MODULE_7__["Topic"]();
        t.id = -1;
        this.stagingTopics = [t];
        var m = new _Models_Mission__WEBPACK_IMPORTED_MODULE_5__["Mission"]();
        m.id = -1;
        this.stagingMissions = [m];
        var r = new _Models_ReportingUnit__WEBPACK_IMPORTED_MODULE_6__["ReportingUnit"]();
        r.id = -1;
        this.stagingReportingUnits = [r];
        this.missionBreadCrumb = m;
        this.reportingUnitBreadCrumb = r;
        this.metricService.getStagingMetricSearch(id).then(function (response) {
            if (response.length == 0) {
                var m = new _Models_Metric__WEBPACK_IMPORTED_MODULE_8__["Metric"]();
                m.id = -2;
                m.name = "No Metrics Found";
                _this.stagingMetrics = [m];
            }
            else {
                _this.stagingMetrics = response;
                if (response.length == 1) {
                    _this.missionService.getStagingMissionBreadcrumb(_this.stagingMetrics[0].ancestry.mission.toString()).then(function (m) {
                        _this.missionBreadCrumb = m;
                        _this.reportingUnitBreadCrumb = _this.missionBreadCrumb.reporting_units.find(function (r) { return r.id == _this.stagingMetrics[0].ancestry.reporting_unit; });
                    });
                }
            }
        });
    };
    ServiceMaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ServiceMaster);
    return ServiceMaster;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Contracts\PPI\CMS Tool v2\CMSTool2.0\CMSTool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map