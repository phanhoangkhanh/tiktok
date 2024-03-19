import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ item }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview props={item} />
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
                render={() => renderPreview({ item })}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avarta')} src={item.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{item.nickname}</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        </p>
                        <p
                            className={cx('name')}
                        >{`${item.last_name} ${item.first_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
