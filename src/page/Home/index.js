import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Content from './Content';
import { getVideoList } from '~/Service/getVideoList';

const cx = classNames.bind(styles);

function Home() {
    const [page, setPage] = useState(1);
    const [contentVideo, setContentVideo] = useState([]);
    // gắn event để lang nghe viec lăn chuột và bỏ đi khi unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // lăn chột hơn chiều cao body thì thêm trang vào

    function handleScroll() {
        //console.log('cao:', document.body.offsetHeight / 2);
        //console.log(window.scrollY, '+', window.innerHeight);
        if (
            window.scrollY + window.innerHeight >=
            document.body.offsetHeight / 2
        ) {
            setPage((page) => page + 1);
            // console.log(page);
        }
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getVideoList('for-you', page);
            setContentVideo((prev) => [...prev, ...result]);
        };
        fetchApi();
    }, [page]);

    //console.log(contentVideo);
    return (
        <div className={cx('wrapper')}>
            <Content items={contentVideo} />
        </div>
    );
}

export default Home;
