const express = require('express');
const router = express.Router({mergeParams:true});
const BTeaRestaurant = require('../model/bubbleTeaStore.model.js');
const bubbleTea = require('../model/bubbleTea.model.js');

//GET ALL BUBBLE TEA STORES 
router.route('/').get((req,res)=>{
    BTeaRestaurant.find()
    .then((stores=>res.json(stores)&& console.log(stores)))
    .catch(err=>res.status(400).json('Error' + err))
})

// GET A SINGLE RESTAURANT
router.route('/store/:storeId').get((req,res)=>{
    BTeaRestaurant.findById({_id: req.params.storeId}).populate("dishes")
    .then((store)=>{
        res.json(store) && console.log(store)
    })
    .catch(err=>res.json(err.message))
})

//ADD A STORE
router.route('/addstore').post((req,res)=>{
    
    // the body contains  establishment,adress,phoneNumber, an array of dishes that hold object id referances to
    //all the dishes that the store has 
    const newStore = new BTeaRestaurant(req.body);
    
    newStore.save()
    .then(()=>res.json('New Store added'))
    .catch(err=>res.json(err.message))
})

// EDIT A STORE



// DELETE A STORE 
router.route('/store/:storeId').delete((req,res)=>{
    BTeaRestaurant.findByIdAndRemove(req.params.storeId,((err)=>{
        if(err){
            res.json(err.message)
        };
        res.json('store deleted')
    }))
})




// tried creating a  new  dish in multiple ways, from now on when creating a new item 
//when you are  referencing a schema , make sure to  start from the parent from there create a new dish
//------------------------------------------------------
//this is what i tried to
// const newBubbleTea = new bubbleTea(req.body);

// const {storeId} = req.params;

// newBubbleTea.store = storeId;

// newBubbleTea.save().then( console.log(newBubbleTea._id) &&
//     BTeaRestaurant.findByIdAndUpdate({_id:req.params.storeId}, {$push:{dishes: newBubbleTea._id}},{new:true})
// ).then(res.json('new menu item added successfully')).catch(err => res.json(err.message))


//POST A SINGLE DISH
router.route('/store/:storeId/dishes').post((req,res)=>{
    BTeaRestaurant.findById(req.params.storeId,(store)=>{
        console.log(store)
        console.log(req.params.storeId)
        let newbubbleTea = new bubbleTea({
            dish:req.body.dish,
            price:req.body.price,
            looks:req.body.looks,
            taste:req.body.taste,
            originality:req.body.originality,
            freshness:req.body.freshness,
            aroma:req.body.aroma,
            texture:req.body.texture,
            quantity:req.body.quantity,
            review:req.body.review,
            name:req.body.name,
        })
        newbubbleTea.save((bubbleTea)=>{
            store.dishes.push(bubbleTea)
            store.save((store)=>{
                res.json(store) && console.log("succefully added a new dish!")
            })
        })
    })
})

//GET ALL DISHES
router.route("/dishes").get((req,res)=>{
    bubbleTea.find().then((dishes)=>{res.json(dishes)}).catch((err) => res.json(err.message))
})

//GET A SINGLE DISH 
router.route('/store/:storeId/dishes/:dishId').get((req,res)=>{
    BTeaRestaurant.findById(req.params.storeId).populate("dishes").then((dish)=>{
        bubbleTea.findById(req.params.dishId).then((dish)=>{
            res.json(dish)
        }).catch(err => res.json(err.message))
    })
})

//EDIT A DISH

//DELTE A DISH
//I gues this work , tommorow it will be time to mnove into the front end to see if you can connect both sides 
router.route('/store/:storeId/dishes/:dishId').delete((req,res)=>{
    BTeaRestaurant.findById(req.params.storeId).populate("dishes")
    .then(() => {
        bubbleTea.findByIdAndRemove(req.params.dishId).then(()=>{
            res.json('dish successfully deleted')
        }).catch(err => res.json(err.message))
    })
})



module.exports  = router;