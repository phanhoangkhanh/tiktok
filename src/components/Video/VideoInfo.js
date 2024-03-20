import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

function VideoInfo({ props }) {
    return (
        <div className={cx('wrapper-info')}>
            <img src={props.user.avatar} alt="..." className={cx('image')} />
            <div className={cx('text-info')}>
                <Link
                    className={cx('link-nickname')}
                    to={`${props && props.user.nickname}`}
                >
                    {props.user.first_name}
                </Link>{' '}
                <div className={cx('ex-message')}>{props.user.nickname}</div>
                <div className={cx('message')}>{props.description}</div>
            </div>
            <Button small primary className={cx('info-button')}>
                Follow
            </Button>
        </div>
    );
}

export default VideoInfo;
