'use strict';

angular.module('appContainer')
  .component('appContainer', {
    templateUrl : 'modules/app-container/app-container.template.html',
    controller: function() {
      this.message = 'ctrl message Hello Resume App';
    }
  });
