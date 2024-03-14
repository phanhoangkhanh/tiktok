import { HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Profile from '~/page/Profile';

// ko đăng nhập vẫn coi dc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    // /@ match sau dau : là pattern tùybien
];
// Đăng nhập mới xem dc
export const privateRoutes = [];
