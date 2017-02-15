import { StarComponent } from './shared/star.component';
import { LoginPageForm } from './loginForm/login-page.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductFilterPipe } from './products/product-filter';


/*Doubts 
/1. why is BrowserModule, ReactiveFormsModule, HttpModule 
* Used For.
*
*/
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule],
  providers: [],
  declarations: [AppComponent,
    ProductListComponent,
    LoginPageForm,
    ProductFilterPipe,
    StarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
