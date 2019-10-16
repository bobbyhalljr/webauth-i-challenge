import axios from "axios";

export const axiosWithAuth = () => {
  
    return axios.create({
      baseURL: "https://web-auth-project-1.herokuapp.com/api",
      headers: {
        username: 'bobby',
        password: '123'
      }
    });
  };