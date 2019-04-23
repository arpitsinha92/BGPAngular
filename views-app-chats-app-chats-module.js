(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-chats-app-chats-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/switchMap.js ***!
  \**************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/views/app-chats/app-chats.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1jaGF0cy9hcHAtY2hhdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/app-chats/app-chats.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-sidenav-container class=\"chat-container\">\r\n    <!-- Left sidebar -->\r\n    <mat-sidenav class=\"chat-sidenav\" [opened]=\"isSidenavOpen\" mode=\"side\">\r\n      <app-chat-left-sidenav></app-chat-left-sidenav>\r\n    </mat-sidenav>\r\n\r\n    <!-- Right side -->\r\n    <div class=\"chats-wrap\">\r\n      <!-- Right side topbar -->\r\n      <app-chat-contents [matSidenav]=\"sideNav\"></app-chat-contents>\r\n\r\n    </div>\r\n  </mat-sidenav-container>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/app-chats/app-chats.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.ts ***!
  \********************************************************/
/*! exports provided: AppChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppChatsComponent", function() { return AppChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.service */ "./src/app/views/app-chats/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppChatsComponent = /** @class */ (function () {
    function AppChatsComponent(media, chatService) {
        this.media = media;
        this.chatService = chatService;
        this.isSidenavOpen = true;
        this.activeChatUser = {
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            isOnline: true,
            lastMsg: 'Hello!'
        };
        console.log(chatService.chats);
        this.user = chatService.user;
    }
    AppChatsComponent.prototype.ngOnInit = function () {
        this.chatSideBarInit();
    };
    AppChatsComponent.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    AppChatsComponent.prototype.changeActiveUser = function (user) {
        this.activeChatUser = user;
    };
    AppChatsComponent.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.isSidenavOpen = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    };
    AppChatsComponent.prototype.chatSideBarInit = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
            _this.updateSidenav();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppChatsComponent.prototype, "sideNav", void 0);
    AppChatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./app-chats.component.html */ "./src/app/views/app-chats/app-chats.component.html"),
            styles: [__webpack_require__(/*! ./app-chats.component.css */ "./src/app/views/app-chats/app-chats.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"],
            _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], AppChatsComponent);
    return AppChatsComponent;
}());



/***/ }),

/***/ "./src/app/views/app-chats/app-chats.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.module.ts ***!
  \*****************************************************/
/*! exports provided: AppChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppChatsModule", function() { return AppChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_chats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-chats.component */ "./src/app/views/app-chats/app-chats.component.ts");
/* harmony import */ var _app_chats_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-chats.routing */ "./src/app/views/app-chats/app-chats.routing.ts");
/* harmony import */ var _chat_left_sidenav_chat_left_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-left-sidenav/chat-left-sidenav.component */ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.ts");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-contents/chat-contents.component */ "./src/app/views/app-chats/chat-contents/chat-contents.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat.service */ "./src/app/views/app-chats/chat.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppChatsModule = /** @class */ (function () {
    function AppChatsModule() {
    }
    AppChatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_chats_routing__WEBPACK_IMPORTED_MODULE_8__["ChatsRoutes"])
            ],
            declarations: [_app_chats_component__WEBPACK_IMPORTED_MODULE_7__["AppChatsComponent"], _chat_left_sidenav_chat_left_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["ChatLeftSidenavComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_10__["ChatContentsComponent"]],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]]
        })
    ], AppChatsModule);
    return AppChatsModule;
}());



/***/ }),

/***/ "./src/app/views/app-chats/app-chats.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.routing.ts ***!
  \******************************************************/
/*! exports provided: ChatsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsRoutes", function() { return ChatsRoutes; });
/* harmony import */ var _app_chats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-chats.component */ "./src/app/views/app-chats/app-chats.component.ts");

var ChatsRoutes = [
    { path: '', component: _app_chats_component__WEBPACK_IMPORTED_MODULE_0__["AppChatsComponent"], data: { title: 'Chat' } }
];


/***/ }),

