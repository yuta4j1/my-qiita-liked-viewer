import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from '../theme/index';

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #55c500;
`;

const Input = styled.input``;

const LoginButton = styled.button``;

interface Props extends RouteComponentProps<{}> {}

class Login extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
  }

  handleLoginButtonClicked() {
    this.props.history.push('/view');
  }
  render() {
    return (
      <Content>
        <p>Please input User ID</p>
        <Input type="text" placeholder="User ID" />
        <LoginButton onClick={e => this.handleLoginButtonClicked()}>
          ok
        </LoginButton>
      </Content>
    );
  }
}

export default withRouter(Login);
