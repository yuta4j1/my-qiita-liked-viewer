import { SETTING_COLUMN } from './actionType'
import { ColumnState } from '@/types'

const initialState: ColumnState = ['All']

const columnStateReducer = (
  columnState = initialState,
  action: { type: string; payload: ColumnState }
): ColumnState => {
  switch (action.type) {
    case SETTING_COLUMN:
      return action.payload
    default:
      return columnState
  }
}

export default columnStateReducer
