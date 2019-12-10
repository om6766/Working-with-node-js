const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Add =require('../models/add');

router.post("/",function(req,res,next){
	const worker = new Add({
		_id : req.body._id,
		type:4
	});
	worker
	.save()
	.then(result =>{
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(200).json({
		message: 'Handling POST request for /workers',
		createdWorker:worker._id
	});
});

router.get('/:workerId',function(req,res,next){
	const id = req.params.workerId;
	Add.find({workerId : id})
	.exec()
	.then(doc => {
		console.log("From Database",doc);
		if(doc){
			res.status(200).json({
				worker : doc._id}
				);
		}else{
			res.status(404).json({message:"Not valid worker"})
		}
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({error : err});
	});
});


module.exports = router;