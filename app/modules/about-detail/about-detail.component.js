'use strict';

angular.module('aboutDetail')
  .component('aboutDetail', {
    templateUrl : 'modules/about-detail/about-detail.template.html',
    controller: function() {
      this.item = {
        name : 'About',
        img : 'about.jpg',
        message : 'about thingy',
        path : 'about',
        faClass : 'fa fa-star'
      }
    }
  });
