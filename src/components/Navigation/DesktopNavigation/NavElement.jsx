import DropdownElement from "./DropdownElement";

const NavElement = ({ title, items }) => (
      <div className="navbar-item has-dropdown is-hoverable navbar-group-item">
            <span className="navbar-link">{title}</span>
            <ul className="navbar-dropdown is-boxed">
                  {items.map((item) => (
                        <DropdownElement {...item} />
                  ))}
            </ul>
      </div>
);

export default NavElement;
