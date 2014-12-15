app.controller('TopnavbarController', ['$scope', '$state', 'AuthenticationService', 'BasketService', function ($scope, $state, AuthenticationService, BasketService) {

    $scope.state = $state;

    $scope.isAuthenticated = function () {
        return !!AuthenticationService.getUser();
    };

    $scope.getUser = function () {
        return AuthenticationService.getUser();
    };

    $scope.getBasketItemsCount = function () {
        return BasketService.getNumberOfItems();
    };

    $scope.login = function () {
        var user = {
            Username: $scope.loginUsername,
            Password: $scope.loginPassword,
        }

        AuthenticationService.login(user)
            .then(function handleUser(user) {
                if (!user) {
                    alert('Login falhado');
                }
            });
    }

    $scope.logout = AuthenticationService.logout;

}]);