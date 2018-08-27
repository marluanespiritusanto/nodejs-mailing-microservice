const MailController = require('../controllers/mail');

module.exports = server => {
	server.get('', (req, res) => {
		res.send('OK');
	});

	server.get('/mails', MailController.getMails);
	server.get('/mails/:id', MailController.getMail);
};
