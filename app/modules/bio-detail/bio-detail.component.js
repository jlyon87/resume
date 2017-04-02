'use strict';

angular.module('bioDetail')
  .component('bioDetail', {
    templateUrl : 'modules/bio-detail/bio-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Bio',
        img : 'bio.jpg',
        message : 'bio thingy'
      }
    }
  });
