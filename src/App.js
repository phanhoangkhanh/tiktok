import {
    BrowserRouter as Router,
    Route,
    Routes,
    RouterProvider,
} from 'react-router-dom';
// import Home from './page/Home';
// import Following from './page/Following';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // bên obj ta lưu là component. Nhưng cái element cần là 1 Element React
                        // nên ta phải dùng const Page để gián tiếp truyền vô
                        const Page = route.component;
                        // nếu bên route ko truyền layout thì măc đinh là DefaultLayout.
                        // nếu null thì ko có Layout ( sidebar + Header)
                        // nreu truyền Layout thì lấy Layout đó
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
