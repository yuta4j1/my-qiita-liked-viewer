import * as React from 'react';
import Modal from 'react-modal';
import { ModalState } from '../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

type ModalFrameProps = {
  currentState: ModalState;
};

const ModalFrame: React.FC<ModalFrameProps> = props => {
  return (
    <Modal
      isOpen={props.currentState.isOpen}
      onRequestClose={props.currentState.atClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {props.currentState.modalBody}
    </Modal>
  );
};

Modal.setAppElement('#app');

export default ModalFrame;
