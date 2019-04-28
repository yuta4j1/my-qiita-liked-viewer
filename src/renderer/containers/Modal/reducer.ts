import { ModalState } from '../../types';

export const ActModalState = (
  modalState: ModalState,
  action: { type: string; payload: ModalState }
): ModalState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.payload;
    default:
      return modalState;
  }
};
