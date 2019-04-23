(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-website-website-module"],{

/***/ "./src/app/views/website/website.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/website/website.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <title>Voyage - Free Bootstrap 4 Template by Colorlib</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    \r\n    <link href=\"https://fonts.googleapis.com/css?family=Muli:300,400,600,700\" rel=\"stylesheet\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/open-iconic-bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/animate.css\">\r\n    \r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/owl.carousel.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/owl.theme.default.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/magnific-popup.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/aos.css\">\r\n  \r\n <link rel=\"stylesheet\" href=\"../../../assets/css/ionicons.min.css\"> \r\n <link rel=\"stylesheet\" href=\"../../../assets/fonts/ionicons/fonts/ionicons.woff2\">\r\n <link rel=\"stylesheet\" href=\"../../../assets/fonts/ionicons/fonts/ionicons.woff\">\r\n <link rel=\"stylesheet\" href=\"../../../assets/fonts/ionicons/fonts/ionicons.ttf\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/bootstrap-datepicker.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/jquery.timepicker.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/icomoon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/fonts/icomoon/icomoon.ttf\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/fonts/icomoon/icomoon.woff\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/flaticon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/fonts/flaticon/font/Flaticon.woff\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/fonts/flaticon/font/Flaticon.ttf\">\r\n    <link rel=\"stylesheet\" href=\"../../../assets/css/style.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"  crossorigin=\"anonymous\">\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"  crossorigin=\"anonymous\"></script>\r\n  <style type=\"text/css\">\r\n.dialogdemoBasicUsage #popupContainer {\r\n  position: relative;\r\n}\r\n\r\n#login-dialog {\r\n  max-width: 90%;\r\n  width: 500px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid rgb(218, 200, 43); /* yellow */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid #e94646; /* red */\r\n}\r\n\r\n.backdrop {\r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   text-align: center;\r\n}\r\n:-ms-input-placeholder {  \r\n   text-align: center; \r\n}\r\n  </style>\r\n\r\n\r\n\r\n  </head>\r\n  <body>\r\n    \r\n    <nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" id=\"ftco-navbar\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"index.html\">Voyage</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"oi oi-menu\"></span> Menu\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\"><a href=\"index.html\" class=\"nav-link\">Home</a></li>\r\n            <li class=\"nav-item\"><a href=\"tours.html\" class=\"nav-link\">Tours</a></li>\r\n            <li class=\"nav-item\"><a href=\"hotels.html\" class=\"nav-link\">Hotels</a></li>\r\n            <li class=\"nav-item\"><a href=\"services.html\" class=\"nav-link\">Services</a></li>\r\n            <li class=\"nav-item\"><a href=\"about.html\" class=\"nav-link\">About</a></li>\r\n            <li class=\"nav-item\"><a href=\"contact.html\" class=\"nav-link\">Contact</a></li>\r\n            <!-- <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"loginPopup()\">Login</a></li> -->\r\n            <li class=\"nav-item\"><a href=\"dashboard\" class=\"nav-link\">Login</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"SignupPopup()\">Sign up</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n    <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\r\n\r\n    <!-- modal -->\r\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\r\n      <!-- modal-dialog -->\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <!-- modal-content -->\r\n        <div class=\"modal-content\">\r\n          <!-- modal-header -->\r\n          <div class=\"modal-header\" style=\"background-color:#ff5f5f\">\r\n           \r\n            <h4 class=\"modal-title\" style=\"color:ghostwhite\">Login</h4>\r\n          </div>\r\n    \r\n          <!-- modal-body -->\r\n          <div class=\"modal-body\">\r\n            <form >\r\n                <div align=\"center\">\r\n                    <input type=\"text\" class=\"textbox\" name=\"emailId\" placeholder=\"Username\" formControlName=\"emailId\" >\r\n                </div>  \r\n                <br/>    \r\n                <div align=\"center\"> \r\n                    <input type=\"password\" class=\"textbox\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" align=\"center\">\r\n                </div>\r\n                <br/>   \r\n                <div align=\"center\">\r\n                    <input type=\"submit\" class=\"btn btn-info btn-lg\" value=\"LogIn\" align=\"center\">\r\n                </div>\r\n                \r\n            </form>\r\n          </div>\r\n    \r\n          <!-- modal-footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModalDialog()\" >Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END nav -->\r\n    \r\n    <section class=\"\">\r\n        <div class=\"slider-item\" style=\"background-image: url('../../../assets/images/bg_4.jpg');\">\r\n          <div class=\"overlay\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row slider-text align-items-center\">\r\n              <div class=\"col-md-7 col-sm-12 ftco-animate\">\r\n                <h1 class=\"mb-3\">Experience the best trip ever</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <!-- <div class=\"slider-item\" style=\"background-image: url('../../../assets/images/bg_1.jpg');\">\r\n          <div class=\"overlay\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row slider-text align-items-center\">\r\n              <div class=\"col-md-7 col-sm-12 ftco-animate\">\r\n                <h1 class=\"mb-3\">Making the most out of your holiday</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"slider-item\" style=\"background-image: url('../../../assets/images/bg_3.jpg');\">\r\n          <div class=\"overlay\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row slider-text align-items-center\">\r\n              <div class=\"col-md-7 col-sm-12 ftco-animate\">\r\n                <h1 class=\"mb-3\">Travel Operator Just For You</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </section>\r\n    <!-- END slider -->\r\n\r\n    <br/> <br/> <br/>\r\n    <div class=\"ftco-section-search\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 tabulation-search\">\r\n              <div class=\"element-animate\">\r\n                <div class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n                  <!-- <a class=\"nav-link p-3 active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\"><span>01</span> Flight</a> -->\r\n                  <a class=\"nav-link p-3 active\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\"><span>02</span> Hotel</a>\r\n                  <!-- <a class=\"nav-link p-3\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\"><span>03</span> Car Rent</a>\r\n                  <a class=\"nav-link p-3\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\"><span>04</span> Cruises</a> -->\r\n                </div>\r\n              </div>\r\n                \r\n              <div class=\"tab-content py-5\" id=\"v-pills-tabContent\">\r\n                <!-- <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n                  <div class=\"block-17\">\r\n                    <form action=\"\" method=\"post\" class=\"d-block d-lg-flex\">\r\n                      <div class=\"fields d-block d-lg-flex\">\r\n  \r\n                        <div class=\"textfield-search one-third\"><input type=\"text\" class=\"form-control\" placeholder=\"Search Location\"></div>\r\n  \r\n                        <div class=\"check-in one-third\"><input type=\"text\" id=\"checkin_date\" class=\"form-control\" placeholder=\"Check-in date\"></div>\r\n  \r\n                        <div class=\"check-out one-third\"><input type=\"text\" id=\"checkout_date\" class=\"form-control\" placeholder=\"Check-out date\"></div>\r\n                        <div class=\"select-wrap one-third\">\r\n                          <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\r\n                          <select name=\"\" id=\"\" class=\"form-control\">\r\n                            <option value=\"\">Guest</option>\r\n                            <option value=\"\">1</option>\r\n                            <option value=\"\">2</option>\r\n                            <option value=\"\">3</option>\r\n                            <option value=\"\">4+</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <input type=\"submit\" class=\"search-submit btn btn-primary\" value=\"Find Flights\">  \r\n                    </form>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"tab-pane fade show active\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n                  <div class=\"block-17\">\r\n                    <form action=\"\" method=\"post\" class=\"d-block d-lg-flex\">\r\n                      <div class=\"fields d-block d-lg-flex\">\r\n                        <div class=\"textfield-search one-third\"><input type=\"text\" class=\"form-control\" placeholder=\"Search Hotel\"></div>\r\n  \r\n                        <div class=\"check-in one-third\"><input type=\"text\" id=\"checkin_date\" class=\"form-control\" placeholder=\"Check-in date\"></div>\r\n  \r\n                        <div class=\"check-out one-third\"><input type=\"text\" id=\"checkout_date\" class=\"form-control\" placeholder=\"Check-out date\"></div>\r\n                        <div class=\"select-wrap one-third\">\r\n                          <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\r\n                          <select name=\"\" id=\"\" class=\"form-control\">\r\n                            <option value=\"\"style=\"color: black;\">Guest</option>\r\n                            <option value=\"\" style=\"color: black;\">1</option>\r\n                            <option value=\"\" style=\"color: black;\">2</option>\r\n                            <option value=\"\" style=\"color: black;\">3</option>\r\n                            <option value=\"\" style=\"color: black;\">4+</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <input type=\"submit\" class=\"search-submit btn btn-primary\" value=\"Find Hotels\">  \r\n                    </form>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\r\n                  <div class=\"block-17\">\r\n                    <form action=\"\" method=\"post\" class=\"d-block d-lg-flex\">\r\n                      <div class=\"fields d-block d-lg-flex\">\r\n                        <div class=\"textfield-search one-third\"><input type=\"text\" class=\"form-control\" placeholder=\"Search Location\"></div>\r\n  \r\n                        <div class=\"check-in one-third\"><input type=\"text\" id=\"start_date\" class=\"form-control\" placeholder=\"Start date\"></div>\r\n  \r\n                        <div class=\"check-out one-third\"><input type=\"text\" id=\"return_date\" class=\"form-control\" placeholder=\"Return date\"></div>\r\n                        <div class=\"select-wrap one-third\">\r\n                          <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\r\n                          <select name=\"\" id=\"\" class=\"form-control\">\r\n                            <option value=\"\">Guest</option>\r\n                            <option value=\"\">1</option>\r\n                            <option value=\"\">2</option>\r\n                            <option value=\"\">3</option>\r\n                            <option value=\"\">4+</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <input type=\"submit\" class=\"search-submit btn btn-primary\" value=\"Find Car\">  \r\n                    </form>\r\n                  </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\r\n                  <div class=\"block-17\">\r\n                    <form action=\"\" method=\"post\" class=\"d-block d-lg-flex\">\r\n                      <div class=\"fields d-block d-lg-flex\">\r\n                        <div class=\"textfield-search one-third one-third-1\"><input type=\"text\" class=\"form-control\" placeholder=\"Search Location\"></div>\r\n  \r\n  \r\n                        <div class=\"check-out one-third one-third-1\"><input type=\"text\" id=\"start_date\" class=\"form-control\" placeholder=\"Check-out date\"></div>\r\n  \r\n                        <div class=\"select-wrap one-third one-third-1\">\r\n                          <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\r\n                          <select name=\"\" id=\"\" class=\"form-control\">\r\n                            <option value=\"\">Categories</option>\r\n                            <option value=\"\">Suite</option>\r\n                            <option value=\"\">Super Deluxe</option>\r\n                            <option value=\"\">Balcony</option>\r\n                            <option value=\"\">Economy</option>\r\n                            <option value=\"\">Luxury</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <input type=\"submit\" class=\"search-submit btn btn-primary\" value=\"Find Cruise\">  \r\n                    </form>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <section class=\"ftco-section-2\">\r\n        <div class=\"container-fluid d-flex\">\r\n          <div class=\"section-2-blocks-wrapper row no-gutters\">\r\n            <div class=\"img col-sm-12 col-lg-6\" style=\"background-image: url('../../../assets/images/tour-2.jpg');\">\r\n              <a href=\"https://vimeo.com/45830194\" class=\"button popup-vimeo\"><span class=\"ion-ios-play\"></span></a>\r\n            </div>\r\n            <div class=\"text col-lg-6 ftco-animate\">\r\n              <div class=\"text-inner align-self-start\">\r\n                \r\n                <h3>Welcome to Bon Voyage since 1898 established Far far away.</h3>\r\n                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n  \r\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"ftco-section\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-3 promo ftco-animate\">\r\n                <a href=\"#\" class=\"promo-img mb-4\" style=\"background-image: url('../../../assets/images/promo-1.jpg');\"></a>\r\n                <div class=\"text text-center\">\r\n                  <h2>Group Cruises</h2>\r\n                  <h3 class=\"price\"><span>from</span> $299</h3>\r\n                  <a href=\"#\" class=\"read\">Read more</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 promo ftco-animate\">\r\n                <a href=\"#\" class=\"promo-img mb-4\" style=\"background-image: url('../../../assets/images/promo-2.jpg');\"></a>\r\n                <div class=\"text text-center\">\r\n                  <h2>Beach Tours</h2>\r\n                  <h3 class=\"price\"><span>from</span> $199</h3>\r\n                  <a href=\"#\" class=\"read\">Read more</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 promo ftco-animate\">\r\n                <a href=\"#\" class=\"promo-img mb-4\" style=\"background-image: url('../../../assets/images/promo-3.jpg');\"></a>\r\n                <div class=\"text text-center\">\r\n                  <h2>Mountain Tours</h2>\r\n                  <h3 class=\"price\"><span>from</span> $179</h3>\r\n                  <a href=\"#\" class=\"read\">Read more</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 promo ftco-animate\">\r\n                <a href=\"#\" class=\"promo-img mb-4\" style=\"background-image: url('../../../assets/images/promo-3.jpg');\"></a>\r\n                <div class=\"text text-center\">\r\n                  <h2>Family Tours</h2>\r\n                  <h3 class=\"price\"><span>from</span> $599</h3>\r\n                  <a href=\"#\" class=\"read\">Read more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n   \r\n\r\n\r\n  <script src=\"../../../assets/js/jquery.min.js\"></script>\r\n  <script src=\"../../../assets/js/jquery-migrate-3.0.1.min.js\"></script>\r\n  <script src=\"../../../assets/js/popper.min.js\"></script>\r\n  <script src=\"../../../assets/js/bootstrap.min.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.easing.1.3.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.waypoints.min.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.stellar.min.js\"></script>\r\n  <script src=\"../../../assets/js/owl.carousel.min.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.magnific-popup.min.js\"></script>\r\n  <script src=\"../../../assets/js/aos.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.animateNumber.min.js\"></script>\r\n  <script src=\"../../../assets/js/bootstrap-datepicker.js\"></script>\r\n  <script src=\"../../../assets/js/jquery.timepicker.min.js\"></script>\r\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false\"></script>\r\n  <script src=\"../../../assets/js/google-map.js\"></script>\r\n  <script src=\"../../../assets/js/main.js\"></script>\r\n    \r\n  </body>\r\n</html>"

/***/ }),

