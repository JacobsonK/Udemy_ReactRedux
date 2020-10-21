import axios from 'axios';

const KEY = 'AIzaSyCrTm4FwmD6w4WoMT01sVWu_dmNzsEuIX0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});