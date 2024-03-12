import styles from './Header.module.scss';
import { useState } from 'react';
// cài npm i classnames
import classNames from 'classnames/bind';

//import Tippy để hiện bóng
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button';

//classname giúp ta có thể viết các ten class theo chuan html css với -
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState(['quyết đến cùng']);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="TIKTOK" />
                </div>
                {/* Tippy để hiện các slect */}
                <Tippy
                    interactive //dùng để giao tiep với modal
                    visible={searchResult.length > 0}
                    render={(attr) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attr}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                        <Tippy content="Tim kiem">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text rounded>
                        Upload
                    </Button>
                    <Button primary onClick={() => alert('HIHI')}>
                        Log In
                    </Button>
                </div>
            </div>
        </header>
    );
}
export default Header;
