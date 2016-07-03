/**
 * Created by thuan on 5/3/2016.
 */
import app from './app.js';
import config from './../app/config/config';
import appConfig from './../app/config/app';
import route from './../app/http/routes';
import configExpress from './lib/express.js';
import mongoose from 'mongoose';

//init express
configExpress(app);
//init database
mongoose.connect(appConfig.db, function (err) {
    if(err){
        console.log('Database connect error');
    }
    else{
        console.log('Database connected...');
    }
});


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "x-access-token, Content-Type");
  next();
});
//init route
route(app);
//init port
const http=require('http').Server(app);
const port=config.PORT;

http.listen(port, function(){
    console.log('Environment: '+process.env.NODE_ENV);
    console.log('Server is listening on port: '+port);
});
