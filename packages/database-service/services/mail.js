const MailRepository = require('../repositories/mail');

class MailService {
	getMail(id) {
		return MailRepository.getMail(id);
	}

	getMails() {
		return MailRepository.getMails();
	}

	createMail(mail) {
		return MailRepository.createMail(mail);
	}
}

module.exports = new MailService();
