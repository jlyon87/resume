'use strict';

angular.module('appContainer')
  .component('appContainer', {
    templateUrl : 'modules/app-container/app-container.template.html',
    controller: function() {
      this.items = [
        {
          name : 'One',
          img : 'one.jpg',
          message : 'one thingy'
        },
        {
          name : 'Two',
          img : 'two.jpg',
          message : 'two thingies'
        },{
          name : 'Three',
          img : 'three.jpg',
          message : 'three thingies'
        }
      ]
    }
  });
