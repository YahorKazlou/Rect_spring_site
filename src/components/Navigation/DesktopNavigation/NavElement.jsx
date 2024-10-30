import DropdownElement from './DropdownElement';
import styles from './NavElement.module.css';

const NavElement = ({ title, items }) => (
    <div className={styles.navElement}>
        <span className={styles.navbarLink}>{title}</span>
        <ul className={styles.navbarDropdown}>
            {items.map((item) => (
                <DropdownElement {...item} key={item.name} />
            ))}
        </ul>
    </div>
);

export default NavElement;
