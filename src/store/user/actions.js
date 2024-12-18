import { authLogin, authSignup } from '../../api';
import {
    loginPending,
    loginSuccess,
    loginError,
} from './loginActions';
import {
    signupPending,
    signupSuccess,
    signupError,
} from './signupActions';

export const login = (login, password, onSuccess) => async (dispatch) => {
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
        localStorage.setItem('accessToken', data?.accessToken);
        localStorage.setItem('refreshToken', data?.refreshToken);
        onSuccess?.();
    } else {
        dispatch(loginError());
    }
};

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
