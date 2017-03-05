
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenForm } from './forms/templatedriven/templateDrivenform-page.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ModelDrivenForm } from './forms/modeldriven/modeldrivenform-page.component';
import { ProductDetailGuard } from './products/product-guard.service';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes =
    [
        { path: 'templateDrivenForm', component: TemplateDrivenForm }
        , { path: 'modeldrivenform', component: ModelDrivenForm }
        , { path: 'products', component: ProductListComponent }
        , {
            path: 'product/:id', component: ProductDetailComponent,
            canActivate: [ProductDetailGuard]
        }
        , { path: 'welcome', component: WelcomeComponent }
        , { path: '**', redirectTo: 'welcome', pathMatch: 'full' }];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents: any = [TemplateDrivenForm, ModelDrivenForm,
    ProductListComponent, ProductDetailComponent, WelcomeComponent];