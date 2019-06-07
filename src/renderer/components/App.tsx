import * as React from 'react';
import NavBar from '~/containers/NavBar';
import styled from '~/theme/index';
import ModalContainer from '~/containers/Modal';
import Loading from '~/containers/Loading';
import MainView from '~/containers/MainView';
import { ModalState } from '../types';
import { store } from '~/containers/store';
import { Provider } from 'react-redux';

const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Item = styled.div`
  margin: 0px 5px;
`;

// const LazyMainView = React.lazy(() => import('./LazyMainView'));

export default function App() {
  const initialModalState: ModalState = {
    isOpen: false,
    modalBody: <h4>Modal Body is Empty.</h4>,
    atClose: () => console.log('modal closed')
  };

  return (
    <Provider store={store}>
      <Loading>
        <Content>
          <NavBar />
          <Item>
            <MainView />
          </Item>
          <ModalContainer />
        </Content>
      </Loading>
    </Provider>
  );
}
