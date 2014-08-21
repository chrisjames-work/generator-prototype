'use strict';

require.config({
  paths: {
    'jquery': 'libs/jquery'
  },

  shim: {
    'jquery': {
      exports: '$'
    }
  }
});

require(['main']);
