
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
            console.log(params);
            let id = params['id'];
            this.pageTitle = `  --> ${id}`;
            this.id = id;
        });
    }
    onBack(): void {
        // Absolute Path this._router.navigate(['/productList']);
        this._router.navigate(['../'], { relativeTo: this._route });
    }

    goPrevious(): void {
        this.id = this.id - 1;
        this._router.navigate([{ id: this.id }], { relativeTo: this._route });
    }

    goNext(): void {
        this.id += 1;
        this._router.navigate([{ id: this.id }], { relativeTo: this._route });
    }

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

}
