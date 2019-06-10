import { User, ReduxAction } from '../../types';
import { USER_SIGNIN } from './actionType';

const initialState: User = {
  id: '',
  name: '',
  profileImageUrl: ''
};
const loginActionReducer = (
  state: User = initialState,
  action: ReduxAction<User>
) => {
  switch (action.type) {
    case USER_SIGNIN:
      return action.payload;
    default:
      return state;
  }
};

export default loginActionReducer;
