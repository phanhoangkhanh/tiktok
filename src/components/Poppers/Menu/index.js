import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive //dùng để giao tiep với modal
            delay={[0, 1000]}
            placement="bottom-end"
            render={(attr) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attr}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
