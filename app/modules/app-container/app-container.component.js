'use strict';

angular.module('appContainer')
  .component('appContainer', {
    templateUrl : 'modules/app-container/app-container.template.html',
    controller: ['Container',
      function appContainerController(Container) {
        this.message = 'Hello Resume App';
      }]
  });
