angular.module("app")
    .directive("bioDirective", function() {
        return {
            templateUrl: "js/bio/bioDirectiveTemplate.html",
            //template: '<input ng-model="data" type="text"/>'
            restrict: "AE",
            // scope: {
            //     personData: '='
            // },
            link: function(scope, element, attributes) {
                //here I could include a function set to scope that has an ng-hover or click to expand text for each person image.


            },
            controller: function($scope, mainService) {
                //pull in an array of objects with each person in the band that has a little bio on them


                //working
            }



        }
    });
