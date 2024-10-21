const DropdownElement = ({ type, name }) => {
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
                        className={`navbar-item ${type === "viewall" ? " is-link mb-5" : ""}`}
                  >
                        {name}
                  </a>
            </li>
      );
};

export default DropdownElement;
