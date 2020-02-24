import { TOGGLE_MODAL } from './actionType'
import { SideModalState } from '../../types'

export function toggleModal(modalState: SideModalState) {
  return {
    type: TOGGLE_MODAL,
    payload: modalState
  }
}
