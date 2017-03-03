import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/product-services';
import { StarComponent } from './shared/star.component';
import { TemplateDrivenForm } from './forms/templatedriven/templateDrivenform-page.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter';
import { ApplicationLoggerService } from './logger/logger.service';
import { ModelDrivenForm } from './forms/modeldriven/modeldrivenform-page.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-guard.service';





@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'templateDrivenForm', component: TemplateDrivenForm }
      , { path: 'modeldrivenform', component: ModelDrivenForm }
      , { path: 'products', component: ProductListComponent }
      , {
        path: 'product/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
      , { path: 'welcome', component: WelcomeComponent }
      , { path: '**', redirectTo: 'welcome', pathMatch: 'full' }])],
  providers: [ProductService,
    ApplicationLoggerService, ProductDetailGuard],
  declarations: [AppComponent,
    TemplateDrivenForm,
    ModelDrivenForm,
    ProductFilterPipe,
    StarComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
