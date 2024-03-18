import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from '~/layouts/components/SideBar/Menu';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                />

                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                />
            </Menu>
            <SuggestedAccount label="Suggested accounts" />
            <SuggestedAccount label="Following accounts" />
        </aside>
    );
}
export default Sidebar;
