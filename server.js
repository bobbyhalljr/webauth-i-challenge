// require packages
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// require imports
const usersRouter = require('./users/usersRouter');
const authRouter = require('./auth/authRouter');

// setup express server
const server = express();

// setup middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// setup server routes
server.use('/api', authRouter)
server.use('/api/users', usersRouter);

// default (root) server route
server.get('/', (req, res) => {
    res.send("It's alive!");
  });

// export server
module.exports = server;