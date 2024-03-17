import { HeaderOnly } from '~/layouts';

import config from '~/config';
import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Profile from '~/page/Profile';

// ko đăng nhập vẫn coi dc
export const publicRoutes = [
    //{ path: '/', component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    // /@ match sau dau : là pattern tùybien
];
// Đăng nhập mới xem dc
export const privateRoutes = [];
