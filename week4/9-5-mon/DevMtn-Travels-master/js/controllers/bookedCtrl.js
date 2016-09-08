angular.module('devmtnTravel')
    .controller("bookedCtrl", function($scope, mainSrv, $stateParams) {


        for (var i = 0; i < mainSrv.travelInfo.length; i++) {
            if (mainSrv.travelInfo[i].id == $stateParams.id) {
                $scope.currentObj = mainSrv.travelInfo[i].city;
            }
        }

        // getObj();

    });
