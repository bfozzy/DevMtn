angular.module('directivePractice')
    .directive("lessonHider", function() {
        return {
            templateUrl: "../lessonHider.html",
            restrict: "AE",
            scope: {
                lesson: "="
            },
            link: function(scope, element, attributes) {
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data;
                    for (var i = 0; i < scope.schedule.length; i++) {
                        if (scope.schedule[i].lesson === scope.lesson) {
                            element.css(
                                "text-decoration",
                                "line-through"
                            );
                            return;
                        }

                    }
                })
            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            }






        }





    });
