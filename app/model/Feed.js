import promise from 'bluebird';
import originMongoose from 'mongoose';

let mongoose=promise.promisifyAll(originMongoose);

let feedSchema=mongoose.Schema({
    title: {type:String,default:'',require:true},
    description: {type:String,default:''},
    photo:[{pic:{type:String,default:null}}],
    map:{type:String,default:''},
	like:{type:Number,default:0},
	comment:{type:Number,default:0},
	view:{type:Number,default:0},
	category:{
		for:{type:String,default:'female'},
		name:{type:String,default:''},
		code:{type:String,default:''}
	},
	created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});
module.exports=mongoose.model('Feed',feedSchema);
