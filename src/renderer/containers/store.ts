import { createStore, combineReducers } from 'redux';
import modalStateReducer from './Modal/reducer';
import loadingStateReducer from './Loading/reducer';

export const rootReducer = combineReducers({
  modalStateReducer,
  loadingStateReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
