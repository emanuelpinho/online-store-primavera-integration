app.controller('HomepageController', ['$scope', 'ProductService', 'AuthenticationService', function ($scope, ProductService, AuthenticationService) {

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
}]);