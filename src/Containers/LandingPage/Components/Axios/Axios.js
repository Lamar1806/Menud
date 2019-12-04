import axios from 'axios';

let key = "MlJkqIESBePbUsVYw9tFJehKGAFON6PASL7qVkqtvliiClNANkN4CAfjZaaZ1ohZ";

var instance = axios.create({
    // baseURL: 'https://dev.menud.co/api/Platelists/',
    baseURL: 'https://dev.menud.co/api/Platelists/',
    headers: {'Authorization': key}
});

export default instance;