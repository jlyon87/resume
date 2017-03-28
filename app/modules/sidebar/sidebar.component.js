'use strict';

angular.module('sidebar')
  .component('sidebar', {
    templateUrl : 'modules/sidebar/sidebar.template.html',
    controller: function() {
      this.message = 'ctrl message sidebar';
    }
  });
