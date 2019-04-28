import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from '../theme/index';

const NavBarWrapper = styled.div`
  background-color: #59bb0c;
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
  callbackShowModal: () => void;
};

export default class NavBar extends React.Component<NavbarProps, {}> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavBarWrapper>
        <Ul>
          <Li>
            <FontAwesomeIcon icon={faHome} size={'2x'} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faUserAlt} size={'2x'} />
          </Li>
          <Li onClick={() => this.props.callbackShowModal()}>
            <FontAwesomeIcon icon={faPlus} size={'2x'} />
          </Li>
        </Ul>
      </NavBarWrapper>
    );
  }
}
