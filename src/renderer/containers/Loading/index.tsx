import { connect } from 'react-redux';
import { AppState } from '../store';
import NowLoading from '../../components/NowLoading';

const mapStateToProps = (state: AppState) => {
  return {
    currentState: state.loadingStateReducer
  };
};

export default connect(mapStateToProps)(NowLoading);
