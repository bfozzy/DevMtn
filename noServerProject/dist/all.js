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
    this.getAlbums = function () {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/albums/?ids=6VoOCCv0bXPrTHDncJyIgF,1OWNvsDzhEwT5cXLlo9iO7,7tQ6vsgZaRnCCFg7z2utU3,5ZqlTo5phfbqoMWFnGVCbE,2YCy2HmHCqh2yOoDuDFHhI,2YCy2HmHCqh2yOoDuDFHhI,19MdRkaOhipULC6AR5HWZ0,4uAeuGC5OCKJFRbd2F0FBj"
        }).then(function (response) {
            return response.data;
        });
    };
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
    //Evil Friends - spotify:album:6VoOCCv0bXPrTHDncJyIgF
    // In the mountain in the cloud- spotify:album:1OWNvsDzhEwT5cXLlo9iO7
    // American Ghetto- spotify:album:7tQ6vsgZaRnCCFg7z2utU3
    // The Majestic Majesty- spotify:album:5ZqlTo5phfbqoMWFnGVCbE
    // The Satanic Satanist- spotify:album:04V5tTHMYIGBzcYxGMgRFn
    // Sensored Colors- spotify:album:2YCy2HmHCqh2yOoDuDFHhI
    // Church Mouth- spotify:album:19MdRkaOhipULC6AR5HWZ0
    // Waiter: You Vultures- spotify:album:4uAeuGC5OCKJFRbd2F0FBj

    // Array[8]
    // 0
    // :
    // Object
    // album_type
    // :
    // "album"
    // artists
    // :
    // Array[1]
    // available_markets
    // :
    // Array[58]
    // copyrights
    // :
    // Array[2]
    // external_ids
    // :
    // Object
    // external_urls
    // :
    // Object
    // genres
    // :
    // Array[0]
    // href
    // :
    // "https://api.spotify.com/v1/albums/6VoOCCv0bXPrTHDncJyIgF"
    // id
    // :
    // "6VoOCCv0bXPrTHDncJyIgF"
    // images
    // :
    // Array[3]
    // name
    // :
    // "Evil Friends"
    // popularity
    // :
    // 67
    // release_date
    // :
    // "2013-05-31"
    // release_date_precision
    // :
    // "day"
    // tracks
    // :
    // Object
    // type
    // :
    // "album"
    // uri
    // :
    // "spotify:album:6VoOCCv0bXPrTHDncJyIgF"
    // __proto__
    // :
    // Object
});