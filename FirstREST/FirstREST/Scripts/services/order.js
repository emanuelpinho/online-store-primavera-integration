app.service('OrderService', ['$http', 'API', 'BasketService', 'AuthenticationService', function ($http, API, BasketService, AuthenticationService) {

    this.makeOrder = function () {
        var order = {
            id: "ECL." + Math.floor((Math.random() * 100000) + 1),
            Entidade: AuthenticationService.getUser().CodCliente,
            NumDoc: Math.floor((Math.random() * 100000) + 1),
            TotalMerc: 5.1, // whatever lol
            Serie: 'A',
            LinhasDoc: []
        };

        /*return $http({
            method: 'POST',
            url: API.host + API.order,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });*/
    };

}]);