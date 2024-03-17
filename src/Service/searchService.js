import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    // asyn trả về res luôn
    try {
        const res = await httpRequest.get('users/search', {
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
