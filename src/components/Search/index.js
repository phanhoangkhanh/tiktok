import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// tai instane ( utils/ requset ) import thay cho axios thuần
import * as request from '~/utils/httpRequest';
import * as searchService from '~/Service/searchService';
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
import { useDebound } from '~/hooks';

const cx = classNames.bind(styles);

// link API: https://tiktok.fullstack.edu.vn/api/users/search?q=phuong&type=less

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // layt data debounced de lam cham thoi gian call API
    const debounced = useDebound(searchValue, 500);
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
        //CACH 1 : dùng encode đễ mã hóa các từ typing vào, tránh trùng ký tự '& ? =' của API
        //     fetch(
        //         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //             debounced,
        //         )}&type=less`,
        //     )
        //         .then((res) => res.json())
        //         .then((res) => {
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             // neu bi lỗi cung ngung loading
        //             setLoading(false);
        //         });
        // }, [debounced]);

        //CACH 2: DÙNG THƯ VIEN AXIOS XỬ LÝ API GON HƠN
        //bớt dc 1 lần .then -> chuyển sang json
        // axios
        //     .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     }).get(`users/search`, {
        //     params: {
        //         q: debounced,
        //         type: 'less',
        //     },
        // })
        // .then((res) => {
        //     //console ra check câu hinh và truy xuât phu hop
        //     console.log(res);
        //     setSearchResult(res.data.data);
        //     setLoading(false);
        // })
        // .catch(() => {
        //     // neu bi lỗi cung ngung loading
        //     setLoading(false);
        // });
        //}, [debounced]);

        //CACH 3:  Hàm get đã viet sẵn bên Utils
        //     request
        //         .get(`users/search`, {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         })
        //         .then((res) => {
        //             //console ra check câu hinh và truy xuât phu hop
        //             console.log(res);
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             // neu bi lỗi cung ngung loading
        //             setLoading(false);
        //         });
        // }, [debounced]);

        // CACH 4: ASYNC TRUC TIEP XHR
        // taoo 1 hàm async - XHR ( ko phải fetch )
        // const fetchAPI = async () => {
        //     // asyn trả về res luôn
        //     try {
        //         const res = await request.get('users/search', {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         });
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };
        //fetchAPI();

        // CACH 5: TÁCH RIENG RA SEARCH SERVICE ĐỂ CALL VÀO
        const fetApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div>
            <Tippy
                interactive //dùng để giao tiep với modal
                appendTo={() => document.body} // tránh tippy warning - tippy append vào thẻ body chung
                visible={showResult && searchResult.length > 0}
                render={(attr) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attr}
                    >
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
                            {!loading && (
                                <FontAwesomeIcon icon={faCircleXmark} />
                            )}
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
        </div>
    );
}

export default Search;
