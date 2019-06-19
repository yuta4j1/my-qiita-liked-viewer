import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { User } from '../../types';
import Login from '@/components/Login';
import { signinAction } from './action';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: User) => {
  return {
    storeUserInfo: ownProps => dispatch(signinAction(ownProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
