import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from '~/theme';
import InputUid from './InputUid';
import { fetchUser } from '~/api-facade';
import { User } from '../../types';

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #55c500;
`;

const LoginButton = styled.button``;

interface Props extends RouteComponentProps<{}> {}

interface State {
  inputUid: string;
}

const Login: React.FC<Props> = props => {
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
    });
    props.history.push('/view');
  };

  return (
    <Content>
      <p>Please input User ID</p>
      <InputUid text={inputUid} changeEvent={changeUidText} />
      <LoginButton onClick={e => handleLoginButtonClicked()}>ok</LoginButton>
    </Content>
  );
};

export default withRouter(Login);
