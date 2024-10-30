import { USER_LOGIN } from './actions';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
