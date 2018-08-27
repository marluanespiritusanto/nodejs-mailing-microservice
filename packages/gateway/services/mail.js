const axios = require('axios').default;
const BASE_URL = 'http://localhost:4000';

async function getMails() {
	const mails = await axios.get(BASE_URL + '/mails');
	return mails.data.payload;
}

async function getMail(id) {
	const mail = await axios.get(BASE_URL + `/mails/${id}`);
	return mail.data.payload;
}

async function createEmail(mail) {
	const createdEmail = await axios.post(BASE_URL + '/mails', mail);
	return createdEmail.data.payload;
}

module.exports = {
	getMail,
	getMails,
	createEmail
};
