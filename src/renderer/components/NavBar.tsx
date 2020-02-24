import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from '@/theme/index'
import { SideModalState, User } from '@/types'

const NavBarComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 88px;
  background-color: #55c500;
  z-index: 2;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  position: relative;
  height: 100%;
  letft: 20%;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
`

type NavbarProps = {
  signinUser: User
  toggleModal?: (data: SideModalState) => void
}

const UserIcon = styled.img`
  border-radius: 2px;
  height: 44px;
  width: 44px;
  background: url(${props => props.src});
`

const NavBar: React.FC<NavbarProps> = props => {
  const modalState: SideModalState = {
    isShow: true
  }

  const addColumnButtonClick = () => {
    props.toggleModal(modalState)
  }
  return (
    <NavBarComponent>
      <Wrapper>
        <Item>
          <UserIcon src={props.signinUser.profileImageUrl} />
        </Item>
        <Item onClick={addColumnButtonClick}>
          <FontAwesomeIcon icon={faPlus} size={'2x'} />
        </Item>
      </Wrapper>
    </NavBarComponent>
  )
}

export default NavBar
