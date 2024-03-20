import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '~/components/Button';
import { Share, VerticalMenu } from '~/components/Icons';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img
                    src="https://www.inhuydat.com/uploads/hinhthe/IMG_1111_copy.jpg"
                    alt="..."
                    className={cx('avarta')}
                />
                <div className={cx('inner-info')}>
                    <div className={cx('nick-name')}>DVN</div>
                    <div className={cx('full-name')}>DUy vũ</div>
                    <Button primary className={cx('btn')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('bottom-info')}>
                    <strong class={cx('counts')}>0</strong>
                    <span class={cx('fields')}>Following</span>

                    <strong class={cx('counts')}>0</strong>
                    <span class={cx('fields')}>Followers</span>

                    <strong class={cx('counts')}>0</strong>
                    <span class={cx('fields')}>Likes</span>
                </div>
                <div className={cx('icon-group')}>
                    <Share className={cx('share')} />
                    <VerticalMenu />
                </div>
            </div>
            <div className={cx('tag-border')}>
                <span className={cx('tag-titile')}>Video</span>
                <span className={cx('tag-titile')}>Liked</span>
            </div>
            <div className={cx('videos-bar')}>
                <video src="" className={cx('video-item')} />
                <video src="" className={cx('video-item')} />
                <video src="" className={cx('video-item')} />
                <video src="" className={cx('video-item')} />
            </div>
        </div>
    );
}

export default Profile;
