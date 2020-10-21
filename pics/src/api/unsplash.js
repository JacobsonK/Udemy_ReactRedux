import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lPBKY05J0NWNTRQvgYO_um2tVObr5rvKdDGLwDeT05c'
    }
});
