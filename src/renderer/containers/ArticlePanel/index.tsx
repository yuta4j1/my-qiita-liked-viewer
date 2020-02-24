import * as React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { ArticleInfo, ColumnState } from '@/types'
import { AppState } from '../store'
import { settingColumn } from '../ColumnSetting/action'
import ArticlePanel from '@/components/ArticlePanel'

type Props = ArticleInfo

const ArticlePanelContainer: React.FC<Props> = props => {
  const columns = useSelector((state: AppState) => state.columnStateReducer)

  const dispatch = useDispatch<Dispatch>()

  const setColumns = React.useCallback(
    (data: ColumnState) => {
      dispatch(settingColumn(data))
    },
    [dispatch]
  )

  const childProps = { ...props, columns, setColumns }

  return <ArticlePanel {...childProps} />
}

export default ArticlePanelContainer
