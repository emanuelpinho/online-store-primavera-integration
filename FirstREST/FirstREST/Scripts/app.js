// initialize app
var app = angular.module('belaFlor', ['ui.router']);

// configure routes/states
app.config(function ($stateProvider, $urlRouterProvider) {

    // default route
    $urlRouterProvider.otherwise("/home");

    // setup app states
    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "Scripts/partials/home.html"
      });
});