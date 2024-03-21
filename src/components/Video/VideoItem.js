import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Flag, Heart, Popper, Share } from '../Icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function VideoItem({ props }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const observe = new IntersectionObserver((entry) => {
        setIsVisible(entry[0].isIntersecting);
    });

    useEffect(() => {
        observe.observe(videoRef.current);
        if (isVisible && videoRef.current) {
            videoRef.current.play();
        } else if (!isVisible && videoRef.current) {
            videoRef.current.pause();
            //console.log('NGUNG', videoRef.current);
        }
    }, [isVisible]);
    const handleVideoEnded = () => {
        videoRef.current.play();
    };
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('item-video')}>
                <video
                    ref={videoRef}
                    src={props.file_url}
                    controls
                    className={cx('video-inner')}
                    muted="muted"
                    onEnded={handleVideoEnded}
                ></video>
            </div>
            <div className={cx('item-icons-list')}>
                <button>
                    <div className={cx('cover-item')}>
                        <Heart className={cx('round-item')} />
                    </div>
                    <strong className={cx('number')}>
                        {props.likes_count}
                    </strong>
                </button>
                <button>
                    <div className={cx('cover-item')}>
                        <Popper className={cx('round-item')} />
                    </div>
                    <strong className={cx('number')}>
                        {props.comments_count}
                    </strong>
                </button>
                <button>
                    <div className={cx('cover-item')}>
                        <Flag className={cx('round-item')} />
                    </div>
                    <strong className={cx('number')}>
                        {props.views_count}
                    </strong>
                </button>
                <button>
                    <div className={cx('cover-item')}>
                        <Share className={cx('round-item')} />
                    </div>
                    <strong className={cx('number')}>
                        {props.shares_count}
                    </strong>
                </button>
            </div>
        </div>
    );
}

export default VideoItem;
