var myApp = angular.module('myApp', ['ngRoute']);
console.log('myApp sourced');

// myApp.config(function ($routeProvider, $locationProvider) {
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/mario', {
        templateUrl: 'views/mario.html',
        controller: 'MarioController as mc'
    }).when('/samus', {
        templateUrl: 'views/samus.html',
        controller: 'SamusController as sc'
    }).when('/zelda', {
        templateUrl: 'views/zelda.html',
        controller: 'ZeldaController as zc'
    }).otherwise({
        redirectTo: '/'
    });
    // $locationProvider.html5Mode(true);
});