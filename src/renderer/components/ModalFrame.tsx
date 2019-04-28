import * as React from 'react';
import Modal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  contentElement: JSX.Element;
  data?: any;
};

type ModalState = {
  isOpen: boolean;
  contentElement: JSX.Element;
  data?: any;
};

const customStyles = {
  content: {
    top: '90%',
    left: '90%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ModalFrame extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = { ...props };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState(Object.assign(this.state, { isOpen: true }));
  }

  handleCloseModal() {
    this.setState(Object.assign(this.state, { isOpen: false }));
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        {this.props.contentElement}
      </Modal>
    );
  }
}

Modal.setAppElement('#app');

export default ModalFrame;
