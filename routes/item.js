//Route module for handeling queries regarding items

const express=require('express');
const route=express.Router();
const Item=require('../db/models').itemModel;


//API handlers

//GET Handlers:
//GET Items from Search Bar(name):                  //Done
route.get('/search',(req,res,next)=>{
    Item.find({name: req.query.name}).then((item)=>{
        res.status(200).send(item)
    }).catch(next);
});


//GET Items from Filters:
route.get('/filter',(req,res,next)=>{
    console.log(req.query);
    Item.find(req.query).then((item)=>{
        res.status(200).send(item)
    }).catch(next);
});


//GET Item details:                             //Done
route.get('/:id',(req,res,next)=>{
    Item.findById(req.params.id).then((item)=>{
        res.status(200).send(item)
    }).catch(next);
});



//---------------------------------------------------------------------------//


//post an item
route.post('/',(req,res,next)=>{
    Item.create(req.body).then((item)=>{
        res.status(200).send("Item posted");
        console.log(req.body);
    }).catch(next);
});

//--------------------------------------------------------------------------//

//Edit a posted item                                //Get back item name
route.put('/:id',(req,res,next)=>{
    Item.updateOne({_id: req.params.id},req.body).then((item)=>{
        res.status(200).send(`${item.name} has been updated`);
        console.log(req.body);
    }).catch(next);
});

//-------------------------------------------------------------------------//


//Delete a posted item                              //Get back item name
route.delete('/:id',(req,res,next)=>{
    Item.deleteOne({_id: req.params.id}).then((item)=>{
        res.status(200).send(`${item.name} has been removed`);
    }).catch(next);
});



module.exports=route;