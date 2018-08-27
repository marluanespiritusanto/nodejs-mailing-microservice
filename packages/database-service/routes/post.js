const MailController = require('../controllers/mail');

module.exports = server => {
	server.post('/mails', MailController.creatMail);
};
