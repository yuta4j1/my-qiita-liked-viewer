import * as React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '@/components/NavBar'
import { SideModalState } from '@/types'
import { toggleModal } from '../SideModal/action'
import { AppState } from '../store'

const NavBarContainer: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch>()

  const dispatchModal = React.useCallback(
    (state: SideModalState) => {
      dispatch(toggleModal(state))
    },
    [dispatch]
  )

  const signinUser = useSelector((state: AppState) => state.loginActionReducer)

  const props = { signinUser, toggleModal: dispatchModal }

  return <NavBar {...props} />
}

export default NavBarContainer
