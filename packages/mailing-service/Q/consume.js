const amqp = require('amqplib/callback_api');
const { Q_URI } = require('../config');
const { sendMail } = require('../handler/mail');

module.exports = () => {
	const q = 'test_q';
	amqp.connect(
		Q_URI,
		(err, connection) => {
			if (err) throw new Error(err);

			connection.createChannel((err, ch) => {
				if (err) throw new Error(err);
				ch.assertQueue(q, { durable: true });
				ch.consume(
					q,
					msg => {
						let mail;
						try {
							mail = JSON.parse(msg.content.toString());
						} catch (ex) {
							console.log(ex);
							mail = msg.content.toString();
						}
						console.log('I received a Mail!!!! ', mail);
						try {
							sendMail(mail);
						} catch (ex) {
							console.log('------ klk');
							console.log(ex);
						}

						ch.ack(msg);
					},
					{ noAck: false }
				);
			});
		}
	);
};
