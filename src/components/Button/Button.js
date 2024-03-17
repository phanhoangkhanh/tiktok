import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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
    className, //sẽ là 1 className như css bthuong và dc css bên component gốc
    leftIcon,
    rightIcon,
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
    //className : 'hkwggj' - nếu ghi như các class truoc thì nó nhét chuỗi là className ( lấy key)
    // nét [className] thì nó lấy giá trị hkwggj làm key và nối chuỗi classes để css (css bên cha)
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        rounded,
        large,
        text,
        disable,
        [className]: true,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

// children truyền vao là 1 Node ( HTML element ) và bắt buoc phải có giá tri not undefinded
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    text: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
