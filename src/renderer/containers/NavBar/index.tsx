import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import NavBar from '@/components/NavBar';
import { SideModalState } from '../../types';
import { toggleModal } from '../SideModal/action';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    signinUser: state.loginActionReducer
  };
};
const mapDispatchToProps = (dispatch: Dispatch, ownProps: SideModalState) => {
  return {
    toggleModal: ownProps => dispatch(toggleModal(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
