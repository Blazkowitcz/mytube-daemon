const database = require('../modules/database').db;
const table_name = "videos";

function Video(id, title){
    this.id = id;
    this.title = title;
}

Video.getAll = function getAll(callback){
    database.query("SELECT * FROM " + table_name, function(err, res){
        callback(res);
    });
}

Video.getOne = function(slug, callback){
    console.log(slug);
    database.query("SELECT * FROM " + table_name + " WHERE slug = '" + slug + "'", function(err, res){
        console.log(err);
        callback(res);
    });
}

module.exports = Video;