'use strict';

angular.module('experienceDetail')
  .component('experienceDetail', {
    templateUrl : 'modules/experience-detail/experience-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Experience',
        img : 'experience.jpg',
        message : 'experience thingy',
        path : 'experience',
        faClass : 'fa fa-star'
      }
    }
  });
