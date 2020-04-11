(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<div class=\"navigation\">\n<div class=\"main-logo\">\n<img src=\"../../assets/Images/header-logo.png\" alt=\"\" srcset=\"\" class=\"header-logo\">\n</div>\n\n<div class=\"account-status\">\n\n  <img src=\"../../assets/Images/user-12.png\" class=\"status-check\">\n</div>\n\n<div class=\"humburger-menu\">\n  <img src=\"../../assets/Images/cross.png\" class=\"hum-burger-menu-cross\" *ngIf=\"crossSign\" (click)=\"humBurgerCross()\">\n  <img src=\"../../assets/Images/hum.png\" class=\"hum-burger-menu\" (click)=\"humburgereffect()\" *ngIf=\"humBurger\" >\n</div>\n\n</div>\n\n<div class=\"main-menu\" *ngIf=\"mainMenu\">\n  <ul class=\"main-list\">\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">My Profile</a></li>\n    <li><a href=\"#\">My Chats</a></li>\n    <li><a href=\"#\">FAQ</a></li>\n    <li><a href=\"#\">Contact</a></li>\n    <li><a href=\"#\">LogOut</a></li>\n  </ul>\n</div>\n</ion-header>\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/navigation/navigation-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/navigation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NavigationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageRoutingModule", function() { return NavigationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.page */ "./src/app/navigation/navigation.page.ts");




const routes = [
    {
        path: '',
        component: _navigation_page__WEBPACK_IMPORTED_MODULE_3__["NavigationPage"]
    }
];
let NavigationPageRoutingModule = class NavigationPageRoutingModule {
};
NavigationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NavigationPageRoutingModule);



/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageModule", function() { return NavigationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-routing.module */ "./src/app/navigation/navigation-routing.module.ts");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.page */ "./src/app/navigation/navigation.page.ts");







let NavigationPageModule = class NavigationPageModule {
};
NavigationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavigationPageRoutingModule"]
        ],
        declarations: [_navigation_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPage"]]
    })
], NavigationPageModule);



/***/ }),

/***/ "./src/app/navigation/navigation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 1px solid;\n}\n\nimg.hum-burger-menu {\n  height: 5vh;\n}\n\n.main-logo {\n  margin: 0.8em;\n}\n\n.account-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg.hum-burger-menu-cross {\n  position: absolute;\n  top: 2vh;\n  right: 3vw;\n  z-index: 1;\n  height: 6vh;\n}\n\nul.main-list {\n  list-style: none;\n  font-size: 25px;\n  color: black;\n}\n\na {\n  color: black;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n\nli {\n  padding: 4px 0em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.main-menu {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuaW1nLmh1bS1idXJnZXItbWVudSB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxufVxyXG4ubWFpbi1sb2dvIHtcclxuICAgIG1hcmdpbjogMC44ZW07XHJcbn1cclxuLmFjY291bnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJ2aDtcclxuICAgIHJpZ2h0OiAzdnc7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbn1cclxudWwubWFpbi1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDRweCAwZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5tYWluLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iLCIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gIGhlaWdodDogNXZoO1xufVxuXG4ubWFpbi1sb2dvIHtcbiAgbWFyZ2luOiAwLjhlbTtcbn1cblxuLmFjY291bnQtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZy5odW0tYnVyZ2VyLW1lbnUtY3Jvc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnZoO1xuICByaWdodDogM3Z3O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDZ2aDtcbn1cblxudWwubWFpbi1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxubGkge1xuICBwYWRkaW5nOiA0cHggMGVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haW4tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/navigation.page.ts":
/*!***********************************************!*\
  !*** ./src/app/navigation/navigation.page.ts ***!
  \***********************************************/
/*! exports provided: NavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPage", function() { return NavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationPage = class NavigationPage {
    constructor() {
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
    }
    ngOnInit() {
    }
    humburgereffect() {
        this.crossSign = true;
        this.humBurger = false;
        this.mainMenu = true;
    }
    humBurgerCross() {
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
    }
};
NavigationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.page.scss */ "./src/app/navigation/navigation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationPage);



/***/ })

}]);
//# sourceMappingURL=navigation-navigation-module-es2015.js.map