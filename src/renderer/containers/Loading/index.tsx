import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import { LoadingState } from '@/types'
import NowLoading from '@/components/NowLoading'

const LoadingContainer: React.FC<{ children: any }> = ({ children }) => {
  const currentState = useSelector(
    (state: AppState): LoadingState => state.loadingStateReducer
  )

  const childProps = { currentState }
  
  return <NowLoading {...childProps}>{children}</NowLoading>
}

export default LoadingContainer
