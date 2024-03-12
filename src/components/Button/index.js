import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    disable = false,
    text = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'; // chuyển đổi nút theo ý mình. ko chỉ button

    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        // có trang thái disable thì xóa prop onCkick + css pointer-events: none + userselect:none
        delete props.onClick;

        // RẤT HAY: tìm tât cả key bắt đầu on và function typeof. để xóa
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //truyen them 1 obj {primary:primary} vô - gia tri primay true. class = wrapper primary
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        rounded,
        large,
        text,
        disable,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
