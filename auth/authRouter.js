
const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel.js');

const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10)

    user.password = hash;

    Users.add(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: 'could NOT register user'
        })
    })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    if(username && password){
        Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                res.status(200).json({
                    message: `Welcome ${ user.username }!`
                })
            } else {
                res.status(401).json({
                    message: 'You shall not pass!'
                })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        res.status(400).json({
            message: 'please provide credentials'
        })
    }
})

module.exports = router;
