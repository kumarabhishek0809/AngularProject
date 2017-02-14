import { APP_BOOTSTRAP_LISTENER, Component, Directive } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>

  </div>
  `
})

/* This Will be Used in app.module.ts >> 
which will be used in main.ts to APP_BOOTSTRAP_LISTENER
Component >> Module >> Main [bootstrap]
*/
export class AppComponent {
  pageTitle: string = '3M Product Management';
}
