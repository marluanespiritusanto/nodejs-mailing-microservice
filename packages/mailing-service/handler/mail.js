const { MJ_API_PUBLIC, MJ_API_SECRET } = require('../config');
const MailJet = require('node-mailjet').connect(
	MJ_API_PUBLIC,
	MJ_API_SECRET
);

console.log(MailJet);
async function sendMail(mail) {
	console.log(MJ_API_PUBLIC);
	console.log('-------> ', mail);
	const request = await MailJet.post('send').request({
		FromEmail: 'marluanespiritusantoguerrero@gmail.com',
		FromName: 'Marluan Espiritusanto',
		Subject: mail.subject,
		'Text-part': mail.content,
		Recipients: [
			{
				Email: mail.receiver
			}
		]
	});

	console.log(request.body);
}

module.exports = {
	sendMail
};
