const mongoose = require('mongoose');

module.exports = config => {
	mongoose.Promise = global.Promise;
	mongoose.connect(
		config.MONGO_URI,
		{ useNewUrlParser: true }
	);
};
