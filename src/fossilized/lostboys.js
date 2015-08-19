var angular = require('angular');

(function(angular) {
    'use strict';

    angular.module('lostboys', [
        'ui-router',
        'fossilized.engine.view'
    ]).config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/lostboys');

        $stateProvider
            .state('lostboys', {
                url: '^/lostboys',
                templateUrl: 'index.html'
            });
    }
})(angular);
