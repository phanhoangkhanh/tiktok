import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    // asyn trả về res luôn
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
