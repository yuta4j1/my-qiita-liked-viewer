import * as React from 'react';
import { render } from 'react-dom';
import NavBar from './Navbar';
import styled from '../theme/index';

const Content = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin: 0px 5px;
`;

class App extends React.Component<{}> {
  render() {
    return (
      <Content>
        <NavBar />
        <Item>
          <h1>Hello, Electron!!</h1>
        </Item>
      </Content>
    );
  }
}

export default App;
