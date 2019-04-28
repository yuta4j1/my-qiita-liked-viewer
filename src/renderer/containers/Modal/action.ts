import { TOGGLE_MODAL } from './actionType';
import { ModalState } from '../../types';

export function toggleModal(modalState: ModalState) {
  return {
    type: TOGGLE_MODAL,
    payload: modalState
  };
}
