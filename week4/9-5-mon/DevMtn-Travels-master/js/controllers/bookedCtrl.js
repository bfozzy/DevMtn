angular.module('devmtnTravel')
    .controller("bookedCtrl", function($scope, mainSrv, $state) {
        $scope.packageInfo = mainSrv.travelInfo;
        console.log($scope.packageInfo);
        console.log($state);
        var currentId = $state.params.id;
        var pack = $scope.packageInfo;


        // for (var i = 0; i < pack.length;) {
        //     if (pack[i].id === currentId) {
        //         $scope.currentObj = pack[i];
        //     }
        // }

        // getObj();

    });
