const axios = require('axios').default;
const { pushMsgToQ } = require('../Q/connect');
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
	Query: {
		mails() {
			return getMails();
		},
		mail(req, { id }) {
			return getMail(id);
		}
	},
	Mutation: {
		mail(req, args) {
			let result, err;
			try {
				result = createEmail(args);
			} catch (ex) {
				err = ex;
			}

			pushMsgToQ(JSON.stringify(args));
			return result || err;
		}
	}
};
