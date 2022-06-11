"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list_list_module_ts"],{

/***/ 5932:
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 4777);




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 2130:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 5932);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 4777);







let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 4777:
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page.html?ngResource */ 3403);
/* harmony import */ var _list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss?ngResource */ 2345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user-crud.service */ 5082);





let ListPage = class ListPage {
    constructor(userCrudService) {
        this.userCrudService = userCrudService;
        this.Users = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.userCrudService.getUsers().subscribe((response) => {
            this.Users = response;
        });
    }
    removeUser(user, i) {
        if (window.confirm('Are you sure')) {
            this.userCrudService.deleteUser(user._id)
                .subscribe(() => {
                this.Users.splice(i, 1);
                console.log('User deleted!');
            });
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__.UserCrudService }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-list',
        template: _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPage);



/***/ }),

/***/ 2345:
/*!************************************************!*\
  !*** ./src/app/list/list.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3403:
/*!************************************************!*\
  !*** ./src/app/list/list.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-title>Users List</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  <ion-list>\n  <ion-item *ngFor=\"let user of Users\">\n  <ion-label>\n  <h2>{{user.name}}</h2>\n  <h3>{{user.email}}</h3>\n  <h3>{{user.username}}</h3>\n  </ion-label>\n  <div class=\"item-note\" item-end>\n    <button ion-button clear [routerLink]=\"['/update/', user._id]\">\n    <ion-icon name=\"create\" style=\"zoom:1.5\"></ion-icon>\n    </button>\n    <button ion-button clear (click)=\"removeUser(user, i)\">\n    <ion-icon name=\"trash\" style=\"zoom:1.5\"></ion-icon>\n    </button>\n    </div>\n    </ion-item>\n    </ion-list>\n    </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_list_list_module_ts.js.map