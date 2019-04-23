(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"page-wrap height-100 mat-bg-primary\">\r\n    <div class=\"session-form-hold\">\r\n      <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n              <h3>BHAGALPUR EXPRESS</h3>\r\n            <!-- <img src=\"assets/images/logo-full.png\" alt=\"\" class=\"mb-05\"> -->\r\n            <p class=\"text-muted m-0\">Sign in to your account</p>\r\n\r\n           \r\n          </div>\r\n          <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n            <div class=\"\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input\r\n                  matInput\r\n                  name=\"username\"\r\n                  [(ngModel)]=\"username\"\r\n                  [formControl]=\"signinForm.controls['username']\"\r\n                  placeholder=\"Username\"\r\n                  value=\"\">\r\n              </mat-form-field>\r\n              <small \r\n                *ngIf=\"signinForm.controls['username'].hasError('required') && signinForm.controls['username'].touched\" \r\n                class=\"form-error-msg\"> Username is required </small>\r\n            </div>\r\n  \r\n            <div class=\"\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input \r\n                  type=\"password\"\r\n                  [(ngModel)]=\"password\"\r\n                  name=\"password\"\r\n                  matInput\r\n                  [formControl]=\"signinForm.controls['password']\"\r\n                  placeholder=\"Password\" \r\n                  value=\"\">\r\n              </mat-form-field>\r\n              <small \r\n                *ngIf=\"signinForm.controls['password'].hasError('required') && signinForm.controls['password'].touched\" \r\n                class=\"form-error-msg\"> Password is required </small>\r\n            </div>\r\n            \r\n            <div class=\"pb-1\">\r\n              <mat-checkbox\r\n                name=\"rememberMe\"\r\n                [formControl]=\"signinForm.controls['rememberMe']\"\r\n                class=\"pb-1\">Remember this computer</mat-checkbox>\r\n            </div>\r\n            \r\n            <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"login()\" [disabled]=\"signinForm.invalid\">Sign in</button>\r\n            <div class=\"text-center\">\r\n              <a [routerLink]=\"'/sessions/forgot-password'\" class=\"mat-primary text-center full-width\">Forgot password</a>\r\n              <span fxFlex></span>\r\n              <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center full-width\">Create a new account</a>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  \r\n   \r\n\r\n   "

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: ApiUrl, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import PerfectScrollbar from 'perfect-scrollbar';
var ApiUrl = 'http://192.168.2.101:4000/';
var HomeComponent = /** @class */ (function () {
    // private homePS: PerfectScrollbar;
    function HomeComponent(router, loader, httpClient) {
        this.router = router;
        this.loader = loader;
        this.httpClient = httpClient;
        this.versions = [
            {
                name: 'Side Navigation',
                photo: 'assets/images/screenshots/side-simple-ltr.png',
                dest: 'dashboard',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\"\n      }"
            }, {
                name: 'Top Navigation',
                photo: 'assets/images/screenshots/top-simple-ltr.png',
                dest: 'shop',
                conf: "{\n        \"navigationPos\": \"top\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\"\n      }"
            },
            {
                name: 'RTL (Side Nav)',
                photo: 'assets/images/screenshots/side-simple-rtl.png',
                dest: 'profile/settings',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"rtl\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\"\n      }"
            },
            {
                name: 'RTL (Top Nav)',
                photo: 'assets/images/screenshots/top-simple-rtl.png',
                dest: 'profile/settings',
                conf: "{\n        \"navigationPos\": \"top\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"rtl\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\"\n      }"
            },
            {
                name: 'Dark Purple',
                photo: 'assets/images/screenshots/dark-purple-title.png',
                dest: 'dashboard',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": true,\n        \"breadcrumb\": \"simple\"\n      }",
                theme: "{\n        \"name\": \"egret-dark-purple\"\n      }"
            },
            {
                name: 'Dark Pink',
                photo: 'assets/images/screenshots/dark-pink-title.png',
                dest: 'dashboard',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": true,\n        \"breadcrumb\": \"simple\"\n      }",
                theme: "{\n        \"name\": \"egret-dark-pink\"\n      }"
            },
            {
                name: 'Light Blue',
                photo: 'assets/images/screenshots/light-blue-title.png',
                dest: 'dashboard',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": true,\n        \"breadcrumb\": \"simple\"\n      }",
                theme: "{\n        \"name\": \"egret-blue\"\n      }"
            }
        ];
        this.httpClient = httpClient;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false)
        });
    };
    HomeComponent.prototype.signin = function () {
        var signinData = this.signinForm.value;
        console.log(signinData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // if (this.homePS) this.homePS.destroy();
        this.loader.close();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    // login(){
    //   this.httpClient.post(this.apiUrl+'/getAuthendicateUserForCheck',{
    //     StrUsrName:this.username,
    // 	  StrPassword: this.password
    //   })
    //   .subscribe( res => {
    //     this.authenticateMsg = res.toString();
    //     alert(this.authenticateMsg);
    //     if(this.authenticateMsg == "Logged in successfully")
    //     {
    //       this.router.navigateByUrl('/dashboard');
    //     }
    //     else
    //     {
    //       this.warningmsg = "Credential is wrong!!";
    //     }
    //   });
    // }
    HomeComponent.prototype.login = function () {
        this.router.navigateByUrl('/Products');
        // let url = ApiUrl+'/getAuthendicateUserForCheck';
        // let params = {
        //   StrUsrName:this.username,
        //   StrPassword: this.password
        // }
        // this.httpClient.post(url, null, { params: params }).toPromise().then(
        //   success => {
        //     var data = success;
        //     if(data == "Logged in successfully")
        //     {
        //       this.router.navigateByUrl('/dashboard');
        //     }
        //     else
        //     {
        //       alert('Credential is Wrong!!');
        //       this.username = "";
        //       this.password = "";
        //       this.signinForm.reset();
        //       this.router.navigateByUrl('/home');
        //     }
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"])
    ], HomeComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"])
    ], HomeComponent.prototype, "submitButton", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _sessions_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sessions/forgot-password/forgot-password.component */ "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
/* harmony import */ var _sessions_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sessions/lockscreen/lockscreen.component */ "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
/* harmony import */ var _sessions_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sessions/signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _sessions_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sessions/signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _sessions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sessions/not-found/not-found.component */ "./src/app/views/sessions/not-found/not-found.component.ts");
/* harmony import */ var _sessions_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sessions/error/error.component */ "./src/app/views/sessions/error/error.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home.routing */ "./src/app/views/home/home.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_14__["HomeRoutes"])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _sessions_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _sessions_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__["LockscreenComponent"], _sessions_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"], _sessions_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _sessions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _sessions_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/home/home.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/home/home.routing.ts ***!
  \********************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");

var HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=views-home-home-module.js.map