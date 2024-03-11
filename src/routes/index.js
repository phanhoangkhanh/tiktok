import { HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

// ko đăng nhập vẫn coi dc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
// Đăng nhập mới xem dc
export const privateRoutes = [];
