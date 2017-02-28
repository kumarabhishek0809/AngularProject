import { ProductService } from './product-services';
import { ApplicationLoggerService } from '../logger/logger.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


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
    constructor(private _productService: ProductService,
        private _applicationLogger: ApplicationLoggerService) {

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
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product Title ${message}`;
    }
}
