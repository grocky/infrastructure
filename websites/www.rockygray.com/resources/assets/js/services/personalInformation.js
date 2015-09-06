(function() {

    'use strict';

    angular.module('main').factory('personalInformation', personalInformation);

    function personalInformation() {

        var getSocialLocations = function() {

            return [{
                name: 'github',
                profileUrl: 'https://github.com/grocky',
                displayName: '/grocky'
            }, {
                name: 'twitter',
                profileUrl: 'https://twitter.com/RockyGJr',
                displayName: '/RockyGJr'
            }, {
                name: 'linkedin',
                profileUrl: 'https://www.linkedin.com/in/rockygray',
                displayName: '/rockygray'
            }];
        };

        var getPersonalInformation = function() {
            return {
                name: 'Rocky Gray Jr.',
                title: 'Software Engineer'
            };
        };

        return {
            getSocialLocations: getSocialLocations,
            getInfo: getPersonalInformation
        };
    }
})();
