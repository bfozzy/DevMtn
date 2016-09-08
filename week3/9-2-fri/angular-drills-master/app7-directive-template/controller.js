angular.module("directiveApp")
    .controller("mainController", function($scope) {


        $scope.pageTitle = 'Brads cool web page'
        $scope.myFunc = function() {
            alert("hello there");
        }
    })
