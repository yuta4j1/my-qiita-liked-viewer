import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import NavBar from '@/components/NavBar';
import { ModalState } from '../../types';
import { toggleModal } from '../Modal/action';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    signinUser: state.loginActionReducer
  };
};
const mapDispatchToProps = (dispatch: Dispatch, ownProps: ModalState) => {
  return {
    toggleModal: ownProps => dispatch(toggleModal(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
