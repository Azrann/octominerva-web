define([], function () {
    function blogComService($q, $http, $sce) {
        var _data = null;
        var _deferred = [];
        var _inProcess = false;

        return {
            getPosts: function () {
                var deferred = $q.defer();

                if (_data) {
                    deferred.resolve(_data);
                } else {
                    _deferred.push(deferred);

                    if (!_inProcess) {
                        _inProcess = true;

                        console.log("Sending posts request");
                        $http.get('http://www.blog.octominerva.com/wp-json/posts').success(function (data) {
                            console.log("Posts response success");
                            // we can do some post processing here, for example generating lists ordered by date, etc...
                            _data = data;

                            _deferred.forEach(function (d) {
                                d.resolve(data);
                            });
                        }).error(function (msg, code) {
                            console.log("Posts response error [" + code + "]: " + msg);
                            _deferred.forEach(function (d) {
                                d.reject(msg);
                            });
                        });
                    }
                }

                return deferred.promise;
            },
            getDateStructure: function (data) {
                // takes a post list
                // returns:
                // [
                //      {   
                //          year: 2010,
                //          month: 0,
                //          period: "January 2010",
                //          posts:  [
                //                      {
                //                          id: "2010011sd7df9",
                //                          title: "Post title",
                //                          date: Date,
                //                          post: {postFromTheDataArray}

                //console.log("Generating date structure");
                var dateStructure = [];

                data.forEach(function (post) {
                    addPostToDateStructure(dateStructure, post);
                });

                sortDateStructure(dateStructure);

                return dateStructure;
            },
            getPost: function (postId) {
                var deferred = $q.defer();

                this.getPosts().then(function (posts) {
                    for (var i = 0; i < posts.length; i++) {
                        if (generatePostUId(posts[i]) == postId) {
                            var postStructure = {
                                previous: i > 0 ? posts[i - 1] : null,
                                current: posts[i],
                                next: i < posts.length - 1 ? posts[i + 1] : null
                            }

                            deferred.resolve(postStructure);
                            return;
                        }
                    }

                    deferred.reject();
                }, function () {
                    deferred.reject();
                });

                return deferred.promise;
            },
            getPostComments: function (post) {
                var deferred = $q.defer();
                var url = post.meta.links.replies;

                console.log("Sending post comment request to " + url);
                $http.get(url).success(function (comments) {
                    console.log("Posts comment response success");
                    // we can do some post processing here, for example generating lists ordered by date, etc...

                    comments.forEach(function (comment) {
                        comment.timelapse = getTimelapseString(new Date(comment.date));
                        comment.htmlContent = $sce.trustAsHtml(comment.content);
                        comment.formName = "submitForm" + comment.ID;
                    });

                    comments = generateCommentTreeStructure(comments, 0);

                    deferred.resolve(comments);
                }).error(function (msg, code) {
                    console.log("Posts comment response error [" + code + "]: " + msg);

                    deferred.reject(msg);
                });

                return deferred.promise;
            },
            addPostComment: function (post, parentCommentId, text, name, email, url) {
                var deferred = $q.defer();
                              
                var data = {
                    postId: post.ID,
                    parentId: parentCommentId ? parentCommentId : 0,
                    content: text,
                    author: {
                        name: name ? name : "",
                        email: email ? email : "",
                        url: url ? url : ""
                    }
                };

                console.log("Sending comment add request to http://octominervaapi.gear.host/Home/Add");
                $http.post("http://octominervaapi.gear.host/Home/Add", data
                   ).success(function (comments) {
                    console.log("Comment add response success");
                    // we can do some post processing here, for example generating lists ordered by date, etc...

                    deferred.resolve();
                }).error(function (msg, code) {
                    console.log("Comment add response error [" + code + "]: " + msg);

                    deferred.reject(msg);
                });
                
                return deferred.promise;
            }
        };
    }
    blogComService.$inject = ['$q', '$http', '$sce'];

    function generateCommentTreeStructure(comments) {
        var result = [];

        comments.forEach(function (comment) {
            if (comment.parent == 0) {
                result.push(comment);

                comment.comments = getAllChildrenComments(comments, comment.ID);
            }
        });

        // sort ascending
        result.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

        return result;
    }

    function getAllChildrenComments(comments, parent) {
        var result = [];

        comments.forEach(function (comment) {
            if (comment.parent == parent) {
                result.push(comment);

                result = result.concat(getAllChildrenComments(comments, comment.ID));
            }
        });

        // sort ascending
        result.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

        return result;
    }

    function getTimelapseString(date) {
        var difference = new Date() - date;
        difference = Math.floor(difference / 1000);

        //console.log("Difference: " + difference);
        if (difference < 60) {
            return "- less than a minute ago";
        }

        difference = Math.floor(difference / 60);
        if (difference == 1) {
            return "- one minute ago";
        }
        if (difference < 60) {
            return "- " + difference + " minutes ago";
        }

        difference = Math.floor(difference / 60);
        if (difference == 1) {
            return "- one hour ago";
        }
        if (difference < 24) {
            return "- " + difference + " hours ago";
        }

        difference = Math.floor(difference / 24);
        if (difference == 1) {
            return "- one day ago";
        }
        if (difference < 30) {
            return "- " + difference + " days ago";
        }

        difference = Math.floor(difference / 30);
        if (difference == 1) {
            return "- one month ago";
        }
        if (difference < 12) {
            return "- " + difference + " months ago";
        }

        difference = Math.floor(difference / 12);
        if (difference == 1) {
            return "- one year ago";
        }

        return "- " + difference + " years ago";
    }

    function addPostToDateStructure(dateStructure, post) {
        var date = new Date(post.date);
        var year = date.getFullYear();
        var month = date.getMonth();

        post.octominervaId = generatePostUId(post);
        post.dateString = getPostDateString(post);

        var period = getPeriod(dateStructure, year, month);
        period.posts.push({
            id: post.octominervaId,
            title: post.title,
            date: post.date,
            post: post
        });

        //console.log("Post '" + post.title + "' added to period '" + period.period + "'");
    }

    function generatePostUId(post) {
        //var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var date = new Date(post.date);
        var year = date.getFullYear();
        var month = date.getMonth();
        var result = "" + year;

        if (month < 10) {
            result = result + "0";
        }

        result = result + month + getStringHash(post.guid);

        //for (var i = 0; i < 8; i++) {
        //    result += code.charAt(Math.floor(Math.random() * code.length));
        //}

        return result;
    }

    function getStringHash(str) {
        var hash = 0, i, chr, len;
        if (str.length == 0) {
            return hash;
        }

        for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    }

    function getPeriod(dateStructure, year, month) {
        for (var i = 0; i < dateStructure.length; i++) {
            var period = dateStructure[i];

            if (period.year == year && period.month == month) {
                return period;
            }
        }

        var result = {
            year: year,
            month: month,
            period: getPeriodName(year, month),
            posts: []
        };

        dateStructure.push(result);

        return result;
    }

    function getPeriodName(year, month) {
        var monthText = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

        return monthText[month] + " " + year;
    }

    function getPostDateString(post) {
        var monthText = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

        var date = new Date(post.date);
        return monthText[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear();
    }

    function sortDateStructure(dateStructure) {
        console.log("SORT IS NOT IMPLEMENTED YET!!!!");
    }

    return blogComService;
});

