'use strict';

angular.module('skillsDetail')
  .component('skillsDetail', {
    templateUrl : 'modules/skills-detail/skills-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Skills',
        img : 'skills.jpg',
        message : 'skills thingy',
        path : 'skills',
        faClass : 'fa fa-star'
      }
    }
  });
