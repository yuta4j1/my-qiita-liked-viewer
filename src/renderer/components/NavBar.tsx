import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from '@/theme/index';
import { SideModalState, User } from '@/types';

const NavBarComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 88px;
  background-color: #55c500;
  z-index: 2;
`;
const Ul = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  position: relative;
  height: 100%;
  letft: 20%;
`;
const Li = styled.div`
  list-style: none;
  margin: 20px 10px;
  padding: 10px;
  cursor: pointer;
`;

type NavbarProps = {
  signinUser: User;
  toggleModal?: (data: SideModalState) => void;
};

const NavBar: React.FC<NavbarProps> = props => {
  const modalState: SideModalState = {
    isShow: true
  };

  const addColumnButtonClick = () => {
    props.toggleModal(modalState);
  };
  return (
    <NavBarComponent>
      <Ul>
        <Li>
          <img src={props.signinUser.profileImageUrl} height={44} width={44} />
        </Li>
        <Li>
          <FontAwesomeIcon icon={faUserAlt} size={'2x'} />
        </Li>
        <Li onClick={addColumnButtonClick}>
          <FontAwesomeIcon icon={faPlus} size={'2x'} />
        </Li>
      </Ul>
    </NavBarComponent>
  );
};

export default NavBar;
