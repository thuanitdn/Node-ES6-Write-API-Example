/**
 * Created by thuan on 5/3/2016.
 */
const express=require('express');
const compression=require('compression');
const bodyParser = require('body-parser');
module.exports=function (app) {
    //config compression
    app.use(compression());
    //body parser
    app.use(bodyParser.json({limit:'20mb'}));
    // accept only utf 8
    app.use(bodyParser.urlencoded({extended:true, limit:'20mb'}));
}