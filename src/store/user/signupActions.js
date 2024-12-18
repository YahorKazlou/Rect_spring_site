export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signupPending = () => ({
    type: SIGNUP_PENDING,
});

export const signupSuccess = (userData) => ({
    type: SIGNUP_SUCCESS,
    payload: userData,
});

export const signupError = (error) => ({
    type: SIGNUP_ERROR,
    payload: error,
});