import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/product-services';
import { StarComponent } from './shared/star.component';
import { TemplateDrivenForm } from './loginForm/templateDrivenform-page.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter';
import { ApplicationLoggerService } from './logger/logger.service';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule],
  providers: [ProductService,
    ApplicationLoggerService],
  declarations: [AppComponent,
    ProductListComponent,
    TemplateDrivenForm,
    ProductFilterPipe,
    StarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
