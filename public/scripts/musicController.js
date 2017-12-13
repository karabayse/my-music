/*---- Music Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'HomeController as hoc'
  }).when('/collection', {
    templateUrl: 'views/collection.html',
    controller: 'CollectionController',
    controllerAs: 'CollectionController as cc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});
