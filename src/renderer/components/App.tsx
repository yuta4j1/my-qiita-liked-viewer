import * as React from 'react';
import NavBar from '@/containers/NavBar';
import styled from '@/theme/index';
import SideModal from '@/containers/SideModal';
import ColumnSetting from '@/containers/ColumnSetting';
import Loading from '@/containers/Loading';
import MainView from '@/containers/MainView';
import { store } from '@/containers/store';
import { Provider } from 'react-redux';

const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Item = styled.div`
  margin: 0px 5px 0px 93px;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Loading>
        <Content>
          <NavBar />
          <Item>
            <MainView />
          </Item>
          <SideModal>
            <ColumnSetting />
          </SideModal>
        </Content>
      </Loading>
    </Provider>
  );
}
