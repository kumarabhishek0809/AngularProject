
import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: String = 'Product Detail';
    product: IProduct;
    private id: number = 0;

    /*    ngOnInit(): void {
            this.id = +this._route.snapshot.params['id'];
            this.pageTitle += `  --> ${this.id}`;
        }*/

    ngOnInit(): void {
        this._route.params.subscribe((params: Params) => {
            let id = +params['id'];
            this.pageTitle = `  --> ${this.id}`;
            this.id = id;
        });
    }
    onBack(): void {
        this._router.navigate(['/products']);
    }

    goPrevious(): void {
        this.id = this.id - 1;
        this._router.navigate(['/product', this.id]);
    }

    goNext(): void {
        this.id += 1;
        this._router.navigate(['/product', this.id]);
    }

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

}
