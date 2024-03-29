import * as httpRequest from '~/utils/httpRequest';

export const getSuggestUser = async (per_page, page) => {
    try {
        // cau truc riêng của API back-end
        const res = await httpRequest.get('users/suggested', {
            params: {
                per_page,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
