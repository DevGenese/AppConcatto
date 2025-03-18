import axios from 'axios';

const apiConcatto = axios.create({
    baseURL: 'https://concatto-consultoria.org/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiConcatto;