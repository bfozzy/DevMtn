angular.module('app').service('service1', function($q, $timeout,$http){
    //Basic example
    
    this.getMeAUnicorn = function(){
       var deferObj = $q.defer();
       
       $timeout(function(){
           deferObj.resolve("A sparkly unicorn");
       }, 4000);
       
       
       return deferObj.promise;
    }
    
});





angular.module('app').service('pokemonService', function($http, $q){
    // Config example
    
    //keep the pokemon we found
    var pokeCenterPokemon = null;
    
    this.getPokemon = function(){
        //defer
        var defer = $q.defer();
        
        //if pokemeon
        if(pokeCenterPokemon){
            //resolve pokemon
            // return pokeCenterPokemon;
            defer.resolve(pokeCenterPokemon);   
        }
        else {
        //else 
            //http pokemon
            var httpPromise = $http.get("http://pokeapi.co/api/v2/pokemon/1");
                //resolve pokemon
            
            httpPromise.then(function(pokemon){
                  pokeCenterPokemon = pokemon.data;
                  defer.resolve(pokemon.data);
            })
        }
    
    //return promise
        return defer.promise;
    }
});

// angular.module('app').service('multiPointDataService', function($http, $q){
//     // Multi-data example
    
    
// });






