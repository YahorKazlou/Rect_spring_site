import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export const Input = ({ onChange, errorMsg, type, ...otherProps }) => {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
        const value = e.target.value;
        setValue(value);
        onChange(value);
    };

    return (
        <div>
            <input
                value={value}
                onChange={onChangeValue}
                className={cx({ input: true, inputError: !!errorMsg })}
                type={type}
                {...otherProps}
            />
            {errorMsg && <div className={styles.errorMessage}>{errorMsg}</div>}
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};
