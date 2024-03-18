import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItems({ title, to, icon }) {
    return (
        //NavLink co thuoc tính nav. Khi dc active thì nav.isAcitve là true.
        //cx cho truyen chuỗi hoac hàm. Khi active true thì gắn chữ active voi chuỗi class
        <NavLink
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive })}
        >
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItems;
