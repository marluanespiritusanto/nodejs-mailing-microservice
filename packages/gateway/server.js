const server = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const config = require('./config');
const schema = require('./data/schema');

server
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use('/graphql', graphqlExpress({ schema }))
	.use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))
	.listen(config.PORT, () => {
		console.log(`API Gateway running on port ${config.PORT}`);
	});
