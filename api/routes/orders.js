const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
	res.status(200).json({
		message: 'Handling GET request to /orders'
	});
});

router.post('/',function(req,res,next){
	res.status(200).json({
		message: 'Handling POST request to /orders'
	});
});

router.get('/:orderId',function(req,res,next){
		res.status(200).json({
			id:req.params.orderId,
			message: 'You passed an orderID'
		});
});

router.patch('/:orderId',function(req,res,next){
		res.status(200).json({
			id:req.params.orderId,
			message: 'You passed an orderID has been updated'
		});
});

router.delete('/:orderId',function(req,res,next){
		res.status(200).json({
			id:req.params.orderId,
			message: 'You passed an orderID has been deleted'
		});
});

module.exports = router;