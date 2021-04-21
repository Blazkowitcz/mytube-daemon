const Video = require('../models/video.model');
const http = require('http')
const fileSystem = require('fs')
const path = require('path')

exports.getAll = (req, res) => {
    Video.getAll(function(data){
        res.send(data);    
    });
}

exports.getOne = (req, res) => {
    Video.getOne(req.params.slug, function(data){
        res.send(data);
    })
}