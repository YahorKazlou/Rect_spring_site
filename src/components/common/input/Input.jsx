import { useState } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({ onChange, ...otherProps }) => {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
        const value = e.target.value;
        setValue(value);
        onChange?.(value);
    };

    return (
        <div>
            <input
                value={value}
                onChange={onChangeValue}
                className={styles.input}
                {...otherProps}
            />
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};
