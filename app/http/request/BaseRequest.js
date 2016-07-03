import baseResponse from './../BaseResponse';
export default class BaseRequest{
    responseErr(res,httpCode,messageCode,message){
        let response=new baseResponse();
        response.setSuccess(false);
        response.setMessageCode(messageCode);
        response.setMessageInfo(message);
        res.status(httpCode).json(response.get()).end();
    }
}
