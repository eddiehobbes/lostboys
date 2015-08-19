(function(angular) {
    angular.module('fossilized.engine.view')
        .directive('sideBar', function() {
            return {
                restrict: 'E',
                templateUrl: 'engine/side-bar/side-bar.html',
                controller: 'SideBarController',
                controllerAs: 'vm',
                bindToController: true,
                scope : {}
            };
        });
})(angular);
