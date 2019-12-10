const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	workerId : { type: String, required: true },
    assetId : { type: String, default : "TV" },
    taskId : { type: String, default : "Food" },
    timeOfAllocation : Date,
    taskToBePerformedBy :Date
});

module.exports = mongoose.model('Allot', productSchema);