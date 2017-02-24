import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'templatedrivenform-form',
    templateUrl: 'app/forms/templatedriven/templatedrivenform-page.html',
    styles: [`input.ng-invalid{border-left:5px solid red;} 
    input.ng-valid{border-left:5px solid green;}`]

})
export class TemplateDrivenForm {
    myName: String = 'Kumar Abhishek';
    loginPageForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.buildForm();
    }



    onSubmit(value: any) {
        console.log(value);
    }

    ngOnInit() {
        console.log('InsideNgOnInit');
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

