// initialize app
var app = angular.module('belaFlor', ['ui.router', 'ngCookies']);

// configure routes/states
app.config(function ($stateProvider, $urlRouterProvider) {

    // default route
    $urlRouterProvider.otherwise("/");

    // setup app states
    $stateProvider
      .state('base', {
          abstract:true,
          //templateUrl: "Scripts/partials/main.html",
          views: {
              'topnavbar': {
                  templateUrl: 'Scripts/partials/topnavbar.html'
              },
              '': {
                  templateUrl: "Scripts/partials/main.html"
              }
          }
      })
    .state('base.home', {
          url: "/",
          templateUrl: "Scripts/partials/home.html",
          parent: 'base'
      })
    .state('base.authentication', {
        url: "/auth",
        templateUrl: "Scripts/partials/authentication.html",
        parent: 'base'
    })
    .state('base.details', {
        url: "/details/:id",
        templateUrl: "Scripts/partials/details.html",
        controller: "DetailsController",
        parent: 'base'
    })
    .state('base.basket', {
        url: "/basket",
        templateUrl: "Scripts/partials/basket.html",
        parent: 'base'
    });
});