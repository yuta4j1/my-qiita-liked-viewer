import * as React from 'react';
import NavBar from './Navbar';
import styled from '../theme/index';
import MainView from './MainView';

const Content = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin: 0px 5px;
`;

export default function App() {
  return (
    <Content>
      <NavBar />
      <Item>
        <MainView />
      </Item>
    </Content>
  );
}
