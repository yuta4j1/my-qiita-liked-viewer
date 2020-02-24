import * as React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading } from '../Loading/action'
import { LoadingState } from '@/types'
import MainView from '@/components/MainView'
import { AppState } from '../store'

const MainViewContainer: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch>()

  const dispatchLoadingState = React.useCallback(
    (data: LoadingState) => {
      dispatch(toggleLoading(data))
    },
    [dispatch]
  )

  const userInfo = useSelector((state: AppState) => state.loginActionReducer)

  const columns = useSelector((state: AppState) => state.columnStateReducer)

  const props = { userInfo, columns, dispatchLoadingState }

  return <MainView {...props} />
}

export default MainViewContainer
