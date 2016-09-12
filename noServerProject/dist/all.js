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
    }).state("tour", {
        templateUrl: "./js/tour/tour.html",
        url: "/tour"
    });
});

$(document).ready(function () {
    $(".individual-bio-text").click(function () {
        $(".individual-bio-text").animate({ right: "20px" }, 600);
    });
});

angular.module("app") //working
.controller("mainCtrl", function ($scope, mainService) {
    $scope.tourDates = mainService.tour;
});

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

    // this.getTracks = function(){
    //       return $http({
    //               method: "GET",
    //               url: "https://api.spotify.com/v1/albums/?ids=6VoOCCv0bXPrTHDncJyIgF,1OWNvsDzhEwT5cXLlo9iO7,7tQ6vsgZaRnCCFg7z2utU3,5ZqlTo5phfbqoMWFnGVCbE,2YCy2HmHCqh2yOoDuDFHhI,2YCy2HmHCqh2yOoDuDFHhI,19MdRkaOhipULC6AR5HWZ0,4uAeuGC5OCKJFRbd2F0FBj"
    //           })
    //           .then(function(response) {
    //               return response.data;
    //           });
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

    this.tour = [{
        date: 'SEP 17',
        venue: 'The Observatory',
        city: 'Santa Ana, CA',
        buy: "https://www.chainfest.com/"
    }, {
        date: 'SEP 24',
        venue: 'Marin County Fair',
        city: 'San Rafael, CA',
        buy: 'http://www.cykelscramble.com/'
    }, {
        date: 'OCT 25',
        venue: 'Ace of Spades',
        city: 'Sacramento, CA',
        buy: 'https://events.applauze.com/events/3198563'
    }, {
        date: 'OCT 27',
        venue: 'Troubadour',
        city: 'West Hollywood, CA',
        buy: 'https://events.applauze.com/events/3198565'
    }, {
        date: 'OCT 28',
        venue: 'The Glass House',
        city: 'Pomona, CA',
        buy: "https://events.applauze.com/events/3198566"
    }, {
        date: "OCT 29",
        venue: "Live Wire",
        city: "Scottsdale, AZ",
        buy: "https://events.applauze.com/events/3198567"
    }, {
        date: "OCT 31",
        venue: "Lyric Theater",
        city: "Birmingham, AL",
        buy: "https://events.applauze.com/events/3198569"
    }];

    this.ptmbio = "There has to be some credit given for this band's name alone -- co-founder John Gourley once explained it as an attempt to create a demi-mythic entity bigger than the individual members. Formed in Wasilla, Alaska, Portugal. The Man (yes, there's a period in the middle of their name) grew out of the ashes of Anatomy of a Ghost, a post-hardcore band whose vocalist and guitarist -- Gourley and Zach Carothers, respectively -- opted to continue working together. Rounding out the new band's lineup was keyboardist/singer Wes Hubbard, himself a veteran of other Alaskan groups, and the trio eventually relocated from Alaska to Portland, Oregon. Their initial existence in the Pacific Northwest was the typical harscrabble life of a band with few resources, but drummer Jason Sechrist (formerly of Konamai Defense System) joined to form a more stable lineup. The band’s profile received a boost from the internet (the musicians made heavy use of MySpace and PureVolume for promotional purposes), and Portugal. The Man released an initial EP in 2005 before issuing their debut album, Waiter: You Vultures!, in early 2006. The next year, the group (whose lineup had once again reverted to three members, as Hubbard had left and was replaced by touring keyboardist Ryan Neighbors), issued Church Mouth, whose aggressive sound bore traces of Led Zeppelin and Jane’s Addiction. The bandmates then opted to finance their third record themselves, drawing upon a wealth of guest musicians — including trombonists, trumpeters, and violinists — to create the eclectic Censored Colors. In 2009 the group released The Satanic Satanist, then quickly followed up the next year with the mellower and more electronic American Ghetto. Later that year, the band signed with Atlantic Records. Guitarist Noah Gersh joined the band for their 2011 summer tour. The group recorded their major label debut album, In the Mountain in the Cloud in late 2011; it was produced by John Hill, mixed by Andy Wallace, and released in July of 2012. A month earlier, Sleep Forever, a 13-minute short directed by Michael Ragen, and shot entirely in Gourley’s hometown, premiered on the Independent Film Channel. This was the last recording for member Securest and Neighbors who were replaced by drummer Kane Richotte and keyboardist Kyle O’Quin. Portugal. The Man enlisted Danger Mouse (Brian Burton) as producer for 2013’s Evil Friends; the album was released in June of 2003. The band is currently working on their 9th studio album, 'Gloomin + Doomin', which should be released in the near future.";
});