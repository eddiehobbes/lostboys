(function(angular) {
    'use strict';
    angular.module('fossilized.engine.view')
        .controller('SideBarController', SideBarController);

    function SideBarController() {
        var vm = this;
        vm.options = [];
        vm.options.push({
            description: 'Test Me'
        });
    }
})(angular);
