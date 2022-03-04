import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.1.4:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token;
    }

    return req;
})

export const createProperty = (propertyInfo) => API.post('/properties/create', propertyInfo)