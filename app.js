const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const workerRoutes = require('./api/routes/worker');
const assetRoutes = require('./api/routes/asset');
const taskRoutes = require('./api/routes/add-task');
const allocateRoutes = require('./api/routes/allocate');

// in place of url here your mongoDB cluster url whether it is local or cloud
mongoose.connect('url',{ useNewUrlParser: true });



app.use(morgan('dev'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers",
		"Origin,X-Resquested-With,Cnotent-Type,Accept,Authorization"
		);
	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods','GET','POST','PATCH','DELETE')
		return res.status(200).json({});
	}
	next();
});


app.use('/add-asset',assetRoutes);
app.use('/add-task',taskRoutes);
app.use('/add-worker',workerRoutes);
app.use('/assets/all',assetRoutes);
app.use('/allocate-task',allocateRoutes);
app.use('/get-tasks-for-workers/',workerRoutes);


app.use(function(req,res,next){
	const error = new Error('Not Found');
	error.status= 404;
	next(error);
})

app.use(function(error,req,res,next){
	res.status(error.status || 500);
	res.json({
		error : {
			message : error.message
		}
	});
});

module.exports = app;