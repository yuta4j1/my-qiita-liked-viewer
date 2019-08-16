import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { User } from '@/types';
import Login from '@/components/Login';
import { signinAction } from './action';

const LoginContainer: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch>();
  const storeUserInfo = React.useCallback(
    (user: User) => {
      dispatch(signinAction(user));
    },
    [dispatch]
  );
  const props = { storeUserInfo };
  return <Login {...props} />;
};

export default LoginContainer;
