import { LOGIN_SUCCESS } from './actions';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
