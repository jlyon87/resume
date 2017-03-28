'use strict';

angular.module('resumeApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/home', {
          template : '<app-container></app-container>'
        })
        .otherwise('/home');
    }])
