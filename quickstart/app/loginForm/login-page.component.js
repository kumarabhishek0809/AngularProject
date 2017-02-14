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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var LoginPageForm = (function () {
    function LoginPageForm(formBuilder) {
        this.formBuilder = formBuilder;
        this.buildForm();
    }
    LoginPageForm.prototype.ngOnInit = function () {
        var genderControl = this.loginPageForm.get('gender');
        genderControl.setValue('male', { emitEvent: true });
    };
    LoginPageForm.prototype.onResetForm = function () {
        this.loginPageForm.reset();
    };
    LoginPageForm.prototype.buildForm = function () {
        this.loginPageForm = this.formBuilder.group({
            customerName: this.formBuilder.control(null),
            customerAddress: this.formBuilder.control(null),
            gender: this.formBuilder.group({
                male: this.formBuilder.control(null),
                female: this.formBuilder.control(null),
                others: this.formBuilder.control(null)
            }),
            passport: this.formBuilder.group({
                resident: this.formBuilder.control(null),
                visitor: this.formBuilder.control(null)
            })
        });
    };
    LoginPageForm.prototype.onSubmitForm = function () {
        console.log("Form Submitted");
    };
    LoginPageForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/loginForm/login-page.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LoginPageForm);
    return LoginPageForm;
}());
exports.LoginPageForm = LoginPageForm;
//# sourceMappingURL=login-page.component.js.map