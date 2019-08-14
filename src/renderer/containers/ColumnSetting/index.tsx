import ColumnSetting from '@/components/ModalContaints/ColumnSetting';
import { ColumnState } from '@/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { settingColumn } from './action';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => {
  return {
    columnState: state.columnStateReducer
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ColumnState) => {
  return {
    setColumn: (ownProps: ColumnState) => dispatch(settingColumn(ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnSetting);
