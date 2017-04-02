'use strict';

angular.module('resumeApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
//      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/home', {
          template : '<home-grid></home-grid>'
        })
        .when('/bio', {
          template : '<bio-detail></bio-detail>'
        })
        .otherwise('/home');
    }])
