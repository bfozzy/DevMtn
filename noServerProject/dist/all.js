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
.service("mainService", function ($http) {
    this.getArtist = function () {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/artists/4kI8Ie27vjvonwaB2ePh8T"
        }).then(function (response) {
            return response.data;
        });
    };
    // this.getAlbums = function(){
    //     return $http({
    //             method: "GET",
    //             url: "https://api.spotify.com/v1/"
    //         })
    //         .then(function(response) {
    //             return response.data;
    //         });
    // }
    this.members = [{
        name: "John Baldwin Gourley",
        position: "lead Vocals, guitar, organ, drum machines",
        birthPlace: "Willow, Alaska",
        picture: "/images/john.jpg"
    }, {
        name: "Zachary Scott Carothers",
        position: "bass guitar, backing vocals",
        birthPlace: "Wasilla, Alaska",
        picture: "/images/zach.jpg"
    }, {
        name: "Kyle O'quin",
        position: "keyboards, synthesizers, guitar, backing vocals",
        birthPlace: "",
        picture: "/images/kyle.png"
    }];
});