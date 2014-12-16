app.service('OrderService', ['$http', 'API', 'BasketService', 'AuthenticationService', function ($http, API, BasketService, AuthenticationService) {

    this.makeOrder = function () {
        
        if (!AuthenticationService.isAuthenticated()) {
            throw new Error('User is not authenticated');
        }

        if (BasketService.getNumberOfItems() === 0) {
            throw new Error('Basket is empty');
        }

        var order = {
            id: "ECL." + Math.floor((Math.random() * 100000) + 1),
            Entidade: AuthenticationService.getUser().CodCliente,
            NumDoc: Math.floor((Math.random() * 100000) + 1),
            Data: new Date().toISOString,
            TotalMerc: 5.1, // whatever lol
            Serie: 'A',
            LinhasDoc: []
        };

        var basket = BasketService.basket;
        var counter = 0;
        var item;
        for(productID in basket) {
            if (basket.hasOwnProperty(productID)) {
                item = basket[productID];
                counter++;
                order.LinhasDoc.push({
                    CodArtigo: productID,
                    DescArtigo: item.product.DescArtigo,
                    IdCabecDoc: 'CB' + counter,
                    Quantidade: item.quantity,
                    Unidade: '' + item.quantity,
                    Desconto: 0,
                    PrecoUnitario: item.product.pvp1,
                    TotalILiquido: item.product.pvp1,
                    TotalLiquido: item.product.pvp1,
                });
            }
        }
        
        return $http({
            method: 'POST',
            url: API.host + API.order,
            data: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function handleSuccessfulOrder() {
            
            BasketService.basket = {};
        });
    };

    this.fetchOrders = function () {
        return $http({
            method: 'GET',
            url: API.host + API.order + '/' + AuthenticationService.getUser().CodCliente,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

}]);