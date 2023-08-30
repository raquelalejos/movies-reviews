"use strict";
(self["webpackChunkmovies_reviews"] = self["webpackChunkmovies_reviews"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/homepage.component */ 6905);
/* harmony import */ var _movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-page/movie-page.component */ 6069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'movie/:id',
  component: _movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_1__.MoviePageComponent
}, {
  path: '**',
  component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'friendly-eats-quickstart';
    this.gotoRestaurantPage = () => {
      this.router.navigate(['/first-component']);
    };
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-card/movie-card.component */ 534);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/functions */ 2789);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/storage */ 980);
/* harmony import */ var _environments_environment_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment.default */ 5298);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ 6905);
/* harmony import */ var _movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-page/movie-page.component */ 6069);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-list/review-list.component */ 6081);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-dialog/filter-dialog.component */ 815);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _submit_review_modal_submit_review_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-review-modal/submit-review-modal.component */ 6230);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @firebase/firestore */ 3609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-in-modal/sign-in-modal.component */ 2391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);





































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__.MovieCardComponent, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_26__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_26__.initializeApp)(_environments_environment_default__WEBPACK_IMPORTED_MODULE_3__.projectConfig)), _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__.provideAuth)(() => {
    const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__.getAuth)();
    if (auth.app.options.projectId.indexOf('demo') === 0) (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__.connectAuthEmulator)(auth, 'http://127.0.0.1:9099');
    return auth;
  }), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__.provideFirestore)(() => {
    const firestore = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__.getFirestore)();
    if (firestore.app.options.projectId.indexOf('demo') === 0) (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.connectFirestoreEmulator)(firestore, '127.0.0.1', 8080);
    return firestore;
  }), (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_30__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_30__.getFunctions)()), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__.getStorage)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent, _movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_5__.MoviePageComponent, _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__.ReviewListComponent, _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_7__.FilterDialogComponent, _submit_review_modal_submit_review_modal_component__WEBPACK_IMPORTED_MODULE_8__.SubmitReviewModalComponent, _sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_10__.SignInModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__.MovieCardComponent, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_26__.FirebaseAppModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__.FirestoreModule, _angular_fire_functions__WEBPACK_IMPORTED_MODULE_30__.FunctionsModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__.StorageModule]
  });
})();

/***/ }),

/***/ 4443:
/*!*********************************************!*\
  !*** ./src/app/filter-dialog/dialogdata.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SORT_DATA: () => (/* binding */ DEFAULT_SORT_DATA),
/* harmony export */   filterAvgRatings: () => (/* binding */ filterAvgRatings),
/* harmony export */   filterCategories: () => (/* binding */ filterCategories),
/* harmony export */   filterYears: () => (/* binding */ filterYears)
/* harmony export */ });
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_SORT_DATA = {
  sortBy: 'Avg Rating',
  title: '',
  year: 'Any',
  avgRating: 'Any'
};
const filterYears = ['Any', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];
const filterAvgRatings = ['Any', '5', '4', '3', '2', '1', '0'];
const filterCategories = ['Any', 'Action', 'Science', 'Fiction', 'Horror', 'Comedy', 'Adventure', 'Fantasy', 'Crime', 'Thriller', 'Drama', 'History', 'Mystery', 'Family', 'Romance', 'Science Fiction'];

/***/ }),

/***/ 815:
/*!**********************************************************!*\
  !*** ./src/app/filter-dialog/filter-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterDialogComponent: () => (/* binding */ FilterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _dialogdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogdata */ 4443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);












function FilterDialogComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", year_r3, " ");
  }
}
function FilterDialogComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const avgRating_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", avgRating_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", avgRating_r4, " ");
  }
}
function FilterDialogComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", val_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", val_r5, " ");
  }
}
const _c0 = function () {
  return ["Avg Rating", "Title"];
};
class FilterDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.years = _dialogdata__WEBPACK_IMPORTED_MODULE_0__.filterYears;
    this.avgRatings = _dialogdata__WEBPACK_IMPORTED_MODULE_0__.filterAvgRatings;
    this.selectedSortOptions = structuredClone(this.data);
    this.dialogRef.backdropClick().subscribe(_ => dialogRef.close(this.data));
  }
  onApplyClick() {
    this.dialogRef.close(this.selectedSortOptions);
  }
  onCancelClick() {
    this.dialogRef.close(this.data);
  }
}
FilterDialogComponent.ɵfac = function FilterDialogComponent_Factory(t) {
  return new (t || FilterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
FilterDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FilterDialogComponent,
  selectors: [["app-filter-dialog"]],
  decls: 45,
  vars: 9,
  consts: [[1, "dialog-container"], ["id", "title-section", 1, "internal-padding"], ["id", "list-section"], [1, "form-field-with-icon"], [1, "template", "material-icons"], [1, "form-field"], ["matInput", "", "type", "text", "placeholder", "Title starting with", 3, "ngModel", "value", "ngModelChange"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "action-buttons"], [1, "btn", "btn-clear", "sign-in-button", 3, "click"], [1, "btn", "btn-dark", "sign-in-button", 3, "click"], [3, "value"]],
  template: function FilterDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "filter_list");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "movie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDialogComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.selectedSortOptions.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "calendar_month");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 5)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FilterDialogComponent_Template_mat_select_valueChange_21_listener($event) {
        return ctx.selectedSortOptions.year = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FilterDialogComponent_mat_option_22_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3)(24, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "star");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 5)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Avg Rating");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FilterDialogComponent_Template_mat_select_valueChange_29_listener($event) {
        return ctx.selectedSortOptions.avgRating = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FilterDialogComponent_mat_option_30_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3)(32, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 5)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sort By");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FilterDialogComponent_Template_mat_select_valueChange_37_listener($event) {
        return ctx.selectedSortOptions.sortBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FilterDialogComponent_mat_option_38_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-dialog-actions", 9)(41, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterDialogComponent_Template_button_click_41_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterDialogComponent_Template_button_click_43_listener() {
        return ctx.onApplyClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Apply");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedSortOptions.title)("value", ctx.selectedSortOptions.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedSortOptions.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedSortOptions.avgRating);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.avgRatings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedSortOptions.sortBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
  styles: ["/**\n * Copyright 2023 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n*/\n\ni {\n  transform: scale(1.2);\n}\n\n.dialog-container {\n  position: relative;\n  min-width: 350px;\n  width: \"calc(100% - 30px)\";\n  margin: 0 auto;\n}\n\n#title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  text-align:center;\n  gap: 20px;\n  padding: 20px 20px 0px;\n}\n\n#list-section {\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n}\n\n#action-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 25px;\n}\n\n.form-field-with-icon {\n  display: flex;\n  align-items: baseline;\n  gap: 15px;\n  width: 100%;\n  color: #727272;\n}\n\n.form-field {\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlsdGVyLWRpYWxvZy9maWx0ZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0NBY0M7O0FBRUQ7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICB3aWR0aDogXCJjYWxjKDEwMCUgLSAzMHB4KVwiO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI3RpdGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XG59XG5cbiNsaXN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4jYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uZm9ybS1maWVsZC13aXRoLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuXG4uZm9ybS1maWVsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 6905:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-dialog/filter-dialog.component */ 815);
/* harmony import */ var _filter_dialog_dialogdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-dialog/dialogdata */ 4443);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-in-modal/sign-in-modal.component */ 2391);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-card/movie-card.component */ 534);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */













function HomepageComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomepageComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.openSignInDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomepageComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.openCreateAccountDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomepageComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.signOutWithFirebase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_23_b_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Movies To Display!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_23_b_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sign in to see movies!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomepageComponent_div_23_b_2_Template, 2, 0, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomepageComponent_div_23_b_3_Template, 2, 0, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.auth);
  }
}
function HomepageComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-movie-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movie_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("movie", movie_r14);
  }
}
function HomepageComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomepageComponent_div_25_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r4.movies));
  }
}
class HomepageComponent {
  openFilterDialog() {
    const dialogRef = this.dialog.open(_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FilterDialogComponent, {
      data: this.sortingData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.sortingData = result;
      this.fetchWithUpdatedFilters();
      console.log("this.auth: ", this.auth);
    });
  }
  openSignInDialog() {
    this.dialog.open(_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_2__.SignInModalComponent, {
      data: {
        isCreatingAccount: false
      }
    });
  }
  openCreateAccountDialog() {
    this.dialog.open(_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_2__.SignInModalComponent, {
      data: {
        isCreatingAccount: true
      }
    });
  }
  signOutWithFirebase() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(this.auth);
  }
  constructor(dialog, router) {
    this.dialog = dialog;
    this.router = router;
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.Firestore);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth);
    this.moviesCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(this.store, 'movies');
    this.sortingData = _filter_dialog_dialogdata__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SORT_DATA;
    this.movies = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collectionData)(this.moviesCollectionRef, {
      idField: 'id'
    });
    this.fetchWithUpdatedFilters = () => {
      const constraints = [];
      if (this.sortingData.title !== '') {
        constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('title', '>=', this.sortingData.title));
      }
      if (this.sortingData.year !== 'Any') {
        constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('year', '==', this.sortingData.year));
      }
      if (this.sortingData.avgRating !== 'Any') {
        constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('avgRating', '==', parseInt(this.sortingData.avgRating)));
      }
      if (this.sortingData.sortBy === 'Avg Rating') {
        constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)('avgRating', 'desc'));
      } else {
        constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)('title', 'asc'));
      }
      this.movies = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(this.moviesCollectionRef, ...constraints), {
        idField: 'id'
      });
    };
  }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
  return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
HomepageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomepageComponent,
  selectors: [["app-homepage"]],
  decls: 30,
  vars: 10,
  consts: [["id", "toolbar"], ["id", "title-row", 1, "contained", "center-self"], ["id", "toolbar-left"], ["id", "logo-image", "src", "assets/movie-drink-pop-corn.png"], [1, "homepage-title"], ["id", "toolbar-right"], [1, "header-buttons-wrapper"], [1, "header-buttons"], ["class", "btn btn-dark sign-in-button", 3, "click", 4, "ngIf"], ["id", "filter-bar", 1, "hover-change", "contained", "center-self", 3, "click"], ["id", "filter-items"], [1, "filter-list"], [1, "homepage"], ["id", "empty-movies-container", 4, "ngIf"], ["id", "grid-parent", 4, "ngIf"], [1, "footer"], [1, "btn", "btn-dark", "sign-in-button", 3, "click"], ["id", "empty-movies-container"], ["src", "assets/guy_fireats.png", "width", "300", "height", "300"], [4, "ngIf"], ["id", "grid-parent"], ["id", "inner-grid", 1, "contained"], ["class", "grid-cell", 4, "ngFor", "ngForOf"], [1, "grid-cell"], [3, "movie"]],
  template: function HomepageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "mat-toolbar", 0)(2, "mat-toolbar-row", 1)(3, "div", 2)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Movies' Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HomepageComponent_button_13_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HomepageComponent_button_14_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HomepageComponent_button_15_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomepageComponent_Template_div_click_16_listener() {
        return ctx.openFilterDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "filter_list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Filter movies by Title, Year, and Avg Rating ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, HomepageComponent_div_23_Template, 4, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, HomepageComponent_div_25_Template, 4, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "footer")(28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Movies' Reviews \u00A9 2023 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.auth.currentUser && ctx.auth.currentUser.displayName ? "Hi " + ctx.auth.currentUser.displayName : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 6, ctx.movies)) == null ? null : tmp_4_0.length) === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 8, ctx.movies)) == null ? null : tmp_5_0.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__.MovieCardComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.homepage[_ngcontent-%COMP%]   #empty-movies-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.homepage[_ngcontent-%COMP%]   #grid-parent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.homepage[_ngcontent-%COMP%]   #inner-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 20px;\n  margin: 25px;\n}\n\n@media(max-width: 1024px){\n  .homepage[_ngcontent-%COMP%]   #inner-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    gap: 20px;\n  }\n}\n\n@media(max-width: 600px){\n  .homepage[_ngcontent-%COMP%]   #inner-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 20px;\n  }\n}\n\n.homepage[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLmhvbWVwYWdlICNlbXB0eS1tb3ZpZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvbWVwYWdlICNncmlkLXBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uaG9tZXBhZ2UgI2lubmVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW46IDI1cHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCl7XG4gIC5ob21lcGFnZSAjaW5uZXItZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5ob21lcGFnZSAjaW5uZXItZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG4uaG9tZXBhZ2UgLmdyaWQtY2VsbCB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 534:
/*!****************************************************!*\
  !*** ./src/app/movie-card/movie-card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieCardComponent: () => (/* binding */ MovieCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);








function MovieCardComponent_div_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function MovieCardComponent_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return [];
};
function MovieCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onCardClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 4)(4, "div", 5)(5, "mat-card-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Movie Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovieCardComponent_div_0_ng_container_10_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieCardComponent_div_0_ng_container_11_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.movie.poster_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.movie.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0).constructor(ctx_r0.movie.avgRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0).constructor(5 - ctx_r0.movie.avgRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.movie.category_genre, " ");
  }
}
class MovieCardComponent {
  constructor(router) {
    this.router = router;
    this.onCardClicked = () => {
      if (this.movie) {
        this.router.navigate(['/movie', this.movie.id]);
      }
    };
    this.movie = null;
  }
}
MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) {
  return new (t || MovieCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
MovieCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MovieCardComponent,
  selectors: [["app-movie-card"]],
  inputs: {
    movie: "movie"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "movie-card-container", 3, "click", 4, "ngIf"], [1, "movie-card-container", 3, "click"], [1, "movie-card"], ["mat-card-image", "", "alt", "Movie's poster", "id", "mat-card-image", 3, "src"], [1, "card-info"], [1, "info-header"], [3, "innerHTML"], [1, "year"], [1, "star-icon-row"], [4, "ngFor", "ngForOf"], [1, "template", "material-icons", "rating-star"]],
  template: function MovieCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieCardComponent_div_0_Template, 14, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.year[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  font-family: 'Lora', serif;\n  \n\n  color: #ce8460;\n  font-size: 17px;\n  align-self: baseline;\n  padding-top: 5px;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  padding-block: 20px;\n}\n\n.movie-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.rating-star[_ngcontent-%COMP%] {\n  color: #ce8460;\n}\n\n#mat-card-image[_ngcontent-%COMP%] {\n  \n\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  height: 137px;\n}\n\n@media(max-width: 830px){\n  mat-card-content[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n\n.mat-mdc-card-title[_ngcontent-%COMP%] {\n  font-family: 'Unna', serif;\n  font-size: 22px;\n  color: black;\n}\n\n.mat-mdc-card-subtitle[_ngcontent-%COMP%] {\n  color: #575769;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi5pbmZvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gIC8qIGNvbG9yOiAjZmViMjJjICovXG4gIGNvbG9yOiAjY2U4NDYwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uY2FyZC1pbmZvIHtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbn1cblxuLm1vdmllLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYXRpbmctc3RhciB7XG4gIGNvbG9yOiAjY2U4NDYwO1xufVxuXG4jbWF0LWNhcmQtaW1hZ2Uge1xuICAvKiBoZWlnaHQ6IDI1MHB4OyAqL1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMzdweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogODMwcHgpe1xuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59XG5cbi5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1VubmEnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtbWRjLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzU3NTc2OTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6069:
/*!****************************************************!*\
  !*** ./src/app/movie-page/movie-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoviePageComponent: () => (/* binding */ MoviePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _submit_review_modal_submit_review_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../submit-review-modal/submit-review-modal.component */ 6230);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sign-in-modal/sign-in-modal.component */ 2391);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../review-list/review-list.component */ 6081);
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
















function MoviePageComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviePageComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openSignInDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MoviePageComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviePageComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.openCreateAccountDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MoviePageComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviePageComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.signOutWithFirebase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MoviePageComponent_div_16_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MoviePageComponent_div_16_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return {
    "background-color": "unset",
    "background-size": "cover",
    "display": "inline-block",
    "box-shadow": "rgba(0, 0, 0, .2) 0px 2px 2px"
  };
};
const _c1 = function () {
  return ["/"];
};
const _c2 = function () {
  return [];
};
function MoviePageComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "mat-toolbar", 13)(2, "mat-toolbar-row", 14)(3, "div", 15)(4, "a", 16)(5, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 21)(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 18)(14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MoviePageComponent_div_16_ng_container_17_Template, 3, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, MoviePageComponent_div_16_ng_container_18_Template, 3, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 18)(20, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Category/Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18)(24, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Main Actors");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18)(29, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "IMDB Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 29)(34, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Director/Creator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 30)(39, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Synopsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviePageComponent_div_16_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "app-review-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", data_r10.poster_image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", data_r10.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r10.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c2).constructor(data_r10.avgRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c2).constructor(5 - data_r10.avgRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", data_r10.category_genre, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r10.main_actors, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", data_r10.imdb_link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r10.imdb_link, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r10.director_creator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", data_r10.synopsis, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("movieID", data_r10.id);
  }
}
class MoviePageComponent {
  constructor(route, dialog) {
    this.route = route;
    this.dialog = dialog;
    this.movieData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.Auth);
    this.movieId = "";
  }
  openDialog() {
    this.dialog.open(_submit_review_modal_submit_review_modal_component__WEBPACK_IMPORTED_MODULE_0__.SubmitReviewModalComponent, {
      data: this.movieId
    });
  }
  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this.firestore, `movies/${this.movieId}`);
    this.movieData = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.docData)(docRef, {
      idField: 'id'
    });
  }
  openSignInDialog() {
    this.dialog.open(_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_1__.SignInModalComponent, {
      data: {
        isCreatingAccount: false
      }
    });
  }
  openCreateAccountDialog() {
    this.dialog.open(_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_1__.SignInModalComponent, {
      data: {
        isCreatingAccount: true
      }
    });
  }
  signOutWithFirebase() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(this.auth);
  }
}
MoviePageComponent.ɵfac = function MoviePageComponent_Factory(t) {
  return new (t || MoviePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
};
MoviePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MoviePageComponent,
  selectors: [["app-movie-page"]],
  decls: 21,
  vars: 7,
  consts: [["id", "toolbar"], ["id", "title-row", 1, "contained", "center-self"], ["id", "toolbar-left"], ["id", "logo-image", "src", "assets/movie-drink-pop-corn.png"], [1, "homepage-title"], ["id", "toolbar-right"], [1, "header-buttons-wrapper"], [1, "header-buttons"], ["class", "btn btn-dark sign-in-button", 3, "click", 4, "ngIf"], ["class", "movie-page", 4, "ngIf"], [1, "footer"], [1, "btn", "btn-dark", "sign-in-button", 3, "click"], [1, "movie-page"], [3, "ngStyle"], [1, "info-container"], [1, "max-width-1024"], [1, "close-page", 3, "routerLink"], ["id", "close-icon"], [1, "inline-block", "full-width"], [1, "inline-block", "short-side", "centered"], ["mat-card-image", "", "alt", "Movie's poster", "id", "mat-card-image", 3, "src"], [1, "inline-block", "large-side", "padding-left", "padding-top-mobile"], [1, "header-title", 3, "innerHTML"], [1, "movie-year"], [1, "star-icon-row", "inline-block", "full-width"], [4, "ngFor", "ngForOf"], [1, "full-width"], [1, "header-title"], ["target", "_blank", 1, "imdb-link", "header-title", 3, "href"], [1, "inline-block", "full-width", "padding-top"], [1, "inline-block", "full-width", "padding-top", "padding-bottom"], ["mat-fab", "", "color", "accent", 3, "click"], [3, "movieID"], ["hidden", "", "id", "star-border-icon", 1, "template", "material-icons"]],
  template: function MoviePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "mat-toolbar", 0)(2, "mat-toolbar-row", 1)(3, "div", 2)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Movies' Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MoviePageComponent_button_13_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, MoviePageComponent_button_14_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MoviePageComponent_button_15_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MoviePageComponent_div_16_Template, 46, 18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "footer")(19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Movies' Reviews \u00A9 2023 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.auth.currentUser && ctx.auth.currentUser.displayName ? "Hi " + ctx.auth.currentUser.displayName : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 5, ctx.movieData));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultStyleDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatFabButton, _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_2__.ReviewListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.star-icon-row[_ngcontent-%COMP%] {\n  color: #ce8460;\n}\n\n.movie-year[_ngcontent-%COMP%] {\n  font-family: 'Lora', serif;\n  color: #ce8460;\n}\n\n.movie-page[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n\n.movie-page[_ngcontent-%COMP%]   .imdb-link[_ngcontent-%COMP%] {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  color: #ce8460;\n}\n\n.movie-page[_ngcontent-%COMP%]   h2.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  color: grey;\n  margin-bottom: 10px;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.padding-top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.short-side[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.short-side.padding-left[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.large-side[_ngcontent-%COMP%] {\n  width: 56%;\n  vertical-align: top;\n}\n\n.movie-page[_ngcontent-%COMP%]   div.inline-block.large-side.padding-left[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n@media(max-width: 546px){\n  .movie-page[_ngcontent-%COMP%]   div.inline-block.large-side.padding-left[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  .movie-page[_ngcontent-%COMP%]   div.inline-block.short-side[_ngcontent-%COMP%], div.inline-block.large-side[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .movie-page[_ngcontent-%COMP%]   div.inline-block.centered[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .movie-page[_ngcontent-%COMP%]   div.inline-block.padding-left.short-side[_ngcontent-%COMP%], div.inline-block.padding-left.large-side[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  .movie-page[_ngcontent-%COMP%]   div.inline-block.padding-top-mobile.short-side[_ngcontent-%COMP%], div.inline-block.padding-top-mobile.large-side[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n\n.movie-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: inline;\n}\n\n.movie-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -25px;\n  width: 50px;\n  height: 50px;\n  color: white;\n  background-color:#ce8460;\n}\n\n.movie-page[_ngcontent-%COMP%]   .max-width-1024[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1024px;\n  margin: 0 auto;\n  text-align: left;\n  padding-top: 40px;\n}\n\n.movie-page[_ngcontent-%COMP%]   .max-width-800[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.movie-page[_ngcontent-%COMP%]   .max-width-600[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.movie-page[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: normal;\n}\n\n.movie-page[_ngcontent-%COMP%]   #mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media(max-width: 546px){\n\n  .movie-page[_ngcontent-%COMP%]   #mat-card-image[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.movie-page[_ngcontent-%COMP%]   #rating[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.movie-page[_ngcontent-%COMP%]   mat-toolbar-row.info-container[_ngcontent-%COMP%] {\n  height: unset;\n  display: inline-block;\n  white-space: unset;\n}\n\n.movie-page[_ngcontent-%COMP%]   .close-page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  right: 0;\n}\n\n.movie-page[_ngcontent-%COMP%]   #close-icon[_ngcontent-%COMP%] {\n  color: #ce8460;\n  text-shadow: #111 1px 1px 2px;\n  transform: scale(1.5);\n}\n\napp-review-list[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #f5f5f5;\n  padding-bottom: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWUtcGFnZS9tb3ZpZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4uc3Rhci1pY29uLXJvdyB7XG4gIGNvbG9yOiAjY2U4NDYwO1xufVxuXG4ubW92aWUteWVhciB7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICBjb2xvcjogI2NlODQ2MDtcbn1cblxuLm1vdmllLXBhZ2UgLmhlYWRlci10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5tb3ZpZS1wYWdlIC5pbWRiLWxpbmsge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNjZTg0NjA7XG59XG5cbi5tb3ZpZS1wYWdlIGgyLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb3ZpZS1wYWdlIGRpdi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tb3ZpZS1wYWdlIGRpdi5pbmxpbmUtYmxvY2suZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLnBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5tb3ZpZS1wYWdlIGRpdi5pbmxpbmUtYmxvY2sucGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLm1vdmllLXBhZ2UgZGl2LmlubGluZS1ibG9jay5zaG9ydC1zaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLm1vdmllLXBhZ2UgZGl2LmlubGluZS1ibG9jay5zaG9ydC1zaWRlLnBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLm1vdmllLXBhZ2UgZGl2LmlubGluZS1ibG9jay5sYXJnZS1zaWRlIHtcbiAgd2lkdGg6IDU2JTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1vdmllLXBhZ2UgZGl2LmlubGluZS1ibG9jay5sYXJnZS1zaWRlLnBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNTQ2cHgpe1xuICAubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLmxhcmdlLXNpZGUucGFkZGluZy1sZWZ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLnNob3J0LXNpZGUsIGRpdi5pbmxpbmUtYmxvY2subGFyZ2Utc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLmNlbnRlcmVkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLnBhZGRpbmctbGVmdC5zaG9ydC1zaWRlLCBkaXYuaW5saW5lLWJsb2NrLnBhZGRpbmctbGVmdC5sYXJnZS1zaWRlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAubW92aWUtcGFnZSBkaXYuaW5saW5lLWJsb2NrLnBhZGRpbmctdG9wLW1vYmlsZS5zaG9ydC1zaWRlLCBkaXYuaW5saW5lLWJsb2NrLnBhZGRpbmctdG9wLW1vYmlsZS5sYXJnZS1zaWRlIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuXG4ubW92aWUtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubW92aWUtcGFnZSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0yNXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6I2NlODQ2MDtcbn1cblxuLm1vdmllLXBhZ2UgLm1heC13aWR0aC0xMDI0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ubW92aWUtcGFnZSAubWF4LXdpZHRoLTgwMCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW92aWUtcGFnZSAubWF4LXdpZHRoLTYwMCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW92aWUtcGFnZSAucHJpY2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1vdmllLXBhZ2UgI21hdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDU0NnB4KXtcblxuICAubW92aWUtcGFnZSAjbWF0LWNhcmQtaW1hZ2Uge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cblxuLm1vdmllLXBhZ2UgI3JhdGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1vdmllLXBhZ2UgbWF0LXRvb2xiYXItcm93LmluZm8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiB1bnNldDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG59XG5cbi5tb3ZpZS1wYWdlIC5jbG9zZS1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2cHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubW92aWUtcGFnZSAjY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiAjY2U4NDYwO1xuICB0ZXh0LXNoYWRvdzogIzExMSAxcHggMXB4IDJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG5hcHAtcmV2aWV3LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6081:
/*!******************************************************!*\
  !*** ./src/app/review-list/review-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewListComponent: () => (/* binding */ ReviewListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function ReviewListComponent_div_0_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function ReviewListComponent_div_0_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return [];
};
function ReviewListComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReviewListComponent_div_0_div_1_ng_container_4_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewListComponent_div_0_div_1_ng_container_5_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", review_r3.username, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0).constructor(review_r3.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0).constructor(5 - review_r3.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", review_r3.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, review_r3.timestamp.toDate(), "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", review_r3.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ReviewListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewListComponent_div_0_div_1_Template, 13, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.reviews));
  }
}
class ReviewListComponent {
  constructor() {
    this.movieID = null;
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore);
    this.reviews = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    const ratingsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, `/movies/${this.movieID}/ratings`);
    this.reviews = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(ratingsRef, {
      idField: 'id'
    });
  }
}
ReviewListComponent.ɵfac = function ReviewListComponent_Factory(t) {
  return new (t || ReviewListComponent)();
};
ReviewListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ReviewListComponent,
  selectors: [["app-review-list"]],
  inputs: {
    movieID: "movieID"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "review-list-container", 4, "ngIf"], [1, "review-list-container"], ["class", "review-container", 4, "ngFor", "ngForOf"], [1, "review-container"], [1, "row-1"], [1, "reviewer-name", 3, "innerHTML"], [1, "star-container"], [4, "ngFor", "ngForOf"], [1, "row-2"], [1, "header-title", 3, "innerHTML"], [1, "review-date"], [1, "row-3"], ["id", "review-text", 3, "innerHTML"], ["hidden", "", "id", "star-border-icon", 1, "template", "material-icons"]],
  template: function ReviewListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewListComponent_div_0_Template, 3, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.reviews));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.review-list-container[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: 0 auto;\n  text-align: left;\n  padding: 50px 20px 0;\n}\n\n.review-container[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, .12);\n}\n\n.review-container[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.row-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.star-container[_ngcontent-%COMP%] {\n  color: #ce8460;\n}\n\n.review-date[_ngcontent-%COMP%] {\n  float: right;\n  color: grey;\n  padding-top: 8px;\n}\n\n#review-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n.reviewer-name[_ngcontent-%COMP%] {\n  font-family: 'Lora', serif;\n  color: #ce8460;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi5yZXZpZXctbGlzdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDUwcHggMjBweCAwO1xufVxuXG4ucmV2aWV3LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4ucmV2aWV3LWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnJvdy0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3Rhci1jb250YWluZXIge1xuICBjb2xvcjogI2NlODQ2MDtcbn1cblxuLnJldmlldy1kYXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogZ3JleTtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuI3Jldmlldy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4ucmV2aWV3ZXItbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICBjb2xvcjogI2NlODQ2MDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2391:
/*!**********************************************************!*\
  !*** ./src/app/sign-in-modal/sign-in-modal.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInModalComponent: () => (/* binding */ SignInModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_waltera_Documents_workspace_movies_reviews_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */












function SignInModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function SignInModalComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInModalComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.username = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.username)("value", ctx_r1.username);
  }
}
/**
 * A popup window that appears when the user selects the "Sign In" or
 * "Create Account" buttons on the homepage. Uses the boolean passed in
 * `data` to decide whether to render the "Sign In" modal (whose button
 * launches the `signInWithUserInfo` function) or the "Create Account"
 * modal (whose button launches the `createNewUserAccount` function).
 */
class SignInModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth);
    this.usersCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.store, 'users');
    this.username = "";
    this.userEmail = "";
    this.userPassword = "";
    this.errorMessage = "";
    // usernameRegExp: RegExp = /^(?=.*^[a-zA-Z0-9])[a-zA-Z0-9_\.]{4,20}$/;
    this.usernameRegExp = /^[a-zA-Z0-9_\.]{5,}$/;
    this.emailRegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;
    // passwordRegExp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,15}$/;
    this.passwordRegExp = /^(?=.*[^0-9]).{9,}$/;
    this.dialogRef.backdropClick().subscribe(_ => dialogRef.close());
  }
  closeDialog() {
    this.dialogRef.close();
  }
  launchAuthAction() {
    if (this.data.isCreatingAccount && !this.username) {
      this.errorMessage = '* Please enter your username';
      return;
    }
    if (!this.userEmail) {
      this.errorMessage = '* Please enter your email';
      return;
    }
    if (!this.userPassword) {
      this.errorMessage = '* Please enter your password';
      return;
    }
    if (this.data.isCreatingAccount && !this.usernameRegExp.test(this.username)) {
      this.errorMessage = '* Username should have letters, numbers, underscores or periods only; and have more than 4 characters';
      return;
    }
    if (!this.emailRegExp.test(this.userEmail)) {
      this.errorMessage = '* Invalid email';
      return;
    }
    if (!this.passwordRegExp.test(this.userPassword)) {
      this.errorMessage = '* Password should not be entirely made up of numbers; and have more than 8 characters';
      return;
    }
    if (this.data.isCreatingAccount) {
      this.createNewUserAccount();
    } else {
      this.signInWithUserInfo();
    }
  }
  createNewUserAccount() {
    var _this = this;
    return (0,_Users_waltera_Documents_workspace_movies_reviews_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_this.auth, _this.userEmail, _this.userPassword);
        if (_this.auth && _this.auth.currentUser) {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(_this.auth.currentUser, {
            displayName: _this.username
          });
        }
        const user = {
          email: _this.userEmail,
          username: _this.username
        };
        const userRef = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this.store, 'users'), user);
        _this.dialogRef.close();
      } catch (err) {
        const error = err;
        if (error && error.code == 'auth/email-already-in-use') {
          _this.errorMessage = '* Email already registered. Please sign in!';
        } else {
          _this.errorMessage = '* Account creation failed. Please try again!';
        }
      }
    })();
  }
  signInWithUserInfo() {
    var _this2 = this;
    return (0,_Users_waltera_Documents_workspace_movies_reviews_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_this2.auth, _this2.userEmail, _this2.userPassword);
        _this2.dialogRef.close();
      } catch (err) {
        const error = err;
        _this2.errorMessage = '* User sign in failed. Please try again!';
      }
    })();
  }
}
SignInModalComponent.ɵfac = function SignInModalComponent_Factory(t) {
  return new (t || SignInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
SignInModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignInModalComponent,
  selectors: [["app-sign-in-modal"]],
  decls: 21,
  vars: 8,
  consts: [["id", "modal-container"], ["id", "title-section"], [3, "innerHTML"], ["id", "failed-sign-in", 4, "ngIf"], [1, "form-container"], ["class", "form-field", 4, "ngIf"], [1, "form-field"], ["matInput", "", "type", "email", "placeholder", "Email", "required", "", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", "required", "", 3, "ngModel", "value", "ngModelChange"], ["id", "button-row"], [1, "btn", "btn-clear", "sign-in-button", 3, "click"], [1, "btn", "btn-dark", "sign-in-button", 3, "innerHTML", "click"], ["id", "failed-sign-in"], ["matInput", "", "type", "text", "placeholder", "Username", "required", "", 3, "ngModel", "value", "ngModelChange"]],
  template: function SignInModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "h1", 2)(5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignInModalComponent_div_6_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignInModalComponent_mat_form_field_8_Template, 4, 2, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 6)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInModalComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.userEmail = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 6)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInModalComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.userPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInModalComponent_Template_button_click_18_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInModalComponent_Template_button_click_20_listener() {
        return ctx.launchAuthAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.data.isCreatingAccount ? "Create Account" : "Sign In", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isCreatingAccount);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userEmail)("value", ctx.userEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userPassword)("value", ctx.userPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.data.isCreatingAccount ? "Create Account" : "Sign In", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
  styles: ["/**\n * Copyright 2023 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n#modal-container {\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  min-width: 250px;\n}\n\n#title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: baseline;\n  gap: 5px;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/*\n.action-button {\n  float: right;\n}\n*/\n\n.gray {\n  color: gray;\n}\n\n#failed-sign-in {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbi1pbi1tb2RhbC9zaWduLWluLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuI3RpdGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiovXG5cbi5ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbiNmYWlsZWQtc2lnbi1pbiB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 6230:
/*!**********************************************************************!*\
  !*** ./src/app/submit-review-modal/submit-review-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmitReviewModalComponent: () => (/* binding */ SubmitReviewModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_waltera_Documents_workspace_movies_reviews_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ 5557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */












function SubmitReviewModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add a review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SubmitReviewModalComponent_div_0_Template_i_mouseenter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.review.rating = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SubmitReviewModalComponent_div_0_Template_i_mouseenter_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.review.rating = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SubmitReviewModalComponent_div_0_Template_i_mouseenter_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.review.rating = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SubmitReviewModalComponent_div_0_Template_i_mouseenter_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.review.rating = 4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SubmitReviewModalComponent_div_0_Template_i_mouseenter_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.review.rating = 5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 5)(15, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SubmitReviewModalComponent_div_0_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.review.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SubmitReviewModalComponent_div_0_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.review.body = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-dialog-actions", 10)(24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubmitReviewModalComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onCancelClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubmitReviewModalComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onSubmitClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.determineStarColor(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.determineStarColor(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.determineStarColor(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.determineStarColor(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.determineStarColor(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.review.title)("value", ctx_r0.review.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.review.body);
  }
}
function SubmitReviewModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Must be signed in to submit a review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SubmitReviewModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You have already submitted a review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class SubmitReviewModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.Firestore);
    this.movieId = this.data;
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth);
    this.review = {
      rating: 5,
      title: "",
      body: "",
      email: "",
      username: "",
      timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date())
    };
    this.ownReviews = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable();
    this.addingReview = false;
  }
  ngOnInit() {
    const ratingsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, `movies/${this.movieId}/ratings`);
    if (this.auth && this.auth.currentUser && this.auth.currentUser.email) {
      const constraints = [];
      constraints.push((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('email', '==', this.auth.currentUser.email));
      this.ownReviews = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(ratingsRef, ...constraints), {
        idField: 'id'
      });
    }
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onSubmitClick() {
    var _this = this;
    return (0,_Users_waltera_Documents_workspace_movies_reviews_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.addingReview = true;
      const ratingsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_this.firestore, `movies/${_this.movieId}/ratings`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(ratingsRef, {
        ..._this.review,
        username: _this.auth.currentUser ? _this.auth.currentUser.displayName : 'Anonymous',
        email: _this.auth.currentUser ? _this.auth.currentUser.email : 'Anonymous'
      });
      let numRatings = 0;
      let avgRating = 0;
      let sumRating = 0;
      const allReviews = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(ratingsRef);
      allReviews.forEach(review => {
        const data = review.data();
        numRatings++;
        sumRating = sumRating + data['rating'];
        // console.log(review.id, " => ", data);
      });

      if (numRatings > 0) {
        avgRating = Math.round(sumRating / numRatings);
      }
      // console.log("numRatings: ", numRatings);
      // console.log("avgRating: ", avgRating);
      const movieRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this.firestore, `movies/${_this.movieId}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(movieRef, {
        avgRating: avgRating,
        numRatings: numRatings
      });
      _this.dialogRef.close();
    })();
  }
  determineStarColor(starIndex) {
    return starIndex <= this.review.rating ? "#ce8460" : "gray";
  }
}
SubmitReviewModalComponent.ɵfac = function SubmitReviewModalComponent_Factory(t) {
  return new (t || SubmitReviewModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};
SubmitReviewModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SubmitReviewModalComponent,
  selectors: [["app-submit-review-modal"]],
  decls: 5,
  vars: 7,
  consts: [["class", "add-dialog-container", 4, "ngIf"], ["id", "no-user-container", 4, "ngIf"], [1, "add-dialog-container"], ["id", "star-rating-container"], ["hidden", "", "id", "star-border-icon", 1, "template", "material-icons", "star-rating", 3, "mouseenter"], ["id", "title-input-field"], [1, "review-label"], ["matInput", "", "type", "text", "placeholder", "Title", 3, "ngModel", "value", "ngModelChange"], ["id", "review-input-field"], ["matInput", "", "placeholder", "Review", 3, "ngModel", "ngModelChange"], ["id", "action-buttons"], [1, "btn", "btn-clear", "sign-in-button", 3, "click"], [1, "btn", "btn-dark", "sign-in-button", 3, "click"], ["id", "no-user-container"], ["id", "no-user-text"]],
  template: function SubmitReviewModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubmitReviewModalComponent_div_0_Template, 28, 13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SubmitReviewModalComponent_div_2_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SubmitReviewModalComponent_div_3_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.auth.currentUser && (ctx.addingReview || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.ownReviews)) == null ? null : tmp_0_0.length) === 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.auth.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.auth.currentUser && !ctx.addingReview && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx.ownReviews)) == null ? null : tmp_2_0.length));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["/**\n * Copyright 2023 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n.review-label {\n  font-family: 'Unna', serif;\n  font-size: 20px;\n}\n\n.add-dialog-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin: 0 auto;\n  padding: 25px;\n  gap: 20px;\n}\n\n.star-rating {\n  transform: scale(1.4);\n}\n\n#star-rating-container {\n  align-self: center;\n  display: flex;\n  gap: 20px;\n  cursor: pointer;\n}\n\n#review-input-field {\n  width: 60vw;\n}\n\n#action-buttons {\n  align-self: flex-end;\n}\n\n#no-rating-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#no-user-text {\n  padding: 100px;\n}\n\ntextarea {\n  min-height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWl0LXJldmlldy1tb2RhbC9zdWJtaXQtcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUY7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLnJldmlldy1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnVW5uYScsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hZGQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGdhcDogMjBweDtcbn1cblxuLnN0YXItcmF0aW5nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xufVxuXG4jc3Rhci1yYXRpbmctY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Jldmlldy1pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiA2MHZ3O1xufVxuXG4jYWN0aW9uLWJ1dHRvbnMge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuI25vLXJhdGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25vLXVzZXItdGV4dCB7XG4gIHBhZGRpbmc6IDEwMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 5298:
/*!*************************************************!*\
  !*** ./src/environments/environment.default.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectConfig: () => (/* binding */ projectConfig)
/* harmony export */ });
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
/**  If connecting to a live Firebase project (one that you set up in the
 * Firebase console) put your config vars into the the object in this file.
 * Otherwise, leave untouched to enable connection to demo project and emulators.
 * For more information about generating, finding, or using project config
 * objects, visit https://support.google.com/firebase/answer/7015592.
*/
const projectConfig = {
  apiKey: "AIzaSyDkqfK5lF6nPfRLfsAKsES3nfzoZ86Id-E",
  authDomain: "web-app-40c63.firebaseapp.com",
  projectId: "web-app-40c63",
  storageBucket: "web-app-40c63.appspot.com",
  messagingSenderId: "657273596366",
  appId: "1:657273596366:web:6804c6003e65be258a239f",
  measurementId: "G-ZFS123PM5B"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map