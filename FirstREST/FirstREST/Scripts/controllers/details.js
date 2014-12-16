app.controller('DetailsController', ['$scope', '$stateParams', 'ProductService', 'AuthenticationService', 'BasketService', function ($scope, $stateParams, ProductService, AuthenticationService, BasketService) {

    $scope.id = $stateParams.id;
    $scope.warehouses = {};
    ProductService.getProductsID($scope.id)
        .success(function handleProductsResult(result) {
            $scope.product = result;
            $scope.warehouses = {};

            if (result.ArmazensStk && Array.isArray(result.ArmazensStk)) {

                result.ArmazensStk.forEach(function (warehouse) {
                    $scope.warehouses[warehouse.Armazem] = $scope.warehouses.hasOwnProperty(warehouse.Armazem) ?
                        $scope.warehouses[warehouse.Armazem] + warehouse.StkActual :
                        warehouse.StkActual;
                });
            }
        });

    $scope.register = AuthenticationService.register;

    $scope.basket = BasketService.basket;
    $scope.addProduct = BasketService.addProduct;
    $scope.incrementQuantity = BasketService.incrementQuantity;
    $scope.decrementQuantity = BasketService.decrementQuantity;
    $scope.isAddedToBasket = function (product) {
        return product &&  product.hasOwnProperty('CodArtigo') ? $scope.basket.hasOwnProperty(product.CodArtigo) : false;
    };

}]);
