define([], function () {
    function selectorController($scope, $rootScope, $route, $routeParams, $timeout, $sce, blogComService) {
        $scope.newComment = {};
        $scope.currentTestimonial = 0;
        $scope.testimonialCount = 2;
        $scope.sendingComment = false;

        $scope.setupLoader = function () {
            console.log("setting up #1");
            preload();
        }

        $scope.getClassFor = function (condition) {
            if (!$route.current || !$route.current.originalPath) {
                return;
            }

            if (!$scope.enabling && $route.current.originalPath.length > 2 && $route.current.originalPath.indexOf("load") == -1) {
                //alert($route.current.originalPath);
                $scope.enabling = true;

                $timeout(function () {
                    $scope.selectorLoaded = true;
                }, 50);
            }

            if ($route.current.originalPath.indexOf(condition) != -1) {
                return "om-selected";
            }

            return "";
        }

        $scope.openClassFor = function (condition) {
            if (!$route.current || !$route.current.originalPath) {
                return;
            }

            if ($route.current.originalPath.indexOf(condition) != -1) {
                return "om-openSubNav";
            }

            return "";
        }

        $scope.getBlogClassFor = function (post) {
            if (!$route.current || !$route.current.originalPath) {
                return;
            }

            if ($routeParams.postId == post.id) {
                return "om-selected";
            }

            return;
        }

        $scope.getBlogPeriodClassFor = function (period) {
            if (!$route.current || !$route.current.originalPath) {
                return;
            }

            idStr = "" + period.year;
            if (period.month < 10) {
                idStr = idStr + "0";
            }
            idStr = idStr + period.month;

            if ($routeParams.postId != null && $routeParams.postId.indexOf(idStr) != -1) {
                return "om-selected";
            }

            return;
        }

        $scope.generatePostUrl = function (post) {
            return "#/minervista/" + post.octominervaId;
        }

        $scope.sendComment = function (form) {
            if (form.$invalid) {
                return;
            }

            sendingComment = true;

            var comment = $scope.newComment;
            blogComService.addPostComment($scope.post, 0, comment.text, comment.name, comment.email, comment.URL).then(function () {
                $timeout(function () {
                    sendingComment = false;
                    comment.text = "";

                    loadPostComments($scope.post);
                }, 500);

            }, function (msg) {
                sendingComment = false;
                alert("Error posting comment: " + msg);
            });
        }

        $scope.movePreviousTestimonial = function () {
            $scope.currentTestimonial--;
            if ($scope.currentTestimonial < 0) {
                $scope.currentTestimonial = $scope.testimonialCount - 1;
            }
        }

        $scope.moveNextTestimonial = function () {
            $scope.currentTestimonial = ($scope.currentTestimonial + 1) % $scope.testimonialCount;
        }

        // route change events
        $rootScope.$on('$routeChangeSuccess', function () {
            $scope.newComment = {};
            $scope.currentTestimonial = 0;

            $timeout(manageSidebarStyle, 50);

            manageBlogPosts();
        });

        // TODO GET MESSAGE WITH NOTIFICATION TO REFRESH
        $scope.$on('refreshComments', function () {
            loadPostComments($scope.post);
        });


        function manageBlogPosts() {
            $scope.postId = $routeParams.postId;

            if ($scope.postId) {
                loadPost($scope.postId);
            } else {
                $scope.post = null;
            }
        }

        function loadPost(postId) {
            blogComService.getPost($scope.postId).then(function (postStructure) {
                $scope.post = postStructure.current;
                $scope.previousPost = postStructure.previous;
                $scope.nextPost = postStructure.next;
                $scope.sendingComment = false;

                if ($scope.nextPost) {
                    $scope.nextPostUrl = $scope.generatePostUrl($scope.nextPost);
                }

                if ($scope.previousPost) {
                    $scope.previousPostUrl = $scope.generatePostUrl($scope.previousPost);
                }

                $scope.htmlContent = $sce.trustAsHtml($scope.post.content);

                loadPostComments($scope.post);

                $timeout(function () {
                    resizeIFrames();

                    $("textarea").elastic();
                });
            });
        }

        function loadPostComments(post) {
            blogComService.getPostComments(post).then(function (comments) {
                $scope.postComments = comments;

                //comments.forEach(function (comment) {
                //    comment.htmlContent = $sce.trustAsHtml(comment.content);
                //});
            });
        }


        // sidebar resizing behaviour
        $(window).resize(function () {
            manageSidebarStyle();
        });

        function manageSidebarStyle() {
            var mainNavigator = $(".om-mainNav");
            var bottomNavigator = $(".om-bottomNav");

            if (mainNavigator.length == 0) {
                return;
            }

            var mainNavigatorPosition = mainNavigator.offset();

            if (!mainNavigatorPosition) {
                return;
            }

            if (mainNavigator.height() + mainNavigatorPosition.top > $(window).height() - bottomNavigator.height() - 60) {
                $(".om-bottomNav").addClass("om-staticBottomNav");
            } else {
                $(".om-bottomNav").removeClass("om-staticBottomNav");
            }

            $scope.mobileSelectorOpen = false;
        }



        // loading blog posts
        blogComService.getPosts().then(function (data) {
            $scope.postsUrlText = JSON.stringify(data, 'x', 4);
            $scope.posts = data;
            $scope.postPeriods = blogComService.getDateStructure(data);
            $scope.postPeriodsText = JSON.stringify($scope.postPeriods, 'x', 4);
        }, function (error, code) {
            $scope.postsUrlText = "Error received, please check console for more info";
        });
    }

    selectorController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$timeout', '$sce', 'BlogComService'];

    return selectorController;
})