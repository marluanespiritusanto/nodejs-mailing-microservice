const mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({
	subject: { type: String },
	receiver: { type: String },
	content: { type: String }
});

module.exports = mongoose.model('Mail', MailSchema);
