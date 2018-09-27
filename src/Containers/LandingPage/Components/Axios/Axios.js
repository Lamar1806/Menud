import axios from 'axios';

let key = "MlJkqIESBePbUsVYw9tFJehKGAFON6PASL7qVkqtvliiClNANkN4CAfjZaaZ1ohZ";

var instance = axios.create({
    // baseURL: 'https://dev.menud.co/api/Platelists/',
    baseURL: 'http://app.menud.co/api/platelists/',
    headers: {'Authorization': key}
});

export default instance;