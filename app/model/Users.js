import Promise from 'bluebird';
import originMongoose from 'mongoose';

let mongoose=Promise.promisifyAll(originMongoose);
const UserSchema=new mongoose.Schema({
    name: {type:String,default:''},
    email: {type:String,default:''},
    secret_key:{type:String,default:'',require:true},
    phone:{type:String,default:''},
    address:{
        city:{type:String,default:''}
    },
    gender:{type:String,default:''},
    birthday: {type: Date,default:''},
    password:String,
    // status 1 active
    // status 2 unactive
    // status 3 banned
    status: {
        type: Number,
        default: 1,
        require:true
    },
    provider:{
        type:String,default:''
    },
    // role 1 user
    // role 22  sadmin
    // role 33 admin
    role: {
        type: Number,
        default: 1,
        require:true
    },
    created: {
        type: Date,
        default: Date.now
    },
    facebook:{}
});

export default mongoose.model('User',UserSchema);
