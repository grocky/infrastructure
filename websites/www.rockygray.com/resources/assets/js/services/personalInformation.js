(function() {

    'use strict';

    angular.module('RockyGray').factory('personalInformation', personalInformation);

    function personalInformation($resource) {

        var info = $resource('v-card');

        return {};
    }
})();
