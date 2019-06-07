import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleLoading } from '../Loading/action';
import { LoadingState } from '../../types';
import MainView from '../../components/MainView';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LoadingState) => {
  return {
    dispatchLoadingState: (ownProps: LoadingState) =>
      dispatch(toggleLoading(ownProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainView);
