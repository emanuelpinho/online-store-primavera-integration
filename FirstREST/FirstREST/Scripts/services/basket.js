app.service('BasketService', [function () {
    this.basket = {};

    this.getBasket = function () {
        return this.basket;
    };

    this.addProduct = function (product) {
        if (this.basket.hasOwnProperty(product.CodArtigo)) {
            return;
        }
        this.basket[product.CodArtigo] = {
            product: product,
            quantity: 1
        }
    }

    this.incrementQuantity = function (basketItem) {
        basketItem.quantity++;
    }

    this.decrementQuantity = function (basketItem) {
        if (--basketItem.quantity == 0) {
            delete this.basket[basketItem.product.CodArtigo];
        }
    }

    this.getNumberOfItems = function () {
        var c = 0;
        for (var item in this.basket) {
            if (this.basket.hasOwnProperty(item)) {
                c++;
            }
        }
        return c;
    };

}]);