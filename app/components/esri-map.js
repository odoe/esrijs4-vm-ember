import Ember from 'ember';
import MapView from 'esri/views/MapView';

export default Ember.Component.extend({

  classNames: ['viewDiv'],

  mapService: Ember.inject.service('map'),

  didInsertElement() {
    let map = this.get('map');
    if (!map) {
      map = this.get('mapService').loadMap();
      this.set('map', map);
    }
  },

  createMap: function() {
    let map = this.get('map');
    let view = new MapView({
      map,
      container: this.elementId,
      center: [-100.33, 25.69],
      zoom: 10
    });
    view.then(x => this.set('view', x));
  }.observes('map')

});
