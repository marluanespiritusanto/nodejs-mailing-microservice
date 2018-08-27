const MailService = require('../services/mail');

class MailController {
	async getMail(req, res) {
		if (!req.params.id) {
			res.status(401).json({
				service: 'Database Microservice',
				status: 401,
				payload: 'Id must be sent'
			});
		}

		const mail = await MailService.getMail(req.params.id);
		res.json({
			service: 'Database Microservice',
			status: 200,
			payload: mail
		});
	}

	async getMails(req, res) {
		const mails = await MailService.getMails();
		res.json({
			service: 'Database Microservice',
			status: 200,
			payload: mails
		});
	}

	async creatMail(req, res) {
		const {
			body: { subject, receiver, content }
		} = req;

		const mail = await MailService.createMail({ subject, receiver, content });
		res.json({
			service: 'Database Microservice',
			status: 200,
			payload: mail
		});
	}
}

module.exports = new MailController();
