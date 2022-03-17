import axios from 'axios';

export const Api = async () => 
await axios.get('https://jsonplaceholder.typicode.com/users');