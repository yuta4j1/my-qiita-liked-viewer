import * as React from 'react';
import styled from '../theme/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
class SortTagForm extends React.Component<{}> {
  render() {
    return (
      <Header>
        <div>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </Header>
    );
  }
}

export default SortTagForm;
