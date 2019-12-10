const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Add =require('../models/add');

router.post("/",function(req,res,next){
	const product = new Add({
		_id : req.body._id,
		type:1
	});
	product
	.save()
	.then(result =>{
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(200).json({
		message: 'Handling POST request for /assets',
		createdAsset:product
	});
});


router.get('/',function(req,res,next){
	Add.find({type: 1})
	.select("product _id")
    .populate("product", "_id")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/orders/" + doc._id
            }
          };
        })
      });
    })
	.catch(err =>{
		console.log(err)
	});
});


module.exports = router;