'use strict';

/**
 * @ngdoc function
 * @name projetTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetTestApp
 */
angular.module('projetTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
