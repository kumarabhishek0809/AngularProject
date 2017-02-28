import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService {

    private _productURL = 'api/products/products.json'; // To create exception change URL

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productURL)
            .map((httpResponse: Response) => <IProduct[]>httpResponse.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}
