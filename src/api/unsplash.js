import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:
        'Client-ID 5333ef21fc4d833b201a63d19dc21a061208275db000fcf2533770aef1a8d974'
    }
});