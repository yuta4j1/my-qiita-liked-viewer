import * as React from 'react';
import NavBar from './Navbar';
import styled from '../theme/index';
import MainView from './MainView';
import ModalFrame from './ModalFrame';
import SortTagForm from './SortTagForm';

const Content = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin: 0px 5px;
`;

type AppState = {
  modalIsOpen: boolean;
  modalContent: JSX.Element;
};

export default class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalContent: <div id="empty" />
    };
  }
  modal = React.createRef<ModalFrame>();
  showModal() {
    this.setState(
      Object.assign(this.state, {
        modalContent: <SortTagForm tagList={['a', 'aa']} />
      })
    );
    this.modal.current.handleOpenModal();
  }
  render() {
    let modalProps = {
      isOpen: false,
      contentElement: this.state.modalContent
    };
    return (
      <Content>
        <NavBar callbackShowModal={this.showModal.bind(this)} />
        <Item>
          <MainView />
        </Item>
        <ModalFrame ref={this.modal} {...modalProps} />
      </Content>
    );
  }
}
