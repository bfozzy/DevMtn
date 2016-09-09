angular.module("app", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/")
        $stateProvider
            .state("home", {
                templateUrl: "./js/home/home.html",
                url: "/"
            })
            .state("bio", {
                templateUrl: "./js/bio/bio.html",
                url: "/bio"
            })
            .state("music", {
                template: "<music-directive></music-directive>",
                url: "/music"
            })


    })
