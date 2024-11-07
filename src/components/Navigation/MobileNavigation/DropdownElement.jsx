import { NAV_ELEMENT_TYPES } from '../../../constants';
import classNames from 'classnames/bind';
import styles from './DropdownElement.module.css';

const cx = classNames.bind(styles);

const DropdownElement = ({ type, name }) => (
    <li>
        {type === NAV_ELEMENT_TYPES.SUBHEADER ? (
            <div className={styles.navbarItem}>{name}</div>
        ) : (
            <a
                className={cx({
                    navbarItem: true,
                    viewAllProjects: type === NAV_ELEMENT_TYPES.VIEWALL,
                })}
                href="/"
            >
                {name}
            </a>
        )}
    </li>
);

export default DropdownElement;
