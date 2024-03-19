import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Content from './Content';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Content />
        </div>
    );
}

export default Home;