/***/ "./src/app/views/app-chats/chat-contents/chat-contents.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-contents/chat-contents.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"chat-toolbar\">\r\n    <!-- sidebar toggle button -->\r\n    <button \r\n    mat-icon-button\r\n    [style.alignSelf]=\"'center'\"\r\n    class=\"mr-1\" \r\n    (click)=\"matSidenav.toggle()\"><mat-icon>short_text</mat-icon>\r\n    </button>\r\n    \r\n    <!-- Selected active user -->\r\n    <div \r\n      class=\"active-chat-user\" \r\n      fxLayout=\"row\" \r\n      fxLayoutAlign=\"start center\"\r\n      *ngIf=\"activeContact.id\"\r\n    >\r\n      <a \r\n        [ngClass]=\"{online: activeContact.status === 'online'}\" \r\n        class=\"toolbar-avatar mr-1\"\r\n      >\r\n        <img [src]=\"activeContact.avatar\" alt=\"\">\r\n        <span class=\"status-dot\"></span>\r\n      </a>\r\n      <div fxLayout=\"column\">\r\n        <h6 class=\"m-0 font-normal fz-1\">{{activeContact.name}}</h6>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Right side top menu -->\r\n    <span fxFlex></span>\r\n    <button \r\n    [style.alignSelf]=\"'center'\" \r\n    mat-icon-button \r\n    [matMenuTriggerFor]=\"toolbarDDMenu\" \r\n    class=\"topbar-button-right hidden-on-open\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarDDMenu=\"matMenu\">\r\n        <button mat-menu-item><mat-icon>account_circle</mat-icon>Contact info</button>\r\n        <button mat-menu-item><mat-icon>volume_mute</mat-icon>Mute</button>\r\n        <button mat-menu-item><mat-icon>delete</mat-icon>Clear chat</button>\r\n    </mat-menu>\r\n</mat-toolbar>\r\n\r\n<div *ngIf=\"chatCollection\">\r\n    <!-- Main chat body -->\r\n    <div class=\"conversations-hold\" [perfectScrollbar]>\r\n\r\n      <!-- single chat item -->\r\n      <div class=\"single-conversation\" \r\n        fxLayout=\"row\" \r\n        *ngFor=\"let chat of chatCollection?.chats\"\r\n        [ngClass]=\"{sender: chat.contactId === activeContact.id, me: chat.contactId !== activeContact.id}\"\r\n      >\r\n\r\n        <a \r\n          *ngIf=\"chat.contactId !== activeContact.id\" \r\n          href=\"\" \r\n          class=\"toolbar-avatar\"\r\n          [ngClass]=\"{online: user.status === 'online'}\"\r\n        >\r\n          <img [src]=\"user?.avatar\" [alt]=\"user?.name\">\r\n          <span class=\"status-dot\"></span>\r\n        </a>\r\n\r\n        <a \r\n          *ngIf=\"chat.contactId === activeContact.id\" \r\n          href=\"\" \r\n          class=\"toolbar-avatar\"\r\n          [ngClass]=\"{online: activeContact.status === 'online'}\"\r\n        >\r\n          <img [src]=\"activeContact?.avatar\" [alt]=\"activeContact?.name\">\r\n          <span class=\"status-dot\"></span>\r\n        </a>\r\n\r\n        <div>\r\n          <h5 *ngIf=\"chat.contactId === activeContact.id\" class=\"chat-username text-muted\">{{activeContact?.name}}</h5>\r\n          <h5 *ngIf=\"chat.contactId !== activeContact.id\" class=\"chat-username text-muted\">{{user?.name}}</h5>\r\n\r\n          <div class=\"conversation-msg\">\r\n            {{chat.text}}\r\n          </div>\r\n          <p class=\"chat-date text-muted\">{{chat.time | relativeTime}}</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <!-- Input box and send button -->\r\n    <div class=\"chat-input-actions\">\r\n      <form \r\n        #msgForm=\"ngForm\" \r\n        class=\"inputForm\" \r\n        (ngSubmit)=\"sendMessage($event)\" \r\n        (keyup.enter)=\"sendMessage($event)\"\r\n        fxLayout=\"row\"\r\n      >\r\n        <mat-form-field class=\"full-width mr-1\">\r\n          <textarea\r\n          matInput\r\n          #msgInput\r\n          ngModel\r\n          placeholder=\"Type your message\"\r\n          name=\"message\"\r\n          class=\"inputText\"\r\n          value=\"\"></textarea>\r\n        </mat-form-field>\r\n        <button mat-fab color=\"primary\" type=\"submit\"><mat-icon>send</mat-icon></button>\r\n      </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"chat-intro\" *ngIf=\"!chatCollection\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <h6>Select a contact and start chat</h6>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/app-chats/chat-contents/chat-contents.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-contents/chat-contents.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1jaGF0cy9jaGF0LWNvbnRlbnRzL2NoYXQtY29udGVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/app-chats/chat-contents/chat-contents.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-contents/chat-contents.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentsComponent", function() { return ChatContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/app-chats/chat.service.ts");
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




var ChatContentsComponent = /** @class */ (function () {
    function ChatContentsComponent(chatService) {
        this.chatService = chatService;
        this.user = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeContact = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ChatContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for user update
        this.userUpdateSub = this.chatService.onUserUpdated.subscribe(function (user) {
            _this.user = user;
        });
        // Listen for contact change
        this.chatSelectSub = this.chatService.onChatSelected.subscribe(function (res) {
            if (res) {
                _this.chatCollection = res.chatCollection;
                _this.activeContact = res.contact;
                _this.initMsgForm();
            }
        });
        // Listen for chat update
        this.chatUpdateSub = this.chatService.onChatsUpdated.subscribe(function (chat) {
            _this.chatCollection.chats.push(chat);
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub)
            this.userUpdateSub.unsubscribe();
        if (this.chatSelectSub)
            this.chatSelectSub.unsubscribe();
        if (this.chatUpdateSub)
            this.chatUpdateSub.unsubscribe();
    };
    ChatContentsComponent.prototype.sendMessage = function (e) {
        var _this = this;
        var chat = {
            contactId: this.chatService.user.id,
            text: this.msgForm.form.value.message,
            time: new Date().toISOString()
        };
        this.chatCollection.chats.push(chat);
        this.chatService
            .updateChats(this.chatCollection.id, this.chatCollection.chats.slice())
            .subscribe(function (res) {
            _this.initMsgForm();
        });
        // Only for demo purpose
        this.chatService.autoReply({
            contactId: this.activeContact.id,
            text: "Hi, I'm " + this.activeContact.name + ". Your imaginary friend.",
            time: new Date().toISOString()
        });
    };
    ChatContentsComponent.prototype.initMsgForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgForm.reset();
            _this.msgInput.first.nativeElement.focus();
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.psContainer.update();
            _this.psContainer.scrollToBottom(0, 400);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('matSidenav'),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "matSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"])
    ], ChatContentsComponent.prototype, "psContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("msgInput"),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "msgInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msgForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ChatContentsComponent.prototype, "msgForm", void 0);
    ChatContentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-chat-contents",
            template: __webpack_require__(/*! ./chat-contents.component.html */ "./src/app/views/app-chats/chat-contents/chat-contents.component.html"),
            styles: [__webpack_require__(/*! ./chat-contents.component.scss */ "./src/app/views/app-chats/chat-contents/chat-contents.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatContentsComponent);
    return ChatContentsComponent;
}());



