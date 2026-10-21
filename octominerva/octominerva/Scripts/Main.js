/*
 * JS dependencies with RequireJS
 * if this turns out to be an overkill (which looks like it, hehe) we'll just remove it and put everything in here
 * to remove complexity and improve performance
 */
require.config({
    baseUrl: 'Scripts',
    paths: {
        jquery: 'lib/jquery-2.1.1.min',
        elastic: 'lib/jquery-elastic',
        angular: 'lib/angular.min',
        angularRoute: 'lib/angular-route.min',
        angularSanitize: 'lib/angular-sanitize.min',
        angularAnimate: 'lib/angular-animate.min',
        octominervaModule: 'OctominervaModule',
        imageResizer: 'ImageResizer',
        blogComService: 'BlogComService',
        blogComment: 'BlogComment'
    },
    shim: {
        'elastic': ['jquery'],
        'angularRoute': ['angular'],
        'angularSanitize': ['angular'],
        'angularAnimate': ['angular'],
        'octominervaModule': ['angularRoute', 'ImageResizer']
    }
});

require(['jquery', 'elastic', 'angular', 'angularRoute', 'angularSanitize', 'angularAnimate', 'octominervaModule'], function () {

    angular.bootstrap(document, ['octominervaModule']);

});
