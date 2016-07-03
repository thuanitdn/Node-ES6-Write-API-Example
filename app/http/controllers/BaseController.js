/**
 * Created by thuanle on 04/05/2016.
 */
import baseResponse from './../BaseResponse';
export default class BaseController{
    responseErr(res,httpCode,messageCode,message){
      let response=new baseResponse();
      response.setSuccess(false);
      response.setMessageCode(messageCode);
      response.setMessageInfo(message);
      res.status(httpCode).json(response.get()).end();
    }
    responseSuccess(res,status,messageCode,message,body){
        let response=new baseResponse();
        response.setSuccess(status);
        response.setMessageInfo(message);
        response.setMessageCode(messageCode);
        response.setBody(body);
        res.status(200).json(response.get()).end();
    }
}
