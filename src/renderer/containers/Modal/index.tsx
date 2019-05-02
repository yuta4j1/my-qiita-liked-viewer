import ModalFrame from '../../components/ModalFrame';
import { ModalState } from '../../types';
import { connect } from 'react-redux';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    currentState: state.modalStateReducer
  };
};

// const mapDispatchToProps = (
//   dispatch: Dispatch,
//   ownProps: ModalContainerProps
// ) => {
//   return {
//     updateModalState: (data: ModalState) => dispatch(toggleModal(data))
//   };
// };

export default connect(mapStateToProps)(ModalFrame);