/***/ }),

/***/ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Left side topbar -->\r\n<mat-toolbar color=\"primary\" class=\"chat-sidebar-toolbar\">\r\n  <a href=\"\" class=\"toolbar-avatar online\">\r\n    <img [src]=\"currentUser.avatar\" alt=\"\">\r\n    <span class=\"status-dot\"></span>\r\n  </a>\r\n  <h6 class=\"m-0 pl-1 font-normal fz-1\">{{currentUser.name}}</h6>\r\n</mat-toolbar>\r\n<div [perfectScrollbar] class=\"chat-sidebar-scroll\">\r\n  <!-- Left side contact list -->\r\n  <mat-nav-list class=\"inbox-nav-list\" role=\"list\">\r\n    <mat-list-item\r\n    *ngFor=\"let info of currentUser?.chatInfo\"\r\n    (click)=\"getChatByContact(info.contactId)\">\r\n      <a \r\n      mat-list-avatar \r\n      [ngClass]=\"{online: (contacts | getValueByKey:info.contactId:'status') === 'online'}\"\r\n      class=\"toolbar-avatar\">\r\n        <img [src]=\"contacts | getValueByKey:info.contactId:'avatar'\" alt=\"\">\r\n        <span class=\"status-dot\"></span>\r\n      </a>\r\n      <h6 matLine>{{info.contactName}}</h6>\r\n      <p matLine class=\"text-muted\">{{info.lastChatTime  | date}}</p>\r\n    </mat-list-item>\r\n    \r\n  </mat-nav-list>\r\n  <mat-divider></mat-divider>\r\n  <mat-nav-list class=\"inbox-nav-list\" role=\"list\">\r\n    <mat-list-item\r\n    *ngFor=\"let contact of contacts\"\r\n    (click)=\"getChatByContact(contact.id)\">\r\n      <a \r\n      mat-list-avatar \r\n      [ngClass]=\"{online: contact.status === 'online'}\"\r\n      class=\"toolbar-avatar\">\r\n        <img [src]=\"contact.avatar\" alt=\"\">\r\n        <span class=\"status-dot\"></span>\r\n      </a>\r\n      <h6 matLine>{{contact.name}}</h6>\r\n      <!-- <p matLine class=\"text-muted\">{{contact.lastChatTime  | date}}</p> -->\r\n    </mat-list-item>\r\n    \r\n  </mat-nav-list>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1jaGF0cy9jaGF0LWxlZnQtc2lkZW5hdi9jaGF0LWxlZnQtc2lkZW5hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChatLeftSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidenavComponent", function() { return ChatLeftSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/app-chats/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatLeftSidenavComponent = /** @class */ (function () {
    function ChatLeftSidenavComponent(chatService) {
        this.chatService = chatService;
        this.isSidenavOpen = true;
        this.currentUser = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ChatLeftSidenavComponent.prototype.ngOnInit = function () {
        // this.chatService.onChatsUpdated
        //   .subscribe(updatedChats => {
        //     this.chats = updatedChats;
        //   });
        var _this = this;
        this.userUpdateSub = this.chatService.onUserUpdated
            .subscribe(function (updatedUser) {
            _this.currentUser = updatedUser;
        });
        this.loadDataSub = this.chatService.loadChatData()
            .subscribe(function (res) {
            _this.currentUser = _this.chatService.user;
            // this.chats = this.chatService.chats;
            _this.contacts = _this.chatService.contacts;
        });
    };
    ChatLeftSidenavComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub)
            this.userUpdateSub.unsubscribe();
        if (this.loadDataSub)
            this.loadDataSub.unsubscribe();
    };
    ChatLeftSidenavComponent.prototype.getChatByContact = function (contactId) {
        this.chatService.getChatByContact(contactId)
            .subscribe(function (res) {
            // console.log('from sub',res);
        }, function (err) {
            console.log(err);
        });
    };
    ChatLeftSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-chat-left-sidenav",
            template: __webpack_require__(/*! ./chat-left-sidenav.component.html */ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./chat-left-sidenav.component.scss */ "./src/app/views/app-chats/chat-left-sidenav/chat-left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatLeftSidenavComponent);
    return ChatLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/views/app-chats/chat.service.ts":
/*!*************************************************!*\
  !*** ./src/app/views/app-chats/chat.service.ts ***!
  \*************************************************/
/*! exports provided: User, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // console.log('from service');
        // this.loadChatData()
    }
    ChatService.prototype.loadChatData = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getAllContacts(), this.getAllChats(), this.getCurrentUser(), function (contacts, chats, user) {
            _this.contacts = contacts;
            _this.chats = chats;
            _this.user = user;
            console.log('next.willCall');
            _this.onUserUpdated.next(user);
            console.log('next.called');
            console.log("contacts:", contacts, "\n chats:", chats, "\n currUser:", user);
        });
    };
    ChatService.prototype.getChatByContact = function (contactId) {
        var _this = this;
        var chatInfo = this.user.chatInfo.find(function (chat) { return chat.contactId === contactId; });
        if (!chatInfo) {
            return this.createChatCollection(contactId)
                .switchMap(function (chatColl) {
                return _this.getChatByContact(contactId);
            });
        }
        return this.getAllChats()
            .switchMap(function (chats) {
            var chatCollection = chats.find(function (chat) { return chat.id === chatInfo.chatId; });
            var contact = _this.contacts.find(function (contact) { return contact.id === contactId; });
            _this.onChatSelected.next({
                chatCollection: chatCollection,
                contact: contact
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(chatCollection);
        });
    };
    ChatService.prototype.createChatCollection = function (contactId) {
        var _this = this;
        var contact = this.contacts.find(function (contact) { return contact.id === contactId; });
        var chatId = (Math.random() * 1000000000).toString();
        var chatCollection = {
            id: chatId,
            chats: []
        };
        var chatInfo = {
            chatId: chatId,
            lastChatTime: new Date(),
            contactId: contact.id,
            contactName: contact.name,
            unread: null
        };
        return this.http
            .post('api/chat-collections', __assign({}, chatCollection))
            .switchMap(function (updatedChatCollection) {
            _this.user.chatInfo.push(chatInfo);
            return _this.updateUser(_this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
                return _this.getCurrentUser()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                    _this.user = user;
                    // console.log(user)
                    _this.onUserUpdated.next(user);
                }));
                // return updatedChatCollection
            }));
        });
    };
    ChatService.prototype.getAllContacts = function () {
        return this.http.get('api/contacts');
    };
    ChatService.prototype.getAllChats = function () {
        return this.http.get('api/chat-collections');
    };
    ChatService.prototype.getCurrentUser = function () {
        return this.http.get('api/chat-user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res[0]; }));
    };
    ChatService.prototype.updateUser = function (user) {
        return this.http.put("api/chat-user/" + user.id, __assign({}, user));
    };
    ChatService.prototype.updateChats = function (chatId, chats) {
        var chatCollection = {
            id: chatId,
            chats: chats
        };
        return this.http.put('api/chat-collections', chatCollection);
    };
    ChatService.prototype.autoReply = function (chat) {
        var _this = this;
        setTimeout(function () {
            _this.onChatsUpdated.next(chat);
        }, 1500);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=views-app-chats-app-chats-module.js.map