 import Promise from 'bluebird';
 import appConstant from './../util/AppConstant';
 import jwtOrigin from "jsonwebtoken";
 import User from './../model/Users';
 let jwt=Promise.promisifyAll(jwtOrigin);
export default class GetInfoToken{
  get(token){
      let self=this;
      return jwt.verifyAsync(token,appConstant.TOKEN_SECURE_KEY)
      		.then(decoded=>{
            console.log(decoded);
      			return {'_id':decoded._id,'secret_key':decoded.secret_key};
      		})
      		.catch(err =>{
      			throw err;
      		});
  }


}
