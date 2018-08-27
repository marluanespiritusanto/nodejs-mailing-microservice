const MailSchema = require('../models/mail');

class MailRepository {
	async getMails() {
		const mails = await MailSchema.find();
		console.log(mails);
		return mails;
	}

	async getMail(id) {
		const mail = await MailSchema.findById(id);
		return mail;
	}

	async createMail(mail) {
		const mailCreated = await MailSchema.create(mail);
		return mailCreated;
	}
}

module.exports = new MailRepository();
