const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bubbleTeaRestaurantSchema = new Schema({
    establishment:{type:String,trim:true,unique:true},
    adress:{type:String,trim:true,required:true,unique:true},
    phoneNumber:{type:String,required:true,trim:true,required:true,unique:true},
    dishes:[{ type:mongoose.Schema.Types.ObjectId,ref :'bubbleTea'}],
    //Dish Schema contains 
    // dish ( name of the dish)
    // price 
    //presentation
    //taste
    //originality
    //freshness
    //aroma
    //texture
    //quantity
},{timestamps:true})


const BTeaRestaurant = mongoose.model('BTeaRestaurant',bubbleTeaRestaurantSchema)

module.exports = BTeaRestaurant;