import NavBar from '../../components/NavBar';
import { ModalState } from '../../types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from '../Modal/action';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ModalState) => {
  return {
    openModal: ownProps => dispatch(toggleModal(ownProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