/***/ "./src/app/views/website/website.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/website/website.component.ts ***!
  \****************************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteComponent = /** @class */ (function () {
    function WebsiteComponent(router, loader) {
        this.router = router;
        this.loader = loader;
        this.display = 'none'; //default Variable
    }
    WebsiteComponent.prototype.ngOnInit = function () {
        this.date = new Date(); // Today date and time
        //Login Validation
        this.logedInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("youremail@gmail.com", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[^ @]*@[^ @]*")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('YourPassword', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    };
    WebsiteComponent.prototype.mdfLogin = function (data) {
        this.emailId = data.emailId;
        this.password = data.password;
        alert(JSON.stringify(data));
    };
    WebsiteComponent.prototype.closeModalDialog = function () {
        this.display = 'none'; //Set block css
    };
    WebsiteComponent.prototype.loginPopup = function () {
        this.display = 'block'; //set none css after close dialog
    };
    WebsiteComponent.prototype.goToMainDash = function () {
        this.loader.open();
        this.router.navigateByUrl('/dashboard');
    };
    WebsiteComponent.prototype.ngOnDestroy = function () {
        // if (this.homePS) this.homePS.destroy();
        this.loader.close();
    };
    WebsiteComponent.prototype.SignupPopup = function () {
        alert('a');
    };
    WebsiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'website',
            template: __webpack_require__(/*! ./website.component.html */ "./src/app/views/website/website.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"]])
    ], WebsiteComponent);
    return WebsiteComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/website/website.module.ts ***!
  \*************************************************/
