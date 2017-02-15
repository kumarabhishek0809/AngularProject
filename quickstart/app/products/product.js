"use strict";
var Product = (function () {
    function Product(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
    }
    Product.prototype.calculateDiscount = function () {
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map