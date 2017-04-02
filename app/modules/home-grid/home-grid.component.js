'use strict';

angular.module('homeGrid')
  .component('homeGrid', {
    templateUrl : 'modules/home-grid/home-grid.template.html',
    controller: function($location) {
        this.items = [
          {
            name : 'Bio',
            img : 'bio.jpg',
            message : 'bio thingy',
            path : 'bio'
          },
          {
            name : 'Experience',
            img : 'experience.jpg',
            message : 'experience thingy',
            path : 'bio'
          },
          {
            name : 'Education',
            img : 'education.jpg',
            message : 'education thingy',
            path : 'bio'
          },
          {
            name : 'Skills',
            img : 'skills.jpg',
            message : 'skills thingy',
            path : 'bio'
          },
          {
            name : 'Certifications',
            img : 'certifications.jpg',
            message : 'certifications thingy',
            path : 'bio'
          },
          {
            name : 'Social Networking',
            img : 'socialNetworking.jpg',
            message : 'socialNetworking thingy',
            path : 'bio'
          },
          {
            name : 'About this Site',
            img : 'about.jpg',
            message : 'about thingy',
            path : 'bio'
          },
        ]
        this.goTo = function(path) {
          $location.path(path);
        };
      }
  });
