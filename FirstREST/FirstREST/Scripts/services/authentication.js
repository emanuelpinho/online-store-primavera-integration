app.service('AuthenticationService', ['$rootScope', '$http', '$cookieStore', '$q', 'API', function ($rootScope, $http, $cookieStore, $q, API) {
    
    this.register = function (user) {
        return $http({
            method: 'POST',
            url: API.host + API.clients,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    this.login = function (user, forceLogin) {
        forceLogin = forceLogin || false;
        if (forceLogin) {
            $cookieStore.put('user', user);
            return $q.when(user);
        } else {
            return $http({
                method: 'GET',
                url: API.host + API.clients + '/VD?username=' + user.Username + '&password=' + user.Password
            })
            .then(function handleLoginResult(result) {
                if (result.data !== null) {
                    $cookieStore.put('user', result.data);  
                }
                return result.data;
            });
        }
    };

    this.logout = function () {
        $cookieStore.remove('user');
    }

    this.getUser = function () {
        return $cookieStore.get('user');
    };
}]);