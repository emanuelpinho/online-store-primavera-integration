app.controller('HomepageController', ['$scope', 'ProductService', 'AuthenticationService', 'BasketService', function ($scope, ProductService, AuthenticationService, BasketService) {

    $scope.products = [];
    ProductService.getProducts()
        .success(function handleProductsResult(result) {
            $scope.products = result;
        });

    $scope.user = {
        CodCliente: 'VD32',
        NomeCliente: 'AlgumNome',
        NumContribuinte: '123123',
        Moeda: 'EUR'
    };
    $scope.register = AuthenticationService.register;

    $scope.basket = BasketService.basket;
    $scope.addProduct = BasketService.addProduct;
    $scope.incrementQuantity = BasketService.incrementQuantity;
    $scope.decrementQuantity = BasketService.decrementQuantity;
    $scope.isAddedToBasket = function (product) {
        return $scope.basket.hasOwnProperty(product.CodArtigo);
    };
}]);