"use strict";

angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        templateUrl: "./js/home/home.html",
        url: "/"
    }).state("bio", {
        templateUrl: "./js/bio/bio.html",
        url: "/bio"
    }).state("music", {
        templateUrl: "./js/music/music.html",
        url: "/music"
    });
});

angular.module("app") //working
.controller("mainCtrl", function ($scope, mainService) {});

angular.module("app") //working
.service("mainService", function ($http) {});