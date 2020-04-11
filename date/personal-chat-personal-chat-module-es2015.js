(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-chat-personal-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>personalChat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"header-persona-chat\" routerLink=\"/chat/tabs/tabs2\">\n    <div class=\"arrow\">\n\n      <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n    </div>\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-8.png\" class=\"image-chat\">\n    </div>\n    <div class=\"name\">\n      <p class=\"chat-name\">Vibrant_chef</p>\n    </div>\n  </div>\n\n\n\n  <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How are you?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Fine you say</p>\n    </div>\n\n\n    <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">'Lets meet tomorrow at 8'</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Thats, great...</p>\n    </div>\n</ion-content>\n\n\n<ion-content>\n  <div class=\"text-message-writer\">\n\n    <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n    <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/personal-chat/personal-chat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/personal-chat/personal-chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PersonalChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPageRoutingModule", function() { return PersonalChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-chat.page */ "./src/app/personal-chat/personal-chat.page.ts");




const routes = [
    {
        path: '',
        component: _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__["PersonalChatPage"]
    }
];
let PersonalChatPageRoutingModule = class PersonalChatPageRoutingModule {
};
PersonalChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalChatPageRoutingModule);



/***/ }),

/***/ "./src/app/personal-chat/personal-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: PersonalChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPageModule", function() { return PersonalChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-chat-routing.module */ "./src/app/personal-chat/personal-chat-routing.module.ts");
/* harmony import */ var _personal_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-chat.page */ "./src/app/personal-chat/personal-chat.page.ts");







let PersonalChatPageModule = class PersonalChatPageModule {
};
PersonalChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalChatPageRoutingModule"]
        ],
        declarations: [_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__["PersonalChatPage"]]
    })
], PersonalChatPageModule);



/***/ }),

/***/ "./src/app/personal-chat/personal-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  margin-top: 1em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvcGVyc29uYWwtY2hhdC9wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtY2hhdC9wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1jaGF0L3BlcnNvbmFsLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZXJzb25hLWNoYXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5pbWcuaW1hZ2UtY2hhdCB7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxufVxyXG5wLmNoYXQtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi50ZXh0LW1lc3NhZ2Utd3JpdGVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbnB1dCNjaGF0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDExcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW1nLmltZy1zZW5kIHtcclxuICAgIGhlaWdodDogM3ZoO1xyXG59XHJcbi5jaGF0LXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmxlZnQtY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jaGF0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RUI7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxucC5jaGF0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn0iLCIuaGVhZGVyLXBlcnNvbmEtY2hhdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmciAxNmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pbWcuaW1hZ2UtY2hhdCB7XG4gIGhlaWdodDogN3ZoO1xufVxuXG5wLmNoYXQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRleHQtbWVzc2FnZS13cml0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0I2NoYXQge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nLmltZy1zZW5kIHtcbiAgaGVpZ2h0OiAzdmg7XG59XG5cbi5jaGF0LXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGVmdC1jaGF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcbiAgd2lkdGg6IDQ5JTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yaWdodC1jaGF0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5wLmNoYXQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/personal-chat/personal-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: PersonalChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPage", function() { return PersonalChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalChatPage = class PersonalChatPage {
    constructor() { }
    ngOnInit() {
    }
};
PersonalChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-chat.page.scss */ "./src/app/personal-chat/personal-chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalChatPage);



/***/ })

}]);
//# sourceMappingURL=personal-chat-personal-chat-module-es2015.js.map