const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Add =require('../models/add');

router.get('/',function(req,res,next){
	Add.find({type: 1})
	.exec()
	.then(docs=>{
		res.status(200).json(docs);
	})
	.catch(err =>{
		console.log(err)
	});
});