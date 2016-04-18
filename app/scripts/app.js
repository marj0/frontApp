'use strict';

/**
 * @ngdoc overview
 * @name projetTestApp
 * @description
 * # projetTestApp
 *
 * Main module of the application.
 */
var app = angular
  .module('projetTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/createTasks', {
        templateUrl: 'views/createTask.html',
        controller: 'CreateTaskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
