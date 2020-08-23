import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithHeader } from '../utils/axiosWithHeader';

const Users = () => {
    const [user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    // function getUsers(){
        axios
        .get('https://web-auth-project-1.herokuapp.com/users')
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch(error => {
            alert(error.response)
        })
    // }

    // useEffect(() => {
    //     getUsers();
    // }, [])

    return (
        <h1>{user.username}</h1>
    )
}

export default Users;