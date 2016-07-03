/**
 * Created by thuanle on 04/05/2016.
 */
export default class BaseError{
    constructor(){
        this.data={httpCode:200,errorCode:200,message:''};
    }

    get(){
        return this.data;
    }

    setHttpCode(httpCode){
        this.data.httpCode=httpCode;
    }

    setErrorCode(errorCode){
        this.data.errorCode=errorCode;
    }

    setMessage(message){
        this.data.message=message;
    }
}