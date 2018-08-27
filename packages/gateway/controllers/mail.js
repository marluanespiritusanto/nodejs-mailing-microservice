const mailService = require('../services/mail');
const { pushMsgToQ } = require('../Q/connect');

async function getMails() {
	return await mailService.getMails();
}

async function getMail(id) {
	return await mailService.getMail(id);
}

async function createEmail(args) {
	let result, err;
	try {
		result = await mailService.createEmail(args);
	} catch (ex) {
		err = ex;
	}
	// Push message to RabbitMQ
	pushMsgToQ(JSON.stringify(args));
	return result || err;
}

module.exports = {
	getMail,
	getMails,
	createEmail
};
