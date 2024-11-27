import { GET_PROJECTS_SUCCESS } from './actions';

const projectReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PROJECTS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

export default projectReducer;
