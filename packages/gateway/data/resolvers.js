const mailController = require('../controllers/mail');

module.exports = {
	Query: {
		async mails() {
			return await mailController.getMails();
		},
		async mail(req, { id }) {
			return await mailController.getMail(id);
		}
	},
	Mutation: {
		async mail(req, args) {
			return await mailController.createEmail(args);
		}
	}
};
