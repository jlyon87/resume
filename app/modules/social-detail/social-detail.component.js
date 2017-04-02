'use strict';

angular.module('socialDetail')
  .component('socialDetail', {
    templateUrl : 'modules/social-detail/social-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Social Networking',
        img : 'social.jpg',
        message : 'social thingy',
        path : 'social',
        faClass : 'fa fa-star'
      }
    }
  });
