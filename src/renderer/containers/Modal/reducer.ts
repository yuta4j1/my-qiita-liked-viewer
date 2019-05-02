import { TOGGLE_MODAL } from './actionType';
import { ModalState } from '../../types';

const initialState: ModalState = {
  isOpen: false,
  modalBody: undefined,
  atClose: () => console.log('None')
};

const modalStateReducer = (
  modalState = initialState,
  action: { type: string; payload: ModalState }
): ModalState => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, action.payload);
    default:
      return modalState;
  }
};

export default modalStateReducer;
