import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

function VideoInfo() {
    return (
        <div className={cx('wrapper-info')}>
            <img
                src="https://www.inhuydat.com/uploads/hinhthe/chup_hinh_the_dep_Dong_Nhi.jpg"
                alt="..."
                className={cx('image')}
            />
            <div className={cx('text-info')}>
                <Link className={cx('link-nickname')} to="/">
                    phkhanh
                </Link>{' '}
                Khánh vĩ đai
                <div className={cx('message')}>
                    Quyết xây nên đai nghiệp dài lâu.....
                </div>
            </div>
            <Button small primary className={cx('info-button')}>
                Follow
            </Button>
        </div>
    );
}

export default VideoInfo;
