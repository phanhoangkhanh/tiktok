import * as httpRequst from '~/utils/httpRequest';

export const getAnUser = async (user) => {
    //console.log('da tuyen', user);
    try {
        const result = await httpRequst.get('users/@' + user.nickname);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
