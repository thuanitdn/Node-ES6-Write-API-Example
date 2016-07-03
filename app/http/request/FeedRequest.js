/**
 * Created by thuan on 5/4/2016.
 */
import BaseRequest from './BaseRequest';
import _ from 'lodash';
import reqConstant from './../../util/RequestConstant';
export default class FeedRequest extends BaseRequest{
    confirmRequest(req,res,next){
        if(_.isEmpty(req.body) === true){
            this.responseErr(res,reqConstant.BAD_REQUEST,"Request empty");
        }
        else{
            next();

        }
    }
}