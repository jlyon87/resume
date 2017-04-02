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
            path : 'bio',
            faClass : 'fa fa-star'
          },
          {
            name : 'Experience',
            img : 'experience.jpg',
            message : 'experience thingy',
            path : 'experience',
            faClass : 'fa fa-star'
          },
          {
            name : 'Education',
            img : 'education.jpg',
            message : 'education thingy',
            path : 'education',
            faClass : 'fa fa-star'
          },
          {
            name : 'Skills',
            img : 'skills.jpg',
            message : 'skills thingy',
            path : 'skills',
            faClass : 'fa fa-star'
          },
          {
            name : 'Certifications',
            img : 'certifications.jpg',
            message : 'certifications thingy',
            path : 'certifications',
            faClass : 'fa fa-star'
          },
          {
            name : 'Social Networking',
            img : 'socialNetworking.jpg',
            message : 'socialNetworking thingy',
            path : 'social',
            faClass : 'fa fa-star'
          },
          {
            name : 'About this Site',
            img : 'about.jpg',
            message : 'about thingy',
            path : 'about',
            faClass : 'fa fa-star'
          },
        ]
        this.goTo = function(path) {
          $location.path(path);
        };
      }
  });
