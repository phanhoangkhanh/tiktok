import axios from 'axios';

const request = axios.create({
    // đinh hình 1 phan url
    // ta khai bao ben env và call lại như duoi
    //console.log(process.env)
    baseURL: process.env.REACT_APP_BASE_URP,
});

//async là 1 hàm  promise - KO CAN DÙNG NỮA VÌ VIẾT RIÊNG TỪNG SERVICE CHO TỪNG HÀNH VI
export const get = async (path, options = {}) => {
    // request phía trên
    const respond = await request.get(path, options);
    // . data truoc 1 lần
    return respond.data;
};

export default request;
