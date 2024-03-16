import styles from './Header.module.scss';

// cài npm i classnames
import classNames from 'classnames/bind';

import TippyNew from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloud,
    faCoins,
    faEarthAfrica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Poppers/Menu';
import { MailBox, Message } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

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
    const ref = useRef(null);

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
                    <Link to={routes.home}>
                        <img src={images.logo.default} alt="TIKTOK" />
                    </Link>
                </div>

                {/* KHU VỰC SEAARCH */}
                <Search />
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
                            <TippyNew content="Message Sent" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Message />
                                </button>
                            </TippyNew>
                            <TippyNew content="Mail Box" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBox />
                                </button>
                            </TippyNew>
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
                            <Image
                                src="https://bffmedia.vn/wp-content/uploads/2021/05/...chup-anh-the-4.jpg"
                                className={cx('user-avarta')}
                                alt="P.H.Khanh"
                                ref={ref}
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
