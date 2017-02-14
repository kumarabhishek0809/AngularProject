import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'login-form',
    templateUrl: 'app/loginForm/login-page.html',
    styleUrls: []

})
export class LoginPageForm {
    loginPageForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.buildForm();
    }


    ngOnInit() {
        let genderControl = this.loginPageForm.get('gender') as FormControl;
        genderControl.setValue('male', { emitEvent: true });
    }

    onResetForm() {
        this.loginPageForm.reset();
    }

    buildForm() {
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
    }

    onSubmitForm() {
        console.log(`Form Submitted`);
    }
}

