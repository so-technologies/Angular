webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to Searcher!\r\n  </h1>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_searcher_searcher_component__ = __webpack_require__("../../../../../src/app/components/searcher/searcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_searcher_gif_searcher_gif_info_popup_gif_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_searcher_gif_searcher_gif_searcher_component__ = __webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_searcher_video_searcher_video_info_popup_video_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_searcher_video_searcher_video_searcher_component__ = __webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-searcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_youtube_safe_url_pipe__ = __webpack_require__("../../../../../src/app/pipes/youtube-safe-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_searcher_image_searcher_image_info_popup_image_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_searcher_image_searcher_image_searcher_component__ = __webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-searcher.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_searcher_searcher_component__["a" /* SearcherComponent */] },
    { path: 'gifs', component: __WEBPACK_IMPORTED_MODULE_12__components_searcher_gif_searcher_gif_searcher_component__["a" /* GifSearcherComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_14__components_searcher_video_searcher_video_searcher_component__["a" /* VideoSearcherComponent */] },
    { path: 'images', component: __WEBPACK_IMPORTED_MODULE_17__components_searcher_image_searcher_image_searcher_component__["a" /* ImageSearcherComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_searcher_searcher_component__["a" /* SearcherComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_searcher_gif_searcher_gif_info_popup_gif_info_popup_component__["a" /* GifInfoPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_searcher_video_searcher_video_info_popup_video_info_popup_component__["a" /* VideoInfoPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_searcher_image_searcher_image_info_popup_image_info_popup_component__["a" /* ImageInfoPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_searcher_gif_searcher_gif_searcher_component__["a" /* GifSearcherComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_searcher_video_searcher_video_searcher_component__["a" /* VideoSearcherComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_searcher_image_searcher_image_searcher_component__["a" /* ImageSearcherComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_youtube_safe_url_pipe__["a" /* YoutubeSafeUrlPipe */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__components_searcher_gif_searcher_gif_info_popup_gif_info_popup_component__["a" /* GifInfoPopupComponent */], __WEBPACK_IMPORTED_MODULE_13__components_searcher_video_searcher_video_info_popup_video_info_popup_component__["a" /* VideoInfoPopupComponent */], __WEBPACK_IMPORTED_MODULE_16__components_searcher_image_searcher_image_info_popup_image_info_popup_component__["a" /* ImageInfoPopupComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup-container {\r\n  text-align: center;\r\n}\r\n\r\n.popup-container .row {\r\n  padding: 10px;\r\n}\r\n\r\n.row label {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-container\">\r\n  <img [src]=\"data.gif.images.fixed_height.url\" alt=\"\">\r\n  <div class=\"row\">\r\n    <label>Source URL</label>\r\n    <a [href]=\"data.gif.url\" target=\"_blank\">{{data.gif.url}}</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Content Rating</label>\r\n    <span>{{data.gif.rating}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Import Date</label>\r\n    <span>{{data.gif.import_datetime}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button mat-button (click)=\"close()\">OK</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifInfoPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GifInfoPopupComponent = (function () {
    function GifInfoPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GifInfoPopupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    GifInfoPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gif-info-popup',
            template: __webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], GifInfoPopupComponent);
    return GifInfoPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searcher-container {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n.searcher-container .fa-refresh {\r\n  margin-left: -20px;\r\n  position: absolute;\r\n  line-height: 18px;\r\n}\r\n\r\n.searcher-container .gif {\r\n  display: inline-block;\r\n}\r\n\r\n.searcher-container mat-grid-tile {\r\n  cursor: pointer;\r\n}\r\n\r\ni.fa-chevron-circle-left {\r\n  color: #000;\r\n  font-size: 28px;\r\n  position: absolute;\r\n  margin-left: -50px;\r\n  margin-top: 17px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searcher-container\">\n  <a routerLink=\"/\">\n    <i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i>\n  </a>\n  <mat-form-field class=\"example-full-width\">\n    <i class=\"fa fa-spin fa-refresh\" *ngIf=\"loading\"></i>\n    <input matInput placeholder=\"Type to search gifs...\" (keyup)=\"search()\" [(ngModel)]=\"query\">\n  </mat-form-field>\n  <perfect-scrollbar\n    #scrollBar\n    [style.height.px]=\"containerHeight\"\n    [config]=\"config\"\n    (psYReachEnd)=\"scroll()\">\n    <div class=\"result-container\">\n      <div class=\"gif\" *ngIf=\"gifs.length === 0\">\n        <h2>No results!</h2>\n      </div>\n      <mat-grid-list cols=\"4\">\n        <mat-grid-tile\n          *ngFor=\"let gif of gifs;let i = index\"\n          (click)=\"viewGif(i)\">\n          <img [src]=\"gif.images.fixed_height.url\" alt=\"\">\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </perfect-scrollbar>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifSearcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gif_info_popup_gif_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GifSearcherComponent = (function () {
    function GifSearcherComponent(searchService, dialog) {
        this.searchService = searchService;
        this.dialog = dialog;
        this.config = {
            suppressScrollX: true
        };
        this.containerHeight = window.innerHeight - 160;
        this.offset = 0;
        this.limit = 25;
        this.gifs = [];
        this.timeout = false;
        this.loading = false;
    }
    GifSearcherComponent.prototype.viewGif = function (index) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__gif_info_popup_gif_info_popup_component__["a" /* GifInfoPopupComponent */], {
            data: { gif: this.gifs[index] }
        });
    };
    GifSearcherComponent.prototype.scroll = function () {
        if (this.gifs.length > 0) {
            this.offset += this.limit;
            this.loading = true;
            this.startSearch();
        }
    };
    GifSearcherComponent.prototype.search = function () {
        var _this = this;
        this.loading = true;
        this.offset = 0;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.startSearch();
        }, 1000);
    };
    GifSearcherComponent.prototype.startSearch = function () {
        var _this = this;
        this.searchService.searchGifs(this.query, this.offset, this.limit)
            .subscribe(function (value) {
            _this.loading = false;
            if (_this.offset === 0) {
                _this.scrollBar.directiveRef.scrollToTop();
                _this.gifs = value['data'];
            }
            else {
                (_a = _this.gifs).push.apply(_a, value['data']);
            }
            var _a;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('scrollBar'),
        __metadata("design:type", Object)
    ], GifSearcherComponent.prototype, "scrollBar", void 0);
    GifSearcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gif-searcher',
            template: __webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/gif-searcher/gif-searcher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], GifSearcherComponent);
    return GifSearcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup-container {\r\n  text-align: center;\r\n}\r\n\r\n.popup-container .row {\r\n  padding: 10px;\r\n}\r\n\r\n.row label {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-container\">\r\n  <img [src]=\"data.image.thumbnailUrl\" alt=\"\">\r\n  <div class=\"row\">\r\n    <label>Source URL</label>\r\n    <a [href]=\"data.image.contentUrl\" target=\"_blank\">{{data.image.contentUrl}}</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Name</label>\r\n    <span>{{data.image.name}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Published Date</label>\r\n    <span>{{data.image.date}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button mat-button (click)=\"close()\">OK</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageInfoPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImageInfoPopupComponent = (function () {
    function ImageInfoPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImageInfoPopupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ImageInfoPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-info-popup',
            template: __webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ImageInfoPopupComponent);
    return ImageInfoPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-searcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searcher-container {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n.searcher-container .fa-refresh {\r\n  margin-left: -20px;\r\n  position: absolute;\r\n  line-height: 18px;\r\n}\r\n\r\n.searcher-container .gif {\r\n  display: inline-block;\r\n}\r\n\r\n.searcher-container mat-grid-tile {\r\n  cursor: pointer;\r\n}\r\n\r\ni.fa-chevron-circle-left {\r\n  color: #000;\r\n  font-size: 28px;\r\n  position: absolute;\r\n  margin-left: -50px;\r\n  margin-top: 17px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-searcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searcher-container\">\n  <a routerLink=\"/\">\n    <i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i>\n  </a>\n  <mat-form-field class=\"example-full-width\">\n    <i class=\"fa fa-spin fa-refresh\" *ngIf=\"loading\"></i>\n    <input matInput placeholder=\"Type to search images...\" (keyup)=\"search()\" [(ngModel)]=\"query\">\n  </mat-form-field>\n  <perfect-scrollbar\n    #scrollBar\n    [style.height.px]=\"containerHeight\"\n    [config]=\"config\"\n    (psYReachEnd)=\"scroll()\">\n    <div class=\"result-container\">\n      <div class=\"gif\" *ngIf=\"images.length === 0\">\n        <h2>No results!</h2>\n      </div>\n      <mat-grid-list cols=\"4\">\n        <mat-grid-tile\n          *ngFor=\"let image of images;let i = index\"\n          (click)=\"viewImage(i)\">\n          <img [src]=\"image.thumbnailUrl\" alt=\"\">\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </perfect-scrollbar>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/image-searcher/image-searcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_info_popup_image_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-info-popup/image-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageSearcherComponent = (function () {
    function ImageSearcherComponent(searchService, dialog) {
        this.searchService = searchService;
        this.dialog = dialog;
        this.config = {
            suppressScrollX: true
        };
        this.containerHeight = window.innerHeight - 160;
        this.offset = 0;
        this.limit = 25;
        this.images = [];
        this.timeout = false;
        this.loading = false;
    }
    ImageSearcherComponent.prototype.viewImage = function (index) {
        this.images[index].date = new Date(this.images[index].datePublished).toDateString();
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__image_info_popup_image_info_popup_component__["a" /* ImageInfoPopupComponent */], {
            data: { image: this.images[index] }
        });
    };
    ImageSearcherComponent.prototype.scroll = function () {
        if (this.images.length > 0) {
            this.offset += this.limit;
            this.loading = true;
            this.startSearch();
        }
    };
    ImageSearcherComponent.prototype.search = function () {
        var _this = this;
        this.loading = true;
        this.offset = 0;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.startSearch();
        }, 1000);
    };
    ImageSearcherComponent.prototype.startSearch = function () {
        var _this = this;
        this.searchService.searchImages(this.query, this.offset, this.limit)
            .subscribe(function (value) {
            _this.loading = false;
            if (_this.offset === 0) {
                _this.scrollBar.directiveRef.scrollToTop();
                _this.images = value['value'];
            }
            else {
                (_a = _this.images).push.apply(_a, value['value']);
            }
            var _a;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('scrollBar'),
        __metadata("design:type", Object)
    ], ImageSearcherComponent.prototype, "scrollBar", void 0);
    ImageSearcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gif-searcher',
            template: __webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-searcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/image-searcher/image-searcher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], ImageSearcherComponent);
    return ImageSearcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/searcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searcher-container {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/searcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searcher-container\">\n  <div class=\"navigation\">\n    <a mat-raised-button routerLink=\"gifs\">Search Gifs</a>\n    <a mat-raised-button routerLink=\"video\">Search Video</a>\n    <a mat-raised-button routerLink=\"images\">Search Images</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/searcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearcherComponent = (function () {
    function SearcherComponent() {
    }
    SearcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searcher',
            template: __webpack_require__("../../../../../src/app/components/searcher/searcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/searcher.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearcherComponent);
    return SearcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup-container {\r\n  text-align: center;\r\n}\r\n\r\n.popup-container .row {\r\n  padding: 10px;\r\n}\r\n\r\n.row label {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-container\">\r\n  <iframe width=\"560\"\r\n          height=\"315\"\r\n          frameborder=\"0\"\r\n          allowfullscreen\r\n          [src]=\"data.video.id.videoId | youtubeSafeUrl\">\r\n  </iframe>\r\n  <div class=\"row\">\r\n    <label>Title</label>\r\n    <span>{{data.video.snippet.title}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Description</label>\r\n    <span>{{data.video.snippet.description}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label>Published At</label>\r\n    <span>{{data.video.date}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button mat-button (click)=\"close()\">OK</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoInfoPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var VideoInfoPopupComponent = (function () {
    function VideoInfoPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    VideoInfoPopupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VideoInfoPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-info-popup',
            template: __webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], VideoInfoPopupComponent);
    return VideoInfoPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-searcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searcher-container {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n.searcher-container .fa-refresh {\r\n  margin-left: -20px;\r\n  position: absolute;\r\n  line-height: 18px;\r\n}\r\n\r\n.searcher-container .gif {\r\n  display: inline-block;\r\n}\r\n\r\n.searcher-container mat-grid-tile {\r\n  cursor: pointer;\r\n}\r\n\r\ni.fa-chevron-circle-left {\r\n  color: #000;\r\n  font-size: 28px;\r\n  position: absolute;\r\n  margin-left: -50px;\r\n  margin-top: 17px;\r\n}\r\n\r\nmat-grid-tile .fa-youtube-square {\r\n  position: absolute;\r\n  font-size: 35px;\r\n  color: #fff;\r\n  right: 10px;\r\n  bottom: 77px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-searcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searcher-container\">\n  <a routerLink=\"/\">\n    <i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i>\n  </a>\n  <mat-form-field class=\"example-full-width\">\n    <i class=\"fa fa-spin fa-refresh\" *ngIf=\"loading\"></i>\n    <input matInput placeholder=\"Type to search video...\" (keyup)=\"search()\" [(ngModel)]=\"query\">\n  </mat-form-field>\n  <perfect-scrollbar\n    #scrollBar\n    [style.height.px]=\"containerHeight\"\n    [config]=\"config\"\n    (psYReachEnd)=\"scroll()\">\n    <div class=\"result-container\">\n      <div class=\"gif\" *ngIf=\"video.length === 0\">\n        <h2>No results!</h2>\n      </div>\n      <mat-grid-list cols=\"4\">\n        <mat-grid-tile\n          *ngFor=\"let vid of video;let i = index\"\n          (click)=\"viewVideo(i)\">\n          <i class=\"fa fa-youtube-square\"></i>\n          <img [src]=\"vid.snippet.thumbnails.medium.url\" alt=\"\">\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </perfect-scrollbar>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/searcher/video-searcher/video-searcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSearcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_info_popup_video_info_popup_component__ = __webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-info-popup/video-info-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoSearcherComponent = (function () {
    function VideoSearcherComponent(searchService, dialog) {
        this.searchService = searchService;
        this.dialog = dialog;
        this.config = {
            suppressScrollX: true
        };
        this.containerHeight = window.innerHeight - 160;
        this.offset = 0;
        this.limit = 25;
        this.video = [];
        this.timeout = false;
        this.loading = false;
    }
    VideoSearcherComponent.prototype.viewVideo = function (index) {
        this.video[index].date = this.toDate(this.video[index].snippet.publishedAt);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__video_info_popup_video_info_popup_component__["a" /* VideoInfoPopupComponent */], {
            data: { video: this.video[index] }
        });
    };
    VideoSearcherComponent.prototype.scroll = function () {
        if (this.video.length > 0) {
            this.loading = true;
            this.startSearch();
        }
    };
    VideoSearcherComponent.prototype.search = function () {
        var _this = this;
        this.loading = true;
        this.offset = 0;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.startSearch();
        }, 1000);
    };
    VideoSearcherComponent.prototype.toDate = function (date) {
        return new Date(date).toDateString();
    };
    VideoSearcherComponent.prototype.startSearch = function () {
        var _this = this;
        this.searchService.searchVideo(this.query, this.offset, this.limit)
            .subscribe(function (value) {
            _this.loading = false;
            if (_this.offset === 0) {
                _this.scrollBar.directiveRef.scrollToTop();
                _this.video = value['items'];
            }
            else {
                (_a = _this.video).push.apply(_a, value['items']);
            }
            _this.offset = value['nextPageToken'];
            var _a;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('scrollBar'),
        __metadata("design:type", Object)
    ], VideoSearcherComponent.prototype, "scrollBar", void 0);
    VideoSearcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-searcher',
            template: __webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-searcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/searcher/video-searcher/video-searcher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], VideoSearcherComponent);
    return VideoSearcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/youtube-safe-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeSafeUrlPipe = (function () {
    function YoutubeSafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeSafeUrlPipe.prototype.transform = function (videoId) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoId + "?autoplay=1");
    };
    YoutubeSafeUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'youtubeSafeUrl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubeSafeUrlPipe);
    return YoutubeSafeUrlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
        this.API_GIPHY_KEY = 'TWUFTsRt2XQ86wScEYC51LgHraNEygZp';
        this.API_YOUTUBE_KEY = 'AIzaSyDbZOGbxkLou0F_LJyKXvFF1quIVBCN4gs';
        this.API_BING_KEY = '6e033a8edc8f4ef5a6b432c69e4d9d52';
        this.GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?';
        this.YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?';
        this.BING_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?';
    }
    SearchService.prototype.searchGifs = function (query, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 25; }
        var url = this.GIPHY_URL + ("api_key=" + this.API_GIPHY_KEY + "&q=" + query + "&limit=" + limit + "&offset=" + offset + "&rating=G&lang=en");
        return this.httpClient.get(url);
    };
    SearchService.prototype.searchVideo = function (query, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 25; }
        var url = this.YOUTUBE_URL + ("part=snippet&key=" + this.API_YOUTUBE_KEY + "&q=" + query + "&maxResults=" + limit + "&type=video");
        if (offset !== 0) {
            url += "&pageToken=" + offset;
        }
        return this.httpClient.get(url);
    };
    SearchService.prototype.searchImages = function (query, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 25; }
        var headers = {
            'Ocp-Apim-Subscription-Key': this.API_BING_KEY
        };
        var url = this.BING_URL + ("q=" + query + "&offset=" + offset + "&count=" + limit);
        return this.httpClient.get(url, { headers: headers });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map