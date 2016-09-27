/**
 * Created by abhishek on 27/9/16.
 */
    'use strict'
var express = require('express');
var bodyPraser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var app = express();


app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
//app.use(express.cookieParser());
//app.use(express.session({secret:'mysecret'}));
//app.use(passport.initialize());
//app.use(passport.session());


passport.use(new GithubStrategy({
    clientID:'',
    clientSecret:'',
    callbackURL:'http://localhost:3000/auth/github/callback'
}, function (accessToken, refreshToken, profile, done) {
    done(null,{accessToken:accessToken,profile:profile});
}));


passport.serializeUser(function (user, done) {
    done(null,user);
});

passport.deserializeUser(function (user, done) {

    done(null,user);
});
//app.get('/', function (req, res) {
//
//    res.sendfile('/public/index.html');
//});

app.listen('3000',function () {
    console.log('running on 3000');

})
