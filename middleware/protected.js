// const Users = require('../users/usersModel');
// const bcrypt = require('bcryptjs');

// function protected(req, res, next) {
//     let { username, password } = req.headers;
  
//     if (username && password) {
//       Users.findBy({ username })
//         .first()
//         .then(user => {
//           if (user && bcrypt.compareSync(password, user.password)) {
//             next();
//           } else {
//             res.status(401).json({ message: 'You cannot pass!!' });
//           }
//         })
//         .catch(error => {
//           res.status(500).json(error);
//         });
//     } else {
//       res.status(400).json({ message: 'please provide credentials' });
//     }
//   }

// module.exports = protected;