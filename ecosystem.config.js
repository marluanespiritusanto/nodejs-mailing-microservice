const path = require('path');
const basePath = path.join(__dirname, '/packages');

module.exports = {
	apps: [
		{
			name: 'API Gateway',
			script: `${basePath}/gateway/server.js`,
			watch: true,
			env: {
				PORT: process.env.PORT || 3000,
				DB_SERVICE_PORT: 4000,
				Q_URI: 'amqp://dnizthib:uyYjprRUT3aTAj5D5uPwwz62zxEuttzs@llama.rmq.cloudamqp.com/dnizthib'
			},
			instances: 'max',
			exec_mode: 'cluster'
		},
		{
			name: 'Database Microservice',
			script: `${basePath}/database-service/server.js`,
			watch: true,
			env: {
				PORT: process.env.PORT || 4000,
				MONGO_URI: 'mongodb://admin:adminpassword1@ds133642.mlab.com:33642/microservice_db'
			}
		},
		{
			name: 'Mailing Microservice',
			script: `${basePath}/mailing-service/index.js`,
			watch: true,
			env: {
				MJ_API_PUBLIC: '398cddb56088cefb52d0e32e0fbabe56',
				MJ_API_SECRET: '680f0f6eeef88ae00f97c31d6beace93',
				Q_URI: 'amqp://dnizthib:uyYjprRUT3aTAj5D5uPwwz62zxEuttzs@llama.rmq.cloudamqp.com/dnizthib'
			}
		}
	]
};
