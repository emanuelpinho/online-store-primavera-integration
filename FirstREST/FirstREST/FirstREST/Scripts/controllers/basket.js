app.controller('BasketController', ['$scope', '$state', 'AuthenticationService', 'BasketService', function ($scope, $state, AuthenticationService, BasketService) {

    $scope.state = $state;

    $scope.basket = BasketService.basket;
    $scope.incrementQuantity = BasketService.incrementQuantity;
    $scope.decrementQuantity = BasketService.decrementQuantity;
    $scope.getNumberOfItems = BasketService.getNumberOfItems;
}]);