angular.module("apiApp").service("service", function($http) {
    var baseUrl = "http://swapi.co/api/starships/";
    this.getStarships = function() {
        return $http({
            method: "GET",
            url: "http://swapi.co/api/starships/"

        }).then(function(response) {
            // if (response.stats === 200) {
            console.log(response.data.results)
            return response.data.results;
            // } else {
            //     return "error getting data";
            // }
        })
    }
})
