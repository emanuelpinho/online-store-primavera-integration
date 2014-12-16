app.controller('BasketController', ['$scope', '$state', 'AuthenticationService', 'BasketService', 'OrderService', function ($scope, $state, AuthenticationService, BasketService, OrderService) {

    $scope.state = $state;

    $scope.basket = BasketService.basket;
    $scope.getBasket = function () {
        return BasketService.basket;
    }
    $scope.getNumberOfItems = function () {
        return BasketService.getNumberOfItems()
    }

    $scope.basketService = BasketService;
    console.log($scope.basketService.basket);
    $scope.incrementQuantity = BasketService.incrementQuantity;
    $scope.decrementQuantity = BasketService.decrementQuantity;
    $scope.makeOrder = function () {
        try{
            OrderService.makeOrder();
        } catch (e) {
            alert(e.message);
        }
    }
}]);