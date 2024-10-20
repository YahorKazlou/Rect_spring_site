import DropdownElement from "./DropdownElement";

const NavElement = ({ title, items, isOpened, onClick }) => (
      <div
            className={`navbar-item has-dropdown is-hoverable navbar-group-item ${isOpened ? "subitems-show" : ""}`}
      >
            <span className="navbar-link" onClick={onClick}>
                  {title}
            </span>
            <ul className="navbar-dropdown is-boxed">
                  {items.map((item) => (
                        <DropdownElement {...item} />
                  ))}
            </ul>
      </div>
);

export default NavElement;
