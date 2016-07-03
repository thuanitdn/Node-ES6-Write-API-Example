/**
 * Created by thuan on 5/3/2016.
 */
 // middleware
 import AuthMiddleware from './middleware/auth';
//article
import FeedController from './controllers/FeedController';
import FeedRequest from './request/FeedRequest';

module.exports=function (app) {
    // middleware
    let authMiddleware=new AuthMiddleware();
    let feedController=new FeedController();
    let feedRequest=new FeedRequest();
    // with no token
    app.get('/api/feed/get',(req,res)=>{feedController.get(req,res)});
    // with verify token
    app.post('/api/feed/create',(req,res,next)=>{authMiddleware.checkToken(req,res,next)},(req,res,next)=>{feedRequest.confirmRequest(req,res,next)},(req,res)=>{feedController.index(req,res)});
}
