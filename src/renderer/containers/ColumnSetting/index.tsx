import * as React from 'react';
import ColumnSetting from '@/components/ModalContaints/ColumnSetting';
import { ColumnState } from '@/types';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { settingColumn } from './action';
import { AppState } from '../store';

const ColumnSettingContainer: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch>();

  const selector = (state: AppState): ColumnState => state.columnStateReducer;

  const columnState = useSelector<AppState, ColumnState>(selector);

  const setColumn = React.useCallback(
    (data: ColumnState) => {
      dispatch(settingColumn(data));
    },
    [dispatch]
  );

  const props = { columnState, setColumn };

  return <ColumnSetting {...props} />;
};

export default ColumnSettingContainer;
