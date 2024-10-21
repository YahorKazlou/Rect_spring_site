const DropdownElement = ({ type, name, icon }) => {
    if (type === "subheader") {
        return (
            <li>
                <div className="navbar-item">{name}</div>
            </li>
        );
    }

    return (
        <li>
            <a
                className={`navbar-item ${type === "viewall" ? " is-link view-all-projects" : ""}`}
            >
                {name}
                {icon}
            </a>
        </li>
    );
};

export default DropdownElement;
