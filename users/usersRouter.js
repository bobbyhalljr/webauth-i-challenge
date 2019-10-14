
const express = require('express');

const Users = require('../users/usersModel.js');
const protected = require('../middleware/protected');

const router = express.Router();

router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

// function protected(req, res, next) {
//   let { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: 'You cannot pass!!' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   } else {
//     res.status(400).json({ message: 'please provide credentials' });
//   }
// }

module.exports = router;
