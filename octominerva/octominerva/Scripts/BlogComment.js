define([], function () {
    function controller($scope, $rootScope, $route, $routeParams, $timeout, $sce, blogComService) {
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

                    $scope.$emit("refreshComments");
                }, 500);
            }, function (msg) {
                sendingComment = false;
                alert("Error posting comment: " + msg);
            });
        }

        $scope.sendReply = function (comment) {
            blogComService.addPostComment($scope.post, comment.ID, comment.newComment.text, comment.newComment.name, comment.newComment.email, comment.newComment.URL).then(function () {
                $timeout(function () {
                    sendingComment = false;
                    comment.text = "";

                    $scope.$emit("refreshComments");
                }, 500);
            }, function (msg) {
                sendingComment = false;
                alert("Error posting comment: " + msg);
            });
        }

        $scope.$watch("comments", function (newValue) {
            if (newValue) {
                $timeout(function () {
                    $scope.loadChildren();
                });
            }
        });
    }
    controller.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$timeout', '$sce', 'BlogComService'];


     function directive($scope, $rootScope, $timeout, $sce, blogComService) {
        return {
            templateUrl: "partials/BlogComment.html",
            scope: {
                post: '=post',
                comments: '=comments'
            },
            link: function (scope, element) {
                scope.loadChildren = function () {
                    $(".om-blogSubComment", element).each(function () {
                    });
                }


            }
        };
    }
    directive.$inject = [/*'$scope'/*, '$rootScope', '$timeout', '$sce', 'BlogComService'*/];

    return {
        controller: controller,
        directive: directive
    };
})