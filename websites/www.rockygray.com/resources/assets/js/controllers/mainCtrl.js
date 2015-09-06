(function() {

    'use strict';

    var app = angular.module('main');

    app.controller('mainCtrl', ['$scope', 'personalInfo', function($scope, personalInfo) {

        var vm = this;

        $scope.isVisible = false;

        var info = personalInfo.getInfo();

        vm.name = info.name;
        vm.title = info.title;

        vm.socialLocations = personalInfo.getSocialLocations();

        vm.rotateLogo = function() {
            TweenMax.to($('.logo'), 3, {
                throwProps: {
                    rotation: {
                        velocity: 800,
                        end: function(naturalLandingValue) {
                            return Math.round(naturalLandingValue / 180) * 180;
                        }
                    }
                },
                ease: Power4.easeOut
            });
        };
    }]);
})();