/*! exports provided: WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./website.component */ "./src/app/views/website/website.component.ts");
/* harmony import */ var _website_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./website.routing */ "./src/app/views/website/website.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var WebsiteModule = /** @class */ (function () {
    function WebsiteModule() {
    }
    WebsiteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_website_routing__WEBPACK_IMPORTED_MODULE_9__["WebsiteRoutes"])
            ],
            declarations: [_website_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteComponent"]],
            exports: []
        })
    ], WebsiteModule);
    return WebsiteModule;
}());

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { 
//   MatIconModule,
//   MatCardModule,
//   MatMenuModule,
//   MatProgressBarModule,
//   MatButtonModule,
//   MatChipsModule,
//   MatListModule,
//   MatGridListModule
//  } from '@angular/material';
// import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { SharedModule } from '../../shared/shared.module';
// import { DashboardComponent } from './dashboard.component';
// import { DashboardRoutes } from "./dashboard.routing";
// @NgModule({
//   imports: [
//     CommonModule,
//     MatIconModule,
//     MatCardModule,
//     MatMenuModule,
//     MatProgressBarModule,
//     MatButtonModule,
//     MatChipsModule,
//     MatListModule,
//     MatGridListModule,
//     FlexLayoutModule,
//     ChartsModule,
//     NgxDatatableModule,
//     SharedModule,
//     RouterModule.forChild(DashboardRoutes)
//   ],
//   declarations: [DashboardComponent],
//   exports: []
// })


/***/ }),

/***/ "./src/app/views/website/website.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/views/website/website.routing.ts ***!
  \**************************************************/
/*! exports provided: WebsiteRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRoutes", function() { return WebsiteRoutes; });
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.component */ "./src/app/views/website/website.component.ts");

var WebsiteRoutes = [
    { path: '', component: _website_component__WEBPACK_IMPORTED_MODULE_0__["WebsiteComponent"], data: { title: 'Website' } }
];


/***/ })

}]);
//# sourceMappingURL=views-website-website-module.js.map