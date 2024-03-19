import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { VideoInfo, VideoItem } from '~/components/Video';

const cx = classNames.bind(styles);
function Content() {
    return (
        <>
            <div className={cx('content-wrapper')}>
                <VideoInfo />
                <VideoItem />
            </div>
            <div className={cx('content-wrapper')}>
                <VideoInfo />
                <VideoItem />
            </div>
            <div className={cx('content-wrapper')}>
                <VideoInfo />
                <VideoItem />
            </div>
        </>
    );
}

export default Content;
