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
var port = process.env.PORT || 5000;


app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());

passport.use(new GithubStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:'https://dscemil.herokuapp.com/auth/github/callback'
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));


passport.serializeUser(function (user, done) {
    done(null,user);
});

passport.deserializeUser(function (user, done) {

    done(null,obj);
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/success',
    failureRedirect:'/error'
}));

app.get('/success', function(req, res, next) {
    res.send('Successfully logged in.');
});

app.get('/error', function(req, res, next) {
    res.send("Error logging in.");
});

//app.get('/', function (req, res) {
//
//    res.sendfile('/public/index.html');
//});

app.listen(port,function () {
    console.log('running on '+port);

})
