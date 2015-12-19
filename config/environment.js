/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'esrijs4-vm-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://js.arcgis.com/ https://js.arcgis.com/",
      'font-src': "'self' 'unsafe-inline' https://fonts.gstatic.com/",
      'connect-src': "'self' http://services.arcgis.com/ http://services.arcgisonline.com/ http://basemaps.arcgis.com https://www.arcgis.com http://js.arcgis.com http://static.arcgis.com/",
      'img-src': "'self' http://js.arcgis.com/ https://js.arcgis.com/ http://services.arcgis.com",
      'style-src': "'self' https://js.arcgis.com/ https://fonts.googleapis.com/",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
