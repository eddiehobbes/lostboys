var angular = require('angular');

(function(angular) {
    'use strict';

    angular.module('lostboys', [
        'ui-router'
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
