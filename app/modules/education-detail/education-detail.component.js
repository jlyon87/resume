'use strict';

angular.module('educationDetail')
  .component('educationDetail', {
    templateUrl : 'modules/education-detail/education-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Education',
        img : 'education.jpg',
        message : 'education thingy',
        path : 'education',
        faClass : 'fa fa-star'
      }
    }
  });
