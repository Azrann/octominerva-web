define(
    ['SelectorController', 'BlogComment', 'BlogComService'],
    function (selectorController, blogComment, blogComService) {
        var app = angular.module('octominervaModule', ['ngRoute', 'ngSanitize', 'ngAnimate']);

        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
            when('/acknowledgements', {
                templateUrl: 'partials/Acknowledgements.html'
            }).
            when('/casestudy', {
                templateUrl: 'partials/CaseStudy.html'
            }).
            when('/casestudy1', {
                templateUrl: 'partials/CaseStudy1.html'
            }).
            when('/casestudy2', {
                templateUrl: 'partials/CaseStudy2.html'
            }).
            when('/casestudy3', {
                templateUrl: 'partials/CaseStudy3.html'
            }).
            when('/casestudy4', {
                templateUrl: 'partials/CaseStudy4.html'
            }).
            when('/casestudy5', {
                templateUrl: 'partials/CaseStudy5.html'
            }).
            when('/getintouch', {
                templateUrl: 'partials/GetInTouch.html'
            }).
            when('/home', {
                templateUrl: 'partials/Home.html'
            }).
            when('/minervista', {
                templateUrl: 'partials/Minervista.html'
            }).
            when('/minervista/:postId', {
                templateUrl: 'partials/MinervistaPost.html'
            }).
            when('/pagenotfound', {
                templateUrl: 'partials/PageNotFound.html'
            }).
            when('/sponsorship', {
                templateUrl: 'partials/Sponsorship.html'
            }).
            when('/sponsorship1', {
                templateUrl: 'partials/Sponsorship1.html'
            }).
            when('/sponsorship2', {
                templateUrl: 'partials/Sponsorship2.html'
            }).
            when('/sponsorship3', {
                templateUrl: 'partials/Sponsorship3.html'
            }).
            when('/thestory', {
                templateUrl: 'partials/TheStory.html'
            }).
            when('/whatclientssay', {
                templateUrl: 'partials/WhatClientsSay.html'
            }).
            when('/whatclientssay1', {
                templateUrl: 'partials/WhatClientsSay1.html'
            }).
            when('/whatclientssay2', {
                templateUrl: 'partials/WhatClientsSay2.html'
            }).
            when('/whatdoyouwant', {
                templateUrl: 'partials/WhatDoYouWant.html'
            }).
            when('/terms', {
                templateUrl: 'partials/TermsOfUse.html'
            }).
            when('/privacy', {
                templateUrl: 'partials/PrivacyPolicy.html'
            }).
            when('/cookies', {
                templateUrl: 'partials/Cookies.html'
            }).
            when('/load', {
                templateUrl: 'partials/Load.html'
            }).
            when('/test', {
                templateUrl: 'partials/Test.html'
            }).
            when('/', {
                redirectTo: '/load'
            }).
            otherwise({
                redirectTo: '/pagenotfound'
            })
        }]);


        app.directive('selectorpanel', function () {
            return {
                templateUrl: 'partials/Selector.html'
            }
        });

        app.directive('blogselector', function () {
            return {
                templateUrl: 'partials/BlogSelector.html'
            }
        });

        //app.factory(//service);
        app.factory('BlogComService', blogComService);


        app.controller('SelectorController', selectorController);

        app.controller('BlogCommentController', blogComment.controller);
        app.directive('blogcomments', blogComment.directive);

    });



/*
 * Misc-Scripts
 */
function preload() {
    console.log("preload invoked");
    var waitPane = $(".om-loadPaneWait").detach();
    var progressPane = $(".om-preloadProgress").detach();

    console.log("preload #2");

    $("body").prepend(waitPane);
    $("body").append(progressPane);

    var images = $("#preloader img");

    var totalCount = images.length;
    var loadedCount = 0;

    console.log("Total images: " + totalCount);


    images.each(function () {
        var image = this;
        console.log("preload #3 for " + image.src);

        if (image.complete) {
            loadedCount++;
            updateProgress();
            console.log("already loaded (" + loadedCount + "): " + image.src);

            if (loadedCount == totalCount) {
                console.log("preload #4 for " + image.src);
                setTimeout(function () {
                    doneLoading();
                }, 500);
            }
        } else {
            console.log("preload #5 for " + image.src);
            loadImage(image);
        }
    });

    function loadImage(image)
    {
        $(image).load(function () {
            loadedCount++;
            updateProgress();
            console.log("loaded (" + loadedCount + "): " + image.src);

            if (loadedCount == totalCount) {
                console.log("preload #6 for " + image.src);
                doneLoading();
            }
        }).error(function () {
            $("<img/>")
            .load(function () {
                console.log("image RELOADED");
                updateCount(image);
            })
            .error(function () { console.log("error loading image"); })
            .attr("src", image.src);
        });
    }

    function updateCount()
    {
        loadedCount++;
        updateProgress();
        if (loadedCount == totalCount) {
            console.log("updating count after error");
            doneLoading();
        }
    }

    function updateProgress() {
        console.log("updateProgress #1");
        $(".om-preloadProgressBar").css({
            width: (100 * loadedCount / totalCount) + "%"
        });
    }

    function doneLoading() {
        console.log("doneLoading #1");
        waitPane.remove();
        progressPane.remove();
        // I make sure we remove the loading before clicking
        $(".om-loadPaneWait").remove();
        $(".om-preloadProgress").remove();
        $(".om-loadPane").remove()

        $("#navigatePreload").click();
    }
};
