import styles from './button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ children, ...otherProps }) => {
    return (
        <button className={styles.button} {...otherProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func.isRequired,
};
