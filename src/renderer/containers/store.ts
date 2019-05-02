import { createStore, combineReducers } from 'redux';
import modalStateReducer from './Modal/reducer';

export const rootReducer = combineReducers({ modalStateReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
