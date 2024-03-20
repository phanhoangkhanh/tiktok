import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { VideoInfo, VideoItem } from '~/components/Video';

const cx = classNames.bind(styles);
function Content({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div className={cx('content-wrapper')} key={index}>
                    <VideoInfo props={item} />
                    <VideoItem props={item} />
                </div>
            ))}
        </>
    );
}

export default Content;
