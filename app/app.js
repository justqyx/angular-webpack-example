'use strict';

var appConfig = require('./config');
var pkg = require('../package.json');

// Add Angular/Ionic dependencies
var angular = require('angular');

var appModule = angular.module('app', [
    'ionic'
])
.constant('version', pkg.version)
.constant('config', appConfig)

.config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'views/app.html'
        });

    $urlRouterProvider.otherwise('/');
})

.run(function() {
    console.info("--- app run ---");
});

require('./index.scss');

module.exports = appModule;
