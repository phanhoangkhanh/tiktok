import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import { getSuggestUser } from '~/Service/getSuggestUser';

const cx = classNames.bind(styles);
function SuggestedAccount({ label }) {
    const page = 6;
    const per_page = 5;
    const [suggestUsers, setSuggestUers] = useState([]);

    const fetchApi = async () => {
        const result = await getSuggestUser(per_page, page);
        setSuggestUers(result);
    };

    // cài hard 1 lần khởi đầu vào
    useEffect(() => {
        fetchApi();
    }, []);
    //console.log(suggestUsers);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestUsers.map((user, index) => (
                <AccountItem key={index} item={user} />
            ))}
            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}

export default SuggestedAccount;
