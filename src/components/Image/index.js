import { forwardRef, useRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    //Tipy cần ref để đinh vi trí của DOM. nếu dùng component thì ko có ref
    // ta dùng forwarRef để chuyển REf ra ngoài
    const realRef = useRef();
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        // nếu hình sai và ko co alt truyền vao thì lấy hình mac đinh noImage trong assets
        setFallBack(images.noImage);
    };
    // truyen them className vì mún css ở cả component cha cũng như component con
    return (
        <img
            className={classNames(className, styles.wrapper)}
            ref={realRef}
            {...props}
            alt={alt}
            src={fallBack || src}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
