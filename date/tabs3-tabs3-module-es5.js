function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs3-tabs3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabs3Tabs3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs3/tabs3-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Tabs3PageRoutingModule */

  /***/
  function srcAppTabs3Tabs3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3PageRoutingModule", function () {
      return Tabs3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs3.page */
    "./src/app/tabs3/tabs3.page.ts");

    var routes = [{
      path: '',
      component: _tabs3_page__WEBPACK_IMPORTED_MODULE_3__["Tabs3Page"]
    }];

    var Tabs3PageRoutingModule = function Tabs3PageRoutingModule() {
      _classCallCheck(this, Tabs3PageRoutingModule);
    };

    Tabs3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tabs3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs3/tabs3.module.ts ***!
    \***************************************/

  /*! exports provided: Tabs3PageModule */

  /***/
  function srcAppTabs3Tabs3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3PageModule", function () {
      return Tabs3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs3-routing.module */
    "./src/app/tabs3/tabs3-routing.module.ts");
    /* harmony import */


    var _tabs3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs3.page */
    "./src/app/tabs3/tabs3.page.ts");

    var Tabs3PageModule = function Tabs3PageModule() {
      _classCallCheck(this, Tabs3PageModule);
    };

    Tabs3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs3PageRoutingModule"]],
      declarations: [_tabs3_page__WEBPACK_IMPORTED_MODULE_6__["Tabs3Page"]]
    })], Tabs3PageModule);
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.page.scss":
  /*!***************************************!*\
    !*** ./src/app/tabs3/tabs3.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabs3Tabs3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMzL3RhYnMzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.page.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs3/tabs3.page.ts ***!
    \*************************************/

  /*! exports provided: Tabs3Page */

  /***/
  function srcAppTabs3Tabs3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3Page", function () {
      return Tabs3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tabs3Page = /*#__PURE__*/function () {
      function Tabs3Page() {
        _classCallCheck(this, Tabs3Page);
      }

      _createClass(Tabs3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tabs3Page;
    }();

    Tabs3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs3.page.scss */
      "./src/app/tabs3/tabs3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tabs3Page);
    /***/
  }
}]);
//# sourceMappingURL=tabs3-tabs3-module-es5.js.map