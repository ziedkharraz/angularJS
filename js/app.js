var app = angular.module('MonApp', ['ngRoute','ngResource']);


app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});
app.run(['$templateCache', function ( $templateCache ) {
    $templateCache.removeAll(); }]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/posts.html', controller: 'PostsController'})
        .when('/post/:id', {templateUrl: 'page/post.html', controller: 'PostController'})
        .when('/user/:id', {templateUrl: 'page/user.html', controller: 'UserController'})
        .otherwise({redirectTo: '/'});
});