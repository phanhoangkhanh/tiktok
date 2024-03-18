import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                offset={[-15, 0]}
                render={() => renderPreview()}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avarta')}
                        src="https://tiemanhsky.com/wp-content/uploads/2020/03/%E1%BA%A3nh-th%E1%BA%BB-683x1024.jpg"
                        alt="Cúc cu"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>QuocNguyenPhu</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        </p>
                        <p className={cx('name')}>Quoc Nguyen </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
