'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
