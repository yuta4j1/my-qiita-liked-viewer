import { createStore, combineReducers } from 'redux';
import modalStateReducer from './Modal/reducer';
import sideModalStateReducer from './SideModal/reducer';
import loadingStateReducer from './Loading/reducer';
import loginActionReducer from './Login/reducer';
import columnStateReducer from './ColumnSetting/reducer';

export const rootReducer = combineReducers({
  modalStateReducer,
  sideModalStateReducer,
  loadingStateReducer,
  loginActionReducer,
  columnStateReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
