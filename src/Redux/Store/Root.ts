import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { authEpic } from '@Redux/Epics/AuthEpics';
import { authReducer } from '@Redux/Reducers/AuthReducer';

export const rootEpic = combineEpics(
    authEpic,
    // More epics...
);

export const reducers = combineReducers({
    authReducer,
    // More reducers...
});