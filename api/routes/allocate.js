const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Allot =require('../models/allot');
var nextRunDate = new Date;
nextRunDate.setHours(nextRunDate.getHours() + 2);


router.post("/",function(req,res,next){
	const product = new Allot({
		workerId : req.params.worker,
    	assetId : req.params.asset,
    	taskId : req.params.task,
    	timeOfAllocation : (new Date()).toLocaleDateString(),
    	taskToBePerformedBy : nextRunDate
  		});
	product
	.save()
	.then(result =>{
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(200).json({
		message: 'Handling POST request for /workers',
		createdWorker: product
	});
});


module.exports = router;