import DropdownElement from './DropdownElement';
import classNames from 'classnames/bind';
import styles from './NavElement.module.css';

const cx = classNames.bind(styles);

const NavElement = ({ title, items, isOpened, onClick }) => (
    <div
        className={cx({
            navbarItem: true,
            hasDropdown: true,
            subitemsShow: isOpened,
        })}
    >
        <span className={styles.navbarLink} onClick={onClick}>
            {title}
        </span>
        <ul className={styles.navbarDropdown}>
            {items.map((item) => (
                <DropdownElement {...item} key={item.name} />
            ))}
        </ul>
    </div>
);

export default NavElement;
