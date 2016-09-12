angular.module("app") //working
    .controller("mainCtrl", function($scope, mainService) {
$scope.tourDates = mainService.tour;


    })
