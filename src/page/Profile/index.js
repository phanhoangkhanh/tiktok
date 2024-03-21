import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import styles from './Profile.module.scss';
import Button from '~/components/Button';
import { Share, VerticalMenu } from '~/components/Icons';
import * as callUserAPI from '~/Service/getAnUser';

const cx = classNames.bind(styles);
function Profile() {
    const params = useParams();
    //console.log(params);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await callUserAPI.getAnUser(params);
            setDataUser(result);
        };
        if (params) {
            fetchApi();
        }
    }, []);
    const [dataUser, setDataUser] = useState({});
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img src={dataUser.avatar} alt="..." className={cx('avarta')} />
                <div className={cx('inner-info')}>
                    <div className={cx('nick-name')}>{dataUser.nickname}</div>
                    <div className={cx('full-name')}>
                        {`${dataUser.first_name} ${dataUser.last_name}`}
                    </div>
                    <Button primary className={cx('btn')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('bottom-info')}>
                    <strong class={cx('counts')}>
                        {dataUser.followings_count}
                    </strong>
                    <span class={cx('fields')}>Following</span>

                    <strong class={cx('counts')}>
                        {dataUser.followers_count}
                    </strong>
                    <span class={cx('fields')}>Followers</span>

                    <strong class={cx('counts')}>{dataUser.likes_count}</strong>
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
                {dataUser &&
                    dataUser?.videos?.map((video, index) => (
                        <video
                            key={index}
                            src={video.file_url}
                            className={cx('video-item')}
                            controls
                            muted="muted"
                            onMouseOver={(e) => {
                                e.target.play();
                            }}
                            onMouseOut={(e) => {
                                e.target.pause();
                            }}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Profile;
