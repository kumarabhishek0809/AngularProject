import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: String = 'Product Detail';
    product: IProduct;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `  --> ${id}`;


    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

}
