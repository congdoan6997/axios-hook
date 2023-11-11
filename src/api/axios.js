import axios from 'axios'
const BaseUrl = 'https://64f663232b07270f705e6b89.mockapi.io'
// const BaseUrl = 'https://jsonplaceholder.typicode.com';

export default axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-type': 'application/json'
    }
})