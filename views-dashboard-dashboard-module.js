(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n<button mat-raised-button color=\"primary\" class=\"float-right\" *ngIf=\"showbutton\" (click)=\"showProductFrom()\">Add Product</button>\r\n\r\n\r\n<div *ngIf=\"ProductDescription\">\r\n  <button mat-raised-button color=\"primary\" class=\"float-left\"  (click)=\"backtoProductmainScreen()\">Back</button>\r\n  <br/>\r\n  <br/>\r\n  <div class=\"form-row mb-2\">\r\n    <div class=\"col\">\r\n            <label><strong>Product Name</strong></label><br/>\r\n           {{descriptionProductName}}\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <label><strong>Category Name</strong></label><br/>\r\n     {{descriptionCategoryName}}\r\n</div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-row mb-2\">\r\n\r\n    <div class=\"col\">\r\n      <label><strong>Product Hindi Name</strong></label><br/>\r\n     {{descriptionProductHindiName}}\r\n</div>\r\n\r\n<div class=\"col\">\r\n<label><strong>Image</strong></label><br/>\r\n{{descriptionImage}}\r\n</div>\r\n\r\n  </div>\r\n\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <mat-card class=\"p-0\"  [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n    <mat-card-content class=\"p-0\">\r\n      <ngx-datatable\r\n            class=\"material ml-0 mr-0\"\r\n            [rows]=\"ProductDescriptionList\" \r\n            [columnMode]=\"'flex'\"\r\n            [headerHeight]=\"50\"\r\n            [footerHeight]=\"50\"\r\n            [limit]=\"10\"\r\n            [rowHeight]=\"'auto'\">\r\n            <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n               {{row?.quantity}} \r\n              </ng-template>\r\n            </ngx-datatable-column> \r\n  \r\n            <ngx-datatable-column name=\"Unit\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n               {{row?.unit}} \r\n              </ng-template>\r\n            </ngx-datatable-column> \r\n  \r\n            <ngx-datatable-column name=\"Price\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n               {{row?.price}} \r\n              </ng-template>\r\n            </ngx-datatable-column> \r\n             \r\n          \r\n          </ngx-datatable>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"ProductForm\">\r\n<div class=\"form-row mb-4\">\r\n  <div class=\"col\">\r\n          <label><strong>Product Name</strong></label><br/>\r\n          <input type=\"text\" name=\"Productname\" [(ngModel)]=\"Productname\" placeholder=\"Product Name\">\r\n  </div>\r\n\r\n  \r\n  <div class=\"col\">\r\n          <label><strong>Category Name</strong></label><br/>\r\n          \r\n          <select [(ngModel)]=\"Category\" style=\"width: 35%;\" placeholder=\"Category Name\">\r\n              <!-- <option value=\"0\">--Select Category--</option> -->\r\n              <option *ngFor=\"let s of summaries\"  value={{s._id}} >\r\n                  {{s.name}}\r\n              </option>\r\n          </select>\r\n\r\n\r\n          <!-- <input type=\"text\" name=\"Category\" [(ngModel)]=\"Category\" placeholder=\"Category\"> -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-row mb-4\">\r\n  <div class=\"col\">\r\n          <label><strong>Hindi Product Name</strong></label><br/>\r\n          <input type=\"text\" name=\"HindiProductname\" [(ngModel)]=\"HindiProductname\" placeholder=\"Hindi Product Name\">\r\n  </div>\r\n \r\n  <div class=\"col\">\r\n          <label><strong>Image</strong></label><br/>\r\n          <input type='file' [(ngModel)]='image' (change)=\"onfileSelector($event)\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-md-2\" [formGroup]=\"addForm\">\r\n  <div class=\"form-group\">\r\n      <label class=\"label-control\">Add quantity</label>\r\n      <br>\r\n      <label class=\"switch\">\r\n  <input type=\"checkbox\" class=\"form-control\" formControlName=\"items\">\r\n  <span class=\"slider round\">\r\n    <span class=\"on\">\r\n      {{addForm.value.items_value}}\r\n    </span> \r\n    <span class=\"off\">\r\n      {{addForm.value.items_value}}\r\n    </span>\r\n  </span>\r\n  </label>\r\n      \r\n      <table>\r\n          <thead>\r\n              <button (click)=\"onAddRow()\" *ngIf=\"addForm.get('rows')\">Add Qty</button>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let row of addForm.get('rows')?.controls;let index = index;\">\r\n        <td>\r\n          Quantity : <input [formControl]=\"row.get('quantity')\">\r\n        </td>\r\n        <td>\r\n          Unit : <input [formControl]=\"row.get('unit')\">\r\n        </td>\r\n        <td>\r\n          Price : <input [formControl]=\"row.get('price')\">\r\n        </td>\r\n        <td>\r\n          <button (click)=\"onRemoveRow(index)\">Remove</button>\r\n        </td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n<br/>\r\n      <button mat-raised-button  (click)=\"saveProduct()\" color=\"primary\">{{BtnName}}</button>\r\n      &nbsp;<button mat-raised-button  (click)=\"clearFields()\" color=\"warn\">Clear</button>\r\n     \r\n\r\n      <!-- <pre>{{rows.value | json}}</pre> -->\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<br/>\r\n<br/>\r\n<br/>\r\n<mat-card class=\"p-0\"  *ngIf=\"showbutton\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable\r\n          class=\"material ml-0 mr-0\"\r\n          [rows]=\"ProductList\" \r\n          [columnMode]=\"'flex'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rowHeight]=\"'auto'\">\r\n          <ngx-datatable-column name=\"Product Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n             {{row?.name}} \r\n            </ng-template>\r\n          </ngx-datatable-column> \r\n\r\n          <ngx-datatable-column name=\"Hindi Product Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n             {{row?.hindi_name}} \r\n            </ng-template>\r\n          </ngx-datatable-column> \r\n\r\n          <ngx-datatable-column name=\"Category Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n             {{row?.category_id.name}} \r\n            </ng-template>\r\n          </ngx-datatable-column> \r\n           \r\n          <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <button mat-icon-button mat-sm-button color=\"primary\" title=\"Edit\" class=\"mr-1\" (click)=\"editProduct(row)\"><mat-icon>edit</mat-icon></button>\r\n              \r\n              <button mat-icon-button mat-sm-button color=\"accent\" title=\"Description\" (click)=\"productDetails(row)\"><mat-icon>description</mat-icon></button>\r\n              \r\n              <button mat-icon-button mat-sm-button color=\"warn\" title=\"Delete\" (click)=\"deleteProduct(row)\"><mat-icon>delete</mat-icon></button>\r\n         \r\n\r\n             \r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n  </mat-card-content>\r\n</mat-card>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<style>\r\n  body {\r\n\r\ncolor: green\r\n}\r\n.switch {\r\nposition: relative;\r\ndisplay: inline-block;\r\nwidth: 90px;\r\nheight: 34px;\r\n}\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\nposition: absolute;\r\ncursor: pointer;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nbottom: 0;\r\nbackground-color: #FF586B;\r\n-webkit-transition: .4s;\r\ntransition: .4s;\r\n}\r\n\r\n.slider:before {\r\nposition: absolute;\r\ncontent: \"\";\r\nheight: 26px;\r\nwidth: 26px;\r\nleft: 4px;\r\nbottom: 4px;\r\nbackground-color: white;\r\n-webkit-transition: .4s;\r\ntransition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\nbackground-color: #0CC27E;\r\n}\r\n\r\ninput:focus + .slider {\r\nbox-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n-webkit-transform: translateX(55px);\r\n-ms-transform: translateX(55px);\r\ntransform: translateX(55px);\r\n}\r\n\r\n/*------ ADDED CSS ---------*/\r\n.on\r\n{\r\ndisplay: none;\r\n}\r\n\r\n.on, .off\r\n{\r\ncolor: white;\r\nposition: absolute;\r\ntransform: translate(-50%,-50%);\r\ntop: 50%;\r\n}\r\n\r\n.on \r\n{\r\nleft: 45%;\r\n}\r\n\r\n.off \r\n{\r\nleft: 55%;\r\n}\r\n\r\ninput:checked+ .slider .on\r\n{display: block;}\r\n\r\ninput:checked + .slider .off\r\n{display: none;}\r\n\r\n/*--------- END --------*/\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\nborder-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\nborder-radius: 50%;}\r\n  </style>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {DateFormatter} from 'angular2/src/facade/intl';
///import { TablesService } from '../tables.service';

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, httpClient, confirmService) {
        this.fb = fb;
        this.httpClient = httpClient;
        this.confirmService = confirmService;
        this.ApiUrl = 'http://ec2-13-232-104-8.ap-south-1.compute.amazonaws.com:8090/';
        this.url = this.ApiUrl + 'product';
        this.urlCat = this.ApiUrl + 'category';
        this.selectedFile = null;
        this.deletetitle = 'Delete Product';
        this.deletetext = 'Are you sure do you realy want to delete this Product?';
        this.addForm = this.fb.group({
            items: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            items_value: ['no', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.rows = this.fb.array([]);
    }
    DashboardComponent.prototype.onfileSelector = function (event) {
        this.selectedFile = event.target.files[0];
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BtnName = "Save";
        this.addForm.get("items").valueChanges.subscribe(function (val) {
            if (val === true) {
                _this.addForm.get("items_value").setValue("yes");
                _this.addForm.addControl('rows', _this.rows);
            }
            if (val === false) {
                _this.addForm.get("items_value").setValue("no");
                _this.addForm.removeControl('rows');
            }
        });
        this.ProductForm = false;
        this.showbutton = true;
        this.getAllProduct();
        this.getAllCategory();
    };
    DashboardComponent.prototype.showProductFrom = function () {
        this.ProductForm = true;
        this.clearProductFields();
        this.showbutton = false;
    };
    DashboardComponent.prototype.clearProductFields = function () {
        this.Productname = "";
        this.Category = "";
        this.HindiProductname = "";
    };
    DashboardComponent.prototype.onAddRow = function () {
        this.rows.push(this.createItemFormGroup());
    };
    DashboardComponent.prototype.onRemoveRow = function (rowIndex) {
        this.rows.removeAt(rowIndex);
    };
    DashboardComponent.prototype.createItemFormGroup = function () {
        return this.fb.group({
            quantity: null,
            unit: null,
            price: null
        });
    };
    DashboardComponent.prototype.hideProductForm = function () {
        this.ProductForm = false;
        this.clearProductFields();
        this.showbutton = true;
    };
    DashboardComponent.prototype.clearFields = function () {
        this.Productname = "";
        this.Category = "";
        this.HindiProductname = "";
        this.ProductForm = false;
        this.showbutton = true;
        this.getAllProduct();
    };
    DashboardComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.data = this.httpClient.get(this.url);
        this.data.subscribe(function (data) {
            _this.ProductList = data.products;
            ;
        });
    };
    DashboardComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.data = this.httpClient.get(this.urlCat);
        this.data.subscribe(function (data) {
            _this.summaries = data.category;
            ;
        });
    };
    DashboardComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.BtnName == 'Update') {
            var fd_1 = new FormData();
            fd_1.append('image', this.selectedFile);
            var dataJson = {
                name: this.Productname,
                category_id: this.Category,
                hindi_name: this.HindiProductname,
                quantity: this.rows.value
            };
            this.data = this.httpClient.put(this.url + "/" + this.ProductId, dataJson);
            this.data.subscribe(function (data) {
                _this.msg = data.message;
                if (_this.msg == 'Product created') {
                    _this.prodID = data.product_id;
                    _this.data = _this.httpClient.post(_this.url + '/imageUpload/' + _this.prodID, fd_1);
                    _this.data.subscribe(function (data) {
                        _this.msg = data.message;
                        if (_this.msg == "Image Uploaded Successfully") {
                            alert("Product Created Successfully");
                            _this.clearFields();
                            _this.getAllProduct();
                        }
                    });
                }
                else {
                    alert('Something went wrong!');
                }
            });
        }
        else {
            var fd_2 = new FormData();
            fd_2.append('image', this.selectedFile);
            var dataJson = {
                name: this.Productname,
                category_id: this.Category,
                hindi_name: this.HindiProductname,
                quantity: this.rows.value
            };
            this.data = this.httpClient.post(this.url, dataJson);
            this.data.subscribe(function (data) {
                _this.msg = data.message;
                if (_this.msg == 'Product created') {
                    _this.prodID = data.product_id;
                    _this.data = _this.httpClient.post(_this.url + '/imageUpload/' + _this.prodID, fd_2);
                    _this.data.subscribe(function (data) {
                        _this.msg = data.message;
                        if (_this.msg == "Image Uploaded Successfully") {
                            alert("Product Created Successfully");
                            _this.clearFields();
                            _this.getAllProduct();
                        }
                    });
                }
                else {
                    alert('Something went wrong!');
                }
            });
        }
    };
    DashboardComponent.prototype.editProduct = function (row) {
        console.log(row);
        this.ProductForm = true;
        this.clearProductFields();
        this.showbutton = false;
        this.ProductId = row._id;
        this.BtnName = 'Update';
        this.Productname = row.name;
        this.Category = row.category_id;
        this.HindiProductname = row.hindi_name;
    };
    DashboardComponent.prototype.deleteProduct = function (row) {
        var _this = this;
        this.confirmService.confirm({ title: this.deletetitle, message: this.deletetext })
            .subscribe(function (result) {
            _this.selectedOption = result;
            // alert( this.selectedOption); row.LeadID
            if (_this.selectedOption) {
                var ldID = row._id;
                _this.data = _this.httpClient.delete(_this.url + "/" + ldID);
                _this.data.subscribe(function (data) {
                    _this.msg = data.message;
                    if (_this.msg == 'Deleted') {
                        alert("Deleted Successfully");
                        _this.getAllProduct();
                    }
                    else {
                        alert('Something went wrong!');
                    }
                });
            }
            else {
            }
        });
    };
    DashboardComponent.prototype.productDetails = function (row) {
        this.ProductDescription = true;
        this.showbutton = false;
        this.descriptionProductName = row.name;
        this.descriptionCategoryName = row.category_id.name;
        this.descriptionProductHindiName = row.hindi_name;
        this.ProductDescriptionList = row.quantity;
        console.log(this.ProductDescriptionList);
    };
    DashboardComponent.prototype.backtoProductmainScreen = function () {
        this.ProductDescription = false;
        this.showbutton = true;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_4__["AppConfirmService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/views/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_10__["DashboardRoutes"])
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], data: { title: 'Dashboard' } }
];


/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map