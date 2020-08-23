const express = require('express');
const Users = require('../users/usersModel');
const protected = require('../middleware/protected');

const router = express.Router();

router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

module.exports = router;