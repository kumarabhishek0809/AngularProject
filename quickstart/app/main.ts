/*
This class is used for boot straping the componnets.

*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//Bootstrape will start the application
platformBrowserDynamic().bootstrapModule(AppModule);
