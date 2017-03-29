'use strict';

angular.module('resumeApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
//      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/home', {
          template : '<app-container></app-container>'
        })
        .otherwise('/home');
    }])
