import axios from 'axios';
export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5/"
});
export const apikey = "aad3d2a765087a14d9ec84ff7f0af4b1";