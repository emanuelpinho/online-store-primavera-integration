app.controller('AuthenticationController', ['$scope', '$state' ,'AuthenticationService', function ($scope, $state, AuthenticationService) {

    $scope.newUser = {};

    $scope.register = function () {
        var user = $scope.newUser;
        user.CodCliente = 'VD' + Math.floor((Math.random() * 100000) + 1);
        AuthenticationService.register(user)
            .success(function handleSuccessfulRegistration(data) {
                AuthenticationService.login(user, true);
                $state.go('base.home');
            })
            .error(function handleUnsuccessfulRegistration(data) {
                alert('Registo falhou');
            });
    };

}]);