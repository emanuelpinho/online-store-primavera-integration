app.controller('OrdersController', ['$scope', '$state', 'AuthenticationService', 'OrderService', function ($scope, $state, AuthenticationService, OrderService) {

    $scope.orders = [];

    OrderService.fetchOrders()
        .success(function handleOrders(orders) {
            $scope.orders = orders;
            console.log(orders);
        });

}]);