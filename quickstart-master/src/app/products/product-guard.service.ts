import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id: number = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Id');
            this._router.navigate(['/products']);
        }
        return true;
    }

    constructor(private _router: Router) {

    }
}