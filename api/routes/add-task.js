const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Add =require('../models/add');

router.post("/",function(req,res,next){
	const product = new Add({
		_id : req.body._id,
		type:2
	});
	product
	.save()
	.then(result =>{
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(200).json({
		message: 'Handling POST request for /task',
		createdTask:product._id
	});
});


module.exports = router;