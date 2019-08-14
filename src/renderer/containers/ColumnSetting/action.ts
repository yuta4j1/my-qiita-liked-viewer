import { SETTING_COLUMN } from './actionType';
import { ColumnState } from '@/types';

export function settingColumn(columnState: ColumnState) {
  return {
    type: SETTING_COLUMN,
    payload: columnState
  };
}
