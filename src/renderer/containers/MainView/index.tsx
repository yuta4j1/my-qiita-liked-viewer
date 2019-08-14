import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleLoading } from '../Loading/action';
import { LoadingState } from '../../types';
import MainView from '../../components/MainView';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    userInfo: state.loginActionReducer,
    columns: state.columnStateReducer
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LoadingState) => {
  return {
    dispatchLoadingState: (ownProps: LoadingState) =>
      dispatch(toggleLoading(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
