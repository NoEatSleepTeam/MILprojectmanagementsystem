/**
 * Created by abhishek on 27/9/16.
 */
    'use strict'
var express = require('express');
var bodyPraser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

//app.get('/', function (req, res) {
//
//    res.sendfile('/public/index.html');
//});

app.listen('3000',function () {
    console.log('running on 3000');

})
