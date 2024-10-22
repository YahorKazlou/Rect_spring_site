import classNames from 'classnames/bind';
import styles from './BurgerElement.module.css';

const cx = classNames.bind(styles);

const BurgerElement = ({ isMenuOpen, onClick }) => (
    <div
        className={styles.navbarBurger}
        data-target="navMenu"
        role="menuitem"
        tabindex="0"
        onClick={onClick}
    >
        <div
            className={cx({
                hamburgerReact: true,
                opened: isMenuOpen,
            })}
            aria-expanded="false"
            role="button"
            tabindex="0"
        >
            <div className={cx({ stick: true, top1: true })}></div>
            <div className={cx({ stick: true, top2: true })}></div>
            <div className={cx({ stick: true, top3: true })}></div>
        </div>
    </div>
);

export default BurgerElement;
