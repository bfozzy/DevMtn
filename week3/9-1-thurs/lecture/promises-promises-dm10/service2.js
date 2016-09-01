angular.module('app').service('introvertSchedulingService', function($q, $timeout){
  
  this.willHangOutWithMe = function(){
     
    var deferObj = $q.defer();
    var warm = false;
    var date = false;
    var distance = false;
    
    var warmDone = false;
    var dateDone = false;
    var distanceDone = false;
    
    
    function checkWeather(){
        //2
        $http.get('http://weather.com/api/warm')
            .then(function(response){
                //8
                warm = response.data;
                warmDone = true;
                checkAllGood();
            })
    }
    
    function checkHowLongSinceLastSocialFunction(){
        //2
        $http.get('http://calendar.com/api/dateSinceLastDoingSomething')
            .then(function(response){
                //4
                date = response.data;
                dateDone = true;
                checkAllGood();
            })
    }
    
    function checkDistanceToTravel(){
        //2
        $http.get('http://maps.com/api/notTooFarToDrive')
            .then(function(response){
                //6
                distance = response.data;
                distanceDone = true;
                checkAllGood();
            })
    }
    
    function checkAllGood() {
        //5 <- //7 <- //9 >>>
        if(warmDone && dateDone && distanceDone){
            //10
            if(warm && date && distance){
                //11
                deferObj.resolve("Yeah, let's hang out");
            } else {
                //11
                deferObj.reject("Sorry, no thanks");
            }
        }
    }
    
    //1
    checkDistanceToTravel();
    checkHowLongSinceLastSocialFunction();
    checkWeather();
    
    //3
    return deferObj.promise;
  }
});

//distance - 3s
//date - 2s
//weather - 4s

angular.module('app').service('factorialService', function($q, $timeout){
    
    //Look into promise chaining;
    
    this.doFactorial = function (startNum) {
        var defer = $q.defer();

        defer.resolve({
            currentTotal: startNum,
            currentNum: startNum
        });

        return defer.promise;
    }

    function handleNextFactorial(num) {
        num.currentNum--;
        return {
            currentTotal: num.currentTotal * num.currentNum,
            currentNum: num.currentNum
        }
    }

    this.doFactorial(5)
        .then(handleNextFactorial) //20
        .then(handleNextFactorial)//<-20   ->60
        .then(handleNextFactorial) //<-60  -> 120
        .then(handleNextFactorial); //<-120  ->120

});