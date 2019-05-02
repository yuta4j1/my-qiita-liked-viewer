import * as React from 'react';
import NavBar from '../containers/NavBar';
import styled from '../theme/index';
import MainView from './MainView';
import ModalContainer from '../containers/Modal';
import SortTagForm from './SortTagForm';
import { ModalState } from '../types';
import { store } from '../containers/store';
import { Provider } from 'react-redux';

const Content = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin: 0px 5px;
`;

export default function App() {
  const initialModalState: ModalState = {
    isOpen: false,
    modalBody: <h4>Modal Body is Empty.</h4>,
    atClose: () => console.log('modal closed')
  };

  return (
    <Provider store={store}>
      <Content>
        <NavBar />
        <Item>
          <MainView />
        </Item>
        <ModalContainer />
      </Content>
    </Provider>
  );
}
