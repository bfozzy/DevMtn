angular.module("carApp").controller("mainCtrl", function($scope, mainService){
  $scope.x = mainService.getUser();
})
