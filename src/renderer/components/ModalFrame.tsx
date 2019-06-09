import * as React from 'react';
import Modal from 'react-modal';
import { ModalState } from '../types';
import Containts from './ModalContaints';

const customStyles = {
  content: {
    top: '50vh',
    left: '50vw',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

type ModalFrameProps = {
  currentState: ModalState;
  closeModal?: (state: ModalState) => void;
};

class ModalFrame extends React.Component<ModalFrameProps> {
  constructor(props) {
    super(props);
  }

  onClose() {
    this.props.closeModal({
      isOpen: false,
      modalBody: <div />,
      atClose: () => console.log('')
    });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.currentState.isOpen}
        onRequestClose={this.props.currentState.atClose}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <Containts
          headerTitle={'hoge'}
          body={this.props.currentState.modalBody}
          closeEvent={() => this.onClose()}
        />
      </Modal>
    );
  }
}

Modal.setAppElement('#app');

export default ModalFrame;
