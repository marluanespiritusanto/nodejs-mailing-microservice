const server = require('express')();
const bodyParser = require('body-parser');
const config = require('./config');

server.use(bodyParser.json());
require('./util')(config);
require('./routes/get')(server);
require('./routes/post')(server);

server.listen(config.PORT, () => {
	console.log(`Database Microservice running on port ${config.PORT}`);
});
