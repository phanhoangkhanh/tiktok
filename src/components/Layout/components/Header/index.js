import styles from './Header.module.scss';
// cài npm i classnames
import classNames from 'classnames/bind';

//classname giúp ta có thể viết các ten class theo chuan html css với -
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo
            Search */}
            </div>
        </header>
    );
}
export default Header;
