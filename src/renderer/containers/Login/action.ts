import { USER_SIGNIN } from './actionType';
import { User } from '../../types';

export const signinAction = (userInfo: User) => {
  return {
    type: USER_SIGNIN,
    payload: userInfo
  };
};
