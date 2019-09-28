import axios from 'axios';

const app_key = '21633e8eb26efad4fe25ac9eb99aeed7';
const app_id = '603c8bc2';

export default axios.create({
    baseURL: 'https://api.edamam.com',
    header: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    params: {
        app_id: app_id,
        app_key: app_key,
        from: 0,
        to: 10
    }
});