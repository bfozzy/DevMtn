angular.module("routingApp")
    .service("starWarsService", function($http) {
        this.getPeople = function() {
            return $http.get("http://swapi.co/api/people/")
                .then(function(response) {
                    return response.data;
                })
        }
        this.getPerson = function(url) {
            return $http.get(url)
                .then(function(response) {
                    return response.data;
                })
        }
    })
    //make a getPerson function will get one person from swapi and return their details
