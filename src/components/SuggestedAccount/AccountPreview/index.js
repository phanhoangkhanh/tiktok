import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview({ props }) {
    //console.log(props);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avarta')} src={props.avatar} alt="" />
                <Button primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{props.nickname}</strong>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </p>
                <p className={cx('name')}>{props.nickname}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        {props.followers_count}{' '}
                    </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>
                        {props.likes_count}{' '}
                    </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
