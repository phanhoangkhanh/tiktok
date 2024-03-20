import * as httpRequest from '~/utils/httpRequest';

export const getVideoList = async (type = 'for-you', page) => {
    try {
        // cau truc riêng của API back-end
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
