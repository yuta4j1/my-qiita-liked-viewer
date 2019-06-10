import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from '~/theme';
import InputUidText from './InputUidText';
import SubmitButton from './SubmitButton';
import { fetchUser } from '~/api-facade';
import { User } from '../../types';

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #55c500;
`;

const Prompt = styled.div`
  padding-top: 20%;
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  color: #fafafa;
  font-family: 'Assistant', sans-serif;
  font-size: 2em;
`;

const InputText = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  margin: 14px;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  margin: 14px;
`;

type DispatchUser = (props: User) => void;
interface LoginProps extends RouteComponentProps<{}> {
  storeUserInfo(a: User): void;
}

interface State {
  inputUid: string;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [inputUid, setInputUid] = useState('');

  const changeUidText = (uid: string) => {
    setInputUid(uid);
  };

  const fetchUserInfo = async (uid: string): Promise<User> => {
    try {
      const userInfo = await fetchUser(uid);
      if (userInfo && userInfo['type']) {
        if (userInfo['type'] === 'not_found') {
          return {
            id: void 0,
            name: void 0,
            profileImageUrl: void 0
          };
        }
      }
      return {
        id: userInfo.id,
        name: userInfo.name,
        profileImageUrl: userInfo.profile_image_url
      };
    } catch (error) {
      console.log(error);
      return {
        id: void 0,
        name: void 0,
        profileImageUrl: void 0
      };
    }
  };

  const handleLoginButtonClicked = () => {
    fetchUserInfo(inputUid).then(result => {
      if (!result.id) {
        console.log('error!');
      }
      console.log('[Login] UserInfo: ', { result });
      // store fetched User
      props.storeUserInfo(result);
      props.history.push('/view');
    });
  };

  return (
    <Content>
      <Prompt>
        <Message>Please input your Qiita account UserID</Message>
      </Prompt>
      <InputText>
        <InputUidText text={inputUid} changeEvent={changeUidText} />
      </InputText>
      <LoginButton>
        <SubmitButton clickEvent={handleLoginButtonClicked} />
      </LoginButton>
    </Content>
  );
};

export default withRouter(Login);
