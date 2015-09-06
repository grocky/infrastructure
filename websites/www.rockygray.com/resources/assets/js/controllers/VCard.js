(function() {

    'use strict';

    var app = angular.module('main');

    app.controller('vCardController', ['$scope', 'personalInformation', function($scope, personalInformation) {

        var vm = this;

        $scope.isVisible = false;

        var info = personalInformation.getInfo();

        vm.name = info.name;
        vm.title = info.title;

        vm.socialLocations = personalInformation.getSocialLocations();
    }]);
})();
