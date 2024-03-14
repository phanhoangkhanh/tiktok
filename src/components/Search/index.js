import { useState, useEffect, useRef } from 'react';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
//import Tippy để hiện bóng
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

// link API: https://tiktok.fullstack.edu.vn/api/users/search?q=phuong&type=less

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const imputRef = useRef();

    //moi lần type bên Networtk Fetch sẽ call API về back-end.
    // cap key: value gửi dc kê trong muc Payload
    // giá tri API get dc bên mục Respond
    useEffect(() => {
        // nếu ko có giá tri searValue reuturn thoát hàm useEffect lun.
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        //dùng encode đễ mã hóa các từ typing vào, tránh trùng ký tự '& ? =' của API
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                // neu bi lỗi cung ngung loading
                setLoading(false);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive //dùng để giao tiep với modal
            visible={showResult && searchResult.length > 0}
            render={(attr) => (
                <div className={cx('search-result')} tabIndex="-1" {...attr}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={imputRef}
                    placeholder="Search account or something"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            imputRef.current.focus();
                        }}
                    >
                        {!loading && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}
                <Tippy content="Tim kiem">
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tippy>
            </div>
        </Tippy>
    );
}

export default Search;
