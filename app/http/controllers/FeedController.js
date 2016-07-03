/**
 * Created by thuan on 5/3/2016.
 */
import baseController from './BaseController';
import FeedService from './../../services/FeedService';
import reqConstant from './../../util/RequestConstant';
export default class FeedController extends baseController{

    get(req,res){
          this.responseSuccess(res,true,200,"It's fine");   
    }
    
    index(req,res){	
        let token=req.headers['x-access-token'];
        let feedService=new FeedService();
        feedService.createFeed(token,req.body)
            .then(result=>{
                this.responseSuccess(res,true,200,"It's fine");
            })
            .catch(err=>{
                console.log(err);
                // this.responseErr(res,err.httpCode,err.errorCode,err.message);
            });
    }
}
