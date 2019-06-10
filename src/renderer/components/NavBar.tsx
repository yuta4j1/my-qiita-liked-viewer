import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from '../theme/index';
import { ModalState, User } from '../types';
import ColumnControl from './ColumnControl/index';

const NavBarWrapper = styled.div`
  background-color: #55c500;
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
  toggleModal?: (data: ModalState) => void;
};

const NavBar: React.FC<NavbarProps> = props => {
  const modalState: ModalState = {
    isOpen: true,
    modalBody: (
      <ColumnControl
        columnNames={['Java', 'JavaScript', 'Scala', 'Git', 'Other']}
      />
    ),
    atClose: e =>
      props.toggleModal({
        isOpen: false,
        modalBody: <div />,
        atClose: () => console.log('')
      })
  };
  return (
    <NavBarWrapper>
      <Ul>
        <Li>
          <img src={props.signinUser.profileImageUrl} />
        </Li>
        <Li>
          <FontAwesomeIcon icon={faUserAlt} size={'2x'} />
        </Li>
        <Li onClick={e => props.toggleModal(modalState)}>
          <FontAwesomeIcon icon={faPlus} size={'2x'} />
        </Li>
      </Ul>
    </NavBarWrapper>
  );
};

export default NavBar;
