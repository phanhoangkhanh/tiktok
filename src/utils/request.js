import axios from 'axios';

const request = axios.create({
    // đinh hình 1 phan url
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

//async là 1 hàm  promise
export const get = async (path, options = {}) => {
    // request phía trên
    const respond = await request.get(path, options);
    // . data truoc 1 lần
    return respond.data;
};

export default request;
