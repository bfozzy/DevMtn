angular.module("routingApp")
    .controller("homeController", function($scope, starWarsService) {
        $scope.routeName = "home view is working";

        starWarsService.getPeople().then(function(data) {
            $scope.people = data.results;

        })

    })
