var app = angular.module('myApp', []);
app.controller('dictionnaryController', function ($scope, $http) {

    $scope.dictionnary = [];

    $scope.selectedWord = "";

    $http.get('dictionnaire.json').
    success(function (data, status, headers, config) {
        $scope.dictionnary = data;
    }).
    error(function (data, status, headers, config) {});

    $scope.capitalize = function (str) {
        //Credit: http://stackoverflow.com/a/1026087/962893
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
});