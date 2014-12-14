app.service('ProductService', ['$http', 'API', function ($http, API) {
    

    products = [];

    

    this.getProducts = function () {
        return $http.get(API.host + API.products);
    };

}]);