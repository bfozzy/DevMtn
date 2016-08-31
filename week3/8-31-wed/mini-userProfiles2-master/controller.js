angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.pageNum = 1;
  $scope.getUsers = function() {
    mainService.getUsers($scope.pageNum).then(function(response) {
      $scope.users = response.data.data;
      $scope.totalPages = response.data.total_pages;
    });
  }
  $scope.getUsers();
  $scope.prev = function(){
    if($scope.pageNum > 1){
    $scope.pageNum--
    $scope.getUsers();
  }
  }
  $scope.next = function(){
    if ($scope.totalPages > $scope.pageNum)
    $scope.pageNum++
    $scope.getUsers();
  }

});
// var promise = mainService.getUsers();
