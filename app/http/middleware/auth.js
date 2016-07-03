/**
 * Created by thuan on 5/3/2016.
 */
 import BaseResponse from './../BaseResponse';
 import appConstant from './../../util/AppConstant';
 import jwt from "jsonwebtoken";
 import User from './../../model/Users';
export default class auth{
  checkToken(req,res,next){
      let token=req.headers['x-access-token'];
      let self=this;
      if(token){
        jwt.verify(token, appConstant.TOKEN_SECURE_KEY, function(err, decoded) {
          if(err){
              res.status(403).json(self.setRes(false,"Token is not found")).end();
          }
          else{
            let option={'_id':decoded._id,'secret_key':decoded.secret_key};
                User.findOneAsync(option)
                    .then(result=>{
                        if(result){
                            next();
                        }
                        else{
                          res.status(400).json(self.setRes(false,"Token can't confirm user")).end();
                        }
                    })
                    .catch(err=>{
                      console.log("bullshit")
                        res.status(500).json(self.setRes(false,"Internal server")).end();
                    });
          }
        });
      }
      else{
        res.status(403).json(self.setRes(false,"Permission Denied")).end();
      }
  }

  setRes(success,message){
    let response=new BaseResponse();
    response.setSuccess(success);
    response.setMessageInfo(message);
    return response.get();
  }
}
