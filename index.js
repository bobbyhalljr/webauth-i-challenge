// require server
const server = require('./server');
// dotenv
require('dotenv').config();

// listen on port || production
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
