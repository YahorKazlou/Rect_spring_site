import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from './user/reducer';
import projectReducer from './projects/reducer';

const store = createStore(
    combineReducers({ user: userReducer, projects: projectReducer }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
