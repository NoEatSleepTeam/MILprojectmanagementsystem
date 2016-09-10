/**
 * Created by abhishek on 10/9/16.
 */
var app = angular.module('milpms',["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "user_signin.html"
        })
        .when("/profile", {
            templateUrl : "user_profile.html"
        })
        .when("/project", {
            templateUrl : "project.html"

        }).when("/createProject",{
            templateUrl:"create_project.html"
        }).otherwise({
            templateUrl:"not_found.html"
        });
});


