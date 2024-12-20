export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginPending = () => ({
    type: LOGIN_PENDING,
});

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
});

export const loginError = () => ({
    type: LOGIN_ERROR,
});