const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const conf = require('./conf.json');

app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

require('./app/routes/video.route')(app);

app.listen(conf.port, function(){
    console.log('Mytube started at port : ' + conf.port);
});