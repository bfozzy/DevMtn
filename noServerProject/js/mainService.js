angular.module("app") //working
    .service("mainService", function($http) {
        this.getArtist = function() {
            return $http({
                    method: "GET",
                    url: "https://api.spotify.com/v1/artists/4kI8Ie27vjvonwaB2ePh8T"
                })
                .then(function(response) {
                    return response.data;
                });
        }
    })
