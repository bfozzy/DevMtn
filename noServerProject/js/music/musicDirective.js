angular.module("app")
    .directive("musicDirective", function() {
        return {
            templateUrl: "js/music/musicDirectiveTemplate.html",
            //template: '<input ng-model="data" type="text"/>'
            restrict: "AE",
            // scope: {
            //     personData: '='
            // },
            link: function(scope, element, attr) {
                //here I could include a function set to scope that has an ng-hover or click to expand text for each person image.




            },
            controller: function($scope, mainService) {
                //pull in an array of objects with each person in the band that has a little bio on them
                $scope.artist = mainService.getArtist().then(function(response) {
                    return response.data;
                })
                mainService.getAlbums().then(function(response) {
                    $scope.albums = response.albums;
                })
                $scope.playTrack = function(url){
                  var playing = false;
                  var audio = new Audio(url);
                  audio.play();
                };

                // $scope.showTracks = function(){
                //
                // }

            }



        }
    });
