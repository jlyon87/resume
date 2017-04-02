'use strict';

angular.module('certificationsDetail')
  .component('certificationsDetail', {
    templateUrl : 'modules/certifications-detail/certifications-detail.template.html',
    controller: function() {
      this.item = {
        name : 'Certifications',
        img : 'certifications.jpg',
        message : 'certifications thingy',
        path : 'certifications',
        faClass : 'fa fa-star'
      }
    }
  });
