angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      /* FIX ME */
      return $http({
        method: "Post",
        url: "././server.js/login"
      }).then(function(response){

      }
    },

    getFriends: function() {
    	/* FIX ME */
    }
  }
});
