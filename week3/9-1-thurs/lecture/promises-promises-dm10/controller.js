angular.module('app').controller('controller', function ($scope, service1, pokemonService) {
    $scope.says = "I am a scope";

    $scope.theThingWeAskedFor = "Asking for the thing...";

    $scope.my6yearOldWantsAUnicorn = function () {
        service1.getMeAUnicorn()
            .then(function(whatWasResolved){
                $scope.theThingWeAskedFor = whatWasResolved;
            })
       
    }
    
    $scope.my6yearOldWantsAUnicorn();


    $scope.getPokemon =function(){
        var promiseOrAPokemon = pokemonService.getPokemon()

        if(promiseOrAPokemon is a promise){
            promiseOrAPokemon.then(function(pokemon){
                $scope.pokemon = pokemon;
            })
        } else {
            $scope.pokemon = promiseOrAPokemon;
        }

    }
    


//CONFIG


   
   
    // // promise.then(resolve, reject);
    
    // function askIntroverToDoSomething(){
    //     //Way #1 to do this
    //     introvertService.willHangOutWithMe().then(function(result){
    //         //defer.resolve
    //         goToAMovie()
    //     }, function(err){
    //        //defer.reject
    //        sadFace();
    //     })
        
    //     //Way #2 to do this
    //     function resolveHandler(){
    //         //defer.resolve
    //         goToAMovie()
    //     }
    //     function rejectHandler(){
    //         //defer.reject
    //         sadFace();
    //     }
    //     introvertService.willHangOutWithMe().then(resolveHandler, rejectHandler);
    // }

//




    



});