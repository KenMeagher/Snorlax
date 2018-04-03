(function() {
    'use strict';
    var perApp = angular.module("PersonApp",[])
    perApp.controller("PersonController", [
        '$scope',
        function($scope) {
            $scope.greeting = "Hi there"
        }
    ])
} ());