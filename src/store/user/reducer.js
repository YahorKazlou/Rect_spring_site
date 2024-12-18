import {
    LOGIN_SUCCESS,
} from './loginActions';
import {
    SIGNUP_PENDING,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from './signupActions';

const initialReducer = {
    userData: {},
    signup: {
        loading: false,
        error: null,
        data: null,
    },
};

const userReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
            };

        case SIGNUP_PENDING:
            return {
                ...state,
                signup: {
                    loading: true,
                    error: null,
                    data: null,
                },
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loading: false,
                    error: null,
                    data: action.payload,
                },
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                signup: {
                    loading: false,
                    error: action.payload,
                    data: null,
                },
            };

        default:
            return state;
    }
};

export default userReducer;
