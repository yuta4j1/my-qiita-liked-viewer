import * as React from 'react';
import styled from '@/theme';

type Props = {
  isShow: boolean;
  clickEvent: (any) => void;
};

const BackdropComponentBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #424242;
  opacity: 0.7;
  z-index: 10;
`;

const Backdrop: React.FC<Props> = props => {
  const BackdropComponent = props.isShow
    ? styled(BackdropComponentBase)`
        visibility: visible;
      `
    : styled(BackdropComponentBase)`
        visibility: hidden;
      `;
  return <BackdropComponent onClick={props.clickEvent} />;
};

export default Backdrop;
