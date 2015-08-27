(function(angular) {
    'use strict';
    angular.module('fossilized.engine.view')
        .directive('sideBar', function() {
            return {
                restrict: 'E',
                templateUrl: 'fossilized/engine/side-bar/side-bar.html',
                controller: 'SideBarController',
                controllerAs: 'vm',
                bindToController: true,
                scope: {}
            };
        });
})(angular);
