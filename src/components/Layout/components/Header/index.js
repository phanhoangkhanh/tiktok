import styles from './Header.module.scss';
// cài npm i classnames
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

//classname giúp ta có thể viết các ten class theo chuan html css với -
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="TIKTOK" />
                </div>
                <div className={cx('search')}>
                    <input
                        placeholder="Search account or something"
                        spellCheck={false}
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
export default Header;
