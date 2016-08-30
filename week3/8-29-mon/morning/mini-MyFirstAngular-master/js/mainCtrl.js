angular.module('friendsList').controller('mainCtrl', function($scope){

  $scope.name = "Brad"
  $scope.friends = ["Ben", "Carson", "Chris", "Conner", "Taylor", "Ariel"]
  $scope.addFriend = function(friend){
        $scope.friends.push(friend);
         alert("Friend Added");

  };
});
