angular.module("apiApp").controller("controller", function($scope, service) {
    $scope.test = "WOrking?"
    $scope.getStarships = function() {
        service.getStarships().then(function(dataFromService) {
            $scope.starships = dataFromService;
        });
    }
    $scope.getStarships();

});
