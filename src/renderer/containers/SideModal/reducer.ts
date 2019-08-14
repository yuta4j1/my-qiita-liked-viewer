import { TOGGLE_MODAL } from './actionType';
import { SideModalState } from '../../types';

const initialState: SideModalState = {
  isShow: false
};

const sideModalStateReducer = (
  modalState = initialState,
  action: { type: string; payload: SideModalState }
): SideModalState => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...action.payload };
    default:
      return modalState;
  }
};

export default sideModalStateReducer;
