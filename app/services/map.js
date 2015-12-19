import Ember from 'ember';
import Map from 'esri/Map';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import VectorTileLayer from 'esri/layers/VectorTileLayer';

export default Ember.Service.extend({
  map: null,

  loadMap() {
    let map = this.get('map');
    if (map) {
      return map;
    } else {
      let graphicsLayer = new GraphicsLayer({ id: 'graphics' });
      let tileLayer = new VectorTileLayer({
        url: "https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json"
      });
      map = new Map({
        layers: [tileLayer, graphicsLayer]
      });
      this.set('map', map);
      return map;
    }
  }
});
