import { useState, useEffect } from 'react';

const useStorageValue = (key) => {
    const [value, setValue] = useState(localStorage.getItem(key));

    const storageListener = (event) => {
        console.log(event);
        if (event.key === key) {
            setValue(event.newValue);
        }
    };

    useEffect(() => {
        window.addEventListener('storage', storageListener, false);

        return () => window.removeEventListener('storage', storageListener);
    }, []);

    return value;
};

export default useStorageValue;
