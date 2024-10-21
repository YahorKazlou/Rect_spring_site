import Logo from '../Logo';
import NavElement from './NavElement';

const NavDesktop = ({ navarray }) => (
    <div className="container navbar-desktop is-hidden-mobile is-hidden-tablet-only">
        <div className="navbar-brand">
            <Logo />
        </div>
        <div className="navbar-menu-desktop">
            {navarray.map((item) => (
                <NavElement {...item} key={item.key} />
            ))}
        </div>
    </div>
);

export default NavDesktop;
