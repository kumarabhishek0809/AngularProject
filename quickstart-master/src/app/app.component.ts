
import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
    <modeldrivenform-form></modeldrivenform-form>
    <templatedrivenform-form></templatedrivenform-form>
   </div>
  `
})

export class AppComponent {
  pageTitle: string = '3M Product Management';
}
