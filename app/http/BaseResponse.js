/**
 * Created by thuanle on 04/05/2016.
 */
export default class BaseResponse{
    constructor(){
        this.data={success:false,messageCode:null,messageInfo:'',body:{}};
    }

    get(){
        return this.data;
    }

    setSuccess(success){
        this.data.success=success;
    }

    setMessageCode(messageCode){
        this.data.messageCode=messageCode;
    }

    setMessageInfo(message){
        this.data.messageInfo=message || null;
    }

    setBody(body){
        this.data.body=body || {};
    }
}