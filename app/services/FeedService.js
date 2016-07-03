/**
 * Created by thuan on 5/3/2016.
 */
import Feed from './../model/Feed';
import BaseError from "./../http/BaseError";
import GetInfoToken from './GetInfoToken';
import errorConstant from './../util/ErrorConstant';
export default class FeedService{

	createFeed(token,reqBody){
		let getInfoToken=new GetInfoToken();
       	return getInfoToken.get(token)
	        .then(result=>{
		        let FeedInfo = JSON.parse(reqBody); 
		        let feed = this.setFeed(FeedInfo);
		        return feed.saveAsync()
		            .then(result=> {
		                return result;
		            })
	        })
        .catch(err=>{
            console.log(err);
           let baseError=new BaseError();
                if(!(err.code)){
                    baseError.setHttpCode(200);
                    baseError.setErrorCode(errorConstant.CODE.INVALID_DATA_REQUEST);
                    baseError.setMessage("interval server in service");
                    throw baseError.get();
                }
                else {
                    baseError.setHttpCode(err.httpCode);
                    baseError.setErrorCode(err.code);
                    baseError.setMessage(err.message);
                    throw baseError.get();
                }
        });
	}

	setFeed(FeedInfo){
		return new Feed({
			title: FeedInfo.title,
		    description: FeedInfo.description,
		    photo:[{pic:FeedInfo.pic}],
		    map:FeedInfo.map,
			like:FeedInfo.like,
			comment:FeedInfo.comment,
			view:FeedInfo.view,
			category:{
				for:FeedInfo.for,
				name:FeedInfo.name,
				code:FeedInfo.code
			},
			created: FeedInfo.created,
		    updated: FeedInfo.created
		});
	}
}