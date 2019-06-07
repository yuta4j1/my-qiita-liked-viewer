import ModalFrame from '../../components/ModalFrame';
import { ModalState } from '../../types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from './action';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    currentState: state.modalStateReducer
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ModalState) => {
  return {
    closeModal: (ownProps: ModalState) => dispatch(toggleModal(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalFrame);
