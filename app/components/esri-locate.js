import Ember from 'ember';
import LocateVM from 'esri/widgets/Locate/LocateViewModel';

export default Ember.Component.extend({

  classNames: ['locate', 'action'],

  createLocate: function() {
    let view = this.get('view');
    let graphicsLayer = view.map.getLayer('graphics');
    let vm = new LocateVM({ view, graphicsLayer });
    vm.initialize();
    this.set('vm', vm);
  }.observes('view'),

  actions: {
    enable() {
      this.get('vm').locate();
    }
  }

});
