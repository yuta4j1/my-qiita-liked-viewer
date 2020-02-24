import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/containers/store'
import Login from '@/containers/Login/index'

const LoginWrapper: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default LoginWrapper
