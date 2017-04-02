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
        .when('/experience', {
          template : '<experience-detail></experience-detail>'
        })
        .when('/education', {
          template : '<education-detail></education-detail>'
        })
        .when('/skills', {
          template : '<skills-detail></skills-detail>'
        })
        .when('/certifications', {
          template : '<certifications-detail></certifications-detail>'
        })
        .when('/social', {
          template : '<social-detail></social-detail>'
        })
        .when('/about', {
          template : '<about-detail></about-detail>'
        })
        .otherwise('/home');
    }])
