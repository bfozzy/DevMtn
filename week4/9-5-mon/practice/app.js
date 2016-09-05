angular.module("myFirstRouter", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state("home", {
                url: "/",
                controller: "homeController",
                templateUrl: "home.html"
            })
            .state("bio", {
                url: "/bio",
                controller: "bioController",
                template: "<h1>Here\'s {{user}}\'s bio</h1>"
            })
    })
