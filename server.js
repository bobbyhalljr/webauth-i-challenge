// require packages
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

// require imports
const usersRouter = require('./users/usersRouter');
const authRouter = require('./auth/authRouter');
// configure knexConfig
const knexConfig = require('./data/db-config');

// setup express server
const server = express();

// configure express-session middleware
  const sessionConfig = {
    name: 'user', // default is connect.sid
    secret: 'this is the secret', // make dynamic in production
    cookie: {
      maxAge: 1000 * 60, // 1 min in milliseconds // should last longer in production
      // only set cookies over https. server will not send back a cookie over http
      secure: false, // set true in production
    },
    httpOnly: true,
    resave: false,
    // we have to change dynamically in an env variable, set to true when user accepts
    saveUninitialized: false, // GDPR laws against cookies being set automatically

    // change to use our database instead of memoryinstead of memory to save the sesssions
    store: new knexSessionStore({
      knex: knexConfig,
      createtable: true, // automatically create sessions table
      clearInterval: 1000 * 60 * 30, // delete expired sessions every 30 mins
    })
  }

// setup middleware
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

// setup server routes
server.use('/api', authRouter)
server.use('/api/users', usersRouter);

// default (root) server route
server.get('/', (req, res) => {
    res.send("It's alive!");
  });

// export server
module.exports = server;