import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    //console.log(history);
    //phan tử cuoi của mảng -> leng - 1
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // kiểm tra có chứa children ko
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // gắn thêm mảng vao history.
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            //neu ko phải item thì nhét gia tri trả về lai lớp cha
                            // nếu ko khai báo sẽ bi loi nen default là function trống
                            onChange(item);
                        }
                    }}
                />
            );
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
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
