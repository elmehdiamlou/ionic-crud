"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_update_update_module_ts"],{

/***/ 2205:
/*!*************************************************!*\
  !*** ./src/app/update/update-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePageRoutingModule": () => (/* binding */ UpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.page */ 183);




const routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePage
    }
];
let UpdatePageRoutingModule = class UpdatePageRoutingModule {
};
UpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdatePageRoutingModule);



/***/ }),

/***/ 8392:
/*!*****************************************!*\
  !*** ./src/app/update/update.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePageModule": () => (/* binding */ UpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-routing.module */ 2205);
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.page */ 183);







let UpdatePageModule = class UpdatePageModule {
};
UpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePageRoutingModule
        ],
        declarations: [_update_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePage]
    })
], UpdatePageModule);



/***/ }),

/***/ 183:
/*!***************************************!*\
  !*** ./src/app/update/update.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePage": () => (/* binding */ UpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.page.html?ngResource */ 3596);
/* harmony import */ var _update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.page.scss?ngResource */ 7965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user-crud.service */ 5082);







let UpdatePage = class UpdatePage {
    constructor(userCrudService, activatedRoute, formBuilder, router) {
        this.userCrudService = userCrudService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.fetchUser(this.id);
        this.updateUserFg = this.formBuilder.group({
            name: [''],
            email: [''],
            username: ['']
        });
    }
    fetchUser(id) {
        this.userCrudService.getUser(id).subscribe((data) => {
            this.updateUserFg.setValue({
                name: data['name'],
                email: data['email'],
                username: data['username']
            });
        });
    }
    onSubmit() {
        if (!this.updateUserFg.valid) {
            return false;
        }
        else {
            this.userCrudService.updateUser(this.id, this.updateUserFg.value)
                .subscribe(() => {
                this.updateUserFg.reset();
                this.router.navigate(['/list']);
            });
        }
    }
};
UpdatePage.ctorParameters = () => [
    { type: _services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__.UserCrudService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update',
        template: _update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdatePage);



/***/ }),

/***/ 7965:
/*!****************************************************!*\
  !*** ./src/app/update/update.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3596:
/*!****************************************************!*\
  !*** ./src/app/update/update.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-title>Update User</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  <ion-list lines=\"full\">\n  <form [formGroup]=\"updateUserFg\" (ngSubmit)=\"onSubmit()\">\n  <ion-item>\n  <ion-label position=\"floating\">Name</ion-label>\n  <ion-input formControlName=\"name\" type=\"text\" required></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"floating\">Email</ion-label>\n  <ion-input formControlName=\"email\" type=\"text\" required>\n  </ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"floating\">User name</ion-label>\n  <ion-input formControlName=\"username\" type=\"text\" required>\n  </ion-input>\n  </ion-item>\n  <ion-row>\n    <ion-col>\n    <ion-button type=\"submit\" color=\"success\" expand=\"block\">Update</ion-button>\n    </ion-col>\n    </ion-row>\n    </form>\n    </ion-list>\n    </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_update_update_module_ts.js.map