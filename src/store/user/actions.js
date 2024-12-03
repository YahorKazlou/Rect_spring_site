import { authLogin, authSignup } from '../../api';

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

export const login = (login, password) => async (dispatch) => {
    dispatch(loginPending());
    const response = await authLogin(login, password);
    const { status } = response;
    const data = await response.json();
    if (status === 200 || status === 204) {
        dispatch(
            loginSuccess({
                login,
                password,
            })
        );
        localStorage.setItem('authToken', data?.authToken);
        localStorage.setItem('refreshToken', data?.refreshToken);
    } else {
        dispatch(loginError());
    }
};

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

export const signup = (userData) => async (dispatch) => {
    dispatch(signupPending());
    const response = await authSignup(userData);
    const { status } = response;
    const data = await response.json();
    if (status === 200 || status === 204) {
        dispatch(signupSuccess(userData));
    } else {
        dispatch(signupError(data));
    }
};
