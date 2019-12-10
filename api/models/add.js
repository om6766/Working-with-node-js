const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
	_id : {type: String, required: true},
	type: Number
});

module.exports = mongoose.model('Add',productSchema);