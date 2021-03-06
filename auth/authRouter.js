const express = require('express');
const Users = require('../users/usersModel');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    // validate the user
    if(user){
      // hash the password
      const hash = bcrypt.hashSync(user.password, 8);
      // we override the password with the hash
      user.password = hash;
    }
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

router.post('/login', (req, res) => {
      let { username, password } = req.body;
    
      if (username && password) {
        Users.findBy({ username })
          .first()
          .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
              // set session to user
              req.session.user = user;
              res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
              res.status(401).json({ message: 'You cannot pass!!' });
            }
          })
          .catch(error => {
            res.status(500).json(error);
          });
      } else {
        res.status(400).json({ message: 'please provide credentials' });
      }
  });

router.get('/logout', (req, res) => {
  if(req.session){
    req.session.destroy(err => {
      if(err){
        res.json({ message: 'We could NOT log you out' })
      } else {
        res.status(200).json({ message: 'BYE, you successfully logged out' })
      }
    })
  } else {
    res.status(200).json({ message: 'please log in' })
  }
})

module.exports = router;