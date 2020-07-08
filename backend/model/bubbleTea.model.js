const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bubbleTeaSchema = new Schema ({
    
    dish:{type:String,required:false,unique:false},
    price:{type:Number, maxlength:2},
    looks:{type:Number,maxlength:2},
    taste:{type:Number,maxlength:2},
    originality:{type:Number,maxlength:2},
    freshness:{type:Number,maxlength:2},
    aroma:{type:Number,maxlength:2},
    texture:{type:Number,maxlength:2},
    quantity:{type:Number,maxlength:2},
    review:{type:String},
    name:{type:String},
    store:{type:mongoose.Schema.Types.ObjectId,ref:"BTeaRestaurant"}
})

const bubbleTea = mongoose.model('bubbleTea',bubbleTeaSchema)

module.exports = bubbleTea;