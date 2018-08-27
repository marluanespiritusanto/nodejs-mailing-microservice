const amqp = require('amqplib/callback_api');
const { Q_URI } = require('../config');
const q = 'test_q';
let channel;

amqp.connect(
	Q_URI,
	(err, connection) => {
		if (err) throw new Error(err);

		connection.createChannel((err, ch) => {
			if (err) throw new Error(err);
			ch.assertQueue(q, { durable: true });
			channel = ch;
		});
	}
);

function pushMsgToQ(msg) {
	if (!channel) {
		setTimeout(pushToQ(msg), 1000);
	}
	channel.sendToQueue(q, Buffer.from(msg));
	return {
		m: 'done'
	};
}

module.exports = {
	pushMsgToQ
};
