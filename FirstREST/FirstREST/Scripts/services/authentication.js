app.service('AuthenticationService', ['$rootScope', '$http', 'API', function ($rootScope, $http, API) {
    
    this.register = function (user) {
        return $http({
            method: 'POST',
            url: API.host + API.clients,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function handleSuccessfulRegistration(data) {
            console.log('REGISTO DEU!');
        }).error(function handleUnsuccessfulRegistration(data) {
            console.log('REGISTO FALHOU');
        });
    };
}]);