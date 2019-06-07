import { LoadingState } from '../../types';
import { TOGGLE_LOADING } from './actionType';

export function toggleLoading(state: LoadingState) {
  return {
    type: TOGGLE_LOADING,
    payload: state
  };
}
