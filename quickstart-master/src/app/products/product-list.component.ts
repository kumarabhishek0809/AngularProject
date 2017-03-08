import { ProductService } from './product-services';
import { ApplicationLoggerService } from '../logger/logger.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: 'productModuleId',
    selector: 'pm-products', // Selector Tells the Component where it will be rendered in the DOM
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']

})
export class ProductListComponent implements OnInit {
    private pageTitle: string = `Product List`;
    private imageWidth: number = 50;
    private imageMargin: number = 2;
    private showImage: boolean = false;
    private listFilter: string = '';
    private products: IProduct[];
    private errorMessage: String;
    private selectedId: String;
    constructor(private _productService: ProductService,
        private _applicationLogger: ApplicationLoggerService,
        private _route: ActivatedRoute, private _router: Router) {

    }
    toggleImage() {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this._applicationLogger.log('Inside OnInit');
        this._productService.getProducts()
            .subscribe(responseProducts => this.products = responseProducts,
            responseError => this.errorMessage = responseError
            );
        // this._route.params.subscribe((params: Params) => {
        //     let id = params['id'];
        //     this.selectedId = id;
        // });
    }

    onProductSelect(product: IProduct): void {
        this._applicationLogger.log('Inside OnProductSelect -->' + product.productId);
        this._router.navigate([product.productId], { relativeTo: this._route });
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product Title ${message}`;
    }
}
