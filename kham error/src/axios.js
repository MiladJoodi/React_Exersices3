import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
})