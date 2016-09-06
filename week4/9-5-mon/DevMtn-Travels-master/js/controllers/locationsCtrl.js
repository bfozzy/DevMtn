angular.module('devmtnTravel')
    .controller("locationsCtrl", function($scope, mainSrv) {
        $scope.packageInfo = mainSrv.travelInfo;
    })
