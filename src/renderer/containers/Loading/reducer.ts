import { LoadingState, ReduxAction } from '../../types';
import { TOGGLE_LOADING } from './actionType';

const initialState: LoadingState = {
  isActive: true
};

const loadingStateReducer = (
  state = initialState,
  action: ReduxAction<LoadingState>
): LoadingState => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingStateReducer;
