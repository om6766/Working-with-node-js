const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product =require('../models/product');

router.get('/',function(req,res,next){
	Product.find()
	.exec()
	.then(docs=>{
		res.status(200).json(docs);
	})
	.catch(err =>{
		console.log(err)
	});
});

router.post("/",function(req,res,next){
	const product = new Product({
		_id : new mongoose.Types.ObjectId(),
		name : req.body.name,
		price : req.body.price
	});
	product
	.save()
	.then(result =>{
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(200).json({
		message: 'Handling POST request to /assets',
		createdProduct:product
	});
});

router.get('/:productId',function(req,res,next){
	const id = req.params.productId;
	Product.findById(id)
	.exec()
	.then(doc => {
		console.log("From Database",doc);
		if(doc){
			res.status(200).json(doc);
		}else{
			res.status(404).json({message:"No valid id"})
		}
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({error : err});
	});
});

router.patch('/:productId',function(req,res,next){
	res.status(200).json({
		message: 'Updated product '
	});
});

router.delete('/:productId',function(req,res,next){
	res.status(200).json({
		message: 'Deleted product'
	});
});

module.exports = router;