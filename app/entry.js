'use strict';

var angular = require('angular');

// set the public path
var scripts = global.document.getElementsByTagName('script');
var src = scripts[scripts.length - 1].getAttribute('src');
global.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);

require('angular-animate');
require('angular-sanitize');
require('angular-resource');
require('angular-ui-router');
require('ionic-npm/js/ionic');
require('ionic-npm/js/ionic-angular');

var appModule = require('./app');

window.addEventListener('load', function() {
    angular.element(window.document).ready(function() {
        angular.bootstrap(window.document, [appModule.name], {
        });
    });
});
