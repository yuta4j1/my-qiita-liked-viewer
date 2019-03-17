import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from '../theme/index';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #9ccc65;
`;
const Li = styled.li`
  list-style: none;
  margin: 20px 10px;
  padding: 10px;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <div>
      <Ul>
        <Li>
          <FontAwesomeIcon icon={faHome} size={'2x'} />
        </Li>
        <Li>
          <FontAwesomeIcon icon={faUserAlt} size={'2x'} />
        </Li>
        <Li>
          <FontAwesomeIcon icon={faPlus} size={'2x'} />
        </Li>
      </Ul>
    </div>
  );
}
