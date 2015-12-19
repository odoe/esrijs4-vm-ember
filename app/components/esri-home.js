import Ember from 'ember';
import HomeVM from 'esri/widgets/Home/HomeViewModel';

export default Ember.Component.extend({

  classNames: ['home', 'action'],

  vm: null,

  createHome: function() {
    let view = this.get('view');
    let vm = new HomeVM({ view });
    this.set('vm', vm);
  }.observes('view'),

  actions: {
    enable() {
      this.get('vm').goHome();
    }
  }

});
