(function() {

    'use strict';

    var app = angular.module('main', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            // home page
            .when('/', {
                templateUrl: '../views/card.html',
                controller: 'vCardController'
            })
            .otherwise({
                templateUrl: '../views/errors/404.html'
            });
    })

    .animation('.slow-reveal', function() {
        console.log('show-card');
        return {
            enter: function(element, done) {
                console.log(element);
                //$(element).hide();
                TweenMax.fromTo(element.find('.reveal-item'), 1.5, {alpha: 0}, {autoAlpha:1, display: 'block', ease: Power3.easeIn});
            }
        };
    })
    .animation('.logo', function() {
        console.log('logo animation');
        return {
            click: function(element, done) {
                console.log('enter', element);
                    TweenMax.to(element, 3, {
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
                        }
                    );
            }
        };

    });
})();
