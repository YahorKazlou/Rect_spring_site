import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from './user/reducer';

const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    composeWithDevTools()
);

export default store;
