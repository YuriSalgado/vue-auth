import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api';
//axios.defaults.baseURL = 'https://60a17790d2855b00173b22c0.mockapi.io/auth/v1/';
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');