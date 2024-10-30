import { useState } from 'react';
import Logo from '../Logo';
import NavElement from './NavElement';
import BurgerElement from './BurgerElement';
import classNames from 'classnames/bind';
import styles from './NavMobile.module.css';

const cx = classNames.bind(styles);

const NavMobile = ({ navarray }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openedNavElement, setOpenedNavElement] = useState(null);

    const toggleMenu = () => setIsMenuOpen((currentValue) => !currentValue);

    const navItemOnClick = (title) => () => {
        const isActive = title === openedNavElement;
        if (isActive) {
            setOpenedNavElement(null);
        } else {
            setOpenedNavElement(title);
        }
    };
    return (
        <div className={styles.container}>
            <div>
                <Logo />
                <BurgerElement isMenuOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            <div className={cx({ navMenu: true, isMenuOpen })}>
                <div>
                    <div className={styles.navbarMenuMobile}>
                        {navarray.map((item) => (
                            <NavElement
                                {...item}
                                isOpened={item.title === openedNavElement}
                                onClick={navItemOnClick(item.title)}
                                key={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
