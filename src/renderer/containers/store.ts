import { createStore, combineReducers } from 'redux';
import modalStateReducer from './Modal/reducer';
import loadingStateReducer from './Loading/reducer';
import loginActionReducer from './Login/reducer';

export const rootReducer = combineReducers({
  modalStateReducer,
  loadingStateReducer,
  loginActionReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
