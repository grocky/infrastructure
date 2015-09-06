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

        vm.rotateLogo = function() {
            console.log('rotate logo');
            TweenMax.to($('.logo'), 3, {
                throwProps: {
                    rotation: {
                        velocity: 800,
                        end: function(n) {
                            var degree = Math.round(n/180) * 180;
                            console.log('n: ' + n + ' degree: ' + degree);
                            return degree;
                        }
                    }
                },
                ease: Power4.easeOut
            });
        };
    }]);
})();
