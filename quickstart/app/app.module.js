"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var product_services_1 = require('./products/product-services');
var star_component_1 = require('./shared/star.component');
var login_page_component_1 = require('./loginForm/login-page.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var product_list_component_1 = require('./products/product-list.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var product_filter_1 = require('./products/product-filter');
var logger_service_1 = require('./logger/logger.service');
/*Doubts
/1. why is BrowserModule, ReactiveFormsModule, HttpModule
* Used For.
*
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, forms_1.FormsModule],
            providers: [product_services_1.ProductService,
                logger_service_1.ApplicationLoggerService],
            declarations: [app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                login_page_component_1.LoginPageForm,
                product_filter_1.ProductFilterPipe,
                star_component_1.StarComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map