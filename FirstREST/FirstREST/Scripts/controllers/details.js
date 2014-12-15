app.controller('DetailsController', ['$scope', '$stateParams', 'ProductService', 'AuthenticationService', 'BasketService', function ($scope, $stateParams, ProductService, AuthenticationService, BasketService) {

    
    
        

    $scope.id = $stateParams.id;

    ProductService.getProductsID($scope.id)
        .success(function handleProductsResult(result) {
            $scope.product = result;
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
