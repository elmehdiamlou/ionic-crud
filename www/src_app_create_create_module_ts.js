"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create_create_module_ts"],{

/***/ 8407:
/*!*************************************************!*\
  !*** ./src/app/create/create-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageRoutingModule": () => (/* binding */ CreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page */ 7970);




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_0__.CreatePage
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ 5926:
/*!*****************************************!*\
  !*** ./src/app/create/create.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageModule": () => (/* binding */ CreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-routing.module */ 8407);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page */ 7970);







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePageRoutingModule
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_1__.CreatePage]
    })
], CreatePageModule);



/***/ }),

/***/ 7970:
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePage": () => (/* binding */ CreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page.html?ngResource */ 2932);
/* harmony import */ var _create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page.scss?ngResource */ 1164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user-crud.service */ 5082);







let CreatePage = class CreatePage {
    constructor(router, formBuilder, zone, userCrudService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.userCrudService = userCrudService;
        this.userForm = this.formBuilder.group({
            name: [''],
            email: [''],
            username: ['']
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (!this.userForm.valid) {
            return false;
        }
        else {
            this.userCrudService.createUser(this.userForm.value)
                .subscribe((response) => {
                this.zone.run(() => {
                    this.userForm.reset();
                    this.router.navigate(['/list']);
                });
            });
        }
    }
};
CreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__.UserCrudService }
];
CreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-create',
        template: _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatePage);



/***/ }),

/***/ 1164:
/*!****************************************************!*\
  !*** ./src/app/create/create.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2932:
/*!****************************************************!*\
  !*** ./src/app/create/create.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-title>Create User</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  <ion-list lines=\"full\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <ion-item>\n  <ion-label position=\"floating\">Name</ion-label>\n  <ion-input formControlName=\"name\" type=\"text\" required></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"floating\">Email</ion-label>\n  <ion-input formControlName=\"email\" type=\"text\" required>\n  </ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"floating\">User name</ion-label>\n  <ion-input formControlName=\"username\" type=\"text\" required>\n  </ion-input>\n  </ion-item>\n  <ion-row>\n  <ion-col>\n  <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Add</ion-button>\n  </ion-col>\n  </ion-row>\n  </form>\n  </ion-list>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_create_create_module_ts.js.map