import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/product-services';
import { StarComponent } from './shared/star.component';
import { ProductFilterPipe } from './products/product-filter';
import { ApplicationLoggerService } from './logger/logger.service';
import { ProductDetailGuard } from './products/product-guard.service';
import { AppRoutingModule, routingComponents } from './app.routing.module';


@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule],
  providers: [ProductService,
    ApplicationLoggerService, ProductDetailGuard],
  declarations: [AppComponent, ProductFilterPipe, StarComponent, routingComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
