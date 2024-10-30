import Logo from '../Logo';
import NavElement from './NavElement';
import styles from './NavDesktop.module.css';

const NavDesktop = ({ navarray }) => (
    <div className={styles.navbarDesktop}>
        <div>
            <Logo />
        </div>
        <div className={styles.navbarMenuMesktop}>
            {navarray.map((item) => (
                <NavElement {...item} key={item.key} />
            ))}
        </div>
    </div>
);

export default NavDesktop;
