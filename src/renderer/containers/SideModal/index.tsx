import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { SideModalState } from '../../types';
import { toggleModal } from './action';
import SideModalFrame from '@/components/Modal/SideModalFrame';

const mapStateToProps = (state: AppState) => {
  return {
    isShow: state.sideModalStateReducer.isShow
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: SideModalState) => {
  return {
    toggleModal: (ownProps: SideModalState) => dispatch(toggleModal(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideModalFrame);
