(function() {

    'use strict';

    var app = angular.module('main', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            // home page
            .when('/', {
                templateUrl: '../views/card.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                templateUrl: '../views/errors/404.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            });

        $locationProvider.html5Mode(true);
    })

    .animation('.slow-reveal', function() {
        return {
            enter: function(element, done) {
                TweenMax.fromTo(element.find('.reveal-item'), 1.0, {alpha: 0}, {autoAlpha:1, display: 'block', ease: Power3.easeIn});
            }
        };
    });
})();
