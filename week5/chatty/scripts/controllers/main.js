'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function (message ) {
      console.log("i ran");
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data;
          console.log(response.data);
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
