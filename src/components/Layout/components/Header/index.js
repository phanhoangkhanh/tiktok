import styles from './Header.module.scss';
import { useState } from 'react';
// cài npm i classnames
import classNames from 'classnames/bind';

//import Tippy để hiện bóng
import Tippy from '@tippyjs/react/headless';
import TippyNew from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircle,
    faCircleQuestion,
    faCircleXmark,
    faCloud,
    faCoins,
    faEarthAfrica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button';
import Menu from '~/components/Poppers/Menu';

//classname giúp ta có thể viết các ten class theo chuan html css với -
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'eps',
                    title: 'Espanone',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currenUser = true;
    const [searchResult, setSearchResult] = useState(['quyết đến cùng']);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserAlt} />,
            title: 'View Profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/log out',
            separate: true,
        },
    ];

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
                    {currenUser ? (
                        <>
                            <TippyNew
                                content="Upload Videos"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloud} />
                                </button>
                            </TippyNew>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={() => alert('HIHI')}>
                                Log In
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currenUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currenUser ? (
                            <img
                                src="https://bffmedia.vn/wp-content/uploads/2021/05/chup-anh-the-4.jpg"
                                className={cx('user-avarta')}
                                alt="P.H.Khanh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
