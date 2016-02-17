var app = angular.module('MoviesApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html",
        controller: "MainController"
    }).when("/movies", {
        templateUrl: "templates/movies.html",
        controller: "MoviesController"
    }).when("/resources", {
        templateUrl: "templates/resources.html",
        controller: "ResourcesController"
    });
});

app.controller("MainController", ['$scope', '$http', function ($scope, $http) {

}]);

app.controller("MoviesController", ['$scope', '$http', function ($scope, $http) {
    $scope.searchResults = [];
    var url = 'http://www.omdbapi.com/';
    $scope.search = function () {
        $http.get(url, {
            params: {
                "s": $scope.titleSearch,
                "type": '',

            }
        }).then(function (response) {
            $scope.searchResults = response.data.Search;
            if ($scope.searchResults === undefined) {
                console.log('Not Found');
            } else {
                console.log($scope.searchResults);
            };
        }, function (response) {
            console.log('There was an error');
        })
    }

}]);

app.controller("ResourcesController", ['$scope', function ($scope) {


}]);