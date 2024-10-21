import { NAV_ELEMENT_TYPES } from '../../../constants/navigation';

const DropdownElement = ({ type, name, icon }) => (
    <li>
        {type === NAV_ELEMENT_TYPES.SUBHEADER ? (
            <div className="navbar-item">{name}</div>
        ) : (
            <a
                className={`navbar-item ${type === NAV_ELEMENT_TYPES.VIEWALL ? ' is-link view-all-projects' : ''}`}
            >
                {name}
                {icon}
            </a>
        )}
    </li>
);

export default DropdownElement;
