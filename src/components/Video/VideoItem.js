import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div className={cx('wrapper-item')}>
            <div>VIDEO ITEM</div>
            <div>VideoIcons</div>
        </div>
    );
}

export default VideoItem;
